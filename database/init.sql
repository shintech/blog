CREATE TABLE posts (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  content VARCHAR,
  description VARCHAR,  
  author VARCHAR,  
  created_at TIMESTAMP without time zone default (now() at time zone 'utc')
);
