import axios from "axios";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import emailjs from '@emailjs/browser';

const SolutionsPage = () =>
{
    const [currentStudent, _] = useState(useLocation().state[0]);
    const [selectedProblem, setSelectedProblem] = useState(useLocation().state[1]);

    const [solutionName, setSolutionName] = useState("");
    const [solutionContent, setSolutionContent] = useState("");

    const form = useRef();

    function sendSolution(e)
    {
        e.preventDefault();
        //send email to student

        emailjs.sendForm('service_51zvgke', 'template_0vejwt6', form.current, 'HsvGDKMUVlVkcyVIz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        e.target.reset();

        //add solution to database
        let newSolutionDTO = {
            name: solutionName,
            content: solutionContent,
            problemID: selectedProblem.id,
            userID: currentStudent.id
        }

        axios.post(`http://localhost:8080/upload-solutions`, newSolutionDTO)
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

    return(
        <div>
            <SideBar currentStudent={currentStudent} />
            <div className="ml-36 mt-10 mr-52 flex-col flex gap-5 font-poppins flex-grow">
                <div>
                    <p className="text-3xl">{selectedProblem.name}</p>
                    <hr></hr>
                </div>

                <div>
                    <p>{selectedProblem.text}</p>
                </div>

                <div className="grow"></div>

                <form ref={form} onSubmit={sendSolution}>
                    <div className="flex flex-row gap-4">
                        <p>Solution Name</p>
                        <input className="border-2 rounded-xl" value={solutionName} onChange={e => setSolutionName(e.target.value)} name="solutionName"/>
                    </div>

                    <div>
                        <textarea className="border-2 rounded-xl w-full h-96" value={solutionContent} onChange={e => setSolutionContent(e.target.value)} name="solutionText"/>
                    </div>

                    <div>
                        <button className="yellow-button" type="submit">Send Solution</button>
                    </div>

                    <input name="currentStudent" className="hidden" value={currentStudent.firstName} />
                    <input name="problemName" className="hidden" value={selectedProblem.name} />
                </form>

            </div>

        </div>
    );
}

export default SolutionsPage;