import React from "react";
import H2headings from "./H2headings";

const Accordion = () => {
  return (
    <section className="mt-10 container" id="spaces">
      <div className="container">
        <H2headings
          class="container h2heading"
          h2="Frequently Asked Question"
          p="The best decision you can make for your self is to invest heavely into your learning."
        />
        <div className="accordion ">
          {/* What is Instincthub ? */}
          <div>
            <input
              type="checkbox"
              name="toggle_accordion"
              id="acc4"
              className="acc_input"
            />
            <label for="acc4" className="acc_label">
              What is Instincthub ?
            </label>

            <div className="acc_content">
              <p>
                At nulla aenean facilisis odio amet. Quis erat ac volutpat
                mauris. Donec nunc interdum ut dui vehicula ornare magna
                habitant turpis. Nulla ac tortor arcu, quis enim nisi faucibus.
                Facilisis id nulla dis massa suscipit. Congue augue morbi vitae
                sollicitudin vulputate pulvinar at.
              </p>
            </div>
          </div>

          {/*How much does it cost?*/}
          <div>
            <input
              type="checkbox"
              name="toggle_accordion"
              id="acc5"
              className="acc_input"
            />
            <label for="acc5" className="acc_label">
              How much does it cost?
            </label>

            <div className="acc_content" id="JobCategories">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                repudiandae aspernatur temporibus at voluptas fugit porro nisi
                error optio quae voluptatum, fuga nihil deserunt amet. Eos
                necessitatibus neque dolor dolores.
              </p>
            </div>
          </div>

          {/* How to contact our mentors */}
          <div>
            <input
              type="checkbox"
              name="toggle_accordion"
              id="acc6"
              className="acc_input"
            />
            <label for="acc6" className="acc_label">
              How to contact our mentors ?
            </label>

            <div className="acc_content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                mollitia enim repellendus recusandae optio eaque quos ipsam odio
                dolorum magni architecto esse autem deleniti, expedita illum
                sed. Iusto, eaque maxime!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
