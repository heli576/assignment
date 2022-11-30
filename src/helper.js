export const fetchGenderList = (data) => {
    return [...new Set(data.map(item => item.gender))];
}

export const fetchStatusList = (data) => {
    return [...new Set(data.map(item => item.subscription.status))];
}

export const fetchCityList = (data) => {
    return [...new Set(data.map(item => item.address.state))];
}