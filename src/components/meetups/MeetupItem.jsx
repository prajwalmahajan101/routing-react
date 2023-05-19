import React,{useContext} from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem({ id, image, title, address, description }) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemisFavorite = favoritesCtx.itemIsFavorite(id);
  const toggleFavoriteSatusHandler = () => {
    if(!itemisFavorite) {
      favoritesCtx.addFavorites({id,image,title,address,description});
    }else{
      favoritesCtx.removeFavorite(id);
    }

  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteSatusHandler}>{itemisFavorite?"Remove from Favorites":"To Favorites"}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
