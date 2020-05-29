import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HomeService } from 'src/app/shared/services/home.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private home: HomeService) { }
  inputs = [
    {
      name: 'name',
      value: 'Họ và tên',
      type: 'text'
    },
    {
      name: 'email',
      value: "Email",
      type: 'text'
    },
    {
      name: 'password',
      value: "Mật khẩu",
      type: 'password'
    },
    {
      name: 'repeatPassword',
      value: "Lặp lại mật khẩu ",
      type: 'password'
    }
  ];
  checkboxs = [
    {
      name: 'genderMale',
      value: 'Nam'
    },
    {
      name: 'genderFemale',
      value: 'Nữ'
    }
  ];
  dropdowns = [
    {
      name: 'day',
      value: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]
    },
    {
      name: 'month',
      value: ["1","2","3","4","5","6","7","8","9","10","11","12"]
    },
    {
      name: 'year',
      value: ["1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002"]
    }
  ];
  ngOnInit() {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      genderMale: ['', Validators.required],
      genderFemale: ['', Validators.required],
      day: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      phone: ['', Validators.required],
      rules1: ['', Validators.required],
      rules2: ['', Validators.required],
    });
  }
  onRegister() {
    const { name, email, password, repeatPassword, genderMale, genderFeMale , day, month, year, phone, rules1, rules2} = this.formGroup.value;
    if(rules1  && rules2 ) {
      if (password !== repeatPassword) {
        alert('mật khẩu nhập lại không đúng');
      } else {
        this.auth.onRegister({email, password}).then(res => {
          alert('Bạn đã đăng ký thành công');
          let user= new User(name, email, genderMale, day, month, year, phone);
          this.onAddInfoUser(email,user);
        }).catch(err => {
          console.log(err);
        });
      }
    } else {
      alert('Vui lòng chấp nhận điều khoản!!!!');
    }
  }
  onAddInfoUser(email, user: User) {
    this.home.setDataUser(email, user).then(rer => {
      console.log(rer);
    }).catch(err => {
      console.log(err);
    });
  }
}
