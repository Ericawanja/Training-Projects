# Quick Overview of Array Data structure methods

As a software developer or data scientist you will daiy have to interact with data structures. One of the commonly used data structures is an Array which is basically a collection of related data items.

Besides knowing how to create an array, you should be well aquinted with the different methods that can be used. Let's get to that.

> > > try to understand the use case of each method and the value it returns.

### 1. toString()

### 2. join()

### 3. pop()

### 4. shift()

### 5. push()

### 6.unshift()
### 7. splice()


### 8.fill()

Use case: Fills the original array with a static value
Return value: Original array filled with the static value: Note: fill() method alters the original array and does not create a new one.

```javascript
const months = ["january", "february", "march", "april"];
months.fill(july);

console.log(months);
//output
//const months =['july', 'july', 'july','july']
```
## How to find an element in array
### 9. indexOf()
### 10. find()
### 11. findIndex
### 12. includes()

UseCase: Used to check if the array contains a certain value
Return value: It returns a Boolean, true if the element is found and false if otherwise.

```javascript
const months = ["january", "february", "march", "april"];
console.log(months.includes("july")); //outputs false
```

## How to sort an array
### 13. sort()
## Reverse an array
### 14. Reverse()
## Loop through array
 