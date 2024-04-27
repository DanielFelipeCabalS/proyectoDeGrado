import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  home() {
    this.router.navigateByUrl('/home');
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registro Exitoso',
      duration: 2000
    });

    await toast.present();
  }

}
