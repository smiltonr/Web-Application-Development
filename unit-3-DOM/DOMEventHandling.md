
# DOM Event Handling - Read Chapter 12 of JavaScript Pocket Reference

1. Javascript API for DOM

2. Event Handling with the help of DOM tree manipulation

3. DOM for form validation 

4. DOM Manipulation
  
          1.Attribute
      
          2.Style property
      
          3.Removing or Inserting elements
      
          4.Validating correctness of element
      
          5.Navigation of DOM tree
 
 6. Node - Generic object 
      
         1. Document Object
         
         2. Element Object - most often interest 
 
 7. Event 
  
         1. onmouseover
         
         2. onmousehover 
         
         
 8. Events 
      
         1. mouse over
         
         2. mouse out
         
         3. Focus
         
         4. Blur
         
         5. Load and Unload
         
         6. Form Event 
         
         7. Key Event
         
         8. Mouse Event 
         
 
 9. Events associated to elements in DOM.

10. Elements trigger events.
 
11. Element object in which event occurs - Target element

12. Function to be called - event handler on triggering on an element

13. Register Event Handler passing Event Object

                  1. Event type
                  2. Event Target
                  3. Event Handler

14. Several ways to add Event Handler 
                
                  1. addEventListener
                            
                             element.addEventListener(event, function, useCapture);
                              
                              useCapture -true capture , false -bubbling event listener 
                              When event listener is capture - more precedence
                                                     bubbling - less precedence 
                             
                  2. attachEvent

                             element.attachEvent(event, function);

   
15. Event object 
        
                 1. Event type
                 2. Target element
                 3. Event Listener/Handler
 
 
16.  Event Processing 
               
                To many event handlers to the enclosing parent nodes to the element with another event handler.
                We need to process the events - Event Processing
 
 
17.  Registering several event listener to same element.

18.  Order Precedence - Event processing.

19.  Browser window 

     Contains - 
                
                Document Object
                
                Element Object
       
20. Event target matters.

    Two types of Event handler
    
              1. Bubbling event handler
              2. Capture event handler 
              
              Capture precedence over bubbling
              
              
              Non bubbling 
                
                      1. load
                      2. unload 
                      3. focus
                      4. blur 
              

21. Binding Event type with event object when Event is registered.

22. Specific Topic - Todays topic 

# Event Propagation 

Registering an event listener same type to ancestor and the particular element - 

Element listener is applicable to all its enclosing outer elements. 

Order of precedence 
 
                1. Event Bubbling
                2. Top down 
                3. Both bubbling and inner nesting - More precedence to capture over bubbling 
                4. Same target - different listener - order of registering 
                
 properties 
               1. eventPhase()
               2. currentTarget()
               3. Event Cancellation - stopPropagation() - Prevent Default handler from invocation
                                       stopImmediatePropagation()
                                   
               Bubbling event handler - Default event handler 
               Capturing event handler - Specific event handling 
               
 # Form Validation 
  
             validate - satisfying required condition
              
                        Return false when fails 
                        Return true when valid 
                        
                        
      
               

                
