import React from "react";
import Footer from "../../components/Footer";
import BlogD from "../../components/BlogD";
import Header from "../../components/navbar/Header";
import ScrollToTop from "../../components/ScrollToTop";

const Blog = () => {
  ScrollToTop();
  return (
    <section className="compulsory">
      <Header />
      <BlogD />
      <Footer />
    </section>
  );
};

export default Blog;
