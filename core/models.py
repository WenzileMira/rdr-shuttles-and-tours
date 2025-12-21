from django.db import models
from django.conf import settings
from location_field.models.plain import PlainLocationField
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.
DEPARTMENTS = (
    ('Cordination and Control', 'Cordination and controll'),
    ('First Aid',  'First Aid'),
    ('Food Security', 'Food Security'),
    ('Remedial', 'Remedial'),
    ('Health', 'Health')
)
class Department(models.Model):
    hod = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, choices=DEPARTMENTS)
    description = models.TextField()
    
    def __str__(self):
        return self.title

class Staff(models.Model):
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    department_id = models.ForeignKey(Department, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField();
    address = PlainLocationField(based_fields=['city'], zoom=7, default='0, 0')
    birth_date = models.DateField()
    contact = PhoneNumberField(blank=True, region="SZ")
    
    def __str__(self):
        return str(self.id) + " " +self.first_name

class Donation(models.Model):
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    amount = models.FloatField()
    date_deposited = models.DateTimeField()
    refrence = models.TextField()
    
    def __str__(self):
        return self.username
    