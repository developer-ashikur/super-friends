import { useEffect, useState } from 'react';
import './App.css';
import Friend from './components/Friend/Friend';
import FriendList from './components/FriendList/FriendList';

function App() {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const [count, setCount] = useState(0);
  const [points, setPoints] = useState(0);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
    .then((response) => response.json())
    .then(data => setUsers(data.results))
  }, []);
  const handleAddFriends = (user, age) => {
    const newFriend = [...friends, user];
    setFriends(newFriend);
    setCount(newFriend.length);
    setPoints(points + age);
  }
  return (
    <div className="App">
      <header className="App-header">
        <FriendList count={count} points={points}></FriendList>
        <div className="friends">
          {
            users.map(user => <Friend user={user} key={user.phone} handleAddFriends={handleAddFriends}></Friend>)
          }
        </div>
      </header>
    </div>
  );
}

export default App;
