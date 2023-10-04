
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className='text-center space-y-3 my-3'>
                <img className='w-64 mx-auto' src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>

                {
                    moment().format("dddd, MMMM Do, YYYY")
                }
            </div>
        </div>
    );
};

export default Header;