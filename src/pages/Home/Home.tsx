import React from "react";
import "./Home.scss";
import { useSelector } from "react-redux";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import SearchMap from "../../components/SearchMap/SearchMap";
import LeftBar from "../../components/LeftBar/LeftBar";
import Apartment from "../../components/Apartments/Apartment";
import HomeFooter from "../../components/HomeFooter/HomeFooter";

interface AuthState {
  user: any | false;
}

const Home: React.FC = () => {
  const src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.404083412685!2d49.955428999999995!3d40.377736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1f580e9120fdbcb9!2zYXNhbiB4aWRtyZl0IMaPaG3JmWRsaQ!5e0!3m2!1saz!2s!4v1676406725236!5m2!1saz!2s";
  const width = 750;
  const height = 286;

  //@ts-ignore
  const auth = useSelector((state) => state.auth);
  const user = auth.user as AuthState["user"] | false;

  if (user) {
    return (
      <>
        <div className="home">
          <LeftBar />
          <div className="main-area">
            <HomeHeader />
            <SearchMap src={src} width={width} height={height} />
            <Apartment />
          </div>
        </div>
        <HomeFooter />
      </>
    );
  }

  return (
    <div>
      <h1>Pls First Login</h1>
    </div>
  );
};

export default Home;
