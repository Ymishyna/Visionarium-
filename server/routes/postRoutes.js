import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GET all posts
router.route('/').get(async (req, res) => {
  try {
    const posts = await Post.find({}); // Fetch all posts from a db
    res.status(200).json({ success: true, data: posts }); // Send all posts as a response
  } catch (err) {
    res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' }); // Send an error message
  }
});

// Create a post
router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo); // Upload photo to cloudinary

    // Create a new post in a db 
    const newPost = await Post.create({
      name,  
      prompt,
      photo: photoUrl.url,
    });

    res.status(200).json({ success: true, data: newPost }); // Send the new post as a response
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to create a post, please try again' }); // Send an error message
  }
});


export default router;