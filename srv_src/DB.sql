-- Table for users.
create table usr  (
  usrname varchar(50) NOT null PRIMARY KEY,
  pwhash varchar(255) not null,
  realname varchar(50) not null
 );

 create table photo  (
  usrname varchar(50) NOT null,
  photoname varchar(50) not null,
  photdata bytea ,
  CONSTRAINT photo_pk PRIMARY KEY(usrname,photoname)
  CONSTRAINT
 );
