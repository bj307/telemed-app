import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css'],
})
export class SidebarUserComponent implements OnInit {
  ngOnInit(): void {
    this.open = true;
  }

  open = true;
  width = '300px';
  icon = 'chevron_left';
  marginBtn = '270px';
  transition = 'width .2s';
  transitionMargin = 'margin-left .2s';
  arrow = 'block';
  widthItem = '245px';
  colorText = '#0c1e35';
  backgroundColor = 'white';
  marginTop = '0';

  dropSide() {
    if (this.open) {
      this.colorText = 'white';
      this.backgroundColor = '#0d6efd';
      this.open = false;
      this.marginTop = '22px';
      this.widthItem = '50px';
      this.width = '70px';
      this.icon = 'chevron_right';
      this.marginBtn = '40px';
      this.arrow = 'none';
    } else {
      this.colorText = '#0d6efd';
      this.backgroundColor = 'white';
      this.open = true;
      this.marginTop = '0';
      this.widthItem = '245px';
      this.width = '300px';
      this.icon = 'chevron_left';
      this.marginBtn = '270px';
      this.arrow = 'block';
    }
  }
}
