import React from 'react';
import './Profile.css';
import UserDetails from '../../components/UserDetails/UserDetails';
import UserPosts from '../../components/UserPosts/UserPosts';

const Profile = (props) => {
    
        return(
            <div>
           <UserDetails />
           <UserPosts />
            </div>
    )
}

export default Profile;