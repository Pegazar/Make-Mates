import React from "react";
import "./SearchMap.scss";

interface MapProps {
  src: string;
  width: number | string;
  height: number | string;
}

const SearchMap: React.FC<MapProps> = ({ src, width, height }) => {
  return (
    <div className="searchmap">
      <h2>Ev axtarırsan? - Axtaran tapar 🙃</h2>
      <div className="map-area">
        <iframe
          title="Map of search results"
          src={src}
          width={width}
          height={height}
          style={{ border: 0, borderRadius: "16px 0px 0px 16px" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="map-box">
          <h4>Ərazini seç</h4>
          <div className="map-search">
            <select placeholder="Asan Xidmət">
              <option value="Yasamal">Yasamal</option>
              <option value="Xətai">Xətai</option>
            </select>
            <button>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_9_845)">
                  <path
                    d="M10.8866 3.86667C12.3307 3.86535 13.7428 4.29236 14.9441 5.0937C16.1455 5.89503 17.0822 7.03467 17.6357 8.36845C18.1893 9.70224 18.3348 11.1702 18.0539 12.5867C17.7729 14.0032 17.0782 15.3046 16.0575 16.3262C15.0369 17.3478 13.7362 18.0437 12.3199 18.3259C10.9037 18.6081 9.43555 18.4639 8.10126 17.9116C6.76697 17.3593 5.62647 16.4236 4.82404 15.223C4.02161 14.0224 3.59331 12.6108 3.59331 11.1667C3.60206 9.23444 4.37307 7.38374 5.73875 6.01681C7.10443 4.64988 8.95442 3.87719 10.8866 3.86667ZM10.8866 2.5C9.17254 2.5 7.49693 3.00829 6.0717 3.9606C4.64647 4.9129 3.53565 6.26645 2.87969 7.85008C2.22373 9.4337 2.0521 11.1763 2.3865 12.8574C2.72091 14.5386 3.54633 16.0829 4.75838 17.2949C5.97044 18.507 7.51469 19.3324 9.19586 19.6668C10.877 20.0012 12.6196 19.8296 14.2032 19.1736C15.7869 18.5177 17.1404 17.4068 18.0927 15.9816C19.045 14.5564 19.5533 12.8808 19.5533 11.1667C19.5533 8.86812 18.6402 6.66372 17.0149 5.03841C15.3896 3.41309 13.1852 2.5 10.8866 2.5Z"
                    fill="white"
                  />
                  <path
                    d="M23.3333 22.6933L18.42 17.7466L17.4733 18.6866L22.3867 23.6333C22.4484 23.6954 22.5217 23.7448 22.6026 23.7786C22.6834 23.8124 22.77 23.83 22.8576 23.8303C22.9452 23.8306 23.032 23.8136 23.1131 23.7804C23.1941 23.7472 23.2678 23.6983 23.33 23.6366C23.3922 23.5749 23.4415 23.5015 23.4754 23.4207C23.5092 23.3399 23.5267 23.2532 23.527 23.1656C23.5273 23.078 23.5104 22.9912 23.4772 22.9102C23.4439 22.8291 23.395 22.7554 23.3333 22.6933Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9_845">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMap;
