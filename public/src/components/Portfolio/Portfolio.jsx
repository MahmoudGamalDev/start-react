import React, { useState } from "react";
import SectionHeading from "../UI/SectionHeading/SectionHeading";
import MyVerticallyCenteredModal from "../UI/Modal/MyVerticallyCenteredModal";
import img1 from "../../imgs/poert1.png";
import img2 from "../../imgs/port2.png";
import img3 from "../../imgs/port3.png";
import styles from "./portfolio.module.css";

export default function Portfolio() {
  const [modalShow, setModalShow] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  let sendImgSrc = (img) => {
    setImgSrc(img);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center flex-column pb-4">
      <div className="py-3">
        <SectionHeading text="portfolio component" color="blue" />
      </div>

      <div className="row g-5">
        <MyVerticallyCenteredModal
          image={imgSrc}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        <div
          className={`${styles.box} col-md-4`}
          onClick={() => sendImgSrc(img1)}
        >
          <image className="position-relative d-block">
            <div
              onClick={() => setModalShow(true)}
              className={`${styles.overlay} rounded-3 position-absolute w-100 h-100 justify-content-center align-items-center`}
            >
              <svg
                style={{ width: "4rem" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
            </div>
            <img className="w-100 rounded-3" src={img1} alt="home" />
          </image>
        </div>
        <div
          className={`${styles.box} col-md-4`}
          onClick={() => sendImgSrc(img2)}
        >
          <image className="position-relative d-block">
            <div
              onClick={() => setModalShow(true)}
              className={`${styles.overlay} rounded-3 position-absolute w-100 h-100 justify-content-center align-items-center`}
            >
              <svg
                style={{ width: "4rem" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
            </div>
            <img className="w-100 rounded-3" src={img2} alt="home" />
          </image>
        </div>
        <div
          className={`${styles.box} col-md-4`}
          onClick={() => sendImgSrc(img3)}
        >
          <image className="position-relative d-block">
            <div
              onClick={() => setModalShow(true)}
              className={`${styles.overlay} rounded-3 position-absolute w-100 h-100 justify-content-center align-items-center`}
            >
              <svg
                style={{ width: "4rem" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
            </div>
            <img className="w-100 rounded-3" src={img3} alt="home" />
          </image>
        </div>
        <div
          className={`${styles.box} col-md-4`}
          onClick={() => sendImgSrc(img1)}
        >
          <image className="position-relative d-block">
            <div
              onClick={() => setModalShow(true)}
              className={`${styles.overlay} rounded-3 position-absolute w-100 h-100 justify-content-center align-items-center`}
            >
              <svg
                style={{ width: "4rem" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
            </div>
            <img className="w-100 rounded-3" src={img1} alt="home" />
          </image>
        </div>
        <div
          className={`${styles.box} col-md-4`}
          onClick={() => sendImgSrc(img2)}
        >
          <image className="position-relative d-block">
            <div
              onClick={() => setModalShow(true)}
              className={`${styles.overlay} rounded-3 position-absolute w-100 h-100 justify-content-center align-items-center`}
            >
              <svg
                style={{ width: "4rem" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
            </div>
            <img className="w-100 rounded-3" src={img2} alt="home" />
          </image>
        </div>
        <div
          className={`${styles.box} col-md-4`}
          onClick={() => sendImgSrc(img3)}
        >
          <image className="position-relative d-block">
            <div
              onClick={() => setModalShow(true)}
              className={`${styles.overlay} rounded-3 position-absolute w-100 h-100 justify-content-center align-items-center`}
            >
              <svg
                style={{ width: "4rem" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
            </div>
            <img className="w-100 rounded-3" src={img3} alt="home" />
          </image>
        </div>

        
      </div>
    </div>
  );
}
