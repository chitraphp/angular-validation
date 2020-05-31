import { FormGroup,AbstractControl,ValidatorFn } from '@angular/forms';


export function PasswordMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors){
            return;
        }
   
   if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
export function PhoneNumValidation(controlName:string){
    return(formGroup: FormGroup)=> {
      const control=formGroup.controls[controlName];
      const regEx='1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})';
      if(!regEx.match(control.value)){
          
          control.setErrors({mustMatch:true});
      } else{
          control.setErrors(null);
      }
    }
  }

  export function AgeRangeValidator(min:number,max:number,controlName:string){
      return(formGroup:FormGroup)=> {
          const control = formGroup.controls[controlName];
          if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
            control.setErrors({ageRange:true});
          } else{
            control.setErrors(null);
          }                     
      }
  }

//   export function ageRangeValidator(min: number, max: number): ValidatorFn {
//     return (control: AbstractControl): { [key: string]: boolean } | null => {
//         if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
//             return { 'ageRange': true };
//         }
//         return null;
//     };
//}

  