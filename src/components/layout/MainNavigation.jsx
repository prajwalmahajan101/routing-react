import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';
function MainNavigation() {
  const FavoritesCtx = useContext(FavoritesContext);
  const totalFavorites = FavoritesCtx.totalFavorites;
  return (
    <header className={classes.header}>
        <div className={classes.logo}>React MeetUps</div>
        <nav>
            <ul>
                <li><Link to='/'>All Meetups</Link></li>
                <li><Link to='/new-meetups'>New Meetups</Link></li>
                <li><Link to='/favorites'>My Favorites<span className={classes.badge}>{totalFavorites}</span></Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation