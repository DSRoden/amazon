'use strict';

var WeiboStrategy = require('passport-weibo').Strategy,
    User          = require('../../models/user'),
    config        = require('../../../config'),
    weibo        = new WeiboStrategy({
      clientID: config.weibo.clientId,
      clientSecret: config.weibo.clientSecret,
      callbackURL: config.twitter.callbackUrl
    }, User.weiboAuthenticate);

module.exports    = weibo;
