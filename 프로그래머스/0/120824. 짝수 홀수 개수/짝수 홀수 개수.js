function solution(num_list) {
    let even_count = 0;
    let odd_count = 0;

    for (let num of num_list) {
        if (num % 2 === 0) {
            even_count += 1;
        } else {
            odd_count += 1;
        }
    }

    return [even_count, odd_count];
}