# DJANGO INTRODUCTION

1. Model Template View

          URLMapper/Routing
          View
          Template
          Model
          Form
          
          
         URL - two parts 
                            Host 
                            Port
         Web server  - URL host 
          
                           www.example.com/index.html               Locate server
                           http://localhost:8080/admin/index.html   Locate the file in server 
         
         What comes after host and port  - URL 
         
         Response contains metadata- contains the dynamic content 
         
         For which URL corresponding view function - URL routing/mapping
         
         Variable - urlmapper - urlpatterns variable 
         
         urls.py 
         
         settings.py - entry point 
         
         One configuration directory  - settings.py , urls.py
         One or Many application directory - 
         
         Relative path  with respect to the home directory of the application 
         
         mysite.url
         mysite.settings
         myapp.model - pyrhon 
         myapp/models.py - dir
         myapp.admin- python 
         myapp/admin.py 
         
         
         
         HTML 
          
              Control variable
              Control Structures 
              
          settings.py - where are the template directories - specified 
          
          Values for the template - passed by the index - view function 
          
          Converts from htmltemplate page to html 
          
          django.view import render
          
          Variables - number string or dict 
          
          static files are stored in a variable staticfiles_dirs 
          
          
          Model ---- DB table 
          
          ORM 
          
          
          
          
         
                           

2. Ease of management - separation as MTV

3. startProject and startLayout

                   manage.py

                   mysite - configuration directory
                   top mysite - main directory

                   Conversion to python source - to a package add init.py to it

                   Lookup URL mapping
                   Count them

                   Write Django Web application in one file


View function takes HTTPRequest object
and Returns HTTPResponse object


HTML Template - Template variables

Rendering converts the rendering

Template variables are passed as dictionary -

Values comes from the states -

Few database changes are required for view function

View function - retrieves the data from database and renders in Template

Models - database tables

# Today's Focus - How to define tables

1. Abstraction to the database tables - Models

2. Class in python - No table schema

3. Row corresponds to the instance of the class.

4.  ORM  -=- Model 

5. Template refers to the query result 


# Question Possible 


Name and Mark - 

Query - 
Question - Filter when marks >= 50

Query Result - list(that QueryResult object)


Dictionary creation - 

               Key pass mark 
               value  - query result 
               
               
              Template  - 
              
                       Render the result of query Name and Mark as a __table__ 
 
Show an image

3 two marks in Django and rest from Js



                       
                       
