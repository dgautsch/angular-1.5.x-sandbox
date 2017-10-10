var sass = require('node-sass');
var path = require('path');
var fs = require('fs');
sass.render({
  file: path.join(__dirname, '../app/main.scss')
}, function(err, result) {
  if (err) {
    throw new Error(err);
  }

  fs.writeFileSync(path.join(__dirname, 'styles.css'), result, 'utf-8')
});