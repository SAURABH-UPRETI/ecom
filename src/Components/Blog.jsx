import React from "react";
import "./Blog.css";
import Blog1img from "../img/blog/blog-1.jpg";
import Blog2img from "../img/blog/blog-2.jpg";
import Blog3img from "../img/blog/blog-3.jpg";
import Blog4img from "../img/blog/blog-4.jpg";
import Blog5img from "../img/blog/blog-5.jpg";
import Blog6img from "../img/blog/blog-6.jpg";
import Blog7img from "../img/blog/blog-7.jpg";
import Blog8img from "../img/blog/blog-8.jpg";
import Blog9img from "../img/blog/blog-9.jpg";
import Blog10img from "../img/blog/blog-10.jpg";
function Blog() {
  return (
    <>
      <div className="container my-4 w-75">Home Blog</div>
      <div className="container ">
        <div className="row">
          <div className="col-md-4 ">
            <div className="cdiv cdiv1">
              <img src={Blog1img} alt="" />
              <div className="myblog-text-contain ">
                <h6>
                  No Bad Blood! The Reason Why Tamr Judge Finally Made Up
                  With...
                </h6>
                <span>by Ema Timahe</span>
                <span>Sep 17,2019</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="cdiv">
              <img src={Blog2img} alt="" />
              <div className="myblog-text-contain ">
                <h6>
                  Amf Cannes Red Carpet Celebrities Kendall Jenner, Pamela...
                </h6>
                <span>by Ema Timahe</span>
                <span>Sep 17,2019</span>
              </div>
            </div>
            <div className="cdiv">
              <img src={Blog3img} alt="" />
              <div className="myblog-text-contain ">
                <h6>
                  Gigi Hadid, Rita Ora, Serena & Other Hot Celebs Stun At
                  2019...
                </h6>
                <span>by Ema Timahe</span>
                <span>Sep 17,2019</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cdiv">
              <img src={Blog4img} alt="" />
              <div className="myblog-text-contain ">
                <h6>
                  Ireland Baldwin Shows Off Trendy Ilse Valfre Tattoo At
                  Stagecoach...
                </h6>
                <span>by Ema Timahe</span>
                <span>Sep 17,2019</span>
              </div>
            </div>
            <div className="cdiv">
              <img src={Blog5img} alt="" />
              <div className="myblog-text-contain ">
                <h6>
                  Billboard Music Awards: Best, Worst & Wackiest Dresses On
                  The...
                </h6>
                <span>by Ema Timahe</span>
                <span>Sep 17,2019</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cdiv">
              <img src={Blog7img} alt="" />
              <div className="myblog-text-contain ">
                <h6>Pot Party! See Farrah Abraham Flaunt Smoking Body At...</h6>
                <span>by Ema Timahe</span>
                <span>Sep 17,2019</span>
              </div>
            </div>
            <div className="cdiv">
              <img src={Blog8img} alt="" />
              <div className="myblog-text-contain ">
                <h6>
                  Kim Kardashian Steps Out In Paris Wearing Shocking Sparkly...
                </h6>
                <span>by Ema Timahe</span>
                <span>Sep 17,2019</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cdiv">
              <img src={Blog9img} alt="" />
              <div className="myblog-text-contain ">
                <h6>
                  CMT Awards 2019 Red Carpet Arrivals Carrie Underwood,
                  Sheryl...{" "}
                </h6>
                <span>by Ema Timahe</span>
                <span>Sep 17,2019</span>
              </div>
            </div>
            <div className="cdiv">
              <img src={Blog10img} alt="" />
              <div className="myblog-text-contain ">
                <h6>
                  A-list Battle! Angelina Jolie & Lady Gaga Fighting Over Who...{" "}
                </h6>
                <span>by Ema Timahe</span>
                <span>Sep 17,2019</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cdiv cdiv1">
              <img src={Blog6img} alt="" />
              <div className="myblog-text-contain ">
                <h6>
                  Stephanie Pratt Busts Out Of Teeny Black Bikini During
                  Hawaii...{" "}
                </h6>
                <span>by Ema Timahe</span>
                <span>Sep 17,2019</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center ">
          <button className="btn text-center justify-contant-center btn-light rounded-pill">
            LOAD MORE POST
          </button>
        </div>
      </div>
    </>
  );
}

export default Blog;
