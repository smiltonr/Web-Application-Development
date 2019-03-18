# Data types
## Primitive  data types
1. number
2. string
3. Boolean
## Object data types
1. Object
2. Array
3. Function

# Type conversion
## Number

Type    | Value                      | Number
--------|----------------------------|----------
        | undefined                  | NaN
string  | ""                         | 0
        | string representing number | number
        | other strings              | NaN
boolean | false                      | 0
        | true                       | 1
object  | null                       | 0
        | not null                   | valueOf()

## String
Type    | Value               | Number
--------|---------------------|------------------------
        | undefined           | "undefined"
number  | NaN                 | "NaN"
        | Infinity, -Infinity | "Infinity", "-Infinity"
        | other numbers       | number
boolean | false, true         | "false", "true"
object  | null                | "null"
        | not null            | toString()

## Boolean

Type   | Value         | Number
-------|---------------|-------
       | undefined     | false
number | NaN           | false
       | other numbers | true
string | ""            | false
       | not empty     | true
object | null          | false
       | not null      | true
