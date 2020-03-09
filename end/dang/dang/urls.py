"""dang URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from .settings import MEDIA_ROOT
from django.views.static import serve
from rest_framework import routers
from shop.views import *
# 引入DRF自带的路由
from rest_framework.documentation import include_docs_urls
from rest_framework_simplejwt.views import token_obtain_pair,token_refresh

router = routers.DefaultRouter()

router.register("categorys", CategoryViewSets)
router.register("articles", ArticleViewSets)
router.register("imgs", ImgViewSets)
router.register("users", UserViewSets)
router.register("comments", CommentViewSets)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('ueditor/', include('DjangoUeditor.urls')),
    # 图片导入
    url(r'^media/(?P<path>.*)$', serve, {'document_root': MEDIA_ROOT}),

    url(r'^obtaintoken/$', token_obtain_pair, name="login"),
    url(r'^$refreshtoken/', token_refresh, name="refresh"),

    # 配置RestFulAPI
    path('api/v1', include(router.urls)),
    # API文档地址
    path('api/v1/desc/', include_docs_urls(title="RestFulAPI", description="RestFulAPI v1")),
    path('', include('rest_framework.urls'))
]
