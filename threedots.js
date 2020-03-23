const ages = [12,14,16,18,20];
const ages2 = [11,13,15,17,19];
const ages3 = [ 25,26,27,28];

const allAges = ages.concat(ages2);
const allAges2 = [...ages,...ages2,5, ...ages3]
console.log(allAges2);

const takaPoisa = [250, 350,450,550,650];
const maximum = Math.max(...takaPoisa);
console.log(maximum);
