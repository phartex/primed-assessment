import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  
  getOpenTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/openTasks`);
  }
  getInProgressTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/InProgressTasks`);
  }
  getPendingTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Pending`);
  }
  getCompletedTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Completed`);
  }

  addTask(task: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/openTasks`, task);
  };

  deleteTask(id: number): Observable<void> {
    const url = `${this.baseUrl}/openTasks/${id}`;
    return this.http.delete<void>(url);
  }

  
}
