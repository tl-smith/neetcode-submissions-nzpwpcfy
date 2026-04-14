class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      // INITIALIZE max profit to 0
    let max = 0;

    // LOOP through each day as a buying day
    for (let i = 0; i < prices.length; i++) {

        // LOOP through future days as selling days
        for (let j = i + 1; j < prices.length; j++) {

            // CALCULATE profit if bought on day i and sold on day j
            let profit = prices[j] - prices[i];

            // IF this profit is greater than current max
            if (profit > max) {
                // UPDATE max profit
                max = profit;
            }
        }
    }

    // AFTER checking all pairs of days
    // RETURN the maximum profit found
    return max;
   
    }
}