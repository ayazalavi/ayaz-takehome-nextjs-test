import styles from "./SubmitButton.module.css";

interface Props {
  onclick: () => void;
  disabled: boolean;
}
const SubmitButton = (props: Props) => {
  return (
    <button
      onClick={props.onclick}
      disabled={props.disabled}
      className={styles.button}
    >
      Submit Ballot
    </button>
  );
};

export default SubmitButton;
