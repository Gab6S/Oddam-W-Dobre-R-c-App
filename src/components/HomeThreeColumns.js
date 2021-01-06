import React from "react";
import "../scss/_home-three-columns.scss";

const HomeThreeColumns = () => {
  return (
    <>
      <section className="columns-container">
        <div className="columns-flex">
          <ul className="summary-info">
            <li>10</li>
            <li>oddanych worków</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
              enim a elit viverra elementuma. Aliquam erat volutpat.
            </li>
          </ul>
          <ul className="summary-info">
            <li>5</li>
            <li>wspartych organizacji</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
              enim a elit viverra elementuma. Aliquam erat volutpat.
            </li>
          </ul>
          <ul className="summary-info">
            <li>7</li>
            <li>zorganizowanych zbiórek</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
              enim a elit viverra elementuma. Aliquam erat volutpat.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HomeThreeColumns;
