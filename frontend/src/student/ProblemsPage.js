import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

let navigate;

const ProblemsPage = () =>
{
    const [currentStudent, _] = useState(useLocation().state[0]);
    const [materialItem, setMaterialItem] = useState(useLocation().state[1]);

    const [problems, setProblems] = useState([]);

    navigate = useNavigate();

    useEffect(
        () => {
            getProblems().then((val) => {setProblems(val)});
        },
        []
    )

    async function getProblems()
    {
        return await axios.post(`http://localhost:8080/getProblems`, materialItem.id, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(
                response => {
                    console.log(response.data)
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

    return(
        <div className="flex flex-row">
            <SideBar currentStudent={currentStudent} />
            <div className="ml-36 mt-10 mr-52 flex-col flex gap-5 font-poppins flex-grow">
                {problems.map((problem) => <ListProblem currentStudent={currentStudent} materialItem={materialItem} problem={problem} />)}
            </div>
        </div>
    );
}

const ListProblem = ({ currentStudent, materialItem, problem }) =>
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
                <button className="yellow-button" onClick={() => { navigate('/student/materials/problems/solutions', { state: [currentStudent, problem] }) }}>Solve</button>
            </div>
        </div>
    </div>
);


export default ProblemsPage;