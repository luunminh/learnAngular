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

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.fetchPosts();
    }

    onCreatePost(postData: Post) {
        // Send http request
        this.http
            .post<{ name: string }>(
                'https://angular-practice-6f5b3-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
                postData
            )
            .subscribe((resData) => {
                console.log(resData);
            });
    }

    onFetchPosts() {
        //send http request
        this.fetchPosts();
    }

    private fetchPosts() {
        this.http
            .get<{ [key: string]: Post }>(
                'https://angular-practice-6f5b3-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
            )
            .pipe(
                map((responseData) => {
                    const postsArr: Post[] = [];
                    for (const key in responseData) {
                        //check key is not prototype
                        if (responseData.hasOwnProperty(key)) {
                            postsArr.push({ ...responseData[key], id: key });
                        }
                    }
                    return postsArr;
                })
            )
            .subscribe((posts) => {
                this.loadedPosts = posts;
                console.log({ posts });
            });
    }

    onClearPosts() {}
}
