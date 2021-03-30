import React from "react";
import Users from "./Users";

class UsersContainer extends React.Component {
  state = {
    users: [],
    clickCount: true,
    inputValue: "",
  };
  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com///www.filltext.com/?rows=50&firstName={firstName}&id={index}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
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
  modalWindowStateChange = (array, value, id) => {
    let copyUsers = array.slice();
    let findUser = copyUsers.find((item) => item.id === id);
    if (findUser !== undefined) {
      findUser.modalWindowState = value;
    }
    this.setState({
      users: copyUsers,
    });
  };
  render() {
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
