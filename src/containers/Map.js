import React from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/styles';
import { Map as LeafletMap, TileLayer } from "react-leaflet";

import MapInfoCard from "../components/MapInfoCard";
import CountryPicker from './CountryPicker';

const useStyles = makeStyles({
    root: {
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
    },
    map: {
        height: 600,
        width: '100%',
    }
});

const Map = ({
    countryInfo,
    mapCenter,
    mapZoom,
}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CountryPicker/>
            <LeafletMap 
                className={classes.map} 
                center={mapCenter} 
                zoom={mapZoom}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {countryInfo.map((country, id) => (
                    <MapInfoCard
                        key={id}
                        country={country}
                    />
                ))}
            </LeafletMap>
        </div>
    );
};


const mapStateToProps = ({
    mapCenter,
    mapZoom,
    countryInfo,
}) => ({
    mapCenter,
    mapZoom,
    countryInfo,
});

export default connect(mapStateToProps)(Map);
