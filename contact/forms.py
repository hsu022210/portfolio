from django import forms
from .models import Contact
from django.core.mail import send_mail
from django.conf import settings


class ContactForm(forms.Form):
    name = forms.CharField()
    email = forms.EmailField()
    message = forms.CharField(widget=forms.Textarea)

    def save(self):
        data = self.cleaned_data
        Contact.objects.create(
            name=data['name'],
            email=data['email'],
            message=data['message'],
        )

    def send_email(self):
        data = self.cleaned_data
        name = data['name']
        emailFrom = data['email']
        message = data['message']
        subject = '{} sent a message from my website'.format(name)
        content = 'name: {}\n\nmessage: {}\n\nemail: {}'.format(name, message, emailFrom)
        emailTo = [settings.EMAIL_HOST_USER]
        send_mail(subject, content, emailFrom, emailTo, fail_silently=False)
