import { Component, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';
import { Post } from './Post';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

    posts: Post[];

    constructor(private postsService: PostsService) {}

    // Get all posts
    getAllPosts(): void {
        this.postsService.getAllPosts().subscribe((res: Post[]) => {
            this.posts = res;
        })
    }

    ngOnInit(): void {
        this.getAllPosts();
    }

}