import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
      // Deklarasi semua property yang dibutuhkan
    email: string = '';           // ← INI YANG KURANG
    isEmailInvalid: boolean = false;
    emailValue: string = '';      // Sebenarnya bisa pakai email saja

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

    // Fungsi validasi email
    validateEmail() {
        if (!this.email) {
            this.isEmailInvalid = false;
            return;
        }
        const emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
        this.isEmailInvalid = !emailPattern.test(this.email);
    }

    // Fungsi dipanggil saat input berubah
    onEmailChange(event: any) {
        this.email = event.detail.value;
        this.validateEmail();
    }

  goRegister() {
    this.router.navigate(['/login']);

  }
  goToLogin() {
    this.router.navigate(['/login'])
  }

}
