
import Header from "../../Components/Header/Header";
import Marqueee from "../../Components/Header/Marqueee";
import Navbar from "../../Components/Header/Navbar";
import LeftSideBar from "../../Components/LeftSideBar";
import News from "../../Components/News";
import RightSideBar from "../../Components/RightSideBar";


const Home = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <Marqueee></Marqueee>
                <Navbar></Navbar>
            </header>
            <div className="grid grid-cols-4 gap-5">
                <div>
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className="col-span-2">
                    <News></News>
                </div>
                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;