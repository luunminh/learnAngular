import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({ providedIn: 'root' })
export class SnackbarService {
    constructor(private snackbar: MatSnackBar) {}

    onOpenSnackBar(
        title: string,
        action: string = 'Close',
        duration: number = 1000
    ) {
        this.snackbar.open(title, action, {
            duration: duration,
        });
    }
}
