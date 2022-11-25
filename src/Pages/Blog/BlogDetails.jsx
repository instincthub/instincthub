import React from "react";
import Footer from "../../components/Footer";
import BlogDetailRequest from "../../components/blog/BlogDetailRequest";
import Header from "../../components/navbar/Header";
import ScrollToTop from "../../components/ScrollToTop";

const Blog = () => {
  ScrollToTop();
  return (
    <section className="compulsory">
      <Header />
      <BlogDetailRequest />
      <Footer />
    </section>
  );
};

export default Blog;
