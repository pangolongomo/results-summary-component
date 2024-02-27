import styles from "./App.module.scss";

function App() {
  return (
    <>
      <div className={styles.container}>
        <article>
          <div className={styles.result}>
            <h1>Your Result</h1>
            <div>
              <h3>76</h3>
              <h4>of 100</h4>
            </div>
            <h2>Great</h2>
            <p>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
          <div className={styles.summary}>
            <h1>Summary</h1>
            <ul>
              <li className={styles.reaction}>
                <div>
                  <span>Reaction</span>
                </div>
                <div>
                  <span>80 </span>
                  <span>/ 100</span>
                </div>
              </li>
              <li className={styles.memory}>
                <div>
                  <span>Memory</span>
                </div>
                <div>
                  <span>92 </span>
                  <span>/ 100</span>
                </div>
              </li>
              <li className={styles.verbal}>
                <div>
                  <span>Verbal</span>
                </div>
                <div>
                  <span>61 </span>
                  <span>/ 100</span>
                </div>
              </li>
              <li className={styles.visual}>
                <div>
                  <span>Visual</span>
                </div>
                <div>
                  <span>72 </span>
                  <span>/ 100</span>
                </div>
              </li>
            </ul>
            <button>Continue</button>
          </div>
        </article>
      </div>
    </>
  );
}

export default App;
