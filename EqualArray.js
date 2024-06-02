let arr1 = [2, 3, 4, 5, 8, 45, 12];
let arr2 = [2, 3, 4, 5, 21];

let isEqual = arr1.length == arr2.length &&
    arr1.every((curEle) => {
        if (arr2.indexOf(curEle) > -1) {
            return (curEle = [arr2.indexOf(curEle)])
        }
    })
console.log(isEqual)


//intersection
let intersection = arr1.filter((ele) => {
    return arr2.includes(ele);
})
console.log([...new Set(intersection)])

//union of two arrays
let unionArray = [...arr1, ...arr2];
console.log([...new Set(unionArray)])

//fibonacci series

var a = 0;
var b = 1;
for (let i = 0; i <= 15; i++) {
    var temp = a + b;
    a = b;
    b = temp;
    console.log(temp)
}

//pyramid pattern
for(let i=0; i<6; i++){
    for(let k=0; k<6-i; k++){
        document.write("&nbsp");
    }
    for(let j=0; j<i; j++){
        document.write("*"+ "&nbsp");
    }
    document.write("<br>")
}
  //right triangle pattern
for(let i=0; i<6; i++){
    for(let j=0; j<i; j++){
        document.write("*"+ "&nbsp");
    }
    document.write("<br>")
}

//Diamond shape pattern

for(let i=0; i<=6; i++){
    for(let k=0; k<=6-i; k++){
        document.write("&nbsp;&nbsp");
    }
    for(let j=0; j<=i; j++){
        document.write("*"+ "&nbsp;&nbsp");
    }
    document.write("<br>")
}
for(let i=0; i<=6; i++){
    for(let k=0; k<=i; k++){
        document.write("&nbsp;&nbsp")
    }
    for(let j=0; j<=6-i; j++){
        document.write("*"+"&nbsp;&nbsp")
    }
    document.write("<br>")
}