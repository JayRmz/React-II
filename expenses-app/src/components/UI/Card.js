import "./Card.css";

export default function Card(props) {
  const { className } = props;
  const classes = "card " + className;
  return <div className={classes}>{props.children}</div>;
}
