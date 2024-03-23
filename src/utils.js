exports.delay = (time) => new Promise(resolve => setTimeout(resolve, time));

exports.replaceEnvInTmpl = (filepath, envs, _fs) =>
    new Promise(resolve => {
        _fs.readFile(filepath, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            var result = data
            for (var env_key in envs) {
                result = result.replace("{{" + env_key + "}}", envs[env_key]);
            };

            _fs.writeFile(filepath.replace(".tmpl", ""), result, 'utf8', function (err) {
                if (err) return console.log(err);
                resolve()
            });
        });
    })
