import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import language from "../../assets/home/lang.png";
import profile from "../../assets/home/profile.png";
import { logout } from "../../firebase";
import { logout as logoutHandle } from "../../store/auth";
import "./HomeHeader.scss";

const HomeHeader: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div>
      <div className="rightBar">
        <div className="home-header">
          <div className="search-box">
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75778 1.24436C7.7205 1.24348 8.66186 1.52816 9.46276 2.06238C10.2637 2.5966 10.8881 3.35637 11.2572 4.24556C11.6262 5.13474 11.7232 6.11341 11.5359 7.05774C11.3486 8.00207 10.8855 8.86965 10.205 9.55071C9.52461 10.2318 8.65746 10.6957 7.7133 10.8839C6.76913 11.072 5.79038 10.9759 4.90086 10.6077C4.01133 10.2395 3.251 9.61568 2.71604 8.81527C2.18109 8.01485 1.89555 7.07375 1.89555 6.11103C1.90139 4.82288 2.41539 3.58908 3.32585 2.67779C4.2363 1.76651 5.46963 1.25138 6.75778 1.24436ZM6.75778 0.333252C5.61504 0.333252 4.49797 0.672113 3.54781 1.30698C2.59766 1.94185 1.85711 2.84422 1.41981 3.89997C0.982499 4.95572 0.86808 6.11744 1.09102 7.23822C1.31395 8.359 1.86423 9.3885 2.67227 10.1965C3.48031 11.0046 4.50981 11.5549 5.63059 11.7778C6.75137 12.0007 7.91308 11.8863 8.96884 11.449C10.0246 11.0117 10.927 10.2711 11.5618 9.32099C12.1967 8.37084 12.5356 7.25377 12.5356 6.11103C12.5356 4.57867 11.9268 3.10907 10.8433 2.02552C9.75974 0.94198 8.29014 0.333252 6.75778 0.333252Z"
                fill="#F97066"
              />
              <path
                d="M15.0556 13.7956L11.78 10.4978L11.1489 11.1245L14.4244 14.4222C14.4656 14.4637 14.5145 14.4966 14.5684 14.5192C14.6222 14.5417 14.68 14.5534 14.7384 14.5536C14.7968 14.5538 14.8547 14.5425 14.9087 14.5204C14.9628 14.4982 15.0119 14.4656 15.0533 14.4245C15.0948 14.3833 15.1277 14.3344 15.1502 14.2805C15.1728 14.2267 15.1845 14.1689 15.1847 14.1105C15.1849 14.0521 15.1736 13.9942 15.1514 13.9402C15.1293 13.8862 15.0967 13.837 15.0556 13.7956Z"
                fill="#F97066"
              />
            </svg>
            <input type="text" placeholder="Tapa bilmirsən?.." />
          </div>
          <div className="right-area">
            <div className="language">
              <img src={language} alt="" />
            </div>
            <div className="profile">
              <img src={profile} alt="" />
            </div>
            <button className="logout" onClick={handleLogout}>
              <svg
                width="27"
                height="25"
                viewBox="0 0 27 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.25 1.16675H22.5C24.0648 1.16675 25.3333 2.43527 25.3333 4.00008L25.3333 21.0001C25.3333 22.5649 24.0648 23.8334 22.5 23.8334H18.25M12.5833 18.1667L18.25 12.5001M18.25 12.5001L12.5833 6.83341M18.25 12.5001H1.25"
                  stroke="#a4a6aae2"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="home-burger-menu">
            <button
              className={`home-burger-menu__button ${open ? "open" : ""}`}
              onClick={() => setOpen(!open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <nav className={`home-burger-menu__nav ${open ? "open" : ""}`}>
              <div className="right-area">
                <div className="language">
                  <img src={language} alt="" />
                </div>
                <div className="profile">
                  <img src={profile} alt="" />
                </div>
                <button className="logout" onClick={handleLogout}>
                  <svg
                    width="27"
                    height="25"
                    viewBox="0 0 27 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.25 1.16675H22.5C24.0648 1.16675 25.3333 2.43527 25.3333 4.00008L25.3333 21.0001C25.3333 22.5649 24.0648 23.8334 22.5 23.8334H18.25M12.5833 18.1667L18.25 12.5001M18.25 12.5001L12.5833 6.83341M18.25 12.5001H1.25"
                      stroke="#a4a6aae2"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
