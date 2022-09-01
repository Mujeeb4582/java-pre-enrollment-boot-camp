console.log('HurdleRaceSolution');

function hurdleRace(k, height){
    // first find the highest hurdle in the array
    // dose = highest hurdle - k(height of the character can jump naturally)
    let maxHeight = height[0];
    let doses = 0;
    for(let i = 1; i < height.length; i++){
        if(maxHeight < height[i]){
            maxHeight = height[i];
        }
    }
    doses = maxHeight - k;
    if(doses<=0){
        return 0;
    }
    else{
        return doses;
    }
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
console.log(hurdleRace(7, [2, 5, 4, 5, 2]));