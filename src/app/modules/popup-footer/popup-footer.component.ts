import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MennuService } from 'src/app/shared/services/mennu.service';

@Component({
  selector: 'app-popup-footer',
  templateUrl: './popup-footer.component.html',
  styleUrls: ['./popup-footer.component.scss']
})
export class PopupFooterComponent implements OnInit {
  display = 'block';
  location  = '';
  myGroup: FormGroup;
  constructor( private fb: FormBuilder , private router: Router, private routes: ActivatedRoute, private mennu: MennuService) { }
  citys = [
    'An Giang',
    'Bà Rịa - Vũng Tàu',
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
    "Đắk Lắk",
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
    'Hải Phòng',
    "Hà Nội",
    "TP HCM"
  ];
  ngOnInit() {
    this.myGroup = this.fb.group({
      select: ['Tỉnh/Thành Phố', [Validators.required]]
    });
    this.location = this.routes.snapshot.params.city;
    if (this.location !== undefined) {
      this.router.navigate([`/mennu/${this.location}`]);
    }
  }
  onCloseHandled() {
    this.display = 'none';
  }
  openModal() {
    this.display = 'block';
 }
 OnSubmit() {
  const { select } = this.myGroup.value;
  this.mennu.setTextLocation(select);
  this.router.navigate([`/mennu/${select}`]);
 }
}
