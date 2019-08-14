import { Observable, Subject } from 'rxjs';
import { FormGroup } from "@angular/forms";

export class DialogRef {
  constructor() {}

  close(result?: any) {
    this._afterClosed.next(result);
  }

  private readonly _afterClosed = new Subject<any>();
  afterClosed: Observable<any> = this._afterClosed.asObservable();

  public markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  public validateForm = (supplierForm: FormGroup): boolean => {
    if (supplierForm.status !="INVALID") {
      return true;
    }
    this.markFormGroupTouched(supplierForm);
    return false;
  }
}
