/**
 * You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. 
 * Check if these points make a straight line in the XY plane.
 * 
 */

var checkStraightLine = function (coordinates) {
  let a = coordinates[1][1] - coordinates[0][1];
  let b = coordinates[1][0] - coordinates[0][0];
  return coordinates.every(
    item =>
      a * (item[0] - coordinates[0][0]) -
      b * (item[1] - coordinates[0][1]) ===
      0
  );
};

console.log(checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]));
console.log(checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]));
console.log(checkStraightLine([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6]]));
console.log(checkStraightLine([[1, 1], [3, 5]]));
console.log(checkStraightLine([[0, 0], [0, 1], [0, -1]]));
