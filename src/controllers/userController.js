import userService from "../services/userService";
let handleController = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing input parameter!",
    });
  }

  let userData = await userService.handleUserLogin(email, password);
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.Message,
    user: userData.user ? userData.user : {},
  });
};

let handleGetAllUsers = async (req, res) => {
  let id = req.query.id;

  if (!id) {
    return res.status(200).json({
      errCode: 1,
      message: "Missing input parameter!",
      users: [],
    });
  }

  let users = await userService.getAllUsers(id);

  return res.status(200).json({
    errCode: 0,
    message: "OK",
    users: users,
  });
};

module.exports = {
  handleLogin: handleController,
  handleGetAllUsers: handleGetAllUsers,
};
