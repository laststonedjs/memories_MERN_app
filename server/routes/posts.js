import express from "express";
// handler functions
import { getPosts } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);

export default router;