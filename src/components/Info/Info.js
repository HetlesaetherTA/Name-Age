import styles from "./Info.module.css";
import InfoElement from "./InfoElement";

const Info = (props) => {
  return (
    <div className={styles.info}>
        {props.items.map((info) => (
          <InfoElement
            key={info.id}
            id={info.id}
            username={info.username}
            age={info.age}
            onDelete={props.onDeleteData}
          />
        ))}
    </div>
  );
};

export default Info;
