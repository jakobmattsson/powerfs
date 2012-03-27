var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var wrench = require('wrench');


exports.writeFile = function(name, data, encoding, callback) {
  mkdirp(path.dirname(name), function(err) {
    if (err) {
      callback(err);
    } else {
      fs.writeFile(name, data, encoding, callback);
    }
  });
};

exports.isFile = function(name, callback) {
  fs.stat(name, function(err, stat) {
    if (err) {
      callback(err);
    } else {
      callback(null, stat.isFile());
    }
  });  
};

exports.isDirectory = function(name, callback) {
  fs.stat(name, function(err, stat) {
    if (err) {
      callback(err);
    } else {
      callback(null, stat.isDirectory());
    }
  });  
};

exports.exists = function(name, callback) {
  // testa om filen existerar
};

exports.fileExists = function(name, callback) {
  // som isFile, men om filen inte existerar så får man false, inte exception
};

exports.directoryExists = function(name, callback) {
  // som isDirectory, men om filen inte existerar så får man false, inte exception
};

exports.mkdirp = function(name, callback) {
  mkdirp(name, callback);
};

exports.rmdir = function(name, callback) {
  wrench.rmdirSyncRecursive(name);
  callback(null);
};

exports.isPathAbsolute = function(filename) {
  return path.resolve(filename) === filename;
};
