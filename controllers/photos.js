const Photos = require("../models/photos");

exports.getPhotos = async (req, res) => {
  try {
    const allPhotos = await Photos.findAll();
    return res.status(200).json(allPhotos);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getSinglePhoto = async (req, res) => {
  try {
    const photo = await Photos.findByPk(req.params.id);
    return res.status(200).json(photo);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createPhoto = async (req, res) => {
  try {
    const photoModel = {
      name: req.body.name,
      url: req.body.url,
    };
    try {
      const photo = await Photos.create(photoModel);
      return res.status(201).json(photo);
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deletePhoto = async (req, res) => {
  try {
    const photo = await Photos.destroy({ where: { id: req.params.id } });
    return res.status(200).json({ msg: "success" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updatePhoto = async (req, res) => {
  try {
    const photoModel = {
      name: req.body.name,
      url: req.body.url,
    };
    try {
      const photo = await Photos.update(photoModel, {
        where: { id: req.params.id },
      });
      return res.status(200).json({ msg: "success" });
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
