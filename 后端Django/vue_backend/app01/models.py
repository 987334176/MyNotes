from django.db import models

# Create your models here.


# 笔记的model
class Note(models.Model):
    title = models.CharField(max_length=32)  # 标题
    content = models.TextField()  # 原格式的笔记内容
    markedcontent = models.TextField()  # markdown格式的笔记内容
