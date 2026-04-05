import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    // Ganti dengan IP komputer kamu (bukan localhost)
    private apiUrl = 'http://192.168.100.124:8000/api';
    // Atau jika pakai php artisan serve:
    

    constructor(private http: HttpClient) { }

    register(name: string, email: string, password: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, {
            name: name,
            email: email,
            password: password
        });
    }

    login(email: string, password: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, {
            email: email,
            password: password
        });
    }
}