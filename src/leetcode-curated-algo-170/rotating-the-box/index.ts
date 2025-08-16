// Source:https://leetcode.com/problems/rotating-the-box/description/?envType=daily-question&envId=2024-11-23

/**
 You are given an m x n matrix of characters box representing a side-view of a box. Each cell of the box is one of the following:

 A stone '#'
 A stationary obstacle '*'
 Empty '.'
 The box is rotated 90 degrees clockwise, causing some of the stones to fall due to gravity. Each stone falls down until it lands on an obstacle, another stone, or the bottom of the box. Gravity does not affect the obstacles' positions, and the inertia from the box's rotation does not affect the stones' horizontal positions.

 It is guaranteed that each stone in box rests on an obstacle, another stone, or the bottom of the box.

 Return an n x m matrix representing the box after the rotation described above.

 Example 1:

 Input: box =
 [["#",".","#"]]

 Output:
 [["."],
  ["#"],
  ["#"]]


 Example 2:

 Input: box =
 [["#",".","*","."],
  ["#","#","*","."]]

 Output:
 [["#","."],
  ["#","#"],
  ["*","*"],
  [".","."]]


 Example 3:

 Input: box =   [["#","#","*",".","*","."],
 ["#","#","#","*",".","."],
 ["#","#","#",".","#","."]]
 Output:  [[".","#","#"],
 [".","#","#"],
 ["#","#","*"],
 ["#","*","."],
 ["#",".","*"],
 ["#",".","."]]


 Constraints:

 m == box.length
 n == box[i].length
 1 <= m, n <= 500
 box[i][j] is either '#', '*', or '.'.

 **/

const rotate = (box: string[][]): string[][] => {
  const rotated: string[][] = [];
  for (let i = 0, len0 = box[0].length; i < len0; i+=1) {
    rotated.push([]);
    for (let j = 0, boxLen = box.length; j < boxLen; j+=1) {
      rotated[i].push(box[j][i]);
    }
  }
  return rotated;
};

const dropSpan = (span: string): string => {
  const noSpaces = span.replace(/\./g, '');
  const spaces = Array.from({ length: span.length - noSpaces.length }, () => '.').join('');
  return spaces.concat(noSpaces);
}

export function rotateTheBox(box: string[][]): string[][] {
  const dropped = box.map(rows => {
       const spans = rows.join('').split('*');
       return spans.map(span => dropSpan(span)).join('*').split('');
  })

 return rotate(dropped);
};
