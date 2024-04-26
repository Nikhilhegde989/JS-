// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1); //true
console.log("02" > 1);//true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0);//false

// === 

console.log("2" === 2); //false


/* In JavaScript, the behavior you're observing is a result of how the language handles comparisons and type coercion.

null > 0: This evaluates to false because null in JavaScript is coerced to 0 when compared with a numerical value. So effectively, it's like asking 0 > 0, which is false.
null == 0: This also evaluates to false. In JavaScript, null is considered to be equal to undefined but not to any other value, including 0.
null >= 0: This evaluates to true. Here, null is coerced to 0, so it becomes 0 >= 0, which is true.
undefined == 0: This evaluates to false. In JavaScript, undefined is a distinct type and is not equal to 0 or any other value except for null.
undefined > 0: This evaluates to false. Like null, when undefined is compared with a numerical value, it is coerced to NaN (Not-a-Number), and any comparison involving NaN results in false.
undefined < 0: This also evaluates to false for the same reason as above. When undefined is coerced to NaN and compared with 0, the result is false.
In summary, the behavior you're observing is due to JavaScript's type coercion rules, where null gets coerced to 0 in certain contexts, and undefined gets coerced to NaN when compared with numerical values.


Yes, that's correct. In JavaScript, the behavior of type coercion can vary depending on the operators used in the comparison.

For example:

When comparing null with a numerical value using the > or < operators, null is coerced to 0.
When comparing undefined with a numerical value using the > or < operators, undefined is coerced to NaN.
When comparing null or undefined with a numerical value using the == or >= operators, the behavior is more complex due to the equality coercion rules defined in the ECMAScript specification. null is equal to undefined but not to any other value, and undefined is not equal to anything except null.
So yes, the conversion behavior can vary depending on the operator used in the comparison.

*/