function reverseString(stri) {
  let arr = stri.split("");
  let len = arr.length;
  let temp = [];
  let str_rev = [];
  for (let i = 0; i < len; i++) {
    if (len - i >= 4) {
      let subStr = arr.slice(i, i + 4);
      let stri_inverse = subStr.reverse();

      temp.push(stri_inverse);
      i = i + 3;
    } else {
      let subStr = arr.slice(i);
      let stri_inverse = subStr.reverse();
      temp.push(stri_inverse);

      //console.log(temp);

      break;
    }
  }
  ///change to string

  for (let i = 0; i < temp.length; i++) {
    let innerJoin = temp[i].join("");
    str_rev = `${str_rev}${innerJoin} `;
    //console.log(str_rev);
  }

  return str_rev;
}
console.log(reverseString("Lorem at"));
