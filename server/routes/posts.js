import express from "express";

import {getPosts, createPost, updatePost} from "../controllers/posts.js";

const router = express.Router();

// tihs goes to localhose:5000/posts (starting path)
router.get("/", getPosts);
router.post("/", createPost);
// patch: used for updating existing documents
router.patch("/:id", updatePost);

export default router;
