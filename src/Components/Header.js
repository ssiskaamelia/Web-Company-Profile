import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeContext";
// import Button from "./Button";
import { Button, MenuItem, Divider } from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import { styled, alpha } from '@mui/material/styles';

import agency3 from "../img/agency3.jpg";
import agency4 from "../img/agency4.jpg";
/*eslint-disable */

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    // marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));


function Header() {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect = (path) => {
    let services = document.getElementById(path);
    e.preventDefault(); // Stop Page Reloading
    services &&
      services.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };
  return (
    <HeaderStyled theme={theme}>
      <nav className="navigation">
        <div className="logo">
          <h2>LOGO</h2>
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            {/* <a href="#" className="active-menu">
              Home
            </a> */}
            <Button
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              className="active-menu"
            >
              Home
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                {/* <EditIcon /> */}
                Edit
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                {/* <FileCopyIcon /> */}
                Duplicate
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem onClick={handleClose} disableRipple>
                {/* <ArchiveIcon /> */}
                Archive
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                {/* <MoreHorizIcon /> */}
                More
              </MenuItem>
            </StyledMenu>
          </li>
          <li className="nav-item">
            {/* <a href="#">About</a> */}
            {/* <a
              href="#aboutsection"
              onClick={(e) => {
                let aboutsection = document.getElementById("aboutsection");
                e.preventDefault(); // Stop Page Reloading
                aboutsection &&
                  aboutsection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
            >
              About
            </a> */}
          </li>
          {/* <li className="nav-item">
            <a href="#">Gallery</a>
          </li> */}
          <li className="nav-item">
            {/* <a href="#">Services</a> */}
            <a href="#services" onClick={(e) => handleRedirect("services")}>
              Businnes
            </a>
          </li>
          <li className="nav-item">
            <a href="#">Programs</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="nav-btns-con">
          <Button
            name={"Request A Quote"}
            icon={"fas fa-chevron-right"}
            arrow={"arrow"}
            blob={"blob"}
          />
        </div>
      </nav>
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
          />
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
  );
}

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

export default Header;
