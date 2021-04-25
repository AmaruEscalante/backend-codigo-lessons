from django.db import models
from django.utils.translation import gettext_lazy as _
from datetime import timedelta

from django.core.exceptions import ValidationError
from django.utils import timezone
# Create your models here.


class Course(models.Model):
    """ Course model. """
    name = models.CharField(max_length=100,
                            help_text='Course name',
                            null=False)


class Tutor(models.Model):
    """
        Tutor model.
    """
    first_name = models.CharField(max_length=100, blank=False)
    last_name = models.CharField(max_length=100, blank=False)
    email = models.EmailField(blank=False)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Booking(models.Model):
    """
        Booking model.
    """
    class Status(models.TextChoices):
        REQUESTED = 'REQUESTED', _('Solicitado')
        CONFIRMED = 'CONFIRMED', _('Confirmado')
        PAYED = 'PAYED', _('Pagado')
        CANCELLED = 'CANCELLED', _('Cancelada')

    student = models.EmailField(blank=False)

    course = models.ForeignKey(to=Course,
                               on_delete=models.CASCADE,
                               related_name='bookings',
                               db_column='course')
    subject = models.CharField(max_length=100,
                               blank=False,
                               )

    status = models.CharField(max_length=20, choices=Status.choices, default=Status.REQUESTED, blank=False)

    duration_h = models.DurationField(blank=False)

    def past_date(value):
        """Date cannot be in the past."""
        if value < timezone.now():
            raise ValidationError(_('La clase no se puede dar en el pasado.'))

    def too_near(value):
        """Bookings should be made at least with two hours of anticipation."""
        hours = 2
        time = timedelta(hours=hours)
        now = timezone.now()
        limit = now + time
        if value < limit:
            raise ValidationError(_(f'Debes pedir tu clase con {hours}h de anticipación'))

    date = models.DateTimeField(blank=False,
                                validators=[past_date, too_near])

    tutor = models.ForeignKey(to=Tutor,
                              blank=True,
                              related_name='bookings',
                              on_delete=models.CASCADE,
                              db_column='tutor')

    def __str__(self):
        return _(f"Clase de {self.subject} para {self.student}")

