import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class LoaderService {
  count: number = 0;
    isLoading = new Subject<boolean>();
    show() {
      this.count = this.count + 1;
        this.isLoading.next(true);
    }
    hide() {
      this.count = this.count - 1;
      if (this.count <= 0) {
        this.count = 0;
        this.isLoading.next(false);
      }
       
    }
}
