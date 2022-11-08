import React, { useState } from "react";
import Images from "../assets/images/Images";
import EachBlog from "./EachBlog";

const AllBlog = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  // const Test = () => {
  //   return (
  //     <Stack spacing={2}>
  //       <Typography>Page: {page}</Typography>
  //       <Pagination count={10} page={page} onChange={handleChange} />
  //     </Stack>
  //   );
  // };

  return (
    <>
      <section className="threecard_grid blog_control">
        <EachBlog
          link="slug"
          blogimg={Images.blog2}
          authorimg={Images.img2}
          authorname="Sodiq A. Makinde"
          date="October 5, 2022"
          title="Password Authentication Vs Passwordless Authentication"
          encryption="Passwords have significantly impacted today's society since the beginning of the 21st century. However, technology is beyond; we use the Internet to perform many activities such as transaction…"
        />
        <EachBlog
          link="slug"
          blogimg={Images.blog3}
          authorimg={Images.img3}
          authorname="Sodiq A. Makinde"
          date="October 5, 2022"
          title="Password Authentication Vs Passwordless Authentication"
          encryption="Passwords have significantly impacted today's society since the beginning of the 21st century. However, technology is beyond; we use the Internet to perform many activities such as transaction…"
        />
        <EachBlog
          link="slug"
          blogimg={Images.blog4}
          authorimg={Images.img4}
          authorname="Sodiq A. Makinde"
          date="October 5, 2022"
          title="Password Authentication Vs Passwordless Authentication"
          encryption="Passwords have significantly impacted today's society since the beginning of the 21st century. However, technology is beyond; we use the Internet to perform many activities such as transaction…"
        />
      </section>
      <Test />
    </>
  );
};

export default AllBlog;
