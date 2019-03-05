# Separation of structure and presentation
- HTML5 content and structure
- CSS3 presentation (format)

# Types of Stylesheet
- Inline
- Embedded
- External

# Style rules
Sequence of style rules

Syntax of style rule
```
selector {
    declaration1;
    declaration2;
    ...
}
```

Syntax of declaration
```
selector {
    property1 : value1;
    property1 : value1;
    ...
    propertyn : value1;
}
```
## Examples
```
p {
    font-size: large;
    font-family: sans-serif;
}
```

# Selectors
1. Element selector
```
button {
    background-color: white;
    color: gray;
}
```
2. Id selector
```
#btnSave {
    background-color: white;
    color: gray;
}
...
<button id="btnSave" ...> ...</button>
```
3. Class selector
```
.myStyle {
    background-color: white;
    color: gray;
}
...
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <input id='txtName' name='txtName' type='text' class='myStyle' />
    <button id='btnOk' class='myStyle'>Ok</button>
    <button id='btnSave'>Save</button>
    <button id='btnCancel' class='myStyle'>Cancel</button>
  </body>
</html>
```
4. Universal selector
Every element has the same style.
```
\* {
  background-color: white;
  color: gray;
}
```
5. Descendant selector

```
li a {
    text-decoration: none;
}
div ol li a {
    text-decoration: none;
}
```
6. Child selector
```
li > a {
    text-decoration: none;
}
div > ol > li > a {
    text-decoration: none;
}
```
7. Grouping Selectors
```
button {
    background-color: white;
    color: gray;
}
p {
    background-color: white;
    color: gray;
}
```
```
button, p {
    background-color: white;
    color: gray;
}
```
8. Subsequent adjacent sibling selectors
```
div + h1 {
    background-color: yellow;
}
```
9. Subsequent sibling selectors
```
div ~ h1 {
    background-color: yellow;
}
```
10. Super class
```
 We highlight the link when it is
 hovered over (mouse over), activated (mouse down)
 or focused (keyboard)
```
```
a:hover,
a:active,
a:focus {
  color: darkred;
  text-decoration: none;
}
```
11.Pseudo element selectors

```
They are keywords, this time preceded by two colons (::), that can be added to the end of selectors to select a certain part of an element.

1) ::after
2) ::before
3) ::first-letter
4) ::first-line
5) ::selection
6) ::backdrop
They all have some very specific behaviors and interesting features, but digging into them all in detail is beyond our scope for now.
```
```
All elements with an attribute "href" with values   starting with "http" will have an arrow added after their content (to indicate they are external links)
[href^=http]::after {
  content: '⤴';
}

```
# Cascading
_Precedence to calculate the style of an element_
1. Important(Exclamation)(Style property which is marked important has highest precedence value - overrides if more styles are present.)
2. Specificity(Arranged in order accordance to it)
3. Textual order(When two or more style which has same Specificity then)

_Textual Order_
1. Imported multiple styles
2. Imported Style sheet
3. Inline Style sheet
4. Embedded style



_Sources for Style_
1. Multiple style sheets
2. Imported style sheets
3. Inline Style
4. Element specific inline style or Embedded style rule for a html element

_Style sheet types_
1. Style sheet by Author(can  takeover others)
2. Style sheet by the browser
3. Style sheet by the User - Accessibilty(User important styles takes highest precendence)


_Evaluation order of style sheets_
1. Browser’s built-in style sheet
2. User's normal declarations in the user style sheet
3. Author's normal declarations in the author style sheet
4. Author's important declarations in the author style sheet
5. User's important declarations in the user style sheet

## Specificity
(a, b, c)
- a  Record the number of id attributes in the selector.
- b  Record the quantity of class selectors, attributes selectors, and pseudo classes.
- c  Record the quantity of element names in the selector.

Selector                  | a | b | c
:-------------------------|---|---|--
.                         | 0 | 0 | 0
li                        | 0 | 0 | 1
ol + li                   | 0 | 0 | 2
div ol + li               | 0 | 0 | 3
div.content               | 0 | 1 | 1
div.content + li          | 0 | 1 | 3
div.content + li.selected | 0 | 2 | 3
#main                     | 1 | 0 | 0
#main.selected            | 1 | 1 | 0
#main ul + li.selected    | 1 | 1 | 2

## Inheritance

Inherit instead of having all the elements defined with style.


```
body {
    font-size: x-large;
}
li:nth-child(even) {
    font-size: small;
}
li:nth-child(4) {
    font-size: inherit;
}
```

# Text properties
## Font family Group
* serif
* sans serif
* monospace
* cursive
* fantasy

List of values -> depending upon the browser inbuild Stylesheet

```
h1 { font-family: arial, verdana, sans-serif; }
h1 { font-family: "times new roman", serif; }
h1 { font-family: "courier new", monospace; }
```

## Font size
- em (relative) -relative with respect to parent.
- px (absolute)
- pt
- pc (12 pt makes pc)
- in
- mm
- cm

```
    h1 { font-size: 12px; }
    h1 { font-size: 200%; }
    h1 { font-size: 1.2em; }
    h1 { font-size: 1in; }
    h1 { font-size: 2cm; }
```

# CSS Box model
Rectangular Box

![CSS Box Model](css-box.png)
```
p {
    border: 10px;
    padding: 25px;
    margin: 15px;
    background-color: yellow;
    border-style: solid;
    border-color: green;
}
```

## Box parameters
```
p {
    border-bottom: 10px;
    border-right: 5px;
    border-left: 1px;
    border-top: 0px;
    padding: 25px;
    margin: 15px;
    background-color: yellow;
    border-style: solid;
    border-color: green;
}
```

Shorthand
```
Order- trbl -top,right,bottom,left
padding: 1px 2px 3px 4px ;
```

```
tr- top,right , top=bottom, right=left
padding: 5px 15px;
```

# Positioning `div` elements
1. Static (default, normal, flow)
2. Relative
3. Absolute
4. Fixed

## Relative
Offset from the normal flow.

## Absolute
Removed from the normal flow, and positioned w.r.t. to the first non-static element box (or browser window)

## Fixed
Removed from the normal flow, and positioned w.r.t. to  browser window.
