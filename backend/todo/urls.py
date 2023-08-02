from django.urls import path
from . import views

urlpatterns = [
    path("api/todos/", views.todo_list),
    path("api/todo/<int:pk>/", views.todo_detail)
]
