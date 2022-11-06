import React from "react";
import Images from "../assets/images/Images";
import SVGs from "../assets/svg/SVGs";

const Teams = () => {
  const PerStaff = (props) => {
    return (
      <>
        <div className="per_staff grid-row">
          <img src={props.image} alt="" />
          <h4>{props.name}</h4>
          <p>{props.position}</p>
          <div className="links">
            <a href={props.linkedin}>
              <img src={SVGs.linkedin_b} alt="" />
            </a>
            <a href={props.email}>
              <img src={SVGs.custom_t} alt="" />
            </a>
          </div>
        </div>
      </>
    );
  };

  return (
    <section id="spaces">
      <div className="container">
        <div className="mini_heading">
          <p className="cap_lock-txt">Our Team</p>
          <h2>Meet our team</h2>
          <p>
            Eget egestas dolor pretium etiam volutpat. Dapibus non malesuada
            purus venenatis cursus orci nunc ut eu. Non interdum vitae risus eu
            purus
          </p>
        </div>
        <section className="fourcard_grid">
          <PerStaff
            image="https://media.istockphoto.com/photos/studio-shot-of-a-handsome-and-happy-young-man-posing-against-a-grey-picture-id1355110818?k=20&m=1355110818&s=612x612&w=0&h=HZ_nXAm40s_NAoWlPMWFZ4m9NwXJyT66dziTEqlcJIc="
            name="Sodiq A. Makinde"
            position="Frontend Engineer"
            linkedin="https://www.linkedin.com/in/makinde-sodiq-926824216/"
            email="mailto:msodq2018@gmail.com"
          />
          <PerStaff
            image={Images.img2}
            name="Tosin A. Alo"
            position="UIUX Designer"
            linkedin="https://www.linkedin.com/in/makinde-sodiq-926824216/"
            email="mailto:msodq2018@gmail.com"
          />
          <PerStaff
            image={Images.img3}
            name="Victoria Santos"
            position="Sales Representative"
            linkedin="https://www.linkedin.com/in/makinde-sodiq-926824216/"
            email="mailto:msodq2018@gmail.com"
          />
          <PerStaff
            image={Images.img4}
            name="Victoria Santos"
            position="Sales Representative"
            linkedin="https://www.linkedin.com/in/makinde-sodiq-926824216/"
            email="mailto:msodq2018@gmail.com"
          />
          <PerStaff
            image={Images.img5}
            name="Victoria Santos"
            position="Sales Representative"
            linkedin="https://www.linkedin.com/in/makinde-sodiq-926824216/"
            email="mailto:msodq2018@gmail.com"
          />
        </section>
      </div>
    </section>
  );
};

export default Teams;
