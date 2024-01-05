import React, { useEffect, useState } from "react";
import "./SideBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Avatar from "@mui/material/Avatar";

const SideBar = () => {
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarClosed(!isSidebarClosed);
  };

  const closeSidebar = () => {
    setIsSidebarClosed(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <nav
        //  className="sidebar"
        className={`${isSidebarClosed ? "close" : ""} sidebar`}
        // className={isSidebarClosed ? "close" : ""}
      >
        <header>
          <div className="text logo-text">
            <span className="name">KDISP</span>
            <span className="profession">Web developer</span>
          </div>
          <i className="fa fa-plus toggle" onClick={toggleSidebar}></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                  {/* <i className="bx bx-home-alt icon"></i> */}
                  <i className="fa fa-home"></i>
                  <span className="text nav-text">Home</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                  <i className="fa fa-home"></i>
                  <span className="text nav-text">My Space</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="home">
        <div className="Topcontainer">
          <div className="search">
            <input placeholder="Search" />
            <span className="fa fa-search"></span>
          </div>
          <div className="badge">
            <Badge color="secondary" variant="dot" className="bIcon">
              <MailOutlineIcon />
            </Badge>
          </div>
          <div className="badge">
            <Badge color="secondary" variant="dot" className="bIcon">
              <NotificationsNoneIcon />
            </Badge>
          </div>
          <Avatar
            sx={{ width: 34, height: 34, marginLeft: "30px !important" }}
            alt="Travis Howard"
            src="assets/user.png"
          />
          <Avatar
            sx={{ width: 34, height: 34, marginLeft: "30px !important" }}
            alt="Travis Howard"
            src={require("../../assets/user.png")}
          />
        </div>
        <div className="text">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">My Space</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Attendence
              </li>
            </ol>
          </nav>
          <div className="card">
            <div className="card-body">
              <div className="content">
                <div className="one">
                  <p>Attendence Status</p>
                  <p>Last week</p>
                </div>
                <div className="two">
                  <p>Timing</p>
                  <div className="days">
                    <Avatar
                      sx={{
                        width: 18,
                        height: 18,
                        padding: "10px !important",
                        fontSize: "12px !important",
                        background: "none !important",
                        border: "1px solid gray !important",
                      }}
                      alt="Remy Sharp"
                      src="/broken-image.jpg"
                    >
                      M
                    </Avatar>
                    <Avatar
                      sx={{
                        width: 18,
                        height: 18,
                        padding: "10px !important",
                        fontSize: "12px !important",
                        background: "none !important",
                        border: "1px solid gray !important",
                      }}
                      alt="Remy Sharp"
                      src="/broken-image.jpg"
                    >
                      T
                    </Avatar>
                    <Avatar
                      sx={{
                        width: 18,
                        height: 18,
                        padding: "10px !important",
                        fontSize: "12px !important",
                        background: "none !important",
                        border: "1px solid gray !important",
                      }}
                      alt="Remy Sharp"
                      src="/broken-image.jpg"
                    >
                      W
                    </Avatar>
                    <Avatar
                      sx={{
                        width: 18,
                        height: 18,
                        padding: "10px !important",
                        fontSize: "12px !important",
                        background: "none !important",
                        border: "1px solid gray !important",
                      }}
                      alt="Remy Sharp"
                      src="/broken-image.jpg"
                    >
                      T
                    </Avatar>
                    <Avatar
                      sx={{
                        width: 18,
                        height: 18,
                        padding: "10px !important",
                        fontSize: "12px !important",
                        background: "none !important",
                        border: "1px solid gray !important",
                      }}
                      alt="Remy Sharp"
                      src="/broken-image.jpg"
                    >
                      F
                    </Avatar>
                    <Avatar
                      sx={{
                        width: 18,
                        height: 18,
                        padding: "10px !important",
                        fontSize: "12px !important",
                        background: "none !important",
                        border: "1px solid gray !important",
                      }}
                      alt="Remy Sharp"
                      src="/broken-image.jpg"
                    >
                      S
                    </Avatar>
                    <Avatar
                      sx={{
                        width: 18,
                        height: 18,
                        padding: "10px !important",
                        fontSize: "12px !important",
                        background: "none !important",
                        border: "1px solid gray !important",
                      }}
                      alt="Remy Sharp"
                      src="/broken-image.jpg"
                    >
                      S
                    </Avatar>
                  </div>
                </div>
                <div className="three">
                  <p>Action</p>
                </div>
              </div>
              <div className="InnerCards">
                <div class="container">
                  <div class="grid-cell-1">
                    {/* <div style={{ display: "flex" }}>
                      <div>icon</div>
                      <div>
                        <p>Avg hrs/Day</p>
                        <p>(6hrs 48m)</p>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div>icon</div>
                      <div>
                        <p>Avg hrs/Day</p>
                        <p>(6hrs 48m)</p>
                      </div>
                    </div> */}
                  </div>
                  <div class="grid-cell-2"></div>
                  <div class="grid-cell-3"></div>
                  <div class="grid-cell-4"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="tablePart">
            <p>Logs & Requests</p>
            <div className="card tableCard">
              <div className="card-body">
                <div className="InnerCards">
                  <div class="container"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SideBar;
