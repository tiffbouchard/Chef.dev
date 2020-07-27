import React from 'react';
import './DetailPage.css';
import Content from '../../components/Content/Content';
import DetailSidebar from '../../components/DetailSidebar/DetailSidebar';
import Tips from '../../components/Tips/Tips';

const DetailPage = (props) => {
    
        return(
            <div>
                <Content />
                <Tips />
                <DetailSidebar />
            </div>
    )
}

export default DetailPage;