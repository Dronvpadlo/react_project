import React, {useState} from "react";
import {usePrevious} from "../../hooks/usePrevious";
import styles from './previousComponent.module.css'

const PreviousComponent = () => {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    return (
        <div>
            <div className={styles.counts}>Current count: {count}</div>
            <div className={styles.counts}>Prev count: {prevCount[1]}</div>
            <button className={styles.buttonReturn} onClick={() => setCount(count - 1)}>return back</button>
            <button className={styles.buttonAdd} onClick={() => setCount(count + 1)}>add</button>

        </div>
    );
};

export default PreviousComponent;