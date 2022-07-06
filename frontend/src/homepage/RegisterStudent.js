import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterStudent = () =>
{
    let navigate = useNavigate();

    var [usernameIntroduced, setUsernameIntroduced] = useState("");
    var [passwordIntroduced, setPasswordIntroduced] = useState("");
    var [firstNameIntroduced, setFirstNameIntroduced] = useState("");
    var [lastNameIntroduced, setLastNameIntroduced] = useState("");
    var [yearOfStudyIntroduced, setYearOfStudyIntroduced] = useState("");
    var [emailIntroduced, setEmailIntroduced] = useState("");

    function register()
    {
        let newStudent = {
            username: usernameIntroduced,
            password: passwordIntroduced,
            firstName: firstNameIntroduced,
            lastName: lastNameIntroduced,
            email: emailIntroduced,
            yearOfStudy: yearOfStudyIntroduced
        }

        axios.post(`http://localhost:8080/register-student`, newStudent)
        .then(
            function(response)
            {
                alert("Registration Successful!");
                navigate('/');
                console.log(response.data);
            }
        )
        .catch(
            function(error)
            {
                alert("An error occured during registration!");
                console.log(error);
            }
        )
    }

    return(

        <div className="bg-magnolia min-h-screen flex items-center justify-center">
            
            <div className="bg-magnolia border-burgundy border-2 h-96 w-96 rounded-2xl">
                <br></br>
                <h1 className="font-poppins text-center text-3xl">REGISTER STUDENT*</h1>
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

                    <div className="flex flex-row space-x-4">
                        <p>first name</p>
                        <input value={firstNameIntroduced} onChange={e => setFirstNameIntroduced(e.target.value)} />
                    </div>

                    <div className="flex flex-row space-x-4">
                        <p>last name</p>
                        <input value={lastNameIntroduced} onChange={e => setLastNameIntroduced(e.target.value)} />
                    </div>

                    <div className="flex flex-row space-x-14">
                        <p>email</p>
                        <input value={emailIntroduced} onChange={e => setEmailIntroduced(e.target.value)} />
                    </div>

                    <div className="flex flex-row space-x-4">
                        <p>year of study</p>
                        <input value={yearOfStudyIntroduced} onChange={e => setYearOfStudyIntroduced(e.target.value)} />
                    </div>

                    <div>
                        <p>*all fields must be filled</p>
                    </div>

                    <button className="simple-button" onClick={register}>REGISTER</button>

                </div>

            </div>

        </div>
    );
}

export default RegisterStudent;