import { Component, OnInit } from '@angular/core';
import { Post } from '../posts/Post';
import { PostsService } from '../posts/services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    post: Post;

    constructor(private postsService: PostsService, private route: ActivatedRoute) {}

    // Get post by id
    getPost(id: string) {
        this.postsService.getPost(id).subscribe((res: Post) => {
            this.post = res;
        })
    }

    ngOnInit() {
        // Get params id from route
        this.route.params.subscribe((params: any) => {
            if (params['id']) {
                this.getPost(params['id']);
            }
        })
    }

}