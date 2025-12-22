import { Link, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const students = ["Lakshmi","Akhila","Safwan","Nikhil"];

    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map((student) => {return(
                    <li>
                        <Link to={`/student/${student}`}>
                        {student}
                        </Link>
                    </li>);
                })}
            </ul>
            <button onClick={() => navigate("/student/Lakshmi")}>
            Go to Default Student
            </button>
        </div>
    );

}
export default Home;