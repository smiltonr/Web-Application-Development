# JavaScript Basics


# Read Chapter 4 and Chapter 5 from Jeffrey Jackson - Web Technologies . 

1. Using chrome/firefox inspector tool.

2. Using console.

3. Using inspect element object.

4. Popular client side programming language.

5. JavaScript **renders first** before the HTML rendering

6. To make JavaScript load after HTML rendering by including a **jQuery**


  ```
    $(window).bind("load", function() {
         // code here
      });
   ```

   ```
      A  shorthand version of this is:

        $(function() {
            // code here
            }
  ```

7. ECMAScript 6 is offical now.

8. JavaScript is an *interpreted language*.

9. Types of *JavaScript objects*
      1. Native-RE,Date,Map,window
      2. Host-alert,prompt


10. *Control Flow instructions* in JavaScript

      1. **Block statement** - Sequence of instructions within curly braces.
      2. **Control statement** - Condition and action specification.
      3. **Iterative statement** - Loop constructs to repeatedly execute a set of statements.
      4. **Case analysis statement** - If Else ladder. in ladder- exactly one case is true- order of statements does not matter, but if atleast one case is expected to be to true - order matters.
      5. **Switch statement** - Switch to select appropriate case statement. every end of case statement are terminated by the keyword break.
      6. **Break and continue** - Continue - evil not use it .
      *Break* - break the construct and alter control flow to next set of instructions.
      7. **Exception handling** - Try catch and throw blocks.
      
 11. Local and global variables in JavaScript : 
 
        1. Readily build in object - window
        
           Every global variable is a property of window
       
       2. Local variables go out of scope post execution of function.
   
   
12. Objects are copied by reference and Primitive variables values are copied by value 
    Parameter passing are passing mere values .

13. Strings are array like objects. 

14. Regular Expression in JavaScript -  
                                        regexEx="\d\d\d"
                                        stringTest=000
                                        regexEx.test(stringTest)
                                        
15. Writing Regular Expression

           
