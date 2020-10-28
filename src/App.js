import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/styles';
import { connect } from "react-redux";

import "leaflet/dist/leaflet.css";
import "./App.css";
import coronavirus from './picSrc/coronavirus.png';

import Title from './containers/Title';
import Map from "./containers/Map";
import DailyStats from './containers/DailyStats';
import TableData from './containers/TableData';
import Footer from './containers/Footer';

import {
	setWorldWideInfo,
	setCountryInfo,
	setMapCenter,
} from './actions';

// import backgroundImage from './picSrc/backgroundImage.jpg';
import Coronavirus from 'react-sky';

const useStyles = makeStyles({
	root: {
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		overflow: 'auto',
		position: 'relative',
		// backgroundImage: `url(${backgroundImage})`,
		backgroundColor: 'gray',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		zIndex: 10,
		fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif',
	},
	contentContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-evenly',
	},
	// coronavirus: {
	// 	position: 'fixed',
	// 	zIndex: 1,

	// 	backgroundColor: 'red',
	// }
});



function App({
	setCountryInfo,
	setMapCenter,
	setWorldWideInfo,
}) {
	const classes = useStyles();

	useEffect(() => {
		fetch("https://disease.sh/v3/covid-19/all")
			.then(res => res.json())
			.then((data) => setWorldWideInfo(data))
			.catch(err => console.log(err));

		fetch("https://disease.sh/v3/covid-19/countries")
			.then(res => res.json())
			.then(data => setCountryInfo(data))
			.catch(err => console.log(err));

		navigator
			.geolocation
			.getCurrentPosition(
				e => setMapCenter({
					lat: e.coords.latitude,
					lng: e.coords.longitude,
				})
			);

		// eslint-disable-next-line
	}, []);

	return (
		<div className={classes.root}>
			<Coronavirus
				images={{0: coronavirus}}
				how={130}
				size={100}
			/>
			<Title />
			<div className={classes.contentContainer}>
				<Map />
				<DailyStats />
			</div>
			<TableData/>
			<Footer/>
		</div>
	);
}

const mapDispatchToProps = {
	setWorldWideInfo,
	setCountryInfo,
	setMapCenter,
};

export default connect(null, mapDispatchToProps)(App);
