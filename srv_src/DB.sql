

create table user  (
  username varchar(50)   NOT null PRIMARY KEY,
  pwhash   varchar(255)  not null,
  salt     varchar(50)   not null,
  realname varchar(50)   not null,
  email    varchar(255)  NOT null
 );
COMMENT ON TABLE   user           IS 'Table that stores user basic information';
COMMENT ON COLUMN  user.username  IS 'Unique name used as primary key for the user';
COMMENT ON COLUMN  user.salt      IS 'Random salt created when password is changed';
COMMENT ON COLUMN  user.realname  IS 'The user''s real name. E.g. firstname lastname';

create table photo  (
  username  varchar(50)     NOT null,
  photoname varchar(50)     NOT null,
  photodata bytea           NOT null,
  phototype varchar(50)     NOT null,
  CONSTRAINT photo_pk       PRIMARY KEY(username,photoname),
  CONSTRAINT photo_usr_FK   FOREIGN KEY(username) REFERENCES user(username) ON DELETE CASCADE
);
COMMENT ON TABLE   photo           IS 'Table to store user''s photos';
COMMENT ON COLUMN  photo.username  IS 'Reference to the user';
COMMENT ON COLUMN  photo.photoname IS 'Unique name to the user, for the photo. This should be a filename with an appropriate file extension';
COMMENT ON COLUMN  photo.photodata IS 'The image data for the photo image';
COMMENT ON COLUMN  photo.phototype IS 'The mime type for the photo data';

create table task (
  username  varchar(50)  NOT null,
  taskname  varchar(50)  NOT null,
  tasktext  text         NOT null,
  done      boolean      NOT NULL,
  CONSTRAINT task_pk       PRIMARY KEY(username,taskname),
  CONSTRAINT task_usr_FK   FOREIGN KEY(username) REFERENCES user(username) ON DELETE CASCADE
);
COMMENT ON TABLE   task            IS 'Table to store user''s task lists';
COMMENT ON COLUMN  task.username   IS 'Reference to the user';
COMMENT ON COLUMN  task.taskname   IS 'Unique name to the user, for the task.';
COMMENT ON COLUMN  task.tasktext   IS 'A long text description of the task';
COMMENT ON COLUMN  task.done       IS 'A flag to say that the task is complete or not';

