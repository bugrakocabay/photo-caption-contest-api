const Photos = require("../models/photos");
const CacheService = require("../util/cache-service");
const cache = new CacheService(3600);
const CACHE_KEY = "photo";

exports.getPhotos = async (req, res) => {
  try {
    const allPhotos = await Photos.findAll();
    return res.status(200).json(allPhotos);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getPhoto = (req, res) => {
  return cache
    .get(`${CACHE_KEY}_${req.params.id}`, () => Photos.findByPk(req.params.id))
    .then((photo) => {
      if (!photo) {
        return res.status(404).json({ msg: "photo not found" });
      }
      return res.status(200).json(photo);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
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
    if (!photo) {
      return res.status(404).json({ msg: "photo not found" });
    }
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
      return res.status(200).json(photo);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};
