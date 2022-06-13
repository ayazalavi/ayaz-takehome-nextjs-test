import styles from "./Popup.module.css";

interface Props {
  onClose: () => void;
}
const PopUp = ({ onClose }: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.close} onClick={onClose}>
        X
      </span>
      Thanks for voting!
    </div>
  );
};

export default PopUp;
