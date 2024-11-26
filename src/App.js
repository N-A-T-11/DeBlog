import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import Blog from "./Components/Blog/blog";
import CreateBlog from "./Components/CreateBlog/createBlog";
import Feed from "./Components/Feed/feed";
import Interest from "./Components/Interest/interest";
import Profile from "./Components/Profile/profile";
import "./App.css";
// const mongoose = require('mongoose');
// const express = require('express')


// const app = express();
// app.listen(3000, () => {
//   console.log('On port 3000')
// })



// mongoose.connect('mongodb://localhost:27017/blog')

// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.on('open', () => {
//   console.log('database connected')
// })

function App() {
  

  return (
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/interest" element= {<Interest/>} />
      <Route path="/profile" element= {<Profile/>} />
      <Route path="/feed" element= {<Feed/>} />
      <Route path="/blog/:id" element= {<Blog/>} />
      <Route path="/createBlog" element= {<CreateBlog/>} />
    </Routes>
  );
}

export default App;
