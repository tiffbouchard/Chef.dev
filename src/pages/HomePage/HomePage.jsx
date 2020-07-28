import React from 'react';
import './HomePage.css';
import Feed from '../../components/Feed/Feed';
import MainSidebar from '../../components/MainSidebar/MainSidebar';
import { Grid } from '@material-ui/core';

const HomePage = (props) => {

    return (
        <div>

            <Grid backgroudColor='red' container spacing={12}>
                <Grid container spacing={8}>
                    <Feed />
                </Grid>
                <Grid container spacing={4}>
                    <MainSidebar />
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage;