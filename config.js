'use strict';

var config = {};

config.twitter = {
  apiKey : 'C6G4rN4eQTRNE5OIh0dPPsEeb' ,
  apiSecret : process.env.TWITTER_SECRET,
  callbackUrl : 'http://daniel-vm.com:3333/auth/twitter/callback'
};

config.github = {
  clientId : '07edcd637f80d31d090e',
  clientSecret : process.env.GITHUB_SECRET,
  callbackUrl : 'http://daniel-vm.com:3333/auth/github/callback'
};


config.google = {
  clientId : '24882528842-ktibs3f3tdfnrcdih16mtl8cpcpdr7pm.apps.googleusercontent.com',
  clientSecret : process.env.GOOGLE_SECRET,
  callbackUrl : 'http://daniel-vm.com:3333/auth/google/callback'
};

config.facebook = {
  clientId : '832554420102073',
  clientSecret : process.env.FACEBOOK_SECRET,
  callbackUrl : 'http://daniel-vm.com:3333/auth/facebook/callback'
};

config.weibo = {
  clientId : '2956040917',
  clientSecret : process.env.WEIBO_SECRET,
  callbackUrl : 'http://daniel-vm.com:3333/auth/weibo/callback'
};

config.amazon = {
  clientId : 'amzn1.application-oa2-client.cfe01c84961a46ad9c487e7a3ac18ea4',
  clientSecret : process.env.AMAZON_SECRET,
  callbackUrl : 'http://daniel-vm.com:3333/auth/amazon/callback'
};

config.trello = {
  clientId : 'e2c330a5e8fb1165b37796f8b49e9345',
  clientSecret : process.env.TRELLO_SECRET,
  callbackUrl : 'http://daniel-vm.com:3333/auth/trello/callback'
};

config.stripe = {
  publishKey: 'pk_test_VcTMXoO0qK8DOVJ8PViVGhT6' ,
  secretKey : process.env.STRIPE_SECRET
};

module.exports = config;


