import React from "react";
import "./footer.css";
import Image1 from "../img/instagram/insta-1.jpg";
import Image2 from "../img/instagram/insta-2.jpg";
import Image3 from "../img/instagram/insta-3.jpg";
import Image4 from "../img/instagram/insta-4.jpg";
import Image5 from "../img/instagram/insta-5.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

function Footer() {
  const myImages = [Image1, Image2, Image3, Image4, Image5];
  return (
    <>
      <div className="contrainerfluid border mt-4 Footer-image">
        {myImages.map((image, index) => (
          <img src={image} alt={`Image ${index + 1}`} key={index} />
        ))}
        <span className="hover-item">
          <InstagramIcon />
        </span>
      </div>
      <div className="container mt-5 ">
        <div className="d-flex flex-row">
          <div className="w-25  p-2 ">
            <h2>Ashion</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt cilisis.
            </p>
          </div>
          <div className="w-75 p-2 ms-4">
            <div className="d-flex flex-row">
              <div className="w-25">
                <b>QUICK LINE</b>
                <p className="mt-2">
                  <a href=""> About</a>
                </p>
                <p>
                  <a href="">Blog</a>
                </p>
                <p>
                  <a href=""> Contect</a>
                </p>
                <p>
                  <a href="">FAQ</a>
                </p>
              </div>
              <div className="w-25">
                <b>ACCOUNT</b>
                <p className="mt-2">
                  <a href="">My Account</a>
                </p>
                <p>
                  <a href="">Orders Tracking</a>
                </p>
                <p>
                  <a href="">Checkout</a>
                </p>
                <p>
                  <a href="">Wishlist</a>
                </p>
              </div>
              <div className="w-50">
                <b>NEWSLATER</b>
                <div className="input-group mt-3">
                  <div className="form-outline" action="">
                    <input className="form-control" type="email" />
                  </div>
                  <button className="btn btn-danger">SURSCRIBE</button>
                </div>
                <div className="ICONS mt-2">
                  <FacebookIcon />
                  <TwitterIcon />
                  <YouTubeIcon />
                  <InstagramIcon />
                  <PinterestIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center">
          Copyright © 2023 All rights reserved | This template is made with by
          Colorlib
        </p>
      </div>
    </>
  );
}

export default Footer;
