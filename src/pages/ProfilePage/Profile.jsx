import React from 'react';
import './Profile.css';
import UserDetails from '../../components/UserDetails/UserDetails';
import UserPosts from '../../components/UserPosts/UserPosts';

const Profile = (props) => {
    
        return(
            <div>
           <UserDetails profile={props.profile} />
           <UserPosts profile={props.profile}  />
            </div>
    )
}

export default Profile;