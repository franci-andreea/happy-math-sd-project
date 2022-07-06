import { useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar";

const TeacherNotificationsPage = () =>
{
    const [currentTeacher, _] = useState(useLocation().state);

    return(
        <div>
            <SideBar currentTeacher={currentTeacher} />
            <p className="text-center">notifications page</p>
        </div>
    );
}

export default TeacherNotificationsPage;