import { useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar";

// COMPLETED PAGE - ALL INFO IS PLACED ON THE PAGE, ALL PARAMETERS ARE SENT CORRECTLY

const StudentPage = () =>
{
    const [currentStudent, _] = useState(useLocation().state);

    return(
        <div>
            <SideBar currentStudent={currentStudent} />
            <p className="mt-96 text-center text-3xl text-burgundy">Welcome {currentStudent.firstName} {currentStudent.lastName}</p>
            <p className="mt-2 text-center text-3xl text-burgundy">Hope you'll learn something new and cool today!</p>
        </div>
    )
};

export default StudentPage;