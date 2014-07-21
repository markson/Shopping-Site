var compileCoffeeScript = require('broccoli-coffee');
var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');
var env = require('broccoli-env').getEnv();
var pickFiles = require('broccoli-static-compiler');
var filterTemplates = require('broccoli-template');
var compileES6 = require('broccoli-es6-concatenator');
var mergeTrees = require('broccoli-merge-trees');
var findBowerTrees = require('broccoli-bower');

var app = 'app';


function preprocess(tree) {
	tree = filterTemplates(tree, {
		extensions: ['hbs'],
		compileFunction: 'Ember.Handlebars.compile'
	});
// tree  = compileCoffeeScript(coffeeTree, {
// 	bare: true
// });
//
	return tree;
};

app = pickFiles(app, {
	srcDir:'/',
	destDir:'/appkit'
})

app = preprocess(app);

var vendor = 'vendor'

var bootstrap = pickFiles('bower_components', {
	srcDir:'/bootstrap-sass-official/assets/',
	destDir:'assets/bootstrap'
});

var sourceTrees = [app, vendor, bootstrap];
sourceTrees = sourceTrees.concat(findBowerTrees());



var appAndDependencies = new mergeTrees(sourceTrees, { overwrite: true });

var appJs = compileES6(appAndDependencies, {
	loaderFile: 'loader.js',
	ignoredModules: [
		'ember/resolver'
	],
	legacyFilesToAppend: [
		'jquery.js',
		'handlebars.js',
		'ember.js',
		'ember-data.js',
		'ember-resolver.js'
	],
	inputFiles: ['appkit/**/*.js'],
	outputFile: '/assets/app.js'
});



var appCss = compileSass(sourceTrees, 'appkit/styles/main.scss', 'assets/app.css');


var publicFiles = 'public'

module.exports = mergeTrees([appJs, appCss, publicFiles]);
