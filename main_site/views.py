from django.shortcuts import render
from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = 'main_site/home.html'


class AboutPageView(TemplateView):
    template_name = 'main_site/about.html'


class ServicePageView(TemplateView):
    template_name = 'main_site/services.html'


class ContactPageView(TemplateView):
    template_name = 'main_site/contact.html'
