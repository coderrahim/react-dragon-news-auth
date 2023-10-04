import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const LeftSideBar = () => {
    const [categorys, setCategorys] = useState([])

    useEffect( () => {
        fetch ('/public/categories.json')
        .then (result => result.json())
        .then (data => setCategorys(data))
    },[])
    return (
        <div>
            <h2>All Category {categorys.length} </h2>
            <div>
                <h2 className="bg-gray-700 py-2 px-5 rounded-lg shadow-md my-3">National</h2>
                {
                    categorys.map(category => 
                    <div className="my-2" key={category.id}>

                        <Link to={`/category/${category.id}`}>{category.name}</Link>

                    </div> )
                }
            </div>
        </div>
    );
};

export default LeftSideBar;