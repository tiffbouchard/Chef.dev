import React, {Component} from "react";
import Feed from "../../components/Feed/Feed";
import MainSidebar from "../../components/MainSidebar/MainSidebar";
// import { Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    sidebar: {
        backgroundColor: "grey",
    },
}));
class HomePage extends Component {
    
    
    render() {
        const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={9} sm={9} md={9} component={Paper}>
                <div className={classes.paper}>
                    <Feed />
                </div>
            </Grid>
            <Grid item xs={3} sm={3} md={3} className={classes.sidebar}>
                <MainSidebar />
            </Grid>
        </Grid>
    );
}
};

export default HomePage;
