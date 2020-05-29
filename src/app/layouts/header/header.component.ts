import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/shared/services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MennuService } from "src/app/shared/services/mennu.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  myGroup: FormGroup;
  isLogin: boolean;
  userName: string;
  Form: FormGroup;
  selectValue: string;
  InfoUser;
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private mennu: MennuService
  ) {}
  items = [
    { link: "/", content: "giới thiệu" },
    { link: `/popup-footer`, content: "thực đơn" },
    { link: "/", content: "nhà hàng" },
    { link: "/", content: "khuyến mãi" },
    { link: "/", content: "nghề nghiệp" },
    { link: "/", content: "thư viện ảnh" },
    { link: "/member", content: "thành viên" }
  ];
  citys = [
    "Chọn Tỉnh/Thành Phố",
    "An Giang",
    "Bà Rịa - Vũng Tàu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cao Bằng",
    "ĐắkLắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang	Hà Nam",
    "Hà Tĩnh",
    "Hải Dương",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Quảng Bình	Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Tiền Giang",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái",
    "Phú Yên	Cần Thơ",
    "Đà Nẵng",
    "Hải Phòng",
    "Hà Nội",
    "TP HCM"
  ];
  ngOnInit() {
    this.myGroup = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(/\S+@\S+\.\S+/)]],
      password: ["", [Validators.required]]
    });
    this.Form = this.fb.group({
      select: [""]
    });
    this.auth.checkLogin().onAuthStateChanged((user) => {
      if (user) {
        this.isLogin = true;
        this.userName = user.email;
      } else {
        this.isLogin = false;
        this.userName = "null";
      }
    });
    this.mennu.textLocation.subscribe((data) => {
      if (data !== "") {
        this.Form.setValue({ select: data });
      } else {
        this.Form.setValue({ select: this.citys[0] });
      }
    });
  }
  OnSignUp() {
    const { email, password } = this.myGroup.value;
    this.auth
      .OnSignIn({ email, password })
      .then((result) => {
        this.userName = email;
        this.router.navigate(["/home"]);
      })
      .catch((error) => {
        alert("Sai tài khoản hoặc mật khẩu");
      });
  }
  OnSingOut() {
    this.auth
      .onLogout()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  onLocation() {
    this.selectValue = this.Form.value.select;
    this.items[1].link = `/popup-footer/${this.selectValue}`;
    this.mennu.setTextLocation(this.selectValue);
    if (this.router.url.includes("mennu")) {
      this.router.navigate([`/popup-footer/${this.selectValue}`]);
    }
  }
}
