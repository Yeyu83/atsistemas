import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorService {
  constructor(
    public snackBar: MatSnackBar,
    private zone: NgZone,
  ) { }

  public show(message: string): void {
    this.zone.run(() => {
      this.snackBar.open(message, 'x', { duration: 5000 });
    });
  }
}
