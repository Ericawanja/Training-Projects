
//getElementsById - returns the element
const sec = document.getElementById('sec_p')
sec.style.color ='green'

//getElementsByClassName - HTMLCollection
const first = document.getElementsByClassName('first_p')
//console.log(first)

//getElementsByTagName - HTMLCOLlection of all the elements with the tag

const para = document.getElementsByTagName('p')
//console.log(para)

//queryselector('selector') --- the element
//querySelectorAll('selector) ----HTMLCollection
const par1 = document.querySelectorAll('#sec_p')

console.log(par1)