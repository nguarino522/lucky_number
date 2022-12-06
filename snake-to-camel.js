function snakeToCamel(str) {
    let strArray = str.split("_");

    for (let i=1; i < strArray.length; i++){
        strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
    };

    let resultStr = strArray.join("");

    return resultStr;
}