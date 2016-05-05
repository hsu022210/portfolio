# from django.shortcuts import render
from django.core.urlresolvers import reverse_lazy
from .forms import ContactForm
from django.views.generic.edit import FormView

# Create your views here.


class ContactView(FormView):
    template_name = 'theme/index.html'
    success_url = reverse_lazy('contact')
    form_class = ContactForm

    def form_valid(self, form):
        form.send_email()
        form.save()
        return super(ContactView, self).form_valid(form)

contact = ContactView.as_view()
