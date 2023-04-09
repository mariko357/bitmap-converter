export function convertGrid(
    input,
    rows = 1,
    columns = 1,
    bits = 8,
    scanDir = "top-left"
) {
    let out = Array();
    let copy = input.map((x) => x.map((x) => x)); // Maps 2d array

    if (scanDir === "top-left") {
        for (let i = 0; i < rows; i++) {
            out.push(convertTouXt(copy[i], bits));
        }
    } else if (scanDir === "top-right") {
        for (let i = 0; i < rows; i++) {
            out.push(convertTouXt(copy[i].reverse(), bits));
        }
    } else if (scanDir === "bottom-left") {
        for (let i = rows - 1; i >= 0; i--) {
            out.push(convertTouXt(copy[i], bits));
        }
    } else if (scanDir === "bottom-right") {
        for (let i = rows - 1; i >= 0; i--) {
            out.push(convertTouXt(copy[i].reverse(), bits));
        }
    } else if (scanDir === "left-top") {
        for (let i = 0; i < columns; i++) {
            let col = copy.map((x) => x[i]);
            out.push(convertTouXt(col, bits));
        }
    } else if (scanDir === "right-top") {
        for (let i = columns - 1; i >= 0; i--) {
            let col = copy.map((x) => x[i]);
            out.push(convertTouXt(col, bits));
        }
    } else if (scanDir === "left-bottom") {
        for (let i = 0; i < columns; i++) {
            let col = copy.map((x) => x[i]);
            col.reverse();
            out.push(convertTouXt(col, bits));
        }
    } else if (scanDir === "right-bottom") {
        for (let i = columns - 1; i >= 0; i--) {
            let col = copy.map((x) => x[i]);
            col.reverse();
            out.push(convertTouXt(col, bits));
        }
    }
    return out;
}

/**
 * Convert an array of boolean values to array of uint8_t values.
 * @param {Array} input input array.
 * @param {Number} bits number of bits in each element of output array.
 * @returns {Array} output array of integers.
 */
export function convertTouXt(input, bits = 8) {
    let varCount =
        Math.floor(input.length / bits) + (input.length % bits ? 1 : 0);
    let output = Array(varCount);
    for (let i = 0; i < input.length; i++) {
        output[Math.floor(i / bits)] |= (input[i] ? 1 : 0) << i % bits;
    }
    return output;
}

/**
 *
 * @param {Number} input input number
 * @returns {String} іtring of number in binary format
 */
function base2(input) {
    return "0b" + (input >>> 0).toString(2);
}

/**
 *
 * @param {Number} input input number
 * @returns {String} іtring of number in hexadecimal format
 */
function base16(input) {
    return "0x" + (input >>> 0).toString(16).toUpperCase();
}

/**
 *
 * @param {Array} input input of values to convert to BIN or HEX
 * @param {Number} encoding encoding (2 or 16)
 * @returns {Array} output array of converted values
 */
export function convertWithEncoding(input, encoding = 2) {
    let output = Array();
    for (let i = 0; i < input.length; i++) {
        output.push([]);
        for (let j = 0; j < input[i].length; j++) {
            output[i].push(
                encoding === "2" ? base2(input[i][j]) : base16(input[i][j])
            );
        }
    }
    return output;
}
