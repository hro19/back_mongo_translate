const Translate = require("../models/Translate");

//全てのタスク
const getAllTranslates = async (req, res) => {
  try {
    const allTranslate = await Translate.find({});
    res.status(200).json(allTranslate);
  } catch (err) {
    res.status(500).json(err);
  }
};

//タスク新規作成
const createTranslate = async(req, res) => {
    try {
    const createTranslate = await Translate.create(req.body);
        res.status(200).json(createTranslate);
    } catch (err) {
        res.status(500).json(err);
    }
};

//特定タスクの呼び出し
const getSingleTranslate = async (req, res) => {
  try {
    const id = req.params.id;
    const singleTranslate = await Translate.findOne({ _id: id }).exec();
    res.status(200).json(singleTranslate);
  } catch (err) {
    res.status(500).json(err);
  }
};

//タスク編集
const updateTranslate = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body; // 更新するデータをリクエストボディから取得
    const options = { new: true }; // 更新後のタスクを取得するためのオプション

    const updatedTranslate = await Translate.findOneAndUpdate(
      { _id: id },
      update,
      options
    ).exec();

    if (updatedTranslate) {
      res.status(200).json(updatedTranslate);
    } else {
      res.status(404).json({ message: "存在しません" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//タスク削除
const deleteTranslate = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedTranslate = await Translate.findOneAndDelete({ _id: id }).exec();

    if (deletedTranslate) {
      res.status(200).json({ message: "正常に削除できました" });
    } else {
      res.status(404).json({ message: "このタスクがありません" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllTranslates,
  createTranslate,
  getSingleTranslate,
  updateTranslate,
  deleteTranslate
};