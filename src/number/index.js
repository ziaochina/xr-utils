function getPrecision(value){
    const valueString = value.toString()
    //取e-后字符转换成int,e-10=>10
    if (valueString.indexOf('e-') >= 0) {
        return parseInt(valueString.slice(valueString.indexOf('e-') + 1), 10)
    }

    let precision = 0;
    //取小数点后字符长度0.0001=>4
    if (valueString.indexOf('.') >= 0) {
        precision = valueString.length - valueString.indexOf('.') - 1
    }
    //否则0
    return precision
}

export default {
    getPrecision
}