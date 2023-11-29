import React from 'react';

// import Navbar from './Shared/Navbar/Navbar';
 import Header from '../Shared/Header/Header';

// import RightSideNav from './Shared/RightSideNav/RightSideNav';
// import BreakingNews from './Home/BreakingNews';
 import {useParams} from 'react-router-dom'
import NewsCard from './NewsCard';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Navbar from '../Shared/Navbar/Navbar';



const NewsDetails = () => {
    const {id}=useParams()
    return (
        <div>
            <Header></Header>
            {/* <BreakingNews></BreakingNews> */}
            <Navbar></Navbar>
            
         
            <div className=' grid md:grid-cols-3'>
               
                <div className='col-span-3'>
                    <h2 className="text-3xl">News details</h2>
                    <p>{id}</p>
                    </div>
                
                <div >
                    <RightSideNav></RightSideNav>
                </div>
          
        </div>
        </div>
    );
};

export default NewsDetails;