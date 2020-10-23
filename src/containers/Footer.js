import React from 'react';
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 10,
        alignItems: 'center',
        color: 'white',
    },
    icon: {
        marginRight: 10,
        color: 'white',
    }
});

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <a className={classes.icon} href='https://github.com/GaryZLi'>
                <GitHubIcon cursor='pointer'/>
            </a>
            <div>
                Made by Gary Li
            </div>
        </div>
    )
};

export default Footer;