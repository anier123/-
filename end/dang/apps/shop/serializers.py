from rest_framework import serializers
from .models import *


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = "__all__"


class CategorySerializer(serializers.Serializer):
    """
    序列化类
    """
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=20, min_length=3, error_messages={
        "max_length": "长度过长",
        "min_length": "长度过短"
    })
    categorys = ArticleSerializer(many=True, read_only=True)

    def create(self, validated_data):
        """
        重写create方法，自定义创建方式
        :param validated_data:
        :return:
        """
        instance = Category.objects.create(**validated_data)
        return instance

    def update(self, instance, validated_data):
        """
        重写更新方法update
        :param instance:
        :param validated_data:
        :return:
        """
        instance.name = validated_data.get("name", instance.name)
        instance.save()
        return instance


class ImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = Img
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = "__all__"
        exclude = ['user_permissions']

    def validate(self, attrs):
        from django.contrib.auth import hashers
        attrs["password"] = hashers.make_password(attrs["password"])
        return attrs


class UserRegistSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=20, min_length=2, error_messages={
        "max_length": "太长了",
        "min_length": "太短了"
    })
    password = serializers.CharField(max_length=12, min_length=6, error_messages={
        "max_length": "太长了",
        "min_length": "太短了"
    })
    password2 = serializers.CharField(max_length=12, min_length=6, error_messages={
        "max_length": "太长了",
        "min_length": "太短了"
    })
    img = serializers.ImageField()

    def validate_password2(self, data):
        if data != self.initial_data["password"]:
            raise serializers.ValidationError("两次密码不一致")
        else:
            return data

    def validate(self, attrs):
        del attrs["password2"]
        return attrs

    def create(self, validated_data):
        return User.objects.create_user(username=validated_data.get("username"), email=validated_data.get("email"),
                                        password=validated_data.get("password"))


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"
