// Post service
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    private readonly baseUrl: string = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) {}

    getAllPosts() {
        return this.http.get(`${this.baseUrl}`)
    }

    getPost(id: string) {
        return this.http.get(`${this.baseUrl}/${id}`)
    }
}