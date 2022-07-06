import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let navigate;

const Homepage = () =>
{
    navigate = useNavigate();

    var [usernameIntroduced, setUsernameIntroduced] = useState("");
    var [passwordIntroduced, setPasswordIntroduced] = useState("");

    function loginUser()
    {
        //request login to backend server (depends if the checkbox is checked or not)
        let loginDTO = {
            username: usernameIntroduced,
            password: passwordIntroduced
        }

        axios.post(`http://localhost:8080/login`, loginDTO)
        .then( //go to the respective user's homepage according to its type
            response => {

                if (response.data.hasOwnProperty("yearsOfTeaching"))
                    navigate('/teacher', {state: response.data}); 
                else if (response.data.hasOwnProperty("yearOfStudy"))
                    navigate('/student', {state: response.data}); 
            } 
        ) 
        .catch( //in case an error occurs, then print the error in the console
            function(error)
            {
                console.log("loginUser function - error while logging in the teacher");
                console.log(error);
            }
        ) 
    }

    return(
        <div className="bg-magnolia min-h-screen flex
                        items-center justify-center"> 
            <div className="bg-magnolia w-96 h-72 border-burgundy border-solid border-2 rounded-xl">
                
                <br></br>
                <p className="text-burgundy font-poppins font-extrabold text-center text-2xl">Welcome to Happy Math!</p>
                <br></br>
                
                <div className="flex flex-col items-center space-y-4 font-poppins">
                    <div className="flex flex-row space-x-4">
                        <p>username</p>
                        <input value={usernameIntroduced} onChange={e => setUsernameIntroduced(e.target.value)} />
                    </div>
                    
                    <div className="flex flex-row space-x-4">
                        <p>password</p>
                        <input type="password" value={passwordIntroduced} onChange={e => setPasswordIntroduced(e.target.value)} />
                    </div>

                    <p>Remember: 1 + 1 = 0</p>

                    <button className="simple-button" onClick={loginUser}>Login</button>

                    <div className="flex flex-row space-x-20">
                        <button className="new-button" onClick={moveToRegisterStudent}>New Student?</button>
                        <button className="simple-button" onClick={moveToRegisterTeacher}>New Teacher?</button>
                    </div>
                </div>

            </div>
        </div>
    )
};

function moveToRegisterStudent()
{
    navigate('/register-student');
}

function moveToRegisterTeacher()
{
    navigate('/register-teacher');
}

export default Homepage;