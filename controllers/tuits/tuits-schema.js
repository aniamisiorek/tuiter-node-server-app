import mongoose from 'mongoose';

const schema = mongoose.Schema({
  userName: String,
  image: String,
  handle: String,
  time: String,
  tuit: String,
  likes: Number,
  liked: Boolean,
  replies: Number,
  retuits: Number,
  dislikes: Number,
}, {collection: 'tuits'});
export default schema;