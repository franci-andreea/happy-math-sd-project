import { useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar";

const NotificationsPage = () =>
{
    const [currentStudent, _] = useState(useLocation().state);

    return(
        <div>
            <SideBar currentStudent={currentStudent} />
            <p className="text-center">Notifications Page</p>
        </div>
    );
}

export default NotificationsPage;