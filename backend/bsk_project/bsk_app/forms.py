from django import forms

class MoistureLevelForm(forms.Form):
    moisture_level = forms.IntegerField(
        label='Moisture Level',
        min_value=0,
        max_value=100,
        help_text='Enter the new moisture level for the FlowerPot'
    )
