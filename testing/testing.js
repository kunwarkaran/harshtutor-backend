function Sum(arr) {
    let seq = 1;
let set = new Set();
arr.forEach(element => {
    set.add(element);
});
set.forEach(element => {

    if (!set.has(element-1)) {
        let ele = element;
        let count = 1;
        while(set.has(ele+1)) {
            count++;
            ele++;
        }
        seq = Math.max(seq,count);
    }

})

console.log(seq);

}

Sum([1,4,100,104,102,2,2,3,6,101])




