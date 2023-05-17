const mongoose = require("mongoose");

const TranslateSchema = new mongoose.Schema({
  jaContent: {
    type: String,
    required: [true, "日本語のコンテンツを入力してください"],
    maxlength: [400, "日本語のコンテンツは400文字まで"],
  },
  enContent: {
    type: String,
    required: [true, "英語のコンテンツを入力してください"],
    maxlength: [400, "英語のコンテンツは400文字まで"],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Translate", TranslateSchema);