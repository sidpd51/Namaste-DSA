//O(n) two pointer
function maxProfit(prices) {
	let left = 0;
	let maxProfit = 0;
	for (let i = 1; i < prices.length; i++) {
		if (prices[left] > prices[i]) left = i;
		if (prices[left] < prices[i]) {
			let profit = prices[i] - prices[left];
			maxProfit = Math.max(maxProfit, profit);
		}
	}
	return maxProfit;
}

//O(n^2) tle
// function maxProfit(prices) {
//     let maxProfit = -Infinity;
//     let n = prices.length;
//     for(let i =0; i<n-1; i++){
//         let cp = prices[i];
//         for(let j = i+1; j<n; j++){
//             let sp = prices[j];
//             let profit = sp-cp;
//             if(profit>maxProfit) maxProfit=profit;
//         }
//     }
//     return maxProfit<0?0:maxProfit;
// };

console.log(`Max`);
