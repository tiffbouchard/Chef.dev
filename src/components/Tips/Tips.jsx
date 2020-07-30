import React from "react";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TipsForm from "../TipsForm/TipsForm";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: "10px",
  },
}));

const useStyles2 = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Tips() {
  const classes = useStyles();

  return (
    <>
      <TipsForm />
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            User
          </Typography>
          <Typography variant="h5" component="h2">
            Tip Title
          </Typography>
          <Typography className={classes.pos} component="p">
            Tip body
          </Typography>
          <Typography variant="body2" component="p"></Typography>
        </CardContent>
        <Rating name="size-large" defaultValue={2} size="large" />

        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            User
          </Typography>
          <Typography variant="h5" component="h2">
            Tip Title
          </Typography>
          <Typography className={classes.pos} component="p">
            Tip body
          </Typography>
          <Typography variant="body2" component="p"></Typography>
        </CardContent>
        <Rating name="size-large" defaultValue={2} size="large" />
      </Card>
    </>
  );

  // }
  // return (
  //     <div className={classes.root}>
  //         <Rating name="size-small" defaultValue={2} size="small" />
  //         <Rating name="size-medium" defaultValue={2} />
  //         <Rating name="size-large" defaultValue={2} size="large" />
  //     </div>
  // );
}

// const Tips = (props) => {

//     return (
//         <div>
//             This is a tip
//         </div>
//     )
// }

// export default Tips;
