import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";

class FriendsList extends React.Component {
  state = {
    friendsList: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        this.setState(
          {
            friendsList: res.data
          },
          () => console.log(this.state.friendsList)
        );
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h2>List of Mah Freeeeends</h2>
        <div>
          {/* map over res.data */}
          {this.state.friendsList.map(friend => (
            <Friend
              key={friend.id}
              name={friend.name}
              age={friend.age}
              email={friend.email}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default FriendsList;
