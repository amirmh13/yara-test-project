import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'posts', loadChildren: './posts/posts.module#PostsModule' },
    {
        path: 'posts',
        children: [
            { path: ':id', loadChildren: './post/post.module#PostModule' }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}