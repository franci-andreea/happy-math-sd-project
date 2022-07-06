import {FaHome, FaMedapps, FaRegFileAlt, FaRegUser, FaSignOutAlt, FaSquareRootAlt} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

let navigate;

const SideBar = ({currentStudent}) =>
{
    navigate = useNavigate();

    return(
        <div className="bg-magnolia font-poppins text-burgundy fixed top-0 left-0 h-screen w-32 m-0 flex flex-col shadow-lg">
            <SideBarIcon icon = {<FaHome size = "22" />} text = "Home" path='/student' currentStudent={currentStudent} />
            <SideBarIcon icon = {<FaMedapps size = "22" />} text = "No updates" path='/student/notifications' currentStudent={currentStudent} />
            <SideBarIcon icon = {<FaRegUser size = "22" />} text = "My Profile" path='/student/profile' currentStudent={currentStudent} />
            <SideBarIcon icon = {<FaRegFileAlt size = "24" />} text = "View Materials" path='/student/materials' currentStudent={currentStudent} />
            <SideBarIcon icon = {<FaSquareRootAlt size = "20" />} text = "View Your Solutions" path='/student/solutions' currentStudent={currentStudent} />
            <SideBarIcon icon = {<FaSignOutAlt size = "20" />} text = "Log out" path='/' />
        </div>
    );
}

const SideBarIcon = ({ icon, text = 'default text', path = '', currentStudent }) =>
(
    <div>
        <button className="sidebar-icon group" onClick={() => {navigate(path, {state: currentStudent});}}>
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </button>
    </div>
);

export default SideBar;