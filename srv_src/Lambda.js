'use strict';

const AWS = require('aws-sdk');

const doRegister = async (client, resultBody, username, password) => {

    const res = await client.query(
        'SELECT count (usrname) cnt from usr WHERE usrname = $1::text',
        [username]);
    if( res.rows[0].cnt == 0 ){

        resultBody.status     = true;
        resultBody.token      = 'token';

        const insResult = await client.query(
            'INSERT INTO usr ( usrname, pwhash, realname) VALUES ( $1::text, $2::text, $3::text )',
            [username, password, username]);

    }else{
        resultBody.status = false;
        resultBody.error  = 'User already exists'
    }
    console.log('DBResult',res.rows[0].usrname)
}

const doLogin = async (client, resultBody, username, password) => {

    console.log('query');
    const res = await client.query(
        'SELECT count( usrname ) cnt from usr WHERE usrname = $1::text AND pwhash = $2::text',
        [username, password]);
    console.log('querydone', res.rows[0].cnt);
    if( res.rows[0].cnt != 0 ){

        resultBody.status     = true;
        resultBody.token      = 'token';
    }else{
        resultBody.status = false;
        resultBody.error  = 'Invalid Username or password';
    }
}

const checkLogin = (client, resultBody, username, token) => {

    if( token === 'token' ){

        resultBody.status     = true;
        resultBody.token      = 'token';
        resultBody.username   = username;
    }else{

        resultBody.status = false;
        resultBody.error  = 'Invalid login token';
    }
}

const doNews = async (client, resultBody, username, token) => {

    checkLogin(client, resultBody, username, token);

    if(resultBody.status){

        resultBody.newsheadline = 'Covid-19: Vaccine rollout extended to over-70s in England';
        resultBody.newstext     = `People in England aged 70 and over, as well as those listed as clinically extremely vulnerable, will begin receiving offers of a coronavirus vaccine this week.
            Prime Minister Boris Johnson said the move was a "significant milestone" in the nation's vaccination programme.
            More than five million people - from priority groups three and four - will be invited from Monday to have the jab.
            It comes as 10 new mass vaccination hubs open across England.
            Health Secretary Matt Hancock will lead a Downing Street news briefing later, No 10 has said.`;
        resultBody.newShort     = 'People in England aged 70 and over, as well as those listed as clinically extremely vulnerable, will begin receiving offers of a coronavirus vaccine this week.';
        resultBody.img          = 'https://ichef.bbci.co.uk/news/1024/branded_news/15EF6/production/_116564898_gettyimages-1297015823.jpg';
    }
}

const doClothes = async (client, resultBody, username, token) => {

    checkLogin(client, resultBody, username, token);

    if(resultBody.status){

        resultBody.clothes = {
            hoodie: '30%',
            jacket: '10%',
        }
    }
}

exports.handler = async (lamdaEvent, context) => {

    console.log('Received event:', lamdaEvent);
    const eventbody = JSON.parse(lamdaEvent.body);
    console.log('Received event body:', eventbody);

    const { Client } = require('pg')  //  Needs the nodePostgres Lambda Layer

    const client = new Client()
    await client.connect();


    const system = eventbody.system;

    const resultBody = {
        status: false,
    };

    switch ( system ){

        case 'login':

            await doLogin(client, resultBody, eventbody.username, eventbody.password);
        break;
        case 'register':

            await doRegister(client, resultBody, eventbody.username, eventbody.password );

            break;
        case 'news':

            await doNews(client, resultBody, eventbody.username, eventbody.token);
            break;

        case 'checklogin':

            checkLogin(client, resultBody, eventbody.username, eventbody.token);
            break;

        case 'clothes':

            doClothes(client, resultBody, eventbody.username, eventbody.token)
            break;
    }

    await client.end();

    const response = {
        statusCode: 200,
        body: JSON.stringify( resultBody )
    };
    console.log('response', response);
    return response;
};