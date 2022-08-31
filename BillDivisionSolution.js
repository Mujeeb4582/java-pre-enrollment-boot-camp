console.log("Bill Division Problem Solution");
function bonAppetit(bill, k, b_charged){
    // first find the total sum of bill array
    // then subtract the amount of k-element of array
    // now check the amount paid by anna if its correct return paid amount otherwise (b_charged - b_actual)
    let sum = bill[0];
    for(let i = 1; i < bill.length; i++){
        sum +=bill[i];
    }
    
    let b_actual = (sum - bill[k])/2;
    if (b_actual === b_charged){
        console.log("Bon Apptit");
    }
    else{
        console.log(b_charged - b_actual);
    }
}

bonAppetit([3, 10, 2, 9], 1, 12);