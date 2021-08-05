import React from "react";
import NoFriendCard from "../NoFriendCard/NoFriendCard";
import "./style.scss";

//import Product from '../../components/Product/Product';

const NoFriendsCards = (props) => {
  const { cards, toggleFavorite, toggleAdded } = props;

  return (
    <ul className="NoFriendContainer">
      <p className="recomended">Рекомендации для вас</p>
      {cards
        .filter((el) => !el.added)
        .map((el) => (
          <NoFriendCard
            toggleAdded={toggleAdded}
            toggleFavorite={toggleFavorite}
            added={el.added}
            key={el._id}
            name={el.name}
            url={el.url}
            _id={el._id}
            isInfavorite={el.isInfavorite}
          />
        ))}
    </ul>
  );
};

export default NoFriendsCards;
