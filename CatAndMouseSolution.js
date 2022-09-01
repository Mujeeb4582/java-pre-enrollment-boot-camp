console.log("CatAndMouse Solution");

function catAndMouse(x , y, z){
    // if catA(x) catches the mouse(z) print Cat A.
    // if catB(y) catches the mouse(z) print Cat B.
    // If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.
    let diff_x_z = 0;
    let diff_y_z = 0;
    if(x > z){ diff_x_z = x - z;}
    else{diff_x_z = z - x;}
    if(y > z){ diff_y_z = y - z;}
    else{diff_y_z = z - y;}
    if(diff_x_z < diff_y_z){
        return "Cat A";
    }
    else if(diff_y_z < diff_x_z){
        return "Cat B";
    }
    else{
        return "Mouse C";
    }
}

console.log(catAndMouse(1,2,3));
console.log(catAndMouse(1,3,2));