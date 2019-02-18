/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(pref = []) {
	let count = 0;
	pref.forEach((elem, i) => {
		if (i == pref[pref[elem - 1] - 1] - 1) count++;
	});
	return Math.floor(count/3);
};
