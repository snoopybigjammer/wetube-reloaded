import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, minLength: 3 },
  fileUrl: { type: String, required: true },
  thumbUrl: { type: String, required: true },
  description: { type: String, required: true, trim: true, maxLength: 140 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

videoSchema.static("formatHashTags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

export const Video = mongoose.model("Video", videoSchema);
