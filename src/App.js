import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import Blog from "./Components/Blog/blog";
import CreateBlog from "./Components/CreateBlog/createBlog";
import Feed from "./Components/Feed/feed";
import Interest from "./Components/Interest/interest";
import Profile from "./Components/Profile/profile";
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/affinity" element= {<Interest/>} />
      <Route path="/profile" element= {<Profile/>} />
      <Route path="/feed" element= {<Feed/>} />
      <Route path="/blog" element= {<Blog/>} />
      <Route path="/createBlog" element= {<CreateBlog/>} />
    </Routes>
  );
}

export default App;
