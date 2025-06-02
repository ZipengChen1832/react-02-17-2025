const authService = require("../service/authService");

const login = async (req, res) => {
  const { username, password } = req.body || {};
  try {
    const { token, user } = await authService.login(username, password);
    //  two ways to store the token
    // 1. In a http-only cookie
    // 2. store in the local storage of the browser
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        message: "Login successful",
        user,
      });
  } catch (error) {
    console.log("error", error.message);
    return res.status(500).json({ message: error.message });
  }
};

const logout = async (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout successful" });
};

module.exports = {
  login,
  logout,
};
