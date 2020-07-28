import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '30px',
        alignItems: 'center',

    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        justifyContent: 'center',
        alignItems: 'center',

    },
}));

const useStyles2 = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: '15px',
        margin: '30px',
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));


export default function DetailSideBar() {
    const classes = useStyles();
    const classes2 = useStyles2();
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Python' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: ' Vanilla Javascript' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
    ]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <div className={classes.root}>
            <Avatar alt="Remy Sharp" img="https://64.media.tumblr.com/7fe6b07e3d225070370fbfba1d389f74/ac0f7440abf44e99-20/s400x600/3eba2ad41993111163bf68efbea576174718da50.png://luseals.tumblr.com/post/620569336070963200/avatar/1.jpg" className={classes.large} />
            <Paper component="ul" className={classes2.root}>
                {chipData.map((data) => {
                    let icon;

                    if (data.label === 'React') {
                        icon = <TagFacesIcon />;
                    }

                    return (
                        <li key={data.key}>
                            <Chip
                                icon={icon}
                                label={data.label}
                                onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                                className={classes.chip}
                            />
                        </li>
                    );
                })}
            </Paper>
        </div>
    );
}
