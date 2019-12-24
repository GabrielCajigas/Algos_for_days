function miniMaxSum(arr) {
    let min = arr[0];
    let max = arr[0];
    let maxsum = 0;
    let minsum = 0;


    for (let x = 0; x < arr.length; x++) {
        if (arr[x] < min) {
            min = arr[x]
        }
        if (arr[x] > max) {
            max = arr[x];
        }
    }
    if (max === min) {
        for (let z = 0; z < arr.length; z++) {
            if (z < arr.length - 1) {
                minsum += arr[z];
            }
            if (z > 0) {
                maxsum += arr[z];
            }
            console.log(maxsum, minsum);
        }
        console.log(minsum, maxsum);
        return;
    }
    for (let y = 0; y < arr.length; y++) {
        if (arr[y] === min) {
            minsum += arr[y];
        } else if (arr[y] === max) {
            maxsum += arr[y];
        } else {
            maxsum += arr[y];
            minsum += arr[y];
        }
    }
    console.log(minsum, maxsum);
}

miniMaxSum([5, 5, 5, 5, 5]);