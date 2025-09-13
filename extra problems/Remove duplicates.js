const removeDuplicates = (arr) => {
    const newarr = [];
    
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
             count = count + 1
            }
        }
        if (count == 1)
             {
            newarr.push(arr[i]);   // if it shows only once add to newarr directly // 
        }
        else if (count > 1) // if it shows more than once check if it's not added before to newarr add it //
            {
            if (!newarr.includes(arr[i])) {
                newarr.push(arr[i]);
            }
        }
    }
    
    return newarr;
}

console.log(removeDuplicates([3, 6, 4, 3, 6 ,8 ]));