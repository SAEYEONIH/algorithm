function solution(array) {
    const freq = {};

    for (let num of array) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let maxFreq = 0;
    let modes = [];

    for (let num in freq) {
        if (freq[num] > maxFreq) {
            maxFreq = freq[num];
            modes = [Number(num)];
        } else if (freq[num] === maxFreq) {
            modes.push(Number(num));
        }
    }

    return modes.length === 1 ? modes[0] : -1;
}