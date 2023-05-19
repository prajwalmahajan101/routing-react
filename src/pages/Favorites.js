import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

const Favorites = () =>{
    const FavoritesCtx = useContext(FavoritesContext);
    const favMeetups = FavoritesCtx.favorites;
    const totalFavorites = FavoritesCtx.totalFavorites;
    return(
        <section>
			<h1>Favorite Meetups</h1>
			{totalFavorites>0 && <MeetupList meetups={favMeetups} />}
            {totalFavorites===0 && <p>You got No Favorites added till now. Start Adding on the All Meetups Page? </p>}
		</section>
    )
}
export default Favorites;