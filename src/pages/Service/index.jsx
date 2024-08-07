import React from "react";
import "./Servuce.css";
import { data } from "../../utils/about-us/data";

function Service() {
  return (
    <>
      <h2 style={{ color: "#001534" }}>Mission</h2>
      <div className="para-image">
        <div className="para">
          <p style={{ align: "left" }}>
            Liberty Books established in 1952, is a Pakistani family-owned chain
            of nationwide bookstores.
            <br />
            We started our journey from a kiosk in the old city Karachi and have
            built a national network <br /> of artisanal bookstores and a
            personalized online experience delivering books all around Pakistan.
            <br />
          </p>
          <p>
            With over 90,000 original titles, bargain books, gifts, and
            educational <br />
            resource materials, we offer our diverse readership a welcoming
            environment for their intellectual
            <br /> endeavours through book launches, book bazaars, children’s
            story sessions and more. <br />
          </p>

          <p>
            Committed to engaging with diverse readers of all ages, and
            organizations on a national scale, we strive to encourage knowledge
            enhancement and educational attainment for all.
          </p>
        </div>
        <div className="image">
          <img
            src="https://www.libertybooks.com/image/icons/Group%20310.png"
            alt="map"
          />
        </div>
      </div>

      <h1 style={{ color: "#001534" }}>WE ARE PROUD TO BE:</h1>
      <div className="list-item">
        {data.map((item) => (
          <div key={item.id}>
            <ul>
              <li>
                <img className="img" src={item.imgUrl} alt="Description" />
                <p>{item.text}</p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
export default Service;
