
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';


const RightSideNav = () => {
    return (
        <div>
           
            <div className='p-4 space-y-3 mb-6'>
                <h3 className="text-3xl">Login</h3>
                <button className='btn btn-outline w-full'>
                    <FaGoogle ></FaGoogle>
                </button>
                <button className='btn btn-outline w-full'>
                <FaGithub />
                </button>

            </div>


            <div className='p-4  mb-6'>
                <h3 className="text-3xl mb-4">Find Us On</h3>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                <FaFacebook className="mr-3"/>
                <span>Facebook</span>

                </a>
                <a className="p-4 flex text-lg items-center border-x " href="">
                <FaTwitter className="mr-3" />

                </a>
                <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
                <FaInstagramSquare className="mr-3"  />

                </a>



            </div>

            {/* q zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Q zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
            
        </div>
    );
};

export default RightSideNav;