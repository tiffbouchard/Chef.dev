import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import TipsForm from "../TipsForm/TipsForm";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Tips(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [tips, getTips] = React.useState();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    async function fetchTips() {
      const id = props.match.params.id
      const response = await fetch(`/api/tips/${id}`);
      const data = await response.json();
      getTips(data);
    } fetchTips();
  }, [])


  console.log("dddd" + tips)

  return (
    < div className={classes.root} >
      <TipsForm {...props} profile={props.profile} />
      {tips && tips.map((tip) =>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>{tip.profile.username}{new Date(tip.createdAt).toDateString()}
            </Typography>
            <Rating name="size-large" defaultValue={2} size="large" />
          </AccordionSummary>
          <AccordionDetails>
            {tip.content}
            <Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
      )}
    </div >
  )
}
