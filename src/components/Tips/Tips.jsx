import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import TipsForm from "../TipsForm/TipsForm";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TouchRipple from "@material-ui/core/ButtonBase/TouchRipple";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  rating: {
    justifyContent: "flex-end",
    padding: "15px",
    alignItems: "center",
    textAlign: "center"
  },
}));

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

export default function Tips(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [tips, getTips] = React.useState();
  // const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    async function fetchTips() {
      const id = props.match.params.id;
      const response = await fetch(`/api/tips/${id}`);
      const data = await response.json();
      getTips(data);
    } fetchTips();
  }, [])

  return (

    < div className={classes.root} >
      <TipsForm {...props} profile={props.profile} />

      {tips && tips.map((tip, idx) =>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Rating name="size-large" defaultValue={5} size="large" className={classes.rating} />
            <Typography className={classes.rating}>
              {new Date(tip.createdAt).toDateString()}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.heading}>
              {`Here's a tip from Darone`}
            </Typography>
            <Typography className={classes.heading}>
              {tip.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      )}
    </div >
    // <div></AccordionSummary>
    //       {tips && tips.map((tip, idx) =>
    //         <Card className={classes.root}>
    //           <CardContent>
    //             <Typography className={classes.title} color="textSecondary" gutterBottom>
    //               {tip.profile.username}
    //             </Typography>
    //             <Rating name="size-large" defaultValue={5} size="large" />
    //             <Typography className={classes.pos} color="textSecondary">
    //               {new Date(tip.createdAt).toDateString()}
    //             </Typography>
    //             <Typography variant="body2" component="p">
    //               {tip.content}
    //             </Typography>
    //           </CardContent>
    //           <CardActions>
    //             <Button size="small">Learn More</Button>
    //           </CardActions>
    //         </Card>
    //       )
    //       </div>
  )
} 
