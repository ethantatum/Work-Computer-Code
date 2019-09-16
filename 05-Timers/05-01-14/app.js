
// Buy Low, Sell High -- Starter Code


// Stock Prices
let stockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.18];


// Your Biggest Profit function
let biggestProfit = function(stockArray, sharesBought) {
    let maxPrice = Math.max(...stockArray);
    let minPrice = Math.min(...stockArray);
    console.log(`Max: ${maxPrice}`);
    console.log(`Min: ${minPrice}`);
    return (maxPrice - minPrice) * sharesBought;
};

// A Call to your Biggest Profit function.
sum = biggestProfit(stockPrices, 10000);
console.log(`Biggest profit is $${sum}`);

// NOTE: This should return 7600,
// because you could have bought it at 1.14 per share
// and then sold it at 1.90 per share.
// 1.90 - 1.14 = 0.76. 0.76 * 10000 is 7600.
