import { useState } from "react";
import styles from "./App.module.css";
import Info from "./components/Info/Info";
import InfoInput from "./components/InfoInput/InfoInput";


function App(props) {
  const [inputData, setInputData] = useState([]);

  const deleteItemHandler = dataID => {
    setInputData(prevInputData => {
      const updatedInputData = prevInputData.filter(data => data.id !== dataID);
      return updatedInputData;
    })
  }
  const addInputDataHandler = (inputData) => {
    setInputData((prevInputData) => {
      return [inputData, ...prevInputData];
    });
  };
  
  let content = <p style={{ textAlign: "center" }}>No Users added</p> 
  

  if (inputData.length > 0) {
    content = <Info items={inputData} onDeleteData={deleteItemHandler}/>
  }

  return (
    <div className={styles.App}>
      <section className={styles.App__background}>
      <InfoInput onAddInputData={addInputDataHandler} />
      </section>
      <section className={styles.App__background}>
      {content}
      </section>
    </div>
  );
}

export default App;
