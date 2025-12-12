#JavaScript Type Coercion

Practice Questions

##Topic: Type Coercion and Implicit Conversions

###Question 1

**What will be the output?**

console.log("5" + 3);

-A) 8

-B) "53"

-C) "8"

D) Error

**Answer: B) "53" (Number 3 is coerced to string)

###Question 2

**What will be the output?**

console.log("5" - 3);

-A 2

-B) "2"

C) "5-3"

-D NaN

**Answer: A) 2 (String "5" is coerced to number because only works with numbers)

### Question 3

**What will be the output?**

console.log("10" * "2");

A) 20

B) "20"

C) "102"

D) NaN

**Answer:** A) 20 (Both strings are coerced to numbers)

### Question 4

**What will be the output?**

console.log("10" / "2");

A) 5

B) "5"

C) "10/2"

D) NaN

**Answer:** A) 5 (Both strings are coerced to numbers)

### Question 5

**What will be the output?**

console.log(true + 1);

A) 2

B) "true1"

- C) 1

D) Error

**Answer:** A) 2 (true is coerced to 1)

### Question 6

**What will be the output?**

console.log(false + 5);

A 5

B) "false5"

- D) Error

**Answer:** A) 5 (false is coerced to 0, so 0 + 5 = 5)

### Question 7

**What will be the output?**

console.log("5" + 3 + 2);

A) 10

B) "532"

C) "10"

D "55"

**Answer: B) "532" (Left to right: "5" + 3 = "53", then "53" + 2 = "532")

### Question 8

**What will be the output?**

console.log(3 + 2 + "5");

A) "325"

B) "55"

C) "10"

-D) 10

**Answer:** B) "55" (Left to right:

3+2= 5, then 5 + "5" = "55")

### Question 9

**What will be the output?**

console.log("10" - "5" + 3);

A) 8

B) "8"

C) "1053"

D) "2"

**Answer:** A) 8 (Left to right: "10" "5" = 5, then 5 + 3 = 8)

### Question 10

**What will be the output?**

console.log("Hello" - 5);

A) "Hello-5"

B NaN

C) Error

D) undefined

**Answer:** B) NaN ("Hello" cannot be converted to a number)

### Question 11

**What will be the output?**

console.log(null + 5);

A) 5

B) "nul15"

C) null

D) NaN

**Answer:** A) 5 (null is coerced to 0, so 0 + 5 = 5)

### Question 12

**What will be the output?**

console.log(undefined + 5);

A) 5

B) "undefined5"

C) undefined

D NaN

**Answer:** D) NaN (undefined cannot be converted to a number)

### Question 13

**What will be the output?**

console.log("5" * 2 + "3");

A) "103"

B) "13"

C 13

D) "523"

**Answer:** A) "103" (Left to right: "5" 2= 10, then 10 + "3" = "103")

### Question 14

**What will be the output?**

console.log([] + []);

A) []

B

c) "[],[]"

D) Error

**Answer:** B) (Both arrays are converted to empty strings)

### Question 15

**What will be the output?**

console.log([] + {});

A) "[object Object]"

B) {}

c) "[]"

D) Error

**Answer:** A) "[object Object]" ([] becomes "", {} becomes "[object Object]")

###Question 16

**What will be the output?**

console.log("20" + 10 + 10);

- A) 40

B) "201010"

C) "2020"

D "40"

**Answer:** B) "201018" (Left to right: "20" + 10 = "2010", then "2018" + 10 = "201010")


### Question 17

**What will be the output?**

console.log(10 + 10 + "20");

A) "101020"

B) "2020"

C) 40

D "48"

**Answer:** B) "2020" (Left to right: 10+10= 20, then 20+ "20" = "2020")

### Question 18

**What will be the output?**

console.log("5" - - "3");

- A) 2

2

- B) 8

5

C) "5--3"

- D) NaN

**Answer:** B) 8 ("5" - (-"3") = 5 (-3) = 5+3= 8)

### Question 19

**What will be the output?**

console.log(true + false);

A 1

Be

C) "truefalse"

D) Error

**Answer:**

A) 1 (true = 1, false = 0, so 1 + 0 = 1)

### Question 20

**What will be the output?**

console.log("6" / "2" + 1);

A 4

B "4"

C) "3.5"

D) "321"

**Answer:** A) 4 ("6" / "2" = 3, then 3 + 1 = 4)

### Question 21

**What will be the output?**

console.log(1 + "2" + 3 + 4);

A) 10

B) "1234"

C) "16"

D) "234"

Answer:** B) "1234" (Left to right: 1 + "2" = "12", "12" + 3 = "123", "123" + 4 = "1234")

**

###Question 22

**What will be the output?**

console.log(+"5" + +"3");

- A "53"

-B8

C) "8"

- D) Error

**Answer:** B) 8 (Unary + converts strings to numbers: 5 + 3 = 8)

### Question 23

**What will be the output?**

console.log("10" == 10);

A) true

B) false

C) Error

D) undefined

**Answer:**

A) true (== performs type coercion)

### Question 24

**What will be the output?**

console.log("10" === 10);

A true

B) false

C) Error

D) undefined

**Answer:**

B) false (=== does not perform type coercion)

### Question 25

**What will be the output?**

console.log(0 == false);

A) true

B) false

C) Error

D) undefined

**Answer:** A) true (false is coerced to 0)

### Question 26

**What will be the output?**

