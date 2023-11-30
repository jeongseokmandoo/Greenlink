from .models import Notification




def refresh_notifications(user):
    notification = user.notifications.all()
q