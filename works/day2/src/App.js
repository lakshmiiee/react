// Create a simple React component that manages personal information and hobbies. 
// Add a card to display personal details and 
// two lists for hobbies, 
// one using a for loop and one using map(). 
// Include a button to show a message “Hello from React! I love my hobbies!” below the lists. 
// The initial message should show “Click the button to see my enthusiasm!”.

// Requirements:
// Display Personal Information:
//  Create a Bootstrap card to display:
//  Your name (string, e.g., const name = "Alex").
//  Your age (number, e.g., const age = 20).
//  Whether you’re a student (boolean, e.g., const isStudent = true, displayed directly as true or false ).
//  Style the card with basic Bootstrap classes

// List Favorite Hobbies:
// Create an array of your 3 favorite hobbies (e.g., const favoriteHobbies = ["Reading", "Hiking", "Coding"]).
// Display the hobbies in two separate lists:
// One using a normal for loop to generate <li> elements.
// One using the map() method to generate <li> elements.
// Style the lists with basic HTML <ul> and <li> elements

// Interactive Button:
//   Add a Bootstrap-styled button (e.g., btn btn-primary) labeled “Show Enthusiasm”.
//   When clicked, the button should:
//   Call a function to update a <p> element below the lists to display the message Hello from React! I love my hobbies! 
//   Change the background color of a heading (e.g., <h1>) using a variable (e.g., const headingColor = "lightblue").
//   The initial message in the <p> element should be Click the button to see my enthusiasm!.
// Use basic JavaScript (e.g., document.getElementById) to update the message
//  using minimal custom CSS in App.css if needed for list styling.
import React from "react";
import "./App.css";

function App() {
  const name = "Lakshmi";
  const age = 23;
  const isStudent = true;
  const hobbies = ["dancing", "singing", "drawing", "coding"];
  const hobbylist=[];

  const headingColor="lightgrey";

  for(let i=0;i<hobbies.length;i++){
    hobbylist.push(<li key={i}>{hobbies[i]}</li>)
  }

  function showEnthusiasm(){
    document.getElementById('demo').innerHTML=
   "Hello from React! I love my hobbies! ";

   document.getElementById("demo2").style.backgroundColor=headingColor;
  }




  return (
    
    <div className="d-flex align-items-center justify-content-center vh-100 bg-dark">
      <div className="card text-center col-sm-4 bg-light p-3 ">
        <h1 id="demo2">PROFILE CARD</h1>
   
        <div className="card-body bg-info">
          <h2>Name: {name}</h2>
          <h3>Age: {age}</h3>
          <h4>Is student: {isStudent.toString()}</h4>

          <h5>Hobbies:</h5>
          <ul className="text-start mx-auto" style={{ width: "fit-content" }}>
            {hobbies.map((item) => (
              <li>{item}</li>
            ))}
          </ul>

          <ul className="text-start mx-auto" style={{ width: "fit-content" }}>{hobbylist}</ul>

          <button className="btn btn-primary mt-2" onClick={showEnthusiasm}>
            Show Enthusiasm
          </button>

          <p id="demo">Click the button to see my enthusiasm!</p>

          
        </div>
      </div>
    </div>
  );
}

export default App;
