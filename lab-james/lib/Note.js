'use strict';

const uuid = require('uuid/v1');

let Note = module.exports = function(subject, content){
  this.id = uuid();
  this.subject = subject;
  this.content = content;
  this.editing = false;
  this.completed = false;
};
