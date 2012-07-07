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

exports.isFileSync = function(name) {
  return fs.statSync(name).isFile();
};

exports.isDirectorySync = function(name) {
  return fs.statSync(name).isDirectory();
};

exports.fileExists = function(name, callback) {
  fs.stat(name, function(err, stat) {
    callback(!err && stat.isFile());
  });
};

exports.directoryExists = function(name, callback) {
  fs.stat(name, function(err, stat) {
    callback(!err && stat.isDirectory());
  });
};

exports.mkdirp = function(name, callback) {
  mkdirp(name, callback);
};

exports.rmdir = function(name, callback) {
  fs.exists(name, function(exists) {
    if (exists) {
      wrench.rmdirSyncRecursive(name);
    }
    callback(null);
  });
};

exports.isPathAbsolute = function(filename) {
  return path.resolve(filename) === filename;
};
