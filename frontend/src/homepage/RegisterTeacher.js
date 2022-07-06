import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterTeacher = () =>
{
    let navigate = useNavigate();

    var [usernameIntroduced, setUsernameIntroduced] = useState("");
    var [passwordIntroduced, setPasswordIntroduced] = useState("");
    var [firstNameIntroduced, setFirstNameIntroduced] = useState("");
    var [lastNameIntroduced, setLastNameIntroduced] = useState("");
    var [yearsOfTeachingIntroduced, setYearsOfTeachingIntroduced] = useState("");
    var [schoolIntroduced, setSchoolIntroduced] = useState("");
    var [specializedTopicIntroduced, setSpecializedTopicIntroduced] = useState("");

    function register()
    {
        let newTeacher = {
            username: usernameIntroduced,
            password: passwordIntroduced,
            firstName: firstNameIntroduced,
            lastName: lastNameIntroduced,
            yearsOfTeaching: yearsOfTeachingIntroduced,
            school: schoolIntroduced,
            specializedTopic: specializedTopicIntroduced
        }

        axios.post(`http://localhost:8080/register-teacher`, newTeacher)
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
            
        <div className="bg-magnolia border-burgundy border-2 w-96 rounded-2xl">
            <br></br>
            <h1 className="font-poppins text-center text-3xl">REGISTER TEACHER*</h1>
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

                <div className="flex flex-row space-x-4">
                    <p>school name</p>
                    <input value={schoolIntroduced} onChange={e => setSchoolIntroduced(e.target.value)} />
                </div>

                <div className="flex flex-row space-x-4">
                    <p>years of teaching</p>
                    <input value={yearsOfTeachingIntroduced} onChange={e => setYearsOfTeachingIntroduced(e.target.value)} />
                </div>

                <div className="flex flex-row space-x-4">
                    <p>specialized topic</p>
                    <input value={specializedTopicIntroduced} onChange={e => setSpecializedTopicIntroduced(e.target.value)} />
                </div>

                <div>
                    <p>*all fields must be filled</p>
                </div>

                <button className="simple-button" onClick={register}>REGISTER</button>
                
                <br></br>
            </div>

        </div>

    </div>
    );
}

export default RegisterTeacher;