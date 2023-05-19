import { createContext, useState } from "react";

const FavoritesContext = createContext({
	favorites: [],
	totalFavorites: 0,
	addFavorites : (favoritesMeetUp)=>{},
	removeFavorite: (meetupId)=>{},
	itemIsFavorite : (meetupId)=>{}
});

export const FavoritesContextProvider = ({ children }) => {
	const [userFavorites, setUserFavorites] = useState([]);
	
	const addFavoritesHandler = (favoritesMeetUp) =>{
		setUserFavorites(prevState => {
			return prevState.concat(favoritesMeetUp);
		})
	} 
	
	const removeFavoriteHandler  = (meetupId) =>{
		setUserFavorites(prevState =>{
			return prevState.filter(el=>el.id!==meetupId);
		})
	}
	
	const itemIsFavoriteHandler  = (meetupId) =>{
		return userFavorites.some(meetup => meetup.id===meetupId)
	}

	const context = {
		favorites: userFavorites,
		totalFavorites: userFavorites.length,
		addFavorites : addFavoritesHandler,
		removeFavorite: removeFavoriteHandler,
		itemIsFavorite : itemIsFavoriteHandler
	};
	
	return (
		<FavoritesContext.Provider value={context}>
			{children}
		</FavoritesContext.Provider>
	);
};


export default FavoritesContext;	