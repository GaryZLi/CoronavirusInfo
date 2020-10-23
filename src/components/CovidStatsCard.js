import React from "react";
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		cursor: 'pointer',
		// height: 200,
		width: 200,
	},
	card: {
		fontSize: 20,
	},
	topColor: {
		height: 10,
		width: '100%',
	}
});

const CovidStats = ({ 
	title, 
	cases, 
	color, 
	total, 
	onClick,
}) => {
	const classes = useStyles();

	return (
		<div className={`covidstats ${classes.root}`}>
			<Card onClick={onClick}>
				<div className={classes.topColor} style={{ backgroundColor: color }} />
				<CardContent className={classes.card}>
					<Typography color="textSecondary">
						{title}
					</Typography>
					<h2 style={{ color }}>
						{cases}
					</h2>
					<Typography className="covidstats__totalcases" color="textPrimary">
						Total: {total}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}

export default CovidStats;
