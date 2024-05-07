function solution(phone_number) {
    var answer = '';
    answer = "*".repeat(phone_number.length - 4);
    answer = answer + phone_number.slice(-4);
    return answer;
}