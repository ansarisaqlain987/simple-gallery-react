const groupList = (array) => {
    let totalRows = parseInt(array.length / 4);
    let resultObj = {};
    let resultArray = []
    array = JSON.parse(JSON.stringify(array));
    for (let i = 0; i <= totalRows; i++) {
        resultObj[i] = array.filter((element, index) => index >= i * 4 && index < (i * 4) + 4);
    }
    Object.keys(resultObj).forEach(e => {
        resultArray.push(resultObj[e]);
    })

    return resultArray;
}

export default groupList;