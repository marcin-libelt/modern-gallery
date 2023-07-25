const columnsCountByScreen = [
  {
    screen: 999999,
    cols: 4,
  },
  {
    screen: 1024,
    cols: 3,
  },
  { screen: 768, cols: 2 },
  { screen: 640, cols: 1 },
];
// 800
// 768/800 = 0,96
// 1024/800 = 1,28
const getColumnCountByScreenWidth = (screen, breakpointCols) => {
  const keys = breakpointCols
    .sort((a, b) => a.screen > b.screen)
    .filter((breakpoint) => screen < breakpoint.screen);
  return keys[keys.length - 1];
};

console.log(getColumnCountByScreenWidth(1024, columnsCountByScreen));

/**
 *
 *
 *  800
 *  < 640 = 1
 *  < 786 = 2
 *  < 1024 = 3
 *  4
 *
 * 1. sort
 *
 *
 *
 *
 */

const res = [640, 768, 1024].reduce((accu, curr, index) => {
  return accu > curr ? accu : curr;
}, 0);

//console.log(res);
