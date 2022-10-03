const lideresSocialesCtl = {};
lideresSocialesCtl.renderLiderando = (req, res) => {
  res.render("menus/lideresSociales");
};

lideresSocialesCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = lideresSocialesCtl;
