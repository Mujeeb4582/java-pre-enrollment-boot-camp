console.log("Plus Minus Problem Solution");
function plusMinus(arr) {
    // Write your code here
    // first find the negative positive integer in the arr and count them
    // also find zeros seperately and count them
    // then find the ratio
    let postiveCount = 0;
    let negativeCount = 0;
    let zerosCount = 0;
    for (let i=0; i < arr.length; i++){
        if(arr[i]==0){
            zerosCount +=1;
        }
        else if(arr[i] > 0){
            postiveCount +=1;
        }
        else{
            negativeCount += 1;
        }
    }
    // console.log(postiveCount,negativeCount,zerosCount);
    let postiveRatio = postiveCount/arr.length;
    let negativeRatio = negativeCount/arr.length;
    let zerosRatio = zerosCount/arr.length;
    console.log(Math.round(postiveRatio*100000)/100000);
    console.log(Math.round(negativeRatio*100000)/100000);
    console.log(Math.round(zerosRatio*100000)/100000);
}


let ar = [-4, 3, -9, 0, 4, 1];
plusMinus(ar);