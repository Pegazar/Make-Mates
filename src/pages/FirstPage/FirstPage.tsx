import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FirstPage.scss";
import FirstPageAbout from "../../components/FirstPageAbout/FirstPageAbout";
import FirstPageInfo from "../../components/FirstPageInfo/FirstPageInfo";
import FirstPageFooter from "../../components/FirstPageFooter/FirstPageFooter";

const FirstPage: React.FC = () => {
  const [activeButton, setActiveButton] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const homeActive = activeButton === "home";
  const userActive = activeButton === "user";

  return (
    <div className="firstpage">
      <div className="container">
        <div className="header">
          <h2>MakeMates</h2>
          <div className="header-right">
            <button className="home-btn">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17V9M9 9V1M9 9H17M9 9H1"
                  stroke="#FD853A"
                  stroke-linecap="round"
                />
              </svg>
              Ev elanı yerləşdir
            </button>
            <Link className="register-link" to="register">Qeydiyyat</Link>
          </div>
          <div className="burger-menu">
            <button
              className={`burger-menu__button ${isOpen ? "open" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <nav className={`burger-menu__nav ${isOpen ? "open" : ""}`}>
              <button className="nav-home-btn">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 17V9M9 9V1M9 9H17M9 9H1"
                    stroke="#FD853A"
                    stroke-linecap="round"
                  />
                </svg>
                Ev elanı yerləşdir
              </button>
              <Link className="nav-register-link" to="register">Qeydiyyat</Link>
            </nav>
          </div>
        </div>
        <div className="h-home">
          <div className="h-box">
            <p>
              Uyğun olanı seç və <br /> axtarışa başla!
            </p>
            <div className="h-btn">
              <button
                className={`${activeButton === "home" ? "active" : ""}`}
                onClick={() => setActiveButton("home")}
              >
                {homeActive ? (
                  <svg
                    width="22"
                    height="24"
                    viewBox="0 0 22 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.875 23.2501H4.125C2.39911 23.2501 1 21.851 1 20.1251C1 15.0242 8.5 15.1251 11 15.1251C13.5 15.1251 21 15.0242 21 20.1251C21 21.851 19.6009 23.2501 17.875 23.2501Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 10.75C13.7614 10.75 16 8.51142 16 5.75C16 2.98858 13.7614 0.75 11 0.75C8.23858 0.75 6 2.98858 6 5.75C6 8.51142 8.23858 10.75 11 10.75Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="22"
                    height="24"
                    viewBox="0 0 22 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.875 23.2501H4.125C2.39911 23.2501 1 21.851 1 20.1251C1 15.0242 8.5 15.1251 11 15.1251C13.5 15.1251 21 15.0242 21 20.1251C21 21.851 19.6009 23.2501 17.875 23.2501Z"
                      stroke="#98A2B3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 10.75C13.7614 10.75 16 8.51142 16 5.75C16 2.98858 13.7614 0.75 11 0.75C8.23858 0.75 6 2.98858 6 5.75C6 8.51142 8.23858 10.75 11 10.75Z"
                      stroke="#98A2B3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}{" "}
                Otaq yoldaşı
              </button>
              <button
                className={`${activeButton === "user" ? "active" : ""}`}
                onClick={() => setActiveButton("user")}
              >
                {" "}
                {userActive ? (
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.12498 5.75013C6.95167 3.92344 8.99191 2.52386 10.3719 1.67622C11.3776 1.05845 12.6223 1.05845 13.6281 1.67622C15.0081 2.52386 17.0483 3.92344 18.875 5.75013C22.8355 9.7106 22.625 12.0001 22.625 15.7501C22.625 17.5124 22.487 18.9986 22.3406 20.0791C22.1867 21.2159 21.1952 22.0001 20.048 22.0001H18.25C16.8693 22.0001 15.75 20.8808 15.75 19.5001V17.0001C15.75 16.0056 15.3549 15.0517 14.6516 14.3485C13.9484 13.6452 12.9945 13.2501 12 13.2501C11.0054 13.2501 10.0516 13.6452 9.34834 14.3485C8.64507 15.0517 8.24999 16.0056 8.24999 17.0001V19.5001C8.24999 20.8808 7.1307 22.0001 5.74999 22.0001H3.95193C2.80476 22.0001 1.8133 21.2159 1.65934 20.0791C1.51302 18.9986 1.37499 17.5124 1.37499 15.7501C1.37499 12.0001 1.16449 9.71062 5.12498 5.75013Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.12498 5.75013C6.95167 3.92344 8.99191 2.52386 10.3719 1.67622C11.3776 1.05845 12.6223 1.05845 13.6281 1.67622C15.0081 2.52386 17.0483 3.92344 18.875 5.75013C22.8355 9.7106 22.625 12.0001 22.625 15.7501C22.625 17.5124 22.487 18.9986 22.3406 20.0791C22.1867 21.2159 21.1952 22.0001 20.048 22.0001H18.25C16.8693 22.0001 15.75 20.8808 15.75 19.5001V17.0001C15.75 16.0056 15.3549 15.0517 14.6516 14.3485C13.9484 13.6452 12.9945 13.2501 12 13.2501C11.0054 13.2501 10.0516 13.6452 9.34834 14.3485C8.64507 15.0517 8.24999 16.0056 8.24999 17.0001V19.5001C8.24999 20.8808 7.1307 22.0001 5.74999 22.0001H3.95193C2.80476 22.0001 1.8133 21.2159 1.65934 20.0791C1.51302 18.9986 1.37499 17.5124 1.37499 15.7501C1.37499 12.0001 1.16449 9.71062 5.12498 5.75013Z"
                      stroke="#98A2B3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}{" "}
                Ev
              </button>
            </div>
          </div>
        </div>
        <FirstPageAbout />
        <FirstPageInfo />
      </div>
      <FirstPageFooter />
    </div>
  );
};

export default FirstPage;
