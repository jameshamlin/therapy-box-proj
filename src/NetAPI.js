
const netAPI = ( request, callback ) => {

    const system = request.system;
    const response = {};
    response.status = false;
    response.error  = '';

    let http = new XMLHttpRequest();

    const output = (message) => {

        console.log( message );
    };

    const URL = 'https://asxdskzk5k.execute-api.eu-west-2.amazonaws.com/tbproj';


    request.token = localStorage.getItem('token');
    if( !request.username ){
        request.username = localStorage.getItem('username');
    }

    fetch (URL,
        {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        .then( response => {
            console.log("Response", response);
            return response;
        })
        .then(response => response.json() )
        .then( response => {
            console.log("Response", response);

            if ( request.system == 'login' || request.system == 'register' ){
                localStorage.setItem('token', response.token);
                localStorage.setItem('username', response.username);
            }

            callback( response );

        }).catch(reason => console.log( "API Error", reason ));


    return response;
}

export default netAPI;