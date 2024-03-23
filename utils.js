exports.delay = (time) => new Promise(resolve => setTimeout(resolve, time));
const fs = require("fs");

exports.replaceEnvInTmpl = (filepath, envs) =>
    new Promise(resolve => {
        fs.readFile(filepath, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            var result = data
            for (var env_key in envs) {
                result = result.replace("{{" + env_key + "}}", envs[env_key]);
            };

            fs.writeFile(filepath.replace(".tmpl", ""), result, 'utf8', function (err) {
                if (err) return console.log(err);
                resolve()
            });
        });
    })
