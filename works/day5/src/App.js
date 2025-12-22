// Build a simple website that shows a list of student names.
// When a student’s name is clicked, it should take the user to a new page that displays the message:
// “Welcome, [student name]!” (e.g., Welcome, Alexai!).
// Also, create a button on the home page that automatically redirects the user to a default student (like Riya) when clicked.

import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
//  You must:

// Use parameter in the route (e.g., /student/Alexa)

// Use useNavigate() to programmatically go to /student/Riya on button click

function Student(){

  return( 
    <div>

      <Navbar/>
      <Outlet />

    </div>
  );
}
export default Student;
