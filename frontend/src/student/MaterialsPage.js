import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

let navigate;

const MaterialsPage = () =>
{
    const [currentStudent, _] = useState(useLocation().state);
    const [materials, setMaterials] = useState([]);

    navigate = useNavigate();

    useEffect(
        () => {
            getMaterials().then((val) => { setMaterials(val) });
        }, []
    )

    function getMaterials() {
        return axios.get(`http://localhost:8080/getAllMaterials`)
            .then(
                response => {
                    return response.data;
                }
            )
            .catch(
                function (error) {
                    console.log(error);
                    return [];
                }
            )
    }

    return(
        <div className="flex flex-row">
            <SideBar currentStudent={currentStudent}/>

            <div className="ml-36 mt-10 mr-52 flex-col flex gap-5 font-poppins flex-grow">
                {materials.map((material) => <ListMaterialItem currentStudent={currentStudent} materialItem={material} />)}
            </div>

        </div>
    );
}

const ListMaterialItem = ({ materialItem, currentStudent }) =>
(
    <div className="p-5 border-2 rounded-xl">
        <div className="flex flex-col gap-3">
            <div className="flex flex-row">
                <p className="text-2xl">{materialItem.name}</p>
                <div className="flex-grow"></div>
                <div className="category-bubble">
                    <p className="text-center text-magnolia">{materialItem.category}</p>
                </div>
            </div>

            <div className="static flex flex-row gap-6">
                <button className="yellow-button" onClick={() => {navigate('/student/materials/content', {state: [currentStudent, materialItem]})}}>view content</button>
                <button className="lava-button" onClick={() => {navigate('/student/materials/problems', {state: [currentStudent, materialItem]})}}>view problems</button>
            </div>
        </div>
    </div>
);

export default MaterialsPage;