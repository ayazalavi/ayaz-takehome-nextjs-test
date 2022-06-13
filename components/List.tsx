import { Category } from "../types/ICategory";
import Section from "./Section";
import styles from "./List.module.css";
import SubmitButton from "./SubmitButton";
import { VoteContext } from "../pages";

interface Props {
  categories: Array<Category>;
}

const List = (props: Props) => {
  const categories = props.categories;

  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <Section category={category} key={category.id} />
      ))}
      <div className={styles.submitbutton}>
        <VoteContext.Consumer>
          {({ votes, showpopup }) => (
            <SubmitButton
              disabled={votes.length !== categories.length}
              onclick={showpopup}
            />
          )}
        </VoteContext.Consumer>
      </div>
    </div>
  );
};

export default List;
