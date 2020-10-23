import * as types from './action-types';

export const setCountryInfo = countryInfo => ({
    type: types.SET_COUNTRY_INFO,
    countryInfo,
});

export const setWorldWideInfo = worldWideInfo => ({
    type: types.SET_WORLD_WORD_INFO,
    worldWideInfo,
});

export const setMapCenter = mapCenter => ({
    type: types.SET_MAP_CENTER,
    mapCenter,
});

export const setCurrentCountry = currentCountry => ({
    type: types.SET_CURRENT_COUNTRY,
    currentCountry,
});

export const setCaseType = caseType => ({
    type: types.SET_CASE_TYPE,
    caseType,
});

export const setMapZoom = mapZoom => ({
    type: types.SET_MAP_ZOOM,
    mapZoom,
});