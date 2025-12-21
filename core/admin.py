from django.contrib import admin
from .models import Staff, Department, Donation
# Register your models here.
admin.site.register(Staff)
admin.site.register(Department)
admin.site.register(Donation)