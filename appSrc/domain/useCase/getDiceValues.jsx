/*
    getDiceValues will generate two matched random values from the dice range
    * get min and max int vlaue range
    * return 2 int values represent the dice results and extra int value represent the sum of them
*/
function getDiceValues(maxVal, minVal){
    const a = Math.floor(Math.random() * (maxVal - minVal + 1) ) + minVal;
    const b = Math.floor(Math.random() * (maxVal - minVal + 1) ) + minVal;
    const sum = (a+b != 12) ? (a+b) : 0;
    return [a,b,sum];
    
}
export default getDiceValues;