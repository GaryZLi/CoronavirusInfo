import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { Circle, Popup } from "react-leaflet";
import { connect } from 'react-redux';

const casesTypeColors = {
    active: {
        color: '#4e45ff',
    },
    recovered: {
        color: "green",
    },
    deaths: {
        color: "red",
    },
};

const useStyles = makeStyles({
    flag: {
        height: 120,
        width: 200,
        borderRadius: 5,
        border: '1px solid black',
    },
    countryName: {
        fontSize: 30,
        fontWeight: 'bolder',
        color: 'black',

    },
    text: {
        fontSize: 15,
        fontWeight: 500,
        color: 'black',
    },
});

const MapInfoCard = ({
    country,
    caseType,
}) => {
    const classes = useStyles();

    return (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.3}
            color={casesTypeColors[caseType].color}
            fillColor={casesTypeColors[caseType].color}
            radius={Math.sqrt(country[caseType])*600}
        >
            <Popup>
                <img
                    className={classes.flag}
                    src={country.countryInfo.flag}
                    alt='flag'
                />
                <div className={classes.countryName}>
                    {country.country}, {country.countryInfo.iso2}
                </div>
                <div className={classes.text}>
                    Cases: {country.cases.toLocaleString()}
                </div>
                <div className={classes.text}>
                    Recovered: {country.recovered.toLocaleString()}
                </div>
                <div className={classes.text}>
                    Deaths: {country.deaths.toLocaleString()}
                </div>
                <div className={classes.text}>
                    CasesPerMillion: {country.casesPerOneMillion.toLocaleString()}
                </div>
                <div className={classes.text}>
                    DeathsPerMillion: {country.deathsPerOneMillion.toLocaleString()}
                </div>
                <div className={classes.text}>
                    RecoveredPerMillion: {country.recoveredPerOneMillion.toLocaleString()}
                </div>
                <div className={classes.text}>
                    Population: {country.population.toLocaleString()}
                </div>
            </Popup>
        </Circle>
    )
};

const mapStateToProps = ({caseType}) => ({caseType});

export default connect(mapStateToProps)(MapInfoCard);