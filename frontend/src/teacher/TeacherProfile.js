import { useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar"

const TeacherProfile = () =>
{
    const [currentTeacher, _] = useState(useLocation().state);

    return(
        <div>
            <SideBar currentTeacher={currentTeacher} />
            
            <div className="flex flex-col p-5 gap-4 ml-44 mr-96 mt-20 border-2 rounded-2xl text-2xl font-poppins">

                <p>username: {currentTeacher.username}</p>
                <p>First Name: {currentTeacher.firstName}</p>
                <p>Last Name: {currentTeacher.lastName}</p>
                <p>Years of teaching: {currentTeacher.yearsOfTeaching}</p>
                <p>School: {currentTeacher.school}</p>
                <p>Specialized Topic: {currentTeacher.specializedTopic}</p>

            </div>

        </div>
    );
}

export default TeacherProfile;