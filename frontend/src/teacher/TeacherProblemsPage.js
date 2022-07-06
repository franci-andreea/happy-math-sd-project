import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

let navigate;

const TeacherProblemsPage = () => {
    const [currentTeacher, _] = useState(useLocation().state[0]);
    const [materialItem, setMaterialItem] = useState(useLocation().state[1]);

    const [problemName, setProblemName] = useState("");
    const [text, setText] = useState("");

    const [problems, setProblems] = useState([]);

    navigate = useNavigate();

    useEffect(
        () => {
            getProblems().then((val) => {setProblems(val)});
        }, []
    )

    function addProblem()
    {
        let newProblemDTO = {
            name: problemName,
            text: text,
            materialID: materialItem.id,
            userID: currentTeacher.id
        }

        axios.post(`http://localhost:8080/upload-problems`, newProblemDTO)
        .then(
            response => {
                console.log(response);
                console.log("successful upload");
                return response;
            }
        )
        .catch(
            function(error)
            {
                console.log("addProblem function - error while adding the problem");
                console.log(error);
            }
        )
    }

    function getProblems()
    {
        return axios.post(`http://localhost:8080/getProblems`, materialItem.id, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
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
                {problems.map((problem) => <ListProblem problem={problem} />)}
            </div>

            <div className="mr-52 mt-10">
                <div className="flex flex-col justify-center font-poppins p-5 gap-4 border-2 rounded-xl">
                    <p className="text-3xl">Add New Problem</p>
                    <hr></hr>

                    <div className="flex flex-row gap-4">
                        <p>Name</p>
                        <input placeholder="name of file" className="border-persiangreen border-2 rounded-xl" value={problemName} onChange={e => setProblemName(e.target.value)} />
                    </div>

                    <textarea className="border-2 rounded-md w-96 h-96" name="material" value={text} onChange={e => setText(e.target.value)} />

                    <div className="flex flex-row gap-5">
                        <button className="border-2 rounded-lg w-36 h-9" onClick={addProblem}>
                            add problem
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

const ListProblem = ({ currentTeacher, materialItem, problem }) =>
(
    <div className="p-5 border-2 rounded-xl">
        <div className="flex flex-col gap-3">
            <div className="flex flex-row">
                <p className="text-2xl">{problem.name}</p>
                <div className="flex-grow"></div>
            </div>

            <div>
                <p>{problem.text}</p>
            </div>

            <div className="static flex flex-row gap-6">
                <button className="yellow-button" onClick={() => { navigate('/teacher/materials/problems/solutions', { state: [currentTeacher, materialItem, problem] }) }}>view solutions</button>
            </div>
        </div>
    </div>
);

export default TeacherProblemsPage;