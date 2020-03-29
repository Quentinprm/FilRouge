module.exports = {
    port:8000,
    dbName: 'identity',
    dbUser: 'docker',
    dbPassword:'docker',
    dbAdress:'identitydb',
    dbType:'postgres',
    saltRounds: 12,
    jwtPublicSecret: 'SadbkVy00dK3P4TpzCysL8SBJFHHGjbJ',
    jwtPrivateSecret: 'bnH0GbRI3L3dyUKrz5VuZjx4M3Pr8y9c',
    tokenExpireTime: '6h'
}