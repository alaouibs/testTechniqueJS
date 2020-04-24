class ArmstrongNumbers {
    static isArmstrongNumber(num: number) {
        let str = String(num)

        let sum = Array.from(str)
            .map(digit => Number(digit))
            .reduce((accumulator, current) => accumulator + Math.pow(current, str.length), 0);

        return sum === num;
    }
}

