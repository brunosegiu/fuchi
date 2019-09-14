CREATE TABLE fuchi_user (
    id varchar(500) PRIMARY KEY,
    nickname varchar(500) UNIQUE,
    email varchar(500),
    externalid varchar(500),
    imageurl varchar(500)
)