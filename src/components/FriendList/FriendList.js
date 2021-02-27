import React from 'react';
import './FriendList.css'

const FriendList = ({count, points}) => {
    return (
        <div className='friends-cart'>
            <h3>Add Friends & Get Points</h3>
            <h5>Friends Added: {count} </h5>
            <h5>Total Points: {points} </h5>
        </div>
    );
};

export default FriendList;