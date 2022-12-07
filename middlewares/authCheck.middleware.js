exports.Auth = (req, res, next) => {
  if (!req.session.userid) {
    return res.redirect("/signin");
  }
  next();
};

exports.noAuth = (req, res, next) => {
  if (req.session.userid) {
    return res.redirect("/");
  }
  next();
};

exports.Verified = (req, res, next) => {
  if (!req.session.user.Verified) {
    return res.redirect("/verifyCode");
  }
  next();
};

exports.notVerified = (req, res, next) => {
  if (req.session.user.Verified) {
    return res.redirect("/");
  }
  next();
};
