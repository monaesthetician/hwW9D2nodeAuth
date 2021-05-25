module.exports.sigup_get = (req, res) => {
    res.render('signup');
}

module.exports.login_get = (req, res) => {
    res.render('login');
}

module.exports.sigup_post= (req, res) => {
    res.send('new signup');
}

module.exports.login_post = (req, res) => {
    res.send('user login');
}