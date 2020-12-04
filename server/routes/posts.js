import express from "express";

import {getPosts, createPost} from "../controllers/posts.js";

const router = express.Router();

// tihs goes to localhose:5000/posts (starting path)
router.get("/", getPosts);
router.post("/", createPost);

export default router;
