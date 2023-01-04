module.exports = function toReadable(number) {
    let res = "";

    let ones = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
    };
    let tens = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    let hundreds = {
        100: "one hundred",
        200: "two hundred",
        300: "three hundred",
        400: "four hundred",
        500: "five hundred",
        600: "six hundred",
        700: "seven hundred",
        800: "eight hundred",
        900: "nine hundred",
    };

    if (number <= 20) {
        res = ones[number];
    }
    let prom = number.toString().split("");

    if (number > 20 && number <= 99) {
        if (prom[1] === "0") {
            return tens[number];
        } else {
            res = tens[+(prom[0] + 0)] + " " + ones[+prom[1]];
        }
    }
    if (number >= 100) {
        if (prom[1] === "0" && prom[2] === "0") {
            return hundreds[number];
        }
        if (prom[1] === "0" && prom[2] !== "0") {
            res = hundreds[+(prom[0] + 0 + 0)] + " " + ones[+prom[2]];
        }
        if (prom[1] + prom[2] >= "10" && prom[1] + prom[2] < "20") {
            res =
                hundreds[+(prom[0] + 0 + 0)] + " " + ones[+(prom[1] + prom[2])];
            return res;
        }
        if (prom[1] !== "0" && prom[2] === "0") {
            res =
                hundreds[+(prom[0] + 0 + 0)] + " " + tens[+(prom[1] + prom[2])];
        }
        if (prom[1] !== "0" && prom[2] !== "0") {
            res =
                hundreds[+(prom[0] + 0 + 0)] +
                " " +
                tens[+(prom[1] + "0")] +
                " " +
                ones[+prom[2]];
        }
    }

    return res;
};
