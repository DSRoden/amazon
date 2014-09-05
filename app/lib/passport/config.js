'use strict';

var local = require('./local'),
    twitter= require('./twitter'),
    github= require('./github'),
    google= require('./google'),
    facebook= require('./facebook'),
    weibo= require('./weibo'),
    amazon= require('./amazon'),
    trello= require('./trello'),
    serialize = require('./serialize'),
    deserialize = require('./deserialize');

module.exports = function(passport, app){
  passport.use(local);
  passport.use(twitter);
  passport.use(github);
  passport.use(google);
  passport.use(facebook);
  passport.use(weibo);
  passport.use(amazon);
  passport.use(trello);
  passport.serializeUser(serialize);
  passport.deserializeUser(deserialize);

  app.use(passport.initialize());
  app.use(passport.session());
};
