


exports.onReadyHandler = (_app) => {
    _app.get('/ready', function (req, res) {
        res.send('Application is ready.');
    });
    console.log("Handling /ready")
}

exports.onLiveHandler = (_app) => {
    _app.get('/live', function (req, res) {
        res.send('Application is live. (use /ready when you want to see if I\'m ready)');
    });
    console.log("Handling /live")
}

// Gracefuls
const onCloseHandler = (sig, handlePromise) => async () => {
    console.log(sig + " signal received: closing HTTP server")
    await new Promise(resolve => {
        server.closeAllConnections();
        server.close(resolve);
    })
    // TODO something here before process is killed.. just like someone important died in kdramas.
    handleFuction ? await handleFuction() : 0;
    console.log("Process Gracefully died")
    process.exit(0)
}

const HANDLED_SIGS = ['SIGTERM', 'SIGINT', 'SIGQUIT', 'SIGHUP'];
exports.initOnCloseHandler = () => {
    HANDLED_SIGS.map((sig) => process.on(sig, onCloseHandler(sig)));
}


