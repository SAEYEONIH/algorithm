function solution(s) {
    s = s.toLowerCase();
    const pCount = [...s].filter(char => char === 'p').length;
    const yCount = [...s].filter(char => char === 'y').length;
    return pCount === yCount;
}