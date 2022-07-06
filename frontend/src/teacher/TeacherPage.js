import { useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar";

const TeacherPage = () =>
{
    const [currentTeacher, _] = useState(useLocation().state);

    return(
        <div>
            <SideBar currentTeacher = {currentTeacher}/>
            <p className="mt-96 text-center text-3xl text-burgundy">Welcome {currentTeacher.firstName} {currentTeacher.lastName}</p>
            <p className="mt-2 text-center text-3xl text-burgundy">Hope you'll see amazing solutions today!</p>
        </div>
    )
};

export default TeacherPage;