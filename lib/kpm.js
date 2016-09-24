

var program = require('commander');

var install = function (pkgs) {
  if (!pkgs.length) {
    console.error('packages required');
    process.exit(1);
  }

  pkgs.forEach(function(pkg){
    console.log(pkg)
  });
};


var search = function (pkgs) {
  if (!pkgs.length) {
    console.error('packages required');
    process.exit(1);
  }

  pkgs.forEach(function(pkg){
    console.log(pkg)
  });

};


var publish = function () {
  
};


var init = function () {
  console.log('来，新建一个包')
};



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




