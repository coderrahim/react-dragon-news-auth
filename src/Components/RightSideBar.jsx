import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from '../assets/qZone1.png'
import qzone2 from '../assets/qZone2.png'
import qzone3 from '../assets/qZone3.png'

const RightSideBar = () => {
    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold">Login With</h2>
                <div className="flex items-center p-3 font-semibold text-xl my-3 border rounded-lg">
                    <FaGoogle/> <p className="ml-3">Login with Google</p>
                </div>
                <div className="flex items-center p-3 font-semibold text-xl my-3 border rounded-lg">
                    <FaGithub/> <p className="ml-3">Login with Github</p>
                </div>
            </div>
            
            {/* Social Link */}

            <div className="my-5">
                <h2 className="text-2xl my-2 font-bold">Find Us On </h2>
                <div className="flex items-center p-2 border rounded-t-lg">
                    <FaFacebook/> <a className="ml-2 text-lg" href="#">Facebook</a>
                </div>
                <div className="flex items-center p-2 border-x">
                    <FaTwitter/> <a className="ml-2 text-lg" href="#">Twitter</a>
                </div>
                <div className="flex items-center p-2 border rounded-b-lg">
                    <FaInstagram/> <a className="ml-2 text-lg" href="#">Instagram</a>
                </div>
            </div>

            {/* Q Zone */}

            <div className="bg-gray-700 rounded-lg p-3">
                <h2>Q Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>

        </div>
    );
};

export default RightSideBar;