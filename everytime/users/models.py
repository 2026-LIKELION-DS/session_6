from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # ENTRY_YEAR_CHOICES = [
    #     (2020, "2020년"),
    #     (2021, "2021년"),
    #     (2022, "2022년"),
    #     (2023, "2023년"),
    #     (2024, "2024년"),
    #     (2025, "2025년"),
    # ]

    # entry_year = models.IntegerField(null=True, blank=True, default=2025, choices=ENTRY_YEAR_CHOICES)
    # 입학연도는 프론트엔드 보고 구성

    school = models.CharField(max_length=50)
    email = models.CharField(max_length=30, unique=True, null=False, blank=False)
    nickname = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return f'{self.username}'