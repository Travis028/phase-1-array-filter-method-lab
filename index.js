// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(string.toLowerCase()));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}

module.exports = {
    findMatching,
    fuzzyMatch,
    matchName
};

