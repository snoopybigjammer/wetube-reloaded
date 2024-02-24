import express from "express";
import {
  registerView,
  createComment,
  deleteComment,
} from "../controllers/videoControllers";

const apiRouter = express.Router();

apiRouter.post("/videos/:id([0-9a-f]{24})/views", registerView);
apiRouter.post("/videos/:id([0-9a-f]{24})/comment", createComment);
apiRouter.delete("/videos/:id/comment/delete", deleteComment);

export default apiRouter;
