from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ToDoSerializer
from .models import ToDo


@api_view(["GET", "POST"])
def todo_list(request):
    if request.method == "GET":
        todos = ToDo.objects.all()
        for todo in todos:
            todo.created_on = "iba format"
        serializer = ToDoSerializer(todos, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        serializer = ToDoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serrializer.data, status=status.HTTP_201_CREATED)
        return Response(serrializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET", "PUT", "DELETE"])
def todo_detail(request, pk):
    try:
        todo = ToDo.objects.get(pk=pk)
    except ToDo.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = ToDoSerializer(todo)
        return Response(serializer.data)

    elif request.method == "PUT":
        serializer = ToDoSerializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        return Response(serializer.error, status=status.HTTP_404_BAD_REQUEST)
    
    elif request.method == "DELETE":
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
