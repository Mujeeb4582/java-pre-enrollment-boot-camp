console.log("BreakingTheRecordsSoluion");
function breakingRecords(scores){
    // first find the highest and lowest score
    // then count the changes in highest and lowest score
    let highest = scores[0];
    let lowest = scores[0];
    let highestCount = 0;
    let lowestCount = 0;
    for(let i = 1; i < scores.length; i++){
        if(highest < scores[i]){
            highest = scores[i];
            highestCount++;
        }

        if(lowest > scores[i]){
            lowest = scores[i];
            lowestCount++;
        }
    }
    return [highestCount, lowestCount];
}

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));