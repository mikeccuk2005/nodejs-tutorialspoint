const minify = require('@node-minify/core');
const gcc = require('@node-minify/google-closure-compiler');

// Using Google Closure Compiler
['envparser.js', 'health.js', 'middlewares.js', 'utils.js', 'server.js'].map(f => {
    minify({
        compressor: gcc,
        input: './src/'+f,
        output: './dist/'+f,
        options: {
            compilationLevel: 'ADVANCED',
            createSourceMap: true,
            languageIn: 'ECMASCRIPT6'
          },
        callback: function(err, min) {}
      });
})