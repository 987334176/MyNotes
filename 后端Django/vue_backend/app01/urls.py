#! /usr/bin/env python
# -*- coding: utf-8 -*-
# __author__ = "Q1mi"
# Date: 2018/6/30

from django.conf.urls import url
from app01 import views
urlpatterns = [
    url(r'^notes/', views.note_list),
    url(r'^add/', views.add),
    url(r'^delete/(\d+)', views.delete),
    url(r'^edit/', views.edit),
]