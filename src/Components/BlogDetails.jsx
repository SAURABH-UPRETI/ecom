import React from "react";
import BlogDetailImg from "../img/blog/details/blog-details.jpg";
import cardImg1 from "../img/blog/blog-10.jpg";
import cardImg2 from "../img/blog/blog-5.jpg";
import cardImg3 from "../img/blog/blog-3.jpg";
import cmntimg1 from "../img/blog/details/comment-1.jpg";
import cmntimg2 from "../img/blog/details/comment-2.jpg";
import cmntimg3 from "../img/blog/details/comment-3.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { IoIosShareAlt } from "react-icons/io";

import "./Blog.css";
function BlogDetails() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 col-lg-8">
            <div>
              <div className="Product-blog-detail-imgdiv ">
                <img src={BlogDetailImg} alt="" />
              </div>
              <div className="p-2 Product-blog-detail-textdiv">
                <button className="btn btn-danger rounded-pill">
                  STREET STYLE
                </button>
                <p className="px-2">
                  Being seen: how is age diversity effecting change in fashion
                  and beauty?
                </p>
                <span className="px-2">by Ema Timahe</span>
                <span className="px-2">Seb 17, 2019 </span>
                <span className="px-2"> 39 Comments</span>
              </div>
              <div className="product-blog-txt">
                <p>
                  Afashion season can be defined as much by the people on the
                  catwalk as it can by the clothes they are wearing. This time
                  around, a key moment came at the end of Marc Jacobs’ New York
                  show, when an almost makeup-free Christy Turlington made a
                  rare return to the catwalk, aged 50 (she also stars, with the
                  designer himself, in the label’s AW ad campaign), where the
                  average catwalk model is around 18.
                </p>
                <p>
                  A few days later, Simone Rocha arguably upped the ante. The
                  32-year-old’s show – in part inspired by Louise Bourgeois, who
                  lived until she was 98 – featured models in their 30s and 40s,
                  including cult favourite Jeny Howorth and actor Chloë Sevigny.
                </p>

                <hr />

                <em className="h6">
                  Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </em>
                <p className="py-2">
                  Occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate.
                </p>
                <button className="btn btn-light mx-1 border-dark rounded-0">
                  Fashion
                </button>
                <button className="btn btn-light mx-1 border-dark rounded-0">
                  Street Style
                </button>
                <button className="btn btn-light mx-1 border-dark rounded-0">
                  Diversity
                </button>
                <button className="btn btn-light mx-1 border-dark rounded-0">
                  Beauty
                </button>
                <div className="container-fluid  bg-light my-5">
                  <button className="btn border-0 fw-bold">
                    PREVIOUS POSTS
                  </button>
                  <button className="btn border-0 fw-bold float-end">
                    NEXT POSTS
                  </button>
                </div>
                <div className="container">
                  <span className="fw-bold"> 3 COMMENT</span>
                  <span className="float-end fw-bold fs-6 text-decoration-underline ">
                    LEAVE A COMMENT
                  </span>
                </div>
                <div className="container d-flex mt-4">
                  <div>
                    <img className="rounded-circle" src={cmntimg1} alt="" />
                  </div>
                  <div className="mx-1 p-2">
                    <h6>Brandon Kelley</h6>
                    <p>
                      Duis voluptatum. Id vis consequat consetetur dissentiet,
                      ceteros commune perpetua mei et. Simul viderer facilisis
                      egimus tractatos splendi.
                    </p>
                    <span className="mx-2">
                      <AccessTimeIcon className="text-danger me-2" />
                      Seb 17, 2019
                    </span>
                    <span className="mx-2">
                      <FavoriteBorderIcon className="text-danger me-2" />
                      12
                    </span>
                    <span className="mx-2">
                      <IoIosShareAlt className="text-danger me-2" />1
                    </span>
                  </div>
                </div>
                <div className="container d-flex Blog-comment-img2 mt-4">
                  <div>
                    <img className="rounded-circle" src={cmntimg2} alt="" />
                  </div>
                  <div className="mx-1 p-2">
                    <h6>Brandon Kelley</h6>
                    <p>
                      Consequat consetetur dissentiet, ceteros commune perpetua
                      mei et. Simul viderer facilisis egimus ulla mcorper.
                    </p>
                    <span className="mx-2">
                      <AccessTimeIcon className="text-danger me-2" />
                      Seb 17, 2019
                    </span>
                    <span className="mx-2">
                      <FavoriteBorderIcon className="text-danger me-2" />
                      12
                    </span>
                    <span className="mx-2">
                      <IoIosShareAlt className="text-danger me-2" />1
                    </span>
                  </div>
                </div>
                <div className="container d-flex mt-4">
                  <div>
                    <img className="rounded-circle" src={cmntimg3} alt="" />
                  </div>
                  <div className="mx-1 p-2">
                    <h6>Brandon Kelley</h6>
                    <p>
                      Duis voluptatum. Id vis consequat consetetur dissentiet,
                      ceteros commune perpetua mei et. Simul viderer facilisis
                      egimus tractatos splendi.
                    </p>
                    <span className="mx-2">
                      <AccessTimeIcon className="text-danger me-2" />
                      Seb 17, 2019
                    </span>
                    <span className="mx-2">
                      <FavoriteBorderIcon className="text-danger me-2" />
                      12
                    </span>
                    <span className="mx-2">
                      <IoIosShareAlt className="text-danger me-2" />1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="container">
              <h5> CATEGORIES</h5>
              <table className="table table-borderless my-4">
                <tr>
                  <td scope="col">All</td>
                  <td scope="col">(250)</td>
                </tr>
                <tr>
                  <td scope="col">Fashion Week</td>
                  <td scope="col">(80)</td>
                </tr>
                <tr>
                  <td scope="col">Street style </td>
                  <td scope="col">(75)</td>
                </tr>
                <tr>
                  <td scope="col">Life Style</td>
                  <td scope="col">(35)</td>
                </tr>
                <tr>
                  <td scope="col">Beauty</td>
                  <td scope="col">(60)</td>
                </tr>
              </table>
              <div>
                <h5 className="mb-4">FEATURE POSTS</h5>
                <div className="Blog-details-card m-2">
                  <div className="d-flex">
                    <div className="w-50">
                      <img className="-img-left" src={cardImg1} alt=" image " />
                    </div>
                    <div className="py-2">
                      <p className=" h6 text-start  ">
                        Amf Cannes Red Carpet Celebrities Kend...
                      </p>
                      <p> Seb 17, 2019</p>
                    </div>
                  </div>
                </div>
                <div className=" Blog-details-card m-2">
                  <div className="d-flex">
                    <div className="w-50">
                      <img
                        className="card-img-left"
                        src={cardImg2}
                        alt=" image "
                      />
                    </div>
                    <div className="py-2">
                      <p className="h6 text-start">
                        Amf Cannes Red Carpet Celebrities Kend...
                      </p>
                      <p> Seb 17, 2019</p>
                    </div>
                  </div>
                </div>
                <div className=" Blog-details-card m-2">
                  <div className="d-flex">
                    <div className="w-50">
                      <img
                        className="card-img-left"
                        src={cardImg3}
                        alt="image "
                      />
                    </div>
                    <div className="py-2 px-0">
                      <p className=" h6 text-start">
                        Amf Cannes Red Carpet Celebrities Kend...
                      </p>
                      <p> Seb 17, 2019</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-75">
                <h5 className="mb-4">TAGS CLOUD</h5>
                <button className="btn btn-light m-1 border-dark rounded-0 ">
                  Fashion
                </button>
                <button className="btn btn-light m-1 border-dark rounded-0">
                  Street Style
                </button>
                <button className="btn btn-light m-1 border-dark rounded-0">
                  Diversity
                </button>
                <button className="btn btn-light m-1 border-dark rounded-0">
                  Beauty
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
