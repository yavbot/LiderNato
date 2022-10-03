const liderandoCtl = {};
liderandoCtl.renderLiderando = (req, res) => {
  res.render("menus/liderando");
};

liderandoCtl.getUsers = async (req, res) => {
  try {
    const users = await dataSource.getRepository(User).find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = liderandoCtl;
