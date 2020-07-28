// import React from 'react';


// const MainSidebar = (props) => {

//     return(
//         <div>
//         This is the sidebar
//         </div>
//         )
//     }

//     export default MainSidebar;

import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './MainSidebar.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '95%',
            margin: '10px',
        },
    },
}));

export default function MainSidebar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Button variant="contained" color="secondary" component={Link} to="/post/new">
                New Post
            </Button>

        </div>
    );
}

