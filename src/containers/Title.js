import React from 'react';
import { makeStyles } from '@material-ui/styles';
// import pic from '../picSrc/titlePic.jpg';

const useStyles = makeStyles({
    root: {
		WebkitBackgroundClip: 'text',
		color: 'white',
		width: '100%',
		textAlign: 'center',
		fontSize: 100,

		/* This is for turning background image into text */
		// backgroundClip: 'text',
		// color: "transparent",
		// backgroundImage: `url(${pic})`,
	},
});

const Title = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Coronavirus Info
        </div>
    )
};

export default Title;