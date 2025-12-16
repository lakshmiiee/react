// You are tasked with creating a basic “Welcome Card” web page using React and Bootstrap to display a personalized welcome message. Your web page should:

// Display a welcome message in the format:

// Welcome to React Learning, [Your Name]

// Replace [Your Name] with a name stored in a variable (e.g., userName).

// Use Bootstrap for a clean, centered layout with a card component to hold the content.

// Apply a heading style using inline CSS (You can add any style)

// Include two images in the card:
// Internal Image: Import and display an image from your project’s local files (e.g., from an images folder in your project).
// External Image: Display an image from an online URL (e.g., a publicly accessible image link).
// Ensure both images are styled using Bootstrap’s img-fluid class to make them responsive and have a fixed width of 200px for the internal image.

// Add a brief description below the images, such as:
// This is your first card with images and styles!
// Style this text using Bootstrap’s.

// Use the provided starter code structure, ensuring you:
// Import Bootstrap CSS (bootstrap/dist/css/bootstrap.min.css) for styling.

// Import the internal image from your project’s file structure.

// Include basic console logging (e.g., console.log("React app started");)

import img1 from "./images/img1.jpg";


function Welcome(){
  console.log("React app started");

  let name="Lakshmi";

  return(

    <div className="d-flex justify-content-center align-items-center vh-100  bg-secondary">
      <div className="card" >
        
        <div className="card-body text-center" style={{ margin:"auto"}}>
            <img src={img1}
            className="img-fluid rounded-top border border-dark rounded p-2 mt-3 border-4"
            alt="Happy" style={{ width: "200px" }}/>
            <p className="text-muted mt-3">
              This is your first image with  styles!
            </p>


            <h2 style={{color:"grey"}}>Welcome to react learning, Anu</h2>
            <h2>Welcome to react learning, {name}</h2>

            <img src="https://thumb.ac-illust.com/e3/e3be35e0af751ed561b1302a21f39405_t.jpeg"
              className="img-fluid rounded-bottom border border-dark rounded p-2 mt-3 border-4"
            alt="second" style={{ width: "200px" }}/>
            <p className="text-muted mt-3">
              This is your second image with  styles!
            </p>


        </div>
      </div>
    </div>

  );

}
export default Welcome;