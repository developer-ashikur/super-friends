import React from 'react';
import './Friend.css';

const Friend = ({user, handleAddFriends}) => {
    const {email, picture, name, phone, dob} = user;
    return (
        <div className='friend'>
            <img src={picture.large} alt=""/>
            <h4>Name: {name.title + " " + name.first + ' ' + name.last}</h4>
            <h5>Email: {email}</h5>
            <h5>Phone: {phone}</h5>
            <button onClick={() => handleAddFriends(user, dob.age)}>Add Friend</button>
        </div>
    );
};

export default Friend;