import { useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar";

const ContentPage = () =>
{
    const [currentStudent, _] = useState(useLocation().state[0]);
    const [materialItem, setMaterialItem] = useState(useLocation().state[1]);

    return(
        <div>
            <SideBar currentStudent={currentStudent} />
            <p className="text-center">content page for files</p>
        </div>
    );
}

export default ContentPage;