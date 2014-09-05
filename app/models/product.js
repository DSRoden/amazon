'use strict';

var Mongo = require('mongodb');
   // _     = require('underscore-contrib');

function Product(){
}

Object.defineProperty(Product, 'collection', {
  get: function(){return global.mongodb.collection('products');}
});

Product.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Product.collection.findOne({_id:_id}, function(err, obj){
    //var user = Object.create(Product.prototype);
    //user = _.extend(user, obj);
    cb(err, obj);
  });
};

Product.all = function(cb) {
  Product.collection.find().toArray(cb);
};


module.exports = Product;


