function IteminCommon(arr1, arr2) {
    let obj = {};
    for(let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = true;
    }

    for(let i = 0; i <arr2.length; i++) {
        if(obj[arr2[i]]) return true;
    }
    return false;
}

let arr1 = [4,3,5]
let arr2 = [1,2,5]

IteminCommon(arr1, arr2)