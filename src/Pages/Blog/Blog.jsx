import React from "react";
import Footer from "../../components/Footer";
import LatestBlog from "../../components/Latest";
import Newsletter from "../../components/Newsletter";
import BlogUserList from "../../components/blog/BlogUserList";
import ScrollToTop from "../../components/ScrollToTop";
// import Categories from "../../components/BlogCategories";
import Header from "../../components/navbar/Header";
import { Helmet } from "react-helmet";

const Blog = () => {
  ScrollToTop();
  return (
    <section>
      <Helmet>
        <title>instinctHub Blog Posts</title>
        <meta name="description" content="Here, we will be sharing valuable information, industry insights, and updates about our business. Our blog is a great resource for anyone looking to stay informed and up-to-date on the latest trends and developments in the technology space. Whether you've existing knowledge or you're new to the concepts, or just someone with an interest in what we do, we hope you'll find something of value here." />
      </Helmet>
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
