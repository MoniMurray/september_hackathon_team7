from django import forms
from .models import Shop


class ShopForm(forms.ModelForm):        
    """
    Shop Form to add shop's details
    """

    class Meta:
        """
        This inner metaclass will define the Model and the fields
        to include
        """

        model = Shop
        # fields = "__all__"
        fields = ['shop_name', 'description', 'company_address', 'eircode', 'image', 'category', 'location']

        widgets = {
            'shop_name': forms.TextInput(),
            'description': forms.Textarea(),
            'company_address': forms.TextInput(),
            'eircode': forms.TextInput(),
            'image': forms.FileInput(),
        }

    def __init__(self, *args, **kwargs):
        """
        Override the init() method to make changes to some fields
        """
        super().__init__(*args, **kwargs)
