import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../task-management/model/task.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient) {}

  fetchTasks() {
    return this.http.get<Task[]>(
      'https://angular-practice-6f5b3-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
    );
  }
}
