import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import Form from "./FriendForm";

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

  setFriendsList = friends => {
    this.setState({ friendsList: friends });
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
          <Form setFriendsList={this.setFriendsList} />
        </div>
      </div>
    );
  }
}

export default FriendsList;
