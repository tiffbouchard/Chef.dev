import React from 'react';
import './DetailPage.css';
import Content from '../../components/Content/Content';
import DetailSidebar from '../../components/DetailSidebar/DetailSidebar';
import Tips from '../../components/Tips/Tips';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
    root: {
        height: "vh",
    },
    paper: {
        margin: theme.spacing(4, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    sidebar: {
        // backgroundColor: "grey",
    },

}));

const DetailPage = (props) => {
    const classes = useStyles();

    return (

        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={9} sm={9} md={9} component={Paper}>
                <div className={classes.paper}>
                    <Content />
                </div>
            </Grid>
            <Grid item xs={3} sm={3} md={3} className={classes.sidebar}>
                <DetailSidebar />
            </Grid>
            <Grid item xs={9} sm={9} md={9} component={Paper}>
                <div className={classes.paper}>
                    <Tips />
                </div>
            </Grid>
        </Grid>
    );
};

export default DetailPage;


