/**
 * kpm的入口文件，处理用户的命令
 * @type {Command|exports|module.exports}
 */


var program = require('commander');
var install = require('./install');
var init = require('./init');
var search = require('./search');
var publish = require('./publish');
var list = require('list');

/**
 * 分配任务
 * @param name
 */

var action = function(name) {

  var args = process.argv;
  var pkgs = args.slice(3)


  switch (name) {
    case 'install':

      install(pkgs);

      break;

    case 'search':

      search(pkgs);

      break;

    case 'list':

      list();

      break;

    case 'publish':

      publish();

      break;

    case 'init':

      init();

      break;

  }

  process.exit(1);
};



program
  .version('0.0.1')
  .command('install [name]', 'install one or more packages').alias('i')
  .command('search [query]', 'search with optional query').alias('s')
  .command('list', 'list packages installed')
  .command('publish', 'publish the package').alias('p')
  .command('init', 'init a knowledge package')
  .action(action)
  .parse(process.argv);




