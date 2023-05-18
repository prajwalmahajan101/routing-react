import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetups = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState([]);
	useEffect(() => {
		setIsLoading(true);
		fetch(
			"https://react-router-meetups-default-rtdb.firebaseio.com/meetups.json"
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				const meetups = [];
				for (const key in data) {
					meetups.push({ id: key, ...data[key] });
				}
				setIsLoading(false);
				setLoadedMeetups(meetups);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}
	return (
		<section>
			<h1>All Meetups</h1>
			<MeetupList meetups={loadedMeetups} />
		</section>
	);
};
export default AllMeetups;
