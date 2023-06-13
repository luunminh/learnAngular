import { PostService } from './post.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    loadedPosts = [];
    isLoading = true;
    error = null;
    subErr: Subscription;
    constructor(private http: HttpClient, private postService: PostService) {}

    ngOnInit(): void {
        this.subErr = this.postService.error.subscribe((errorMessage) => {
            this.error = errorMessage;
        });

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
        this.postService.createAndStorePost(postData.title, postData.content);
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

    ngOnDestroy(): void {
        this.subErr.unsubscribe();
    }
}
