import React from 'react';
import './HomePage.css';
import Feed from '../../components/Feed/Feed';
import MainSidebar from '../../components/MainSidebar/MainSidebar';

const HomePage = (props) => {
    
        return(
            <div>
                <Feed />
                <MainSidebar />
            </div>
    )
}

export default HomePage;