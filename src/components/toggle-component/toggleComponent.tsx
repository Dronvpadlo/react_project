import {useToggle} from "../../hooks/useToggle";
import styles from './toggleComponent.module.css'
const ToggleComponent = () =>{
    const {toggle, handleToggle} = useToggle(false)

    return (
        <div className={styles.flex}>
            <div className={styles.flex}>Current Status: {toggle ? <div className={styles.on}>On</div> : <div className={styles.off}>Off</div>}</div>
            <button className={styles.setButton} onClick={handleToggle}>Change</button>
        </div>
    );

}
export default ToggleComponent
