import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

// tihs goes to localhose:5000/posts (starting path)
router.get("/", getPosts);
router.post("/", createPost);
// patch: used for updating existing documents
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

export default router;
