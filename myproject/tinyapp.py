
from django.conf.urls import url
from django.http import HttpResponse

DEBUG = True
SECRET_KEY = '4l0ngs3cr3tstr1ngw3lln0ts0l0ngw41tn0w1tsl0ng3n0ugh'
ROOT_URLCONF = __name__
TEMPLATES = [{'BACKEND': 'django.template.backends.django.DjangoTemplates'},]



def home(request):
    color = request.GET.get('color', '')
    return HttpResponse('<h1 style="color:'+color+'">Welcome to the Tinyapp\'s Homepage!</h1>')



from django.template import engines
from django.template.loader import render_to_string

def about(request):
    title = 'Tinyapp'
    author = 'Suba'
    html = '''<!DOCTYPE html>
    <html>
    <head>
      <title>{{ title }}</title>
    </head>
    <body>
        <h1>About {{ title }} </h1>
        <p>This Website was developed by {{ author }}.</p>
        <p> <a href="{% url 'homepage' %} > Return to HomePage </a>.</p>
    </body>
    </html>'''

    django_engine = engines['django']
    template = django_engine.from_string(about_template)
    html = template.render({'title': title, 'author': author})
    return HttpResponse(html)


urlpatterns = [
   url(r'^$', home, name='homepage'),
   url(r'^about$', about),
 ]
