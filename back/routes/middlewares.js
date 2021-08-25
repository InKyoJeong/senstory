exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("로그인이 필요합니다.");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("로그인하지 않은 사용자만 접근 가능합니다.");
  }
};

exports.errorHandler = (error, req, res, next) => {
  res
    .status(500)
    .send("서버 에러가 발생하였습니다. 잠시 후에 다시 시도해주세요.");
};
