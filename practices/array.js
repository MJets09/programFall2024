function sumArray(x,y){
    console.log(x+y);
}

sumArray(5,5);

let num = 0;


let numArr = [5,6,8,3,5,7,4,6,9,5,66,88,44,5,3,9,7,5,]

function findLargest(x){
    for(i = 0; i < x.length; i++){
        if(x[i] > num){
            num = x[i]
        }
    }
    console.log(num)
}

findLargest(numArr)

function findSmallest(x){
    for(let i = 0; i < x.length; i++){
        if(x[i] < num){
            num = x[i]
        }
    }
    console.log(num)
}


findSmallest(numArr)