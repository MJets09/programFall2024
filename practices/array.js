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

function divEven(x) {

    for(i = 0; i < x.length; i++) {

        if(x[i] % 2 == 0) {
            console.log(x[i])
        }

    }
}

divEven(numArr)

function fizzBuzz(x) {

    for(let i = 0; i < x.length; i++) {
        if(x[i] % 3 == 0 || x[i] % 5 == 0) {
            console.log('fizz')
        }
        else {
            console.log(x[i])
        }
    }
}

function reverseArray(x) {

    console.log(x.reverse())

}


reverseArray(numArr)

let count = 0;

function counterValue(x){

    for(let i = 0; i < x.length; i++){
        if(x[i] == 7) {
            count++
        }
    }
    console.log(count)
}

counterValue(numArr)


function removeDupe(x){
    console.log(new Set(x))
}

removeDupe(numArr)


let OneTwo = [1,2];

let fiveFo = [5,4];


console.log(...OneTwo, ...fiveFo);