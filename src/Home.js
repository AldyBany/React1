import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "Loremm ipsumc...",
      author: "Aldy",
      id: 1
    },
    { title: "Welcome!", body: "Loremm ipsumc...", author: "Vrege", id: 2 },
    { title: "Web dev Tools", body: "Loremm ipsumc...", author: "Aldy", id: 3 }
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);

    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("Hi");
  }, [blogs]);

  return (
    <div className="container-sm">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Aldy")}
        title="Aldy's Blog"
      /> */}
    </div>
  );
};

export default Home;
