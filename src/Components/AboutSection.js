import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeContext";

import project_management from "../img/icons/project_management.svg";
import team_management from "../img/icons/team_management.svg";
import box from "../img/box.svg";
import agency1 from "../img/agency1.jpg";
import Button from "./Button";

import agency3 from "../img/agency3.jpg";
import agency4 from "../img/agency4.jpg";

function AboutSection() {
  const theme = useTheme();
  return (
    <>
    <HeaderStyled theme={theme}>
      <div className="header-content u-pad-lg">
        <div className="left-h-content">
          <h1>
            We Are <span>Yayasan Karya Bakti</span> UT
          </h1>
          <p>
            "Sinergi YKBUT dan KANITRA Group untuk mengukir Prestasi dan Tumbuh
            Menjadi Mitra StraTEgis Bersama AHEMCE"
          </p>
          <Button
            name={"Get Started"}
            icon={"fas fa-chevron-right"}
            arrow={"arrow"}
            blob={"blob"}
          >Get Started</Button>
        </div>
        <div className="right-h-content">
          <img className="h-img-3" src={agency4} alt="" />
          <img className="h-img-2" src={agency3} alt="" />
        </div>
      </div>
      <div className="mouse">
        <span></span>
      </div>
    </HeaderStyled>
    <AboutSectionStyled id="aboutsection" className="u-pad-lg-2" theme={theme}>
      <div className="left-about">
        <h3 className="title">About YKBUT</h3>
        <p>
          Yayasan Karya Bakti United Tractors (YKBUT) didirikan oleh PT United
          Tractors Tbk pada 27 Februari 2008.
        </p>
        <p>
          Ykbut merupakan Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ut ratione atque blanditiis at, Lorem ipsum dolor sit amet.
        </p>
        <div className="about-info">
          <div className="about-info-item">
            <div className="icon">
              <img src={project_management} alt="" />
            </div>
            <div className="text-con">
              <h5>Vision</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                ratione atque blanditiis at, Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="about-info-item">
            <div className="icon">
              <img src={team_management} alt="" />
            </div>
            <div className="text-con">
              <h5>Mission</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                ratione atque blanditiis at, Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-about">
        <img src={agency1} className={"about-img"} alt="" />
        <img src={box} className={"box-img"} alt="" />
      </div>
    </AboutSectionStyled>
    </>
  );
}

const AboutSectionStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding-top: 10rem !important;
  .left-about {
    p {
      padding: 1.5rem 0;
    }
    .title {
      font-size: 1.6rem;
    }
    .about-info {
      .about-info-item {
        display: grid;
        grid-template-columns: 120px auto;
        margin-bottom: 1.5rem;
        p {
          padding: 0.6rem 0;
        }
        h5 {
          font-size: 1.3rem;
        }
        .icon {
          background-color: ${(props) => props.theme.colorWhite};
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          margin-right: 1rem;
          padding: 1rem;
          border-radius: 7px;
        }
      }
    }
  }

  .right-about {
    position: relative;
    display: flex;
    justify-content: flex-end;
    .about-img {
      width: 90%;
      object-fit: cover;
      height: 500px;
      border-top-left-radius: 70px;
      border-bottom-right-radius: 70px;
      border-top-right-radius: 3px;
      border-bottom-left-radius: 3px;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
    }

    .box-img {
      position: absolute;
      left: 3%;
      top: -8%;
      animation: scaleUp 8s infinite;
      @keyframes scaleUp {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;

const HeaderStyled = styled.header`
  min-height: 100vh;
  position: relative;
  .navigation {
    display: grid;
    grid-template-columns: 100px 1fr auto;
    padding: 1rem 2rem;
    border-bottom: 1px solid ${(props) => props.theme.colorGrey9};
    animation: navHide 1s ease-in-out;
    @keyframes navHide {
      0% {
        transform: translateY(-100%) scaleY(0);
        opacity: 0;
      }
      100% {
        transform: translateY(0) scaleY(1);
        opacity: 1;
        visibility: visible;
      }
    }
    .logo {
      display: flex;
      align-items: center;
      animation: navHide 1s ease-in-out;
      animation-delay: 0.2s;
      visibility: hidden;
      animation-fill-mode: forwards;
    }

    .nav-items {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 4rem;
      animation: navHide 1s ease-in-out;
      animation-delay: 0.38s;
      visibility: hidden;
      animation-fill-mode: forwards;
      .nav-item {
        margin: 0 0.7rem;
        a {
          text-transform: uppercase;
          font-size: 1rem;
          padding: 0.8rem;
          position: relative;
          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${(props) => props.theme.colorGradientPrimary2};
            border-radius: 30px;
            transform: scale(0);
            transition: all 0.4s ease-in-out;
            z-index: -1;
          }
          &:hover {
            &::before {
              transform: scale(1);
            }
          }
        }
      }
    }
  }

  .header-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;

    .left-h-content {
      animation: contentHide 1s ease-in-out;
      @keyframes contentHide {
        0% {
          opacity: 0;
          transform: translateX(-120%) scaleX(0);
        }
        100% {
          opacity: 1;
          transform: translateX(0) scaleX(1);
        }
      }

      h1 {
        font-size: 4rem;
        font-weight: 800;
        span {
          background: ${(props) => props.theme.colorGradientPrimary2};
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
      }

      p {
        font-size: 1.1rem;
        line-height: 1.6rem;
        padding: 2rem 0;
      }
    }

    .right-h-content {
      position: relative;
      transition: all 0.4s ease-in-out;
      animation: contentHide2 1s ease-in-out;
      animation-delay: 0.5s;
      opacity: 0;
      animation-fill-mode: forwards;
      @keyframes contentHide2 {
        0% {
          opacity: 0;
          transform: translateY(-120%) scale(0);
          visibility: none;
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
          visibility: visible;
        }
      }

      &:hover {
        .h-img-2 {
          transform: scale(0.9);
        }
        .h-img-3 {
          transform: scale(1.1);
        }
      }

      .h-img-2 {
        position: absolute;
        width: 350px;
        height: 400px;
        object-fit: cover;
        left: 5%;
        top: 15%;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 70px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        transition: all 0.4s ease-in-out;
      }

      .h-img-3 {
        position: absolute;
        width: 350px;
        height: 600px;
        object-fit: cover;
        right: 0;
        border-bottom-right-radius: 70px;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .mouse {
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 45px;
    border-radius: 30px;
    border: 2px solid ${(props) => props.theme.colorWhite};
    pointer-events: none;
    span {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 6px;
      height: 6px;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: ${(props) => props.theme.colorGradientPrimary3};
      animation: upDown 1s infinite;
      @keyframes upDown {
        0% {
          transform: translateY(-13px) translateX(-50%) scale(1.3);
        }
        10% {
          transform: translateY(-13px) translateX(-50%) scale(1.3);
        }
        50% {
          transform: translateY(10px) translateX(-50%) scale(1);
        }
        100% {
          transform: translateY(-13px) translateX(-50%) scale(1);
        }
      }
    }
  }
`;

export default AboutSection;
