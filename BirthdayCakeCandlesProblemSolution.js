console.log("BirthdayCakeCandlesSolution");
function birthdayCakeCandles(candles){
    //first find the tallest candle in given list
    //then count the tallest candle in given list
    // console.log(candles.length)
    let tallest = 0;
    let tallestCount = 0;
    for (let i =0; i < candles.length; i++){
        if(candles[i] > tallest){
            tallest = candles[i];
        }
    }
    // console.log(tallest);
    for (let i = 0; i < candles.length; i++){
        if (tallest == candles[i]){
            tallestCount++;
        }
    }
    return tallestCount;
}


candle = [4,4,1,3];
result = birthdayCakeCandles(candle);
console.log(result);
