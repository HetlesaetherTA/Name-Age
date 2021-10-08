import styles from "./InfoElement.module.css";
import Card from "../UI/Card"

const InfoElement = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id)
  }
  return (
    <div onClick={deleteHandler}>
      <Card className={styles.InfoElement}>
        <span>{props.username}</span>
        <span> ({props.age} years old)</span>
      </Card>
    </div>
  );
};

export default InfoElement;
