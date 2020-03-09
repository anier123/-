from django.db import models
from django.contrib.auth.models import AbstractUser
from DjangoUeditor.models import UEditorField


# Create your models here.

# 用户
class User(AbstractUser):
    img = models.ImageField(upload_to="userimg", verbose_name="头像")
    telephone = models.CharField(max_length=11, verbose_name="手机号")


# 分类
class Category(models.Model):
    name = models.CharField(max_length=20, verbose_name="分类名")

    def __str__(self):
        return self.name


# 轮播图
class Img(models.Model):
    img = models.ImageField(upload_to="goodimg", verbose_name="图片")


# 文章
class Article(models.Model):
    title = models.CharField(max_length=20, verbose_name="文章标题")
    body = UEditorField(imagePath="imgs/", width='100%')
    img_map = models.ImageField(upload_to="mapimg", verbose_name="文章配图")
    views = models.PositiveIntegerField(default=0, verbose_name="浏览量")
    click_on = models.PositiveIntegerField(default=0, verbose_name="点赞数")
    date_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="作者", related_name="users")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name="所属分类", related_name="categorys")

    def __str__(self):
        return self.title


# 评论
class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="评论人", related_name="uscomment")
    article = models.ForeignKey(Article, on_delete=models.CASCADE, verbose_name="所属文章", related_name="arcomment")
    content = models.CharField(max_length=500, verbose_name="评论内容")
    click_on = models.PositiveIntegerField(default=0, verbose_name="点赞数")
    date_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")

    def __str__(self):
        return self.user.name


