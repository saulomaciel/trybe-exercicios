let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers1.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers1[index] < numbers1[secondIndex]) {
        let position = numbers1[index];
        numbers1[index] = numbers1[secondIndex];
        numbers1[secondIndex] = position;
      }
    }
  }
  console.log(numbers1)

  let multiplicada = [];

  for (index = 0; index < numbers.length; index += 1) {
    if (index + 1 < numbers.length) {
        multiplicada.push(numbers[index] * numbers[index + 1])
    }
    else {
        multiplicada.push(numbers[index] * 2)
    }
  }
  console.log(multiplicada)