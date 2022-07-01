import { absentNumber } from "./index";

it("Empty Array", () => {
  expect(absentNumber([])).toEqual(1);
});

it("An array from one element", () => {
  expect(absentNumber([1])).toEqual(2);
  expect(absentNumber([2])).toEqual(1);
});

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

it("An array from an element missing at the beginning", () => {
  expect(absentNumber([5, 4, 3, 2].sort(compareRandom))).toEqual(1);
});

it("An array from an element missing at the ending", () => {
  expect(absentNumber([4, 3, 2, 1].sort(compareRandom))).toEqual(5);
});

it("An array from an element missing at the middle", () => {
  expect(absentNumber([5, 4, 2, 1].sort(compareRandom))).toEqual(3);
});
