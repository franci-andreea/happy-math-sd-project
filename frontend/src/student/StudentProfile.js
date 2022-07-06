import { useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar";

// COMPLETED PAGE - ALL INFO IS PROVIDED, ALL PARAMETERS ARE SENT CORRECTLY

const StudentProfile = () =>
{
    const [currentStudent, _] = useState(useLocation().state);

    return(
        <div>
            <SideBar currentStudent={currentStudent} />
            
            <div className="flex flex-col p-5 gap-4 ml-44 mr-96 mt-20 border-2 rounded-2xl text-2xl font-poppins">

                <p>username: {currentStudent.username}</p>
                <p>First Name: {currentStudent.firstName}</p>
                <p>Last Name: {currentStudent.lastName}</p>
                <p>Email: {currentStudent.email}</p>
                <p>Year of Study: {currentStudent.yearOfStudy}</p>

            </div>
            
        </div>
    );
}

export default StudentProfile;