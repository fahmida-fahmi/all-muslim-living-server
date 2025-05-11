const FavListBiodata = require("../Model/FavListModel");

exports.addFavList = async (req, res) => {
  const list = req.body;
  console.log(list);
  const result = await FavListBiodata.insertMany(list);
  res.send(result);
};

exports.deleteFavList = async (req, res) => {
  const { id } = req.params;
  const result = await FavListBiodata.deleteOne({ _id: id });
  res.send(result);
};

exports.getAllFavList = async (req, res) => {
  try {
    const email = req.query.email;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const favLists = await FavListBiodata.find({ email: email });
    res.send(favLists);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ error: "An error occurred while fetching users." });
  }
};

exports.getSingleFavList = async (req, res) => {
  try {
    const singleIgnoreList = await FavListBiodata.findById(req.params.id);
    if (!singleIgnoreList)
      return res.status(404).json({ message: "Biodata not found" });
    res.status(200).json(singleIgnoreList);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch biodata", error: error.message });
  }
};
