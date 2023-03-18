import { logout } from "../../firebase";
import { logout as logoutHandle } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./LeftBar.scss"

const LeftBar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div className="leftBar">
      <h2>LOGO</h2>
      <div className="left-area">
        <button>
          <svg
            width="26"
            height="17"
            viewBox="0 0 26 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.66666 15.5834H24.3333M1.66666 8.50008H24.3333M1.66666 1.41675H24.3333"
              stroke="#D0D5DD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button>
          <svg
            width="28"
            height="23"
            viewBox="0 0 28 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.66493 1.99818C1.9213 1.74182 2.27547 1.58325 2.66667 1.58325H25.3333C25.7245 1.58325 26.0787 1.74182 26.3351 1.99818M1.66493 1.99818C1.40857 2.25455 1.25 2.60872 1.25 2.99992V19.9999C1.25 20.7823 1.88426 21.4166 2.66667 21.4166H25.3333C26.1157 21.4166 26.75 20.7823 26.75 19.9999V2.99992C26.75 2.60872 26.5914 2.25455 26.3351 1.99818M1.66493 1.99818L11.9965 12.3297C13.103 13.4362 14.897 13.4362 16.0035 12.3297L26.3351 1.99818"
              stroke="#D0D5DD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button>
          <svg
            width="34"
            height="23"
            viewBox="0 0 34 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.24999 21.4166H1.41666V19.9999C1.41666 17.3595 3.22258 15.1408 5.66666 14.5118M8.49999 9.84143C6.8493 9.258 5.66666 7.68374 5.66666 5.83327C5.66666 3.98279 6.8493 2.40853 8.49999 1.8251M29.75 21.4166H32.5833V19.9999C32.5833 17.3595 30.7774 15.1408 28.3333 14.5118M25.5 1.8251C27.1507 2.40853 28.3333 3.98279 28.3333 5.83327C28.3333 7.68374 27.1507 9.258 25.5 9.84143M14.1667 14.3333H19.8333C22.9629 14.3333 25.5 16.8703 25.5 19.9999V21.4166H8.49999V19.9999C8.49999 16.8703 11.037 14.3333 14.1667 14.3333ZM21.25 5.83325C21.25 8.18046 19.3472 10.0833 17 10.0833C14.6528 10.0833 12.75 8.18046 12.75 5.83325C12.75 3.48604 14.6528 1.58325 17 1.58325C19.3472 1.58325 21.25 3.48604 21.25 5.83325Z"
              stroke="#D0D5DD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button>
          <svg
            width="28"
            height="25"
            viewBox="0 0 28 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.13615 12.5672L14 23.8334L24.8638 12.5672C26.0715 11.3148 26.75 9.61615 26.75 7.84498C26.75 4.15669 23.8668 1.16675 20.3103 1.16675C18.6024 1.16675 16.9644 1.87034 15.7567 3.12276L14 4.94453L12.2433 3.12276C11.0356 1.87035 9.39764 1.16675 7.68972 1.16675C4.13316 1.16675 1.25 4.15669 1.25 7.84498C1.25 9.61616 1.92847 11.3148 3.13615 12.5672Z"
              stroke="#D0D5DD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <svg
          width="28"
          height="27"
          viewBox="0 0 28 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 7.83333V13.5L16.8333 16.3333M26.75 13.5C26.75 20.5416 21.0416 26.25 14 26.25C6.95837 26.25 1.25 20.5416 1.25 13.5C1.25 6.45837 6.95837 0.75 14 0.75C21.0416 0.75 26.75 6.45837 26.75 13.5Z"
            stroke="#D0D5DD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          width="31"
          height="2"
          viewBox="0 0 31 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H30"
            stroke="#D0D5DD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <button>
          <svg
            width="28"
            height="27"
            viewBox="0 0 28 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.25 0.75V9.25M1.25 9.25H9.75M1.25 9.25C4.54721 6.29116 7.60074 2.94125 12.2225 2.29103C14.9601 1.90591 17.7486 2.42082 20.168 3.7582C22.5874 5.09557 24.5066 7.18296 25.6364 9.70583M26.75 26.25V17.75M26.75 17.75H18.25M26.75 17.75C23.4528 20.7088 20.3992 24.0588 15.7774 24.709C13.0399 25.0941 10.2514 24.5792 7.83198 23.2418C5.41258 21.9044 3.49338 19.8171 2.36356 17.2942"
              stroke="#D0D5DD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
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
              stroke="#D0D5DD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LeftBar;
