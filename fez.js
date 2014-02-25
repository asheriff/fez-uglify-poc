var fez = require('fez');
var uglify = require('fez-uglify');

exports.uglify = function(spec) {
  spec.with('src/foo.js').each(function(file){
    spec.rule(file, file.patsubst("%.js", "%.min.js"), uglify());
  });
};

exports.default = exports.uglify;

fez(module);
