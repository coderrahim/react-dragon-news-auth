import Marquee from "react-fast-marquee";


const Marqueee = () => {
    return (
        <div className='flex items-center my-5 bg-gray-700 cursor-pointer rounded-lg'>
            <button className='btn btn-secondary '>Latest</button>
            <Marquee speed={100} pauseOnHover={true}>
                Match Highlights: Germany vs Spain — as it happened   ! Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default Marqueee;