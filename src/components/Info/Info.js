import styles from "./Info.module.css";
import InfoElement from "./InfoElement";

const Info = (props) => {
  return (
    <div className={styles.info}>
        {props.items.map((info) => (
          <InfoElement
            key={info.id}
            username={info.username}
            age={info.age}
          />
        ))}
    </div>
  );
};

export default Info;
