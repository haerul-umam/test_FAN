let x =  [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]

function sum(arr){
    arr.sort((a,b) => (a-b))
    let count = 0, next = 1
    
    for (let i=0; i < arr.length-1; i++){
        if (arr[i] === arr[next]) count += 1
        i += 1
        next += 2
    }
    
    return count
}

console.log(sum(x))


let y = 'Kemarin Shopia per[gi ke mall'

function sumWord(str){
    let arrOfStr = str.split(" ")
    let count = 0

    for (let i of arrOfStr){
        let found = true
        for (let j of i){
            if (j.toLowerCase() === j.toUpperCase()) found = false
        }
        if (found) count += 1 
    }
    return count
}

console.log(sumWord(y))
