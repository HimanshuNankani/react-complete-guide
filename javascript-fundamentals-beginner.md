# JavaScript Fundamentals

Beginner Level

## Topic: Data Types, Variables, and Operators

### Question 1

**What will be the output of the following code?**

javascript

console.log(typeof null);

A) "null"

B) "undefined"

C) "object"

D "number"

**Answer:**

C) "object" (This is a known JavaScript quirk)

### Question 2

**Which of the following is NOT a primitive data type in JavaScript

A) String

B) Number

C) Array

D) Boolean

**Answer:**

C) Array (Arrays are objects, not primitives)


### Question 3

**Fill in the blank: **

The

keyword is used to declare a block-scoped variable

**Answer:** let (or const)

### Question 4

Variables declared with 'var' are block-scoped.

**True or False:**

**Answer:**

False (They are function-scoped)

I

### Question 5

**What will be the output?**

javascript

let x = 5;

let y = "5";

console.log(x == y);

console.log(x === y);

A) true, true

B) false, false

C) true, false

D) false, true

**Answer:**

C) true, false (== does type coercion, === doesn't)

### Question 6

**Which operator is used for exponentiation in JavaScript?**

- A) A

- B) **

- C ^^

D) pow


**Answer:**

B) **

### Question 7

**What will be the output?**

- console.log(10 + "5");
A) 15

B) "105"

C) "15"

D) Error

**Answer:**

B) "105" (Number is coerced to string)

### Question 8

**True or False:** 'undefined' and 'null' are the same in JavaScrip

**Answer:**

False (They are different types and values)

### Question 9

**Fill in the blank:**

The operator returns true if both operands are true.

**Answer:** && (AND operator)

### Question 10

**What is the result of `5% 2`?**

A 2

B) 2.5

C) 1

-De

C) 1 (Modulo operator returns the remainder)

**Answer:**

### Question 11

**Which method converts a string to a number?**

A) parseInt()

B) toString()

C) stringify()

D) convert()

**Answer:** A) parseInt()

### Question 12

**What will be the output?**

let a;

console.log(a);
A) null

B) undefined

C) 0

D) Error

**Answer:**

B) undefined

### Question 13

**True or False:** `const variables can be reassigned.

**Answer:** False (const creates a read-only reference)

### Question 14

**What does NaN stand for?**

A) Not a Number

B) Null and Negative

C) New Array Node

D) None of the above

**Answer:**

A) Not a Number

### Question 15

**What will be the output?**

console.log(typeof NaN);

A "NaN"

B) "undefined"

C) "number"

D) "object"

**Answer:** C) "number"



--------------------+----
Question 15: Why is typeof NaN a "number"?

NaN (Not a Number) is actually a special numeric value in JavaScript that represents an Invalid number result. Despite its name meaning "Not a Number," it belongs to the Number type.

Why it exists:

When you try to perform mathematical operations that don't make sense, JavaScript returns NaN instead of throwing an error

Examples: "hello" 5, Math.sqrt(-1), 8/0

The quirk:

console.log(typeof NaN); // "number" (it's a special number value)

console.log(NaN === NaN); // false (NaN is not equal to itself!)

console.log(isNaN(NaN)); // true (use this to check for NaN)

Think of NaN as a "broken number" - it's still in the number family, just not a valid one.


------------------------

Question 8: Differences between undefined and null

undefined - "No value assigned yet"

Automatic: JavaScript assigns this when a variable is declared but not initialized

Type: undefined

Meaning: "I don't know what this is yet" or "hasn't been set"

let x;

console.log(x);

// undefined

console.log(typeof x);

// "undefined"

I

function test() {}

console.log(test());

// undefined (no return value)

const obj = { name: "John" };

console.log(obj.age);

// undefined (property doesn't exist)

null - "Intentionally empty"

Intentional: You explicitly set this to indicate "no value"

Type: object (this is a JavaScript bug that can't be fixed for backward compatibility)

Meaning: "I know this should be empty/nothing"

let y = null;

console.log(y);

// null

console.log(typeof y);

// "object" (the famous JavaScript qu

Key Differences:

// 1. Assignment

let a;

// automatically undefined

let b = null;

// you must explicitly set null

// 2. Type

typeof undefined;

// "undefined"

typeof null;

// "object"

// 3. Equality

undefined == null;

// true (loose equality)

undefined === null;

// false (strict equality different types)

// 4. Conversion to number

Number(undefined);

// NaN

Number(null);

// 0

// 5. Usage

undefined;

// "hasn't been set" or "doesn't exist"

null;

// "intentionally empty" or "no object"

Practical Example:

let user = {

};

name: "Alice",

email: null,

// e

←→

// intentionally empty (we know email exists but isn'

// age is not defined (doesn't exist at all)

console.log(user.email);

console.log(user.age);

// null (we know about email, it's just empty)

// undefined (age property doesn't exist)

Rule of thumb:

Use null when you want to intentionally say "this is empty/no object"

undefined is what JavaScript uses when something hasn't been defined or assigned yet
