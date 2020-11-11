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

  let modalWindow = (array) => {
    let copyArr = array.slice();
    let user = copyArr.find((item) => item.id === props.id);
    if (user !== undefined) {
      if (user.modalWindowState) {
        return (user.modalWindowState = false);
      } else {
        return (user.modalWindowState = true);
      }
    }
  };

  return (
    <div className={style.userWithModalWindow}>
      <div
        onClick={() => {
          props.modalWindowStateChange(
            props.users,
            modalWindow(props.users),
            props.id
          );
        }}
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
