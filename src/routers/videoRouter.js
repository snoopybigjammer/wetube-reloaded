import express from "express";
import {
  getUpload,
  postUpload,
  watch,
  getEdit,
  postEdit,
  deleteVideo,
} from "../controllers/videoControllers";
import { protectorMiddleware, uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter
  .route("/:id([0-9a-f]{24})/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit);
videoRouter
  .route("/:id([0-9a-f]{24})/delete")
  .all(protectorMiddleware)
  .get(deleteVideo);

videoRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(
    uploadVideo.fields([
      { name: "video", maxCount: 1 },
      { name: "thumb", maxCount: 1 },
    ]),
    postUpload
  );
export default videoRouter;
