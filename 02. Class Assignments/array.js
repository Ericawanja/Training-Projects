/**
 * toString()
 * converts the array to a string with words separated by commas. It returns a new array
 */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruits_string =fruits.toString()


/**
 * join()
 * Works like toString but you can specify the separotor. The separator is passed inside quotation marks and it returns a new array
 */

const fruits2 = fruits.join('-')
/**
 * pop()
 * Remove the last element in an array
 * It returns the value that was popped out
 */

const fruits3 = fruits.pop()

/**
 * shift()
 * Removes the first element of the array and returns the element that was removed.
 */
fruits.shift()

/**
 * push()
 * Inserts an element at the end of the array
 * Returns the length of the array
 */
fruits.push('pear')
/**
 * unshift()
 * Inserts element at the beginning of the array
 * Returns the length of the array
 */


/**
 * fil()
 */
const fruits8 =fruits.fill('0')
 console.log(fruits8)
