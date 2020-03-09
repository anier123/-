from django.shortcuts import render
from django.shortcuts import get_object_or_404
from .models import *
from rest_framework import viewsets
from .serializers import *
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import mixins
from rest_framework import permissions


# Create your views here.

class CategoryViewSets(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    # 用户未登录不显示
    # permission_classes = [permissions.IsAdminUser]
    def get_permissions(self):
        if self.action == "create" or self.action == "update" or self.action == "partial_update" or self.action == "destroy":
            return [permissions.IsAdminUser()]
        else:
            return []


class ArticleViewSets(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    # 设置权限，必须登录才能发表文章
    # def get_permissions(self):
    #     if self.action == "create" or self.action == "update" or self.action == "partial_update" or self.action == "destroy":
    #         return [permissions.IsAdminUser()]
    #     else:
    #         return []


class ImgViewSets(viewsets.ModelViewSet):
    queryset = Img.objects.all()
    serializer_class = ImgSerializer


class UserViewSets(viewsets.GenericViewSet, mixins.CreateModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin,
                   mixins.DestroyModelMixin):
    """
    声明用户资源类，用户操作：获取个人信息  更新个人信息 删除账户
    使用action属性判定http方法 确定序列化类
    """
    queryset = User.objects.all()

    # def get_serializer_class(self):
    #     if self.action == 'create':
    #         return UserRegistSerializer
    #     return UserSerializer
    serializer_class = UserSerializer

    @action(methods=["POST"], detail=False)
    def regist(self, request):
        seria = UserRegistSerializer(data=request.data)
        seria.is_valid(raise_exception=True)
        seria.save()
        return Response("创建成功")


class CommentViewSets(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
