import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

import CovidStatsCard from "../components/CovidStatsCard";

import {
    setCaseType,
} from '../actions';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        color: 'white',
        textDecoration: 'underline',
    },
    title: {
        textAlign: 'center',
    }
});

const DailyStats = ({
    worldWideInfo,
    setCaseType,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2 className={classes.title}>Daily Cases</h2>
            <CovidStatsCard
                color="rgb(78, 69, 255)"
                onClick={() => setCaseType("active")}
                cases={(worldWideInfo.todayCases)?.toLocaleString()}
                total={(worldWideInfo.active)?.toLocaleString()}
                title="Active Cases"
            />
            <CovidStatsCard
                color="red"
                onClick={() => setCaseType("deaths")}
                cases={(worldWideInfo.todayDeaths)?.toLocaleString()}
                total={(worldWideInfo.deaths)?.toLocaleString()}
                title="Death Cases"
            />
            <CovidStatsCard
                color="green"
                onClick={() => setCaseType("recovered")}
                total={(worldWideInfo.recovered)?.toLocaleString()}
                cases={(worldWideInfo.todayRecovered)?.toLocaleString()}
                title="Recovered Cases"
            />
        </div>
    );
};

const mapStateToProps = ({
    worldWideInfo,
}) => ({
    worldWideInfo,
});

const mapDispatchToProps = {
    setCaseType,
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyStats);