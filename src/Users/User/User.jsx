import React from "react";
import ModalWindow from "./ModalWindow/ModalWindow";
import style from "./User.module.css";

const User = (props) => {
  let deleteUser = (array, index) => {
    if (
      window.confirm(
        `Вы уверены, что хотите удалить пользователя ${props.firstName}?`
      )
    ) {
      array.splice(array[index], 1);
      return array;
    } else {
      return array;
    }
  };

  let modalWindow = (array, field) => {
    if (array[field].modalWindowState) {
      return (array.slice()[field].modalWindowState = false);
    } else {
      return (array.slice()[field].modalWindowState = true);
    }
    // console.log(array[field].modalWindowState);
    // return array[field].modalWindowState;
  };

  return (
    <div className={style.userWithModalWindow}>
      <div
        onClick={() =>
          props.modalWindowStateChange(
            props.users,
            modalWindow(props.users, props.index),
            props.index
          )
        }
        className={style.item}
      >
        <p>{props.firstName}</p>
        <p>{props.lastName}</p>
        <p>{props.email}</p>
        <p>
          {props.phone}
          <span
            onClick={(e) => {
              e.preventDefault();
              props.renderArr(deleteUser(props.users));
            }}
          >
            x
          </span>
        </p>
      </div>
      {props.user.modalWindowState ? (
        <div className={style.modalWindow}>
          <ModalWindow
            address={props.address}
            description={props.description}
          />
        </div>
      ) : null}
    </div>
  );
};

export default User;
