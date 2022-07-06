import {FaHome, FaMedapps, FaRegFileAlt, FaRegUser, FaSignOutAlt, FaSquareRootAlt} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

let navigate;

const SideBar = ({currentTeacher}) =>
{
    navigate = useNavigate();

    return(
        <div className="bg-magnolia font-poppins text-burgundy fixed top-0 left-0 h-screen w-32 m-0 flex flex-col shadow-lg">
            <SideBarIcon icon = {<FaHome size = "22" />} text = "Home" path='/teacher' currentTeacher = {currentTeacher} />
            <SideBarIcon icon = {<FaMedapps size = "22" />} text = "No new solutions uploaded" path='/teacher/notifications' currentTeacher={currentTeacher}/>
            <SideBarIcon icon = {<FaRegUser size = "22" />} text = "My Profile" path='/teacher/profile' currentTeacher = {currentTeacher} />
            <SideBarIcon icon = {<FaRegFileAlt size = "24" />} text = "View Materials" path='/teacher/materials' currentTeacher={currentTeacher} />
            <SideBarIcon icon = {<FaSquareRootAlt size = "20" />} text = "View Solutions To Your Proposed Problems" path='/teacher/solutions' currentTeacher={currentTeacher}/>
            <SideBarIcon icon = {<FaSignOutAlt size = "20" />} text = "Log out" path='/' />
        </div>
    );
}

const SideBarIcon = ({ icon, text = 'default text', path = '', currentTeacher }) =>
(
    <div>
        <button className="sidebar-icon group" onClick={() => {navigate(path, {state: currentTeacher});}}>
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </button>
    </div>
);

export default SideBar;