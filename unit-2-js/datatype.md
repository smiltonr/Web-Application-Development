# Data types

## Primitive  data types

1. number (floating point numbers - 64bit,hexadecimal -0X/0x , no octal representation)(hexadecimal escaped \0xxxx (16bit code representation)
2. string (16 bit , no separate character variable class,unicode - 2bytes)
3. Boolean (True/False)

No data type variable with value - undefined.

Infinity,-Infinity - outside 64bit numbers are discribed by this -> -1/0 = -Infinity
NaN - Not A Number - Infinity by Infinity

## Object data types

1. **Object** Ex {x:5,y:6} comma separated list of properties and their corresponding values.
2. **Array**  Ex {23,41,11,18} comma separated list of values.
3. **Function** Ex - function(x) { return 5*x; } , anonymous function - without function name specification


# Type conversion (Implicit type conversion)
## Number

Type    |  Value                      |  Number
:------:| :-------------------------: | :-------:
NoType  | undefined                   |  NaN
string  | ""                          |  0
string  | string representing number  |  number
string  | other strings               |  NaN
boolean | false                       |  0
boolean | true                        |  1
object  | null                        |  0
anyobj  | not null                    |  valueOf()

## String
Type    | Value               | Number
:------:| :-----------------: |  :----------:
Notdef  | undefined           |  "undefined"
number  | NaN                 |  "NaN"
Infinite| Infinity, -Infinity |  "Infinity", "-Infinity"
Other   | other numbers       |  number
boolean | false, true         |  "false", "true"
object  | null                |  "null"
anystr  | not null            |  toString()

## Boolean

Type   | Value         | Number
:-----:| :-----------: | :------:
NoType | undefined     | false
number | NaN           | false
SomeNum| other numbers | true
string | ""            | false
nonempstr| not empty     | true
object | null          | false
anyobj | not null      | true
Nan    | Not a number  | false
empty  | Empty obj     | true


Boolean results are always **Boolean**.

**Short circuit evaluation** of the boolean expression
a && b &&c
if a or b is false finish the computation.



# Arithmetic Operators
1.Addition

2.Subraction

3.Addition with string - concatenation - Implicit Conversion of a string to number when a number is concatenated with it

4.Power  **

5.Equivalence - strict equals (===) equality and same data type or equals (==)


# Comparision Operators
1. && , || , != (Binary Operator)

2. Unary Operators - ~,!,-

Comparision operators might not always return Boolean result.

# Arrays

Concatination is without any side effects.
