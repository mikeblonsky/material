import React, { Component } from 'react'
import axios from "axios";
import UserCard from "../components/layout/UserCard";

export default class ProfileList extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=20", {
      dataType: 'json',
    }).then(users => {
      const {data: {results}} = users;
      this.setState({users: results})
    })
  }
  render() {
    const {users} = this.state;
    console.log("USERS IN STATE: ", users);
    return (
      <div className="usersList">
        {users.map(user => <UserCard {...user} />)}
      </div>
    )
  }
}
