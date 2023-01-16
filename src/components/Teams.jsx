import { React, useState } from "react";
import SVGs from "../assets/svg/SVGs";
import { reqOptions, fetchAPI, HOST_URL } from "../assets/js/help_func";

const Teams = () => {
  const [data, setData] = useState([]);

  useState(() => {
    let requestOptions = reqOptions("get", null);
    fetchAPI(
      setData,
      HOST_URL() + "/api/v1/home_pages/teams/",
      requestOptions,
      true
    );
  });

  return (
    <section id="spaces">
      <div className="container">
        <div className="mini_heading">
          <p className="cap_lock-txt">Our Team</p>
          <h2>Meet our team</h2>
          <p>
            Meet the dedicated professionals who make our organization a
            success. Get to know the faces behind the services and products that
            we offer.
          </p>
        </div>
        <section className="fourcard_grid">
          {data.results
            ? data.results.map((option) => {
                return (
                  <div className="per_staff grid-row" key={option.id}>
                    <img src={option.image} alt={option.name} />
                    <h4>{option.name}</h4>
                    <p>{option.role}</p>
                    <div className="links">
                      <a href={option.linkedin_url} target="blanc" rel="noopener noreferrer">
                        <img src={SVGs.linkedin_b} alt="LinkedIn Logo" />
                      </a>
                      <a href={option.twitter_url} target="blanc" rel="noopener noreferrer">
                        <img src={SVGs.custom_t} alt="Twitter Logo" />
                      </a>
                    </div>
                  </div>
                );
              })
            : ""}
        </section>
      </div>
    </section>
  );
};

export default Teams;
