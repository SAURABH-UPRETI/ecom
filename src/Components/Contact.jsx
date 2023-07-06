import React from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HeadsetIcon from "@mui/icons-material/Headset";

const Contact = () => {
    return (
        <>
          <div className="container mt-5 w-75">
        <h4>CONTACT INFO</h4>
        <div className="d-flex">
          <div>
            <div>
              <LocationOnIcon className="text-danger" />
              <b> Address</b>
              <p>160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161</p>
            </div>
            <div>
              <LocalPhoneIcon className="text-danger" />
              <b> Phone</b>
              <p>125-711-811125-668-886</p>
            </div>
            <div>
              <HeadsetIcon className="text-danger" />
              <b> Support</b>
              <p>Support.photography@gmail.com</p>
            </div>
            <div className="my-4">
              <h4>SEND MESSAGE</h4>
              <form className="form my-4" action="">
                <input
                  className="form-control my-3"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="form-control my-3"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="form-control my-3"
                  type="text"
                  placeholder="WebSite"
                />
                <textarea
                  className="form-control"
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
                <button className="btn btn-danger rounded-pill my-3">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
          <div class="google-map ms-5 ">
            <div class="gmap_canvas">
              <iframe
                class="gmap_iframe"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Gurugram&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
        </>
  )
}

export default Contact