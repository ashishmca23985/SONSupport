import { Injectable } from '@angular/core';
import { Department } from './department.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MasterPagesService {
  formData :Department;
  constructor(private fb: FormBuilder, private http:HttpClient) { }
  readonly rootURL = 'http://localhost:54277/api';

  list:Department[];

  getAllDepartment(){
    this.http.get(this.rootURL+'/department/DepartmentList')
    .toPromise()
    .then(res=>this.list = res as Department[]);
  }
  
  formModel = this.fb.group({
    dept_id: ['', Validators.required],
    dept_name: ['', Validators.required],
    dept_enabled:['', Validators.required]
  });


  addDepartment() {
    var body = {
      dept_name: this.formModel.value.dept_name,
      dept_enabled: this.formModel.value.dept_enabled,
    };
    return this.http.post(this.rootURL + '/department/CreateDepartment', body);
  }

  deleteDepartment(dept_id:number)
  {
    return this.http.delete(this.rootURL+'/department/DeleteDepartment?dept_id='+dept_id);
  }

  editDepartment(dept_id:number)
  {
    return this.http.get(this.rootURL+'/department/EditDepartment?dept_id='+dept_id);
  }

}
