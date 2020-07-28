import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "fixed",
        bottom: 0,
        width: '100%',
    },

}));

export default function DenseAppBar() {
    const classes = useStyles();

    return (

        <footer className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">

                    <Typography variant="h10" color="inherit">
                        copyright 2020
          </Typography>
                </Toolbar>
            </AppBar>
        </footer>
    );
}
