import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAdm } from 'src/app/interfaces/IAdm';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private router: Router) {}

  data?: string | null;
  adm!: IAdm;

  ngOnInit(): void {
    this.coletaData();
  }

  coletaData() {
    this.data = sessionStorage.getItem('adm_user');
    if (this.data !== null) {
      this.adm = JSON.parse(this.data);
    } else {
      this.router.navigate(['']);
    }

    console.log(this.adm);
  }
}
