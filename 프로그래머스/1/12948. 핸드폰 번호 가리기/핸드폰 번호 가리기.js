function solution(phone_number) {
   return phone_number.split("").map((e,i) => i < phone_number.length -4 ? '*' : e).join("");
}