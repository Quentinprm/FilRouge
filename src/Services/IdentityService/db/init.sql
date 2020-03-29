

CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    login varchar(100) NOT NULL,
    password varchar(500) NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
);

INSERT INTO users(login,password) VALUES('admin@admin.com','$2y$12$Slvt.p4w9Bqi63vk0H/mVenvN7uZXuLgPmDo9hxHVFMkur/OKfu/a');







