import { Component } from '@angular/core';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'World!';
  isLoading = true;

  todoList: number[] = [];

  imageUrl = 'https://i.pinimg.com/originals/86/fa/6d/86fa6d395c5b7bf112382887cb94620c.jpg';

  isActive = true;

  email: string;

  amount = 123456.785;

  today = new Date();

  user = {
    name: 'John Snow',
    age: 20,
    isAdmin: false,
  };

  constructor(
    private todoService: TodoService
  ) {
    this.todoList = this.todoService.getTodoList();
  }

  onClickOkButton(event) {
    console.log(event);
  }

  search(email: string) {
    console.log('search', email);
  }
}
