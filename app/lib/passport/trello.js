'use strict';

var TrelloStrategy = require('passport-trello').Strategy,
    User            = require('../../models/user'),
    config          = require('../../../config'),
    trello          = new TrelloStrategy(
                    {
                      consumerKey:     config.trello.clientId,
                      consumerSecret: config.trello.clientSecret,
                      callbackURL:  config.trello.callbackUrl,
                      pasReqtoCallback: true,
                      trelloParams:
                      {
                        scope: 'read,write'
                      }
                    },
                    User.trelloAuthenticate);

module.exports = trello;
