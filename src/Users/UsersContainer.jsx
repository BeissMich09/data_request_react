import React from "react";
import Users from "./Users";

class UsersContainer extends React.Component {
  state = {
    users: [],
    clickCount: true,
    inputValue: "",
    // modalWindowState: false,
  };
  componentDidMount() {
    fetch(
      "http://www.filltext.com/?rows=50&firstName={firstName}&id={index}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          users: data.map((item) => {
            return {
              ...item,
              modalWindowState: false,
            };
          }),
        })
      );
  }

  changeValue = (value) => {
    this.setState({ inputValue: value });
  };

  renderArr = (newArr) => {
    this.setState({ users: newArr });
  };

  changeCkickCount = (param) => {
    this.setState({ clickCount: param });
  };
  modalWindowStateChange = (array, value, field) => {
    let newArray = (array.slice()[field].modalWindowState = value);
    this.setState({
      user: newArray,
    });
  };
  render() {
    console.log(this.state);
    return (
      <Users
        localState={this.state}
        renderArr={this.renderArr}
        changeCkickCount={this.changeCkickCount}
        changeValue={this.changeValue}
        modalWindowStateChange={this.modalWindowStateChange}
      />
    );
  }
}

export default UsersContainer;
