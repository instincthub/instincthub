import React from "react";

const Newsletter = () => {
  return (
    <>
      <section className="container">
        <section className="newsletter_s">
          <div className="subscribe">
            <h2>Subscribe to Newsletter</h2>
            <p>
              Label Quis sagittis phasellus tristique scelerisque vel viverra et
              pulvinar purus. Dolor pretium vulputate purus, libero enim in
              enim.
            </p>
            <form action="">
              <input type="email" placeholder="Email address" />
              <button type="submit" className="important-btn">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </section>
    </>
  );
};
export default Newsletter;
