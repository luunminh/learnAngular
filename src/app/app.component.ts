import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    loadedPosts = [];
    isLoading = true;
    error = null;

    constructor(private http: HttpClient, private postService: PostService) {}

    ngOnInit(): void {
        this.isLoading = true;
        this.postService.fetchPosts().subscribe(
            (posts) => {
                this.loadedPosts = posts;
                this.isLoading = false;
                console.log({ posts });
            },
            (error) => {
                this.error = error.message;
                console.log(error);
            }
        );
    }

    onCreatePost(postData: Post) {
        this.postService
            .createAndStorePost(postData.title, postData.content)
            .subscribe((resData) => {
                console.log(resData);
            });
    }

    onFetchPosts() {
        //send http request
        this.isLoading = true;
        this.postService.fetchPosts().subscribe(
            (posts) => {
                this.loadedPosts = posts;
                this.isLoading = false;
                console.log({ posts });
            },
            (error) => {
                this.error = error.message;
                console.log(error);
            }
        );
    }

    onClearPosts() {
        this.postService.deletePosts().subscribe(() => {
            this.loadedPosts = [];
        });
    }
}
