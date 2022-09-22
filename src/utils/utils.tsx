export const round = (value: number) => {
  return Math.round(value * 20) / 20;
};

export const fixedDecimal = (number: number) => {
  return number.toFixed(2);
};

export const fiveCentRounding = (number: number) => {
  const stringValue = number.toString(); // convert to string
  const lastDigit = parseFloat(stringValue.slice(-1)); // get last digit
  let value = null;

  if ([8, 9].includes(lastDigit)) {
    const numbers = number.toString().split('.'); // split number
    if (numbers[1] === '99') {
      value = Math.round(number); // will round off
    } else {
      const decimal = parseFloat(`0.${numbers[1]}`);

      // append the decimal value
      value = parseFloat(
        `${stringValue.slice(0, -2)}${Math.round(decimal * 10)}`,
      );
    }
  } else {
    const rule = [
      {
        numbers: [0, 1, 2],
        endNumber: 0,
      },
      {
        numbers: [3, 4, 5, 6, 7],
        endNumber: 5,
      },
    ];

    const filter = rule.filter(item => item.numbers.includes(lastDigit));

    // append decimal end number
    value = parseFloat(`${stringValue.slice(0, -1)}${filter[0].endNumber}`);
  }

  return value;
};
