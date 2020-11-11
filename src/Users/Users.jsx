import React from "react";
import User from "./User/User";
import style from "./Users.module.css";

const Users = (props) => {
  let localState = props.localState;
  let users = localState.users;
  let clickCount = localState.clickCount;
  let value = props.localState.inputValue;

  let newArray;
  const sortArray = (array, field) => {
    if (clickCount) {
      clickCount = false;
      props.changeCkickCount(clickCount);
      newArray = array.slice().sort(function (a, b) {
        if (a[field] > b[field]) return -1;
        if (a[field] < b[field]) return 1;
        return 0;
      });
    } else {
      clickCount = true;
      props.changeCkickCount(clickCount);
      newArray = array.slice().sort(function (a, b) {
        if (a[field] > b[field]) return 1;
        if (a[field] < b[field]) return -1;
        return 0;
      });
    }
    return newArray;
  };

  let userElement = users
    .filter(function (item) {
      return (
        item.firstName.trim().includes(value.trim()) ||
        item.lastName.trim().includes(value.trim()) ||
        item.email.trim().includes(value.trim()) ||
        item.phone.trim().includes(value.trim())
      );
    })
    .map((user) => (
      <User
        email={user.email}
        phone={user.phone}
        firstName={user.firstName}
        lastName={user.lastName}
        address={user.address}
        description={user.description}
        id={user.id}
        users={users}
        user={user}
        renderArr={props.renderArr}
        modalWindowStateChange={props.modalWindowStateChange}
        modalWindowState={user.modalWindowState}
        key={user.id}
      />
    ));

  return (
    <div className={style.item}>
      <div className={style.seatch}>
        <input
          value={value}
          type="text"
          onChange={(e) => props.changeValue(e.target.value)}
        />
      </div>
      <div className={style.menu}>
        <p onClick={() => props.renderArr(sortArray(users, "firstName"))}>
          FirstName
        </p>
        <p onClick={() => props.renderArr(sortArray(users, "lastName"))}>
          LastName
        </p>
        <p onClick={() => props.renderArr(sortArray(users, "email"))}>Email</p>
        <p onClick={() => props.renderArr(sortArray(users, "phone"))}>Phone</p>
      </div>
      <div>{userElement}</div>
    </div>
  );
};

export default Users;
