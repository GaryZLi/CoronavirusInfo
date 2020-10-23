import * as types from './action-types';

const initialState = {
    currentCountry: 'Worldwide',
    caseType: 'active',
    mapZoom: 4,
    mapCenter: {
        lat: 0,
        lng: 0,
    },
    worldWideInfo: {},
    countryInfo: [],
};

const reducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
    switch (action.type) {
        case types.SET_COUNTRY_INFO:
            return {
                ...state,
                countryInfo: action.countryInfo,
            };


        case types.SET_WORLD_WORD_INFO:
            return {
                ...state,
                worldWideInfo: action.worldWideInfo,
            };

        case types.SET_MAP_CENTER:
            return {
                ...state,
                mapCenter: action.mapCenter,
            };

        case types.SET_CASE_TYPE: 
            return {
                ...state,
                caseType: action.caseType,
            };

        case types.SET_MAP_ZOOM:
            return {
                ...state,
                mapZoom: action.mapZoom,
            };

        default:
            return state;
    }
};

export default reducer;