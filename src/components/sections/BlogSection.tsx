import React from "react";
import BlogPostCard from "./BlogPostCard";
import OneImage from "@/assets/image 18.png";

function BlogSection({ darkMode }: any) {
  const blogPosts = [
    {
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: OneImage,
      readMoreLink: "#",
    },
    {
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: OneImage,
      readMoreLink: "#",
    },
    {
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: OneImage,
      readMoreLink: "#",
    },
    // Add other blog posts...
  ];

  return (
    <div
      className={`container mx-auto px-4 py-8 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      <h1
        className={`text-3xl font-bold text-center mb-4 ${darkMode ? "text-white" : "text-[#4D4D4D]"}`}
      >
        Caring is the new marketing
      </h1>
      <p
        className={`text-center mb-8 max-w-2xl mx-auto ${darkMode ? "text-white" : "text-[#4D4D4D]"}`}
      >
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's more.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-20">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={index} {...post} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
