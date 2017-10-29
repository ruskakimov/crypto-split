/**
 * Generate key of length
 * @param {integer} length
 * @return {uint16[]}
 */
export function generateKey(length) {
    const key = new Uint16Array(length)
    window.crypto.getRandomValues(key)
    return key
}

/**
 * XOR all passed uint16[]
 * @param {uint16[][]} keys - array of uint16 arrays of equal length
 * @return {uint16[]} - XOR of all keys
 */
export function xorUint16(keys) {
    const xor = new Uint16Array(keys[0].length)
    keys.forEach(key => {
      key.forEach((val, i) => {
        xor[i] ^= val
      })
    })
    return xor
}

/**
 * String to uint16[]
 * @param {string} str
 * @return {uint16[]}
 */
export function stringToUint16(str) {
    var uint16 = new Uint16Array(str.length)
    for (var i = 0; i < str.length; i++) {
        uint16[i] = str.charCodeAt(i)
    }
    return uint16
}

/**
 * uint16[] to string
 * @param {uint16[]} uint16
 * @return {string}
 */
export function uint16ToString(uint16) {
    var str = ''
    for (var i = 0; i < uint16.length; i++) {
        str += String.fromCharCode(uint16[i])
    }
    return str
}

/**
 * hex string to uint16[]
 * @param {string} hexStr
 * @return {uint16[]}
 */
export function hexToUint16(hexStr) {
    var hexArr = hexStr.match(/.{4}/g)
    var uint16 = new Uint16Array(hexArr.length)
    for (var i = 0; i < hexArr.length; i++) {
        uint16[i] = parseInt(hexArr[i], 16)
    }
    return uint16
}

/**
 * uint16[] to hex string
 * @param {uint16[]} uint16
 * @return {string} hex string
 */
export function uint16ToHex(uint16) {
    var hexStr = ''
    for (var i = 0; i < uint16.length; i++) {
        var hex = '000' + (uint16[i]).toString(16)
        hexStr += hex.slice(-4)
    }
    return hexStr
}