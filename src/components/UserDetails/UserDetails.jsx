import React from 'react';
import './UserDetails.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

  const UserDetails = (props) => {
    const profile = props.profile
    const classes = useStyles();
    const editprofile = profile.bio ? 
    <Button component={Link} to="/profile/new" variant="contained" color="primary">
    Edit Profile
  </Button> :     
   <Button component={Link} to="/profile/new" variant="contained" color="primary">
                    Create Profile
                  </Button>;
  const linkedinIcon = profile.linkedin ? 
  <Link href={profile.linkedin} variant="body2">
  LINKEDIN ICON
</Link> : null;

  const githubIcon = profile.github ?
  <Link href={profile.github} variant="body2">
  GITHUB ICON
</Link> : null;

        return(
            <>
        
               {/* {profile.firstName}
               {profile.lastName}
               {profile.username}
               
               {profile.email}
               {profile.bio}
               {profile.github}
               {profile.linkedin} */}
               <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Hello, {profile.firstName}! 
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            {profile.bio}
           
            </Typography>

            <Grid container spacing={2} justify="center">

            <Grid xs={12} sm={6} md={4}>
                <GitHubIcon />
                {githubIcon}
              </Grid>
              <Grid xs={12} sm={6} md={4}>
                <LinkedInIcon />
                
              {linkedinIcon}
               </Grid>
            </Grid>
      
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
              {editprofile}
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>

    
    </>
           
    )
}

export default UserDetails;