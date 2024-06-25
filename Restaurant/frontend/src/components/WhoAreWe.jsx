import React from "react";
import { data } from "../restApi.json";

const WhoAreWe = () => {
  return (
    <section className="who_are_we" id="who_are_we">
      <div className="conatiner">
        <div className="text_banner">
          {data[0].who_we_are.map((element) => {
            return (
              //slice methid only displays contents of index 0 to 2 in map element
              <div className="card" key={element.id}>
                <h1
                  style={({ fontWeight: "300" }, { textAlign: "center" })}
                  className="heading"
                >
                  {element.number}
                </h1>
                <p style={{ textAlign: "center" }}>{element.title}</p>
              </div>
            );
          })}
        </div>
        <div className="image_banner">
          <img src="/center.svg" alt="center" className="gradient_bg" />
          <img src="/whoweare.png" alt="who" style={{ width: 500 }} />
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
