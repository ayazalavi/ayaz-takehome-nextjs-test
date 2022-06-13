import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { VoteContext } from "../pages";
import { Category } from "../types/ICategory";
import { Nominee } from "../types/INominee";
import styles from "./Card.module.css";

interface Props {
  nominee: Nominee;
  onselect: (nominee: Nominee) => void;
  selected: boolean;
  category: Category;
}

const Card = (props: Props) => {
  const { nominee, onselect, selected, category } = props;
  const _onClick = () => onselect(nominee);

  return (
    <VoteContext.Consumer>
      {({ votes, showpopup, addVote }) => (
        <div className={selected ? styles.selected : styles.card}>
          <span>{nominee.title}</span>
          <img src={nominee.photoUrL} alt="movie banner" />
          <button
            onClick={() => {
              addVote(nominee.id, category.id);
              _onClick();
            }}
          >
            Select for Vote
          </button>
        </div>
      )}
    </VoteContext.Consumer>
  );
};

export default Card;
