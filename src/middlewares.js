const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const multer = require('multer')

exports.initMiddlewareHandler = (_app, _express) => {
    //app.use(express.static(path.join(__dirname, 'public')));
    _app.use(_express.static('public'));
    _app.use(bodyParser.json());
    _app.use(bodyParser.urlencoded({ extended: false }));
    _app.use(cookieParser())
    // TODO use safer path?
    const upload = multer({ dest: '/tmp/'}).single('file')
    _app.use(upload);
}


exports.authMiddlewareHandler = (_app) => {

    // use ..?
}