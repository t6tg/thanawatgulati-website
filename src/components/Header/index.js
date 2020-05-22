import React from "react";
import "./style.css";
import {
  FacebookOutlined,
  InstagramOutlined,
  GithubOutlined,
  LinkedinOutlined,
  GoogleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Listings from "../Listings";
const LOGO =
  "https://fontmeme.com/permalink/200423/5fdc1ddbe586698a21e5bc3ea23bb001.png";
const PROFILE =
  "/profile.jpg";

export function Header() {
  return (
    <div>
      <div className="image-logo">
        <img className="logo-header" src={LOGO} alt="LOGO" />
      </div>
      <div className="grid">
        <div className="sub-grid">
          <br />
          <center>
            <img src={PROFILE} className="profile_pic" alt="PROFILE" />
          </center>
        </div>
        <div className="sub-grid">
          <b>Name : </b>
          Thanawat Gulati <br />
          <b>Bio : </b> 🧸 Facebook : M’James Thanawat 🐶 IG : m.mjames 🦁
          Twitter: @MJamesVEVO 🦄 Linkedin : Thanawat Gulati 🐼 CS KMUTNB Year
          3rd
          <br />
          <b>Location : </b> Bangkok , Thailand
          <br />
          <b>Study at : </b> King Mongkut's University Of Technology North
          Bangkok | Computer Science
          <br />
          <b>Website : </b>
          <a href="https://thanawatgulati.com">https://thanawatgulati.com</a>
          <br />
          <b>Email : </b>{" "}
          <a href="mailto:contact@thanawatgulati.com">
            contact@thanawatgulati.com
          </a>
          <br />
          <b>My favorite Band : </b> BlackPink
          <br />
          <br />
          <a href="https://fb.com/mjamesthanawat" title="Facebook">
            <FacebookOutlined style={{ fontSize: "30px", padding: "10px" }} />
          </a>
          <a href="https://instagram.com/m.mjames" title="Instagram">
            <InstagramOutlined style={{ fontSize: "30px", padding: "10px" }} />
          </a>
          <a href="https://github.com/thanawatgulati" title="Github">
            <GithubOutlined style={{ fontSize: "30px", padding: "10px" }} />
          </a>
          <a href="https://www.linkedin.com/in/thanawatgulati" title="LinkedIn">
            <LinkedinOutlined style={{ fontSize: "30px", padding: "10px" }} />
          </a>
          <a href="https://bit.ly/34Y0Cx6" title="Google Search">
            <GoogleOutlined style={{ fontSize: "30px", padding: "10px" }} />
          </a>
          <a href="https://twitter.com/mjamesvevo" title="Twitter">
            <TwitterOutlined style={{ fontSize: "30px", padding: "10px" }} />
          </a> <br /><br />
          <button onClick={() => {
            window.location.href = 'https://blog.thanawatgulati.com'
          }} style={{ width: "100px", height: "30px", borderRadius: "30px", border: "solid 3px #f6a6b9", backgroundColor: "#000", cursor: "pointer" }}>Blog</button>
        </div>
      </div>
      <div className="container">
        <h2 style={{ color: "#f6a6b9" }}>Github Repository</h2>
        <Listings />
      </div>
    </div>
  );
}
