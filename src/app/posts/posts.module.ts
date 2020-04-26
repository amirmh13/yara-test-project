import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostsService } from './services/posts.service';
import { ShortSentenceModule } from '../shared/pipes/shortSentence/short-sentence.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [PostsComponent],
    imports: [
        CommonModule,
        PostsRoutingModule,
        ShortSentenceModule,
        RouterModule
    ],
    providers: [PostsService]
})
export class PostsModule {}