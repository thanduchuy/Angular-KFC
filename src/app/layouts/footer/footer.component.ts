import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  items = [
    {
      link: '#',
      content: 'chính sách và quy định chung'
    },
    {
      link: '#',
      content: 'chính sách hoạt động'
    },
    {
      link: '#',
      content: 'chính sách bảo mật thông tin'
    },
    {
      link: '#',
      content: 'liên hệ'
    }
  ];
  infos = [
    'CÔNG TY LIÊN DOANH TNHH KFC VIỆT NAM',
    'Số 292 Bà Triệu, P.Lê Đại Hành, Q.Hai Bà Trưng, Hà Nội.',
    'Điện thoại: (028) 38489828 | Email: lienhe@kfcvietnam.com.vn',
    'Mã số thuế: 0100773885 | Ngày cấp: 29/10/1998 - Nơi cấp: Cục Thuế Thành Phố Hà Nội'
  ];
  ngOnInit() {
  }

}
