import { Subject } from 'rxjs-compat';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class PostService {
    error = new Subject<string>();
    constructor(private http: HttpClient) {}

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title, content };
        // Send http request
        return this.http
            .post<{ name: string }>(
                'https://angular-practice-6f5b3-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
                postData
            )
            .subscribe(
                (post) => {
                    console.log({ post });
                },
                (error) => {
                    this.error.next(error.message);
                }
            );
    }

    fetchPosts() {
        return this.http
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
            );
    }

    deletePosts() {
        return this.http.delete(
            'https://angular-practice-6f5b3-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
        );
    }
}
