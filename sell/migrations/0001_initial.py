# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-04-09 09:41
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('price', models.PositiveSmallIntegerField(default=0)),
                ('description', models.TextField()),
                ('category', models.CharField(max_length=50)),
                ('created', models.DateTimeField(auto_now=True, verbose_name='date modified')),
            ],
        ),
    ]