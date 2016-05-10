# from django.shortcuts import render
from django.core.urlresolvers import reverse_lazy
from .forms import ContactForm
from django.views.generic.edit import FormView
from django.contrib.messages.views import SuccessMessageMixin

# Create your views here.


class ContactView(SuccessMessageMixin, FormView):
    template_name = 'contact/contact.html'
    success_url = reverse_lazy('contact')
    success_message = "Your form has submitted successfully"
    form_class = ContactForm

    def form_valid(self, form):
        form.send_email()
        form.save()
        return super(ContactView, self).form_valid(form)

index = ContactView.as_view()

# def index(request):
#     return render(request, 'contact/contact.html', {})
