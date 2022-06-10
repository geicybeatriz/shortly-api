-- CREATE DATABASE "shortly";

-- CREATE TABLE users(
--     "id" SERIAL PRIMARY KEY,
--     "name" TEXT NOT NULL,
--     "email" TEXT NOT NULL,
--     "password" TEXT NOT NULL,
--     "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT 'NOW()'
-- );

-- CREATE TABLE sessions (
--     id SERIAL PRIMARY KEY,
--     token TEXT NOT NULL UNIQUE,
--     "userId" INTEGER NOT NULL REFERENCES users(id),
--     "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT 'NOW()'
-- );

-- CREATE TABLE urls (
--     id SERIAL PRIMARY KEY,
--     url TEXT NOT NULL,
--     "shortURL" TEXT NOT NULL UNIQUE,
--     views INTEGER NOT NULL DEFAULT '0',
--     "userId" INTEGER NOT NULL REFERENCES users(id),
--     "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT 'NOW()'
-- );
