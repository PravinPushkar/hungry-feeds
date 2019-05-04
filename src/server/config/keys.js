const TWITTER_TOKENS = {
    TWITTER_CONSUMER_KEY: "SOME KEY",
    TWITTER_CONSUMER_SECRET: "SOME SECRET",
    TWITTER_ACCESS_TOKEN: "SOME ACCESS TOKEN",
    TWITTER_TOKEN_SECRET: "SOME TOKEN SECRET"
};

const MONGO_USERNAME = 'sammy';
const MONGO_PASSWORD = 'your_password';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'sharkinfo';
const MONGODB = {
    MONGODB_URI: "mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin" 
};

const SESSION = {
    COOKIE_KEY: "thisappisawesome"
};

const KEYS = {
    ...TWITTER_TOKENS,
    ...MONGODB,
    ...SESSION
};

module.exports = KEYS;
