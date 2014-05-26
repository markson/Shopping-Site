var compileCoffeeScript = require('broccoli-coffee');
var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');
var env = require('broccoli-env').getEnv();
var pickFiles = require('broccoli-static-compiler');

var app = 'app';

var coffeeTree = pickFiles(app, {
	srcDir: '/coffee',
	destDir:'/assets'
});
var sassTree = pickFiles(app, {
	srcDir: '/sass',
	destDir:'/assets'
});

var bower = 'bower_components';

var jqueryTree = pickFiles(bower, {
	srcDir: '/jquery/dist',
	destDir: '/assets'
});

var bootstrapTree = pickFiles(bower, {
	srcDir: '/bootstrap/dist',
	files:['*/*.min.css', '*/*.min.js'],
	destDir: '/assets'
});



jsTree  = compileCoffeeScript(coffeeTree, {
	bare: true
});

cssTree = compileSass([sassTree], 'assets/main.scss', 'assets/main.css');

var publicFiles = 'public'

module.exports = mergeTrees([jsTree, cssTree, jqueryTree, bootstrapTree, publicFiles]);
