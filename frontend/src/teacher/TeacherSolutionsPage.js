import axios from "axios";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "./SideBar"

let navigate;

const TeacherSolutionsPage = () => {
    const [currentTeacher, _] = useState(useLocation().state);
    const [solutions, setSolutions] = useState([]);
    const [students, setStudents] = useState([]);

    navigate = useNavigate();

    useEffect(
        () => {
            getSolutions().then((val) => { setSolutions(val) });
            getStudents().then((val) => { setStudents(val) });
        }, []
    )

    async function getSolutions() {
        return await axios.get(`http://localhost:8080/getAllSolutions`)
            .then(
                response => {
                    return response.data;
                }
            )
            .catch(
                function (error) {
                    console.log(error);
                    return [];
                }
            )
    }

    async function getStudents() {
        return await axios.get(`http://localhost:8080/getAllStudents`)
            .then(
                response => {
                    return response.data;
                }
            )
            .catch(
                function (error) {
                    console.log(error);
                    return [];
                }
            )
    }

    return (
        <div className="flex flex-row">
            <SideBar currentTeacher={currentTeacher} />
            <div className="ml-36 mt-10 mr-52 flex-col flex gap-5 font-poppins flex-grow">
                {solutions.map((solution) => <ListSolution currentTeacher={currentTeacher} solution={solution} />)}
            </div>
        </div>
    );
}

const ListSolution = ({ currentTeacher, solution }) => 
(
    <div className="p-5 border-2 rounded-xl">
        <div className="flex flex-col gap-3">
            <div className="flex flex-row">
                <p className="text-2xl">{solution.name}</p>
                <div className="flex-grow"></div>
            </div>

            <hr></hr>
            
            <p>Student: {solution.user.firstName} {solution.user.lastName}</p>
            <p>Solution to problem: {solution.problem.name}</p>

            <div className="static flex flex-row gap-6">
                <button className="yellow-button" onClick={() => {downloadSolutionPDF(solution)}}>download PDF</button>
                <button className="lava-button" onClick={() => { navigate('/teacher/solutions/send-feedback', { state: [currentTeacher, solution] }) }}>send feedback</button>
            </div>
        </div>
    </div>
);

function downloadSolutionPDF(solution) {
    var doc = new jsPDF();  
    var yPosition = 20;

    console.log(solution.content);

    doc.text(100, yPosition, solution.name, 'center');
    yPosition = yPosition + 20;
    doc.text(120, yPosition, "Student: " + solution.user.firstName + " " + solution.user.lastName);

    // yPosition = yPosition + 20;
    // doc.text(100, yPosition, "Solution Content", 'left');
    // doc.text(100, yPosition + 20, solution.content, 'left');

    doc.save("Solution.pdf");
}

export default TeacherSolutionsPage;