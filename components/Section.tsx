import { useState } from "react";
import { VoteContext } from "../pages";
import { Category } from "../types/ICategory";
import { Nominee } from "../types/INominee";
import Card from "./Card";
import styles from "./Section.module.css";
import SubmitButton from "./SubmitButton";

interface Props {
  category: Category;
}

const Section = (props: Props) => {
  const category = props.category;
  const [selected, setSelected] = useState<Nominee>();
  return (
    <div className={styles.section}>
      <span>{category.title}</span>
      <div className={styles.nominees}>
        {category.items.map((nominee) => (
          <VoteContext.Consumer>
            {({ votes }) => (
              <Card
                nominee={nominee}
                key={nominee.id}
                category={category}
                onselect={setSelected}
                selected={
                  votes.findIndex(
                    (vote) =>
                      vote.category === category.id &&
                      vote.nominee === nominee.id
                  ) !== -1
                }
              />
            )}
          </VoteContext.Consumer>
        ))}
      </div>
    </div>
  );
};

export default Section;
