import React from "react";
import Footer from "../../components/Footer";
import LatestBlog from "../../components/Latest";
import Newsletter from "../../components/Newsletter";
import BlogUserList from "../../components/blog/BlogUserList";
import ScrollToTop from "../../components/ScrollToTop";
// import Categories from "../../components/BlogCategories";
import Header from "../../components/navbar/Header";

const Blog = () => {
  ScrollToTop();
  return (
    <section>
      <Header />
      <LatestBlog />
      {/* <Categories /> */}
      <BlogUserList/>
      <Newsletter />
      <Footer />
    </section>
  );
};

export default Blog;
