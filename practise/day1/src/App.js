// Create a simple "Profile Card" web page using React. The card should show a person’s name, a short description, and their photo.
// Here’s what your project should include:

// The person’s name and description must be stored in variables.

// Use internal CSS to style the card with a border, padding, and background color.

// Use Bootstrap to center the card on the page.

// Show one internal image (saved inside your project folder).

// Also show one external image using a direct image link from the internet

import React from "react";

import profileImg from "./images/profile.jpg"; 

function ProfileCard() {

  let name = "John";
  let desc = "Doctor";

  const cardStyle = {
    border: "4px solid black",
    padding: "20px",
    backgroundColor: "#b1b1b6ff",
    width: "1000px",
    height:"700px"
  };
  const bodyStyle = {
    border: "2px solid black",
    padding: "20px",
    backgroundColor: "#e5e5ecff",
    width: "400px",
    height:"250px"
  };


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary">
      <div className="card" style={cardStyle}>
        <div className="card-body text-center">

          <img
            src={profileImg}
            alt="Internal"
            className="img-fluid rounded mb-3" style={bodyStyle}
          />



          <h4>{name}</h4>
          <p>{desc}</p>

                    <img
            src="https://i0.wp.com/annemariesegal.com/wp-content/uploads/2017/04/adobestock_86346713-cropped-young-woman-in-suit.jpg?fit=1200%2C1118&ssl=1"
            alt="External"
            className="img-fluid rounded mb-3 " style={bodyStyle}
          />

        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
