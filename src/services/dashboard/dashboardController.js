// Load the dashboard UI
exports.loadDashboard = async (req, res) => {
  // TODO : Add auth logic

  // If not logged in
  res.redirect("/api/users/login");
  // If logged in and have access
  // res.render("dashboard");
};
