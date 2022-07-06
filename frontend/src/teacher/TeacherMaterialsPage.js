import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

let navigate;

const TeacherMaterialsPage = () => {
    const [currentTeacher, _] = useState(useLocation().state);
    const [categories, setCategories] = useState([]);
    const [materials, setMaterials] = useState([]);
    const [shownCategory, setShownCategory] = useState("ALGEBRA");
    const [fileName, setFileName] = useState("");
    const [text, setText] = useState("");

    navigate = useNavigate();

    useEffect(
        () => {
            getCategories().then((val) => { setCategories(val) });
            getMaterials().then((val) => { setMaterials(val) });
        }, []
    )

    async function getCategories() {
        return await axios.get(`http://localhost:8080/getCategories`)
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
            );
    }

    async function getMaterials() {
        return await axios.post(`http://localhost:8080/getMaterials`, currentTeacher.id, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
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

    function addMaterial() {
        let newMaterialDTO = {
            name: fileName,
            data: text,
            category: shownCategory,
            userID: currentTeacher.id
        }

        axios.post(`http://localhost:8080/upload-materials`, newMaterialDTO)
            .then(
                response => {
                    console.log(response);
                    console.log("successful upload");
                    return response;
                }
            )
            .catch(
                function (error) {
                    console.log("addMaterial function - error while uploading the file");
                    console.log(error);
                }
            )
    }


    return (
        <div className="flex flex-row">
            <SideBar currentTeacher={currentTeacher} />

            <div className="ml-36 mt-10 mr-52 flex-col flex gap-5 font-poppins flex-grow">
                {materials.map((material) => <ListMaterialItem currentTeacher={currentTeacher} materialItem={material} />)}
            </div>

            <div className="mr-52 mt-10">
                <div className="flex flex-col justify-center font-poppins p-5 gap-4 border-2 rounded-xl">
                    <p className="text-3xl">Add New Material</p>
                    <hr></hr>

                    <div className="flex flex-row gap-4">
                        <p>Name</p>
                        <input placeholder="name of file" className="border-persiangreen border-2 rounded-xl" value={fileName} onChange={e => setFileName(e.target.value)} />
                    </div>

                    <div className="flex flex-row gap-4">
                        <p>Category</p>
                        <select className="form-select" id="category_id1" aria-label="showCategory" onChange={e => { setShownCategory(e.target.value) }}>
                            {categories.map((category) => <option key={category}>{category}</option>)}
                        </select>
                    </div>

                    <textarea className="border-2 rounded-md w-96 h-96" name="material" value={text} onChange={e => setText(e.target.value)} />

                    <div className="flex flex-row gap-5">
                        <button className="border-2 rounded-lg w-36 h-9" onClick={addMaterial}>
                            upload material
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

const ListMaterialItem = ({ currentTeacher, materialItem }) =>
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
                <button className="yellow-button" onClick={() => { navigate('/teacher/materials/content', { state: [currentTeacher, materialItem] }) }}>view content</button>
                <button className="lava-button" onClick={() => { navigate('/teacher/materials/problems', { state: [currentTeacher, materialItem] }) }}>view problems</button>
            </div>
        </div>
    </div>
);


export default TeacherMaterialsPage;