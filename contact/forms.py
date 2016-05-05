from django import forms
from .models import Contact


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
        # send email using the self.cleaned_data dictionary
        pass
