'use strict';

var AmazonStrategy = require('passport-amazon').Strategy,
    User          = require('../../models/user'),
    config        = require('../../../config'),
    amazon      = new AmazonStrategy(
              {
                clientID: config.amazon.clientId,
                clientSecret: config.amazon.clientSecret,
                callbackURL: config.amazon.callbackUrl
              }, User.amazonAuthenticate);


module.exports    = amazon;
