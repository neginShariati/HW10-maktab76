function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

let json = '{ "birthday": 2000}';
console.log(isJsonString(json));