import logo from '../../../assets/logo.png'
import moment from 'moment'
import BreakingNews from '../../Home/BreakingNews';

const Header = () => {
    return (
     
        <div className='text-center'>
           <img  className='mx-auto'src={logo} alt="" />
           <p>Journalism Without Fear or Favour</p>
           <p className="text-xl">{moment().format('MMMM D, YYYY')}</p>
            
        </div>
    );
};

export default Header;