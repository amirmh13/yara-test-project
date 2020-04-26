import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { PostsService } from '../posts/services/posts.service';

@NgModule({
    declarations: [PostComponent],
    imports: [
        CommonModule,
        PostRoutingModule
    ],
    providers: [PostsService]
})
export class PostModule {}