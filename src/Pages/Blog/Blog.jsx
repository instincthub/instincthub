import React from "react";
import Footer from "../../components/Footer";
import LatestBlog from "../../components/Latest";
import Newsletter from "../../components/Newsletter";
import Categories from "../../components/BlogCategories";
import Header from "../../components/navbar/Header";

const Blog = () => {
  return (
    <section>
      <Header />
      <LatestBlog />
      <Categories />
      <Newsletter />
      <Footer />
    </section>
  );
};

export default Blog;
