import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import emailjs from '@emailjs/browser';

const SendFeedbackForm = () =>
{

    const [currentTeacher, _] = useState(useLocation().state[0]);
    const [selectedSolution, setSelectedSolution] = useState(useLocation().state[1]);

    const [feedback, setFeedback] = useState("");

    const form = useRef();

    function sendFeedback(e)
    {
        e.preventDefault();
        //send email to student

        emailjs.sendForm('service_51zvgke', 'template_z4r8efr', form.current, 'HsvGDKMUVlVkcyVIz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        e.target.reset();
    }

    return(
        <div>
            <SideBar currentTeacher={currentTeacher}/>

            <div className="ml-36 mt-10 mr-52 flex-col flex gap-5 font-poppins flex-grow">
                <div>
                    <p className="text-3xl">{selectedSolution.name}</p>
                    <hr></hr>
                </div>

                <div>
                    <p>What do you think about this solution?</p>
                </div>

                <div className="grow"></div>

                <form ref={form} onSubmit={sendFeedback}>

                    <div className="flex flex-row gap-5">
                        <p>To</p>
                        <label className="border-2 rounded-lg">{selectedSolution.user.email}</label>
                    </div>

                    <br></br>

                    <div className="flex flex-row gap-4">
                        <p>Feedback</p>
                        <textarea className="border-2 rounded-xl w-full h-96" value={feedback} onChange={e => setFeedback(e.target.value)} name="feedback"/>
                    </div>

                    <br></br>

                    <div>
                        <button className="yellow-button" type="submit">Send Feedback</button>
                    </div>

                    <input name="currentStudent" className="hidden" value={selectedSolution.user.firstName} />
                    <input name="currentTeacher" className="hidden" value={currentTeacher.firstName} />
                    <input name="solution" className="hidden" value={selectedSolution.name} />
                </form>

            </div>
            
        </div>
    );

}

export default SendFeedbackForm;