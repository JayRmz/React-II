import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onClose}>
      {" "}
    </div>
  );
};

const ModalOverlay = (props) => {
  const { title, message, onClose } = props;
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onClose}> Close </Button>
      </footer>
    </Card>
  );
};

export default function ErrorModal(props) {
  const { title, message, onClose } = props;
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onClose={onClose} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
