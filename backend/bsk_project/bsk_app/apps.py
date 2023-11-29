from django.apps import AppConfig


class BskAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'bsk_app'

    def ready(self):
        import bsk_app.signals