import React from "react";
import "./FirstPageAbout.scss";
import group1 from "../../assets/firstpage/Group1.jpg";
import group2 from "../../assets/firstpage/Group2.jpg";
import group3 from "../../assets/firstpage/Group3.jpg";
import group4 from "../../assets/firstpage/Group4.jpg";

const FirstPageAbout: React.FC = () => {
  return (
    <div className="firstpageabout">
      <div className="about-title">
        <h2>Niyə MakeMates?</h2>
      </div>
      <div className="fpa-box">
        <img src={group1} alt="" />
        <div className="fpa-text">
          <h3>Hər kəs bir yerdə!</h3>
          <p>
            MakeMates ev axtaran və evini paylaşan insanları bir araya gətirir.
          </p>
        </div>
      </div>
      <div className="fpa-box">
        <div className="fpa-text">
          <h3>Otaq yoldaşını asan tap!</h3>
          <p>Kriteriyalarına uyğun insanları axtar onlardan ən uyğununu seç.</p>
        </div>
        <img src={group2} alt="" />
      </div>
      <div className="fpa-box">
        <img src={group3} alt="" />
        <div className="fpa-text">
          <h3>Xəyalındakı evi tap!</h3>
          <p>Evlərin bütün xüsusiyyətləri əlinin altında.</p>
        </div>
      </div>
      <div className="fpa-box">
        <div className="fpa-text">
          <h3>Paylaş , axtar ,tap!</h3>
          <p>Cəmiyyətdə paylaş, axtar, tap və hazırdır!</p>
        </div>
        <img src={group4} alt="" />
      </div>
    </div>
  );
};

export default FirstPageAbout;
