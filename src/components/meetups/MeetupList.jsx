import React from 'react';
import MeetupItem from './MeetupItem';
import classes from './MeetupsList.module.css';

function MeetupList({meetups}) {
  return (
    <ul className={classes.list} >
        {meetups.map(meetup => <MeetupItem key={meetup.id} {...meetup}/>)}
    </ul>
  )
}

export default MeetupList