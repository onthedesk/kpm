var install = function (pkgs) {
  if (!pkgs.length) {
    console.error('packages required');
    process.exit(1);
  }

  pkgs.forEach(function(pkg){
    console.log(pkg)
  });
};


module.exports = install;