// import Biodatas from "../Model/BioDataModel";
const Biodatas = require("../Model/BioDataModel");

// Create new biodata
exports.createBiodata = async (req, res) => {
  try {
    const count = await Biodatas.countDocuments();
    const newId = String(count + 1).padStart(5, "0");

    const biodataWithId = {
      ...req.body,
      generalInfo: {
        ...req.body.generalInfo,
        bioDataId: newId,
      },
    };

    const newBiodata = new Biodatas(biodataWithId);
    await newBiodata.save();

    res.status(201).json({
      message: "Biodata created successfully",
      data: newBiodata,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create biodata",
      error: error.message,
    });
  }
};


// Get all biodata
exports.getAllBiodata = async (req, res) => {
  try {
    const biodatas = await Biodatas.find();
    res.status(200).json(biodatas);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch biodata", error: error.message });
  }
};

// Get single biodata by ID
exports.getBiodataById = async (req, res) => {
  try {
    const biodata = await Biodatas.findById(req.params.id);
    if (!biodata) return res.status(404).json({ message: "Biodata not found" });
    res.status(200).json(biodata);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch biodata", error: error.message });
  }
};

exports.getBiodataByEmail = async (req, res) => {
  const email = req.params.email;
  try {
    const biodata = await Biodatas.findOne({email});
    if (!biodata) return res.status(404).json({ message: "Biodata not found" });
    res.status(200).json(biodata);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch biodata", error: error.message });
  }
};

// Update biodata

exports.updateBiodata = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedBiodata = await Biodatas.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedBiodata) {
      return res.status(404).json({ message: "Biodata not found" });
    }

    res.status(200).json({
      message: "Biodata updated successfully",
      data: updatedBiodata,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update biodata",
      error: error.message,
    });
  }
};


// Delete biodata
exports.deleteBiodata = async (req, res) => {
  try {
    const deletedBiodata = await Biodatas.findByIdAndDelete(req.params.id);
    if (!deletedBiodata)
      return res.status(404).json({ message: "Biodata not found" });
    res.status(200).json({ message: "Biodata deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete biodata", error: error.message });
  }
};