console.log("" + 1 + 0);

A) 1

- B) "10"

- C) "01"

- De

**Answer:** B) "10" (Left to right: ""+ 1 = "1", "1" + 0 = "10")

### Question 27

**What will be the output?**

console.log("" 1 + 0);

- A) -1

B) "10"

C) "-10"

D) NaN

**Answer:** A) -1 (Left to right: ""1-1, -1+0= -1)

### Question 28

**What will be the output?**

console.log("5" * "5" + "5");

A) "555"

B) 30

C) "255"

D) "30"

**Answer:** C) "255" ("5" "5" = 25, then 25+ "5" = "255")

### Question 29

**What will be the output?**

console.log(11"false");

A true

B) false

C) "true"

- D) Error

**Answer:*

* A) true (Non-empty strings are truthy, 11 converts to boolean)

### Question 30

**What will be the output?

console.log(11"");

A) true

B) false

C) "false"

- D) undefined

**Answer:**

B) false (Empty string is falsy)


---------------------------------------



The key insight: JavaScript isn't random! It follows these rules:

1. + with strings → concatenation (everything becomes string)

2. + without strings → addition (everything becomes number)

3. -,*,/,% → always convert to numbers

4. Process left to right apply rules step by step

-------------------------------------------

# JavaScript Type Coercion Rules & Decision Tree

## The Golden Rules of Type Coercion

## Rule 1: The `+ Operator (Addition/Concatenation)

### Decision Tree for '+':

Is ANY operand a STRING?

 -YES→ Convert EVERYTHING to string and CONCATENATE

Examples:

10 + "5" = "105"

"Hello" + 5 = "Hello5"

1 + 2 + "3" = "33" (left to right: 1+2=3, then 3+"3"="33")

  -NO→ Convert everything to NUMBER and ADD

Examples:

10+5=15

true + 1 = 2 (true → 1)

false +55 (false → 0)

null + 5 = 5 (null → 0)


**Key Point: With+", strings are "sticky" they convert everything else to strings!

## Rule 2: The -,*,/,% Operators (Math Only)

### Decision Tree for Math Operators:
These operators ONLY work with numbers

Convert ALL operands to NUMBERS

Examples:

"10" - "5" = 5 (both convert to numbers)

"10" * "2" = 20

"10" / "2" = 5

"15" % "4" = 3

If conversion fails Result is NaN

Examples:

"Hello" 5 = NaN ("Hello" can't be a number)

"10" "abc" = NaN

# Rule 3: String to Number Conversion Rules

### What converts to what number:

// STRINGS

"123"→ 123

"12.5"→12.5

" 42 "→ 42 (whitespace trimmed)

""  → 0(empty string)

"abc" → NaN (invalid number)

"12abc"→ NaN (invalid number)


// BOOLEANS

true→1

false → 0

// NULL & UNDEFINED

null → 0

undefined → NaN

// OBJECTS & ARRAYS


[] →0 (empty array)

[5] →5 (single element)

[1,2] → NaN (multiple elements)

{} → NaN (object)


...

# Rule 4: Execution Order (Left to Right)

### Process operations from LEFT TO RIGHT:

javascript

// Example 1:

1 + 2 + "3"

Step 1: 1 + 2 = 3 (both numbers)

Step 2: 3 + "3" = "33" (number + string = string)

// Example 2:

"1" + 2 + 3



Step 1: "1" + 2 = "12" (string + number = string)

Step 2: "12" + 3 = "123" (string + number = string)

// Example 3:

10 - 5 + "2"

Step 1: 10-5 = 5 (math operation)



Step 2: 5 + "2" = "52" (number + string = string)

.....

## Rule 5: Comparison Operators (`==` vs `===`)

### === (Strict Equality) - NO COERCION:

javascript

5 === "5"

→ false (different types)

true === 1

→ false (different types)

null === undefined false (different types)

###==` (Loose Equality) WITH COERCION:

javascript

// Convert to same type, then compare

5 == "5" → true ("5" →5, then 5 == 5)

true == 1→ true (true →1, then 1 == 1)

false == 0→ true (false →0, then 0 == 0)

null == undefined → true (special case)

""==0. → true (""→0, then 0 == 0)

.....

## Rule 6: Unary Plus (+) Force Number Conversion

### The + prefix converts to number:

javascript

+"5"→5

+true →1

+false→p

+null →0

+undefined→ NaN

+"" → 0

// Use in expressions:

+"5" + +"3" →8 (5 + 3)

+"10" - 5 →5 (10-5)

............

## Rule 7: Double NOT (`!!`) Force Boolean Conversion

### Falsy values (become false`):

javascript

!!0 → false

!!""→ false

!!null → false

!!undefined → false

!!NaN → false

!!false → false

### Truthy values (become `true`):

javascript

!!1 → true

!!"hello" → true

!![]→ true

!!{}→true

!!"0"→ true (non-empty string)

!!"false"→ true (non-empty string)

............

##Your Decision-Making Flowchart

STEP 1: What operator am I dealing with?

 1.[+] → Is ANY operand a string?

     YES → String concatenation (convert all to string)

     NO → Numeric addition (convert all to number)

 2. [-, *, /, %] Convert ALL to numbers, then calculate

 3.[==] Convert to same type, then compare

 4.[===] NO conversion, compare type AND value

STEP 2: Read LEFT to RIGHT

STEP 3: Apply conversion rules

STEP 4: Get result