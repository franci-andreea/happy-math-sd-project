import { useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar";

const TeacherContentPage = () =>
{
    const [currentTeacher, _] = useState(useLocation().state[0]);
    const [materialItem, setMaterialItem] = useState(useLocation().state[1]);

    return(
        <div>
            <SideBar currentTeacher={currentTeacher} />
            <div>
                <p className="text-center">{materialItem.data}</p>
            </div>
        </div>
    );
}

export default TeacherContentPage;