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

```js
var  states = [[false, false], [false,true], [true, false], [true, true]];
for (var i in states){
  console.log(states[i], states[i][0] || states[i][1]);
  // console.log(state[0] && state[1])
}
```

```python
import matplotlib.pyplot as plt
import numpy as np

%matplotlib inline
%config InlineBackend.figure_format = 'svg'
t = np.linspace(0, 20, 500)

plt.plot(t, np.sin(t))
plt.show()
```
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

