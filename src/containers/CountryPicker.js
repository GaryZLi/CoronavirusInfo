import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
    FormControl,
    MenuItem,
    Select
} from '@material-ui/core';

import {
    setMapZoom,
    setCurrentCountry,
    setMapCenter,
} from '../actions';

const useStyles = makeStyles({
    root: {
        marginLeft: 'auto',
        backgroundColor: 'white',
        borderRadius: 5,
    },
});

const CountryPicker = ({
    currentCountry,
    countryInfo,
    setCurrentCountry,
    setMapCenter,
    setMapZoom,
}) => {
    const classes = useStyles();

    const onCountryChange = event => {
        const country = event.target.value;
        setCurrentCountry(countryInfo[country].country);
        setMapCenter({
            lat: countryInfo[country].countryInfo.lat,
            lng: countryInfo[country].countryInfo.long,
        });
        setMapZoom(5);
    };

    return (
        <FormControl className={classes.root}>
            <Select
                variant="outlined"
                value={currentCountry}
                onChange={onCountryChange}
            >
                <MenuItem value={currentCountry}>{currentCountry}</MenuItem>
                {countryInfo.map((country, id) => (
                    <MenuItem
                        key={id}
                        value={id}
                    >
                        {country.country}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

const mapStateToProps = ({
    currentCountry,
    countryInfo,
}) => ({
    currentCountry,
    countryInfo,
});

const mapDispatchToProps = {
    setCurrentCountry,
    setMapCenter,
    setMapZoom,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryPicker);