import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";
export default function ErrorModal(props) {
  const { title, message, onClose } = props;
  return (
    <div>
      <div className={styles.backdrop} onClick={onClose} />
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
    </div>
  );
}
