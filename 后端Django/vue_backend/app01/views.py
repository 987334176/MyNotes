from django.shortcuts import render
from app01 import models
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


def note_list(request):  # 笔记列表
    ret = {"code": 0}
    data = list(models.Note.objects.all().values("id", "title", "content", "markedcontent"))
    ret["data"] = data
    return JsonResponse(ret)


@csrf_exempt
def add(request):  # 添加笔记
    print(request.POST)
    ret = {"code": 0}
    title = request.POST.get("title")
    content = request.POST.get("content")
    markedcontent = request.POST.get("markdownContent")
    obj = models.Note.objects.create(
        title=title,
        content=content,
        markedcontent=markedcontent
    )
    ret["data"] = {
        "id": obj.id,
        "title": title,
        "content": content,
        "markedcontent": markedcontent
    }
    return JsonResponse(ret)


def delete(request, delete_id):  # 删除笔记
    print(delete_id)
    ret = {"code": 0}
    models.Note.objects.filter(id=delete_id).delete()
    return JsonResponse(ret)


@csrf_exempt
def edit(request):  # 修改笔记
    ret = {"code": 0}
    edit_id = request.POST.get("id")
    title = request.POST.get("title")
    content = request.POST.get("content")
    markedcontent = request.POST.get("markdownContent")
    models.Note.objects.filter(id=edit_id).update(
        title=title,
        content=content,
        markedcontent=markedcontent
    )
    return JsonResponse(ret)
