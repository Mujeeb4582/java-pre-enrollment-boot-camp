console.log("StairCase solution");
function staircase(n){
    // first loop upto n
    // decleare a string and store the pattren
    for(let i = 0; i < n; i++){
        let pattren = "";
        for(let j = 0; j < n-1-i; j++){
            pattren += " ";
        }
        for(let k = 0; k <= i; k++){
            pattren += "#";
        }
        console.log(pattren);
    }
}

let number = 6;
staircase(number);