const Captions = require("../models/captions");

exports.getCaption = async (req, res) => {
  try {
    const caption = await Captions.findByPk(req.params.id);
    return res.status(200).json(caption);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createCaption = async (req, res) => {
  try {
    const captionModel = {
      PhotoId: req.body.PhotoId,
      comment: req.body.comment,
    };
    try {
      const caption = await Captions.create(captionModel);
      return res.status(201).json(caption);
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteCaption = async (req, res) => {
  try {
    const caption = await Captions.destroy({ where: { id: req.params.id } });
    return res.status(200).json({ msg: "success" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateCaption = async (req, res) => {
  try {
    const captionModel = {
      comment: req.body.comment,
    };
    try {
      const photo = await Captions.update(captionModel, {
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
