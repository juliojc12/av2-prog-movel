import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public userLogin: User = {};
  private loading: any;
  

  constructor(
    public modalCtrl: ModalController,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async login() {

    await this.presentLoading();
    
    try {
      await this.authService.login(this.userLogin);
      this.router.navigate(['/main']);
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.modalCtrl.dismiss();
    }
  }
   
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...', duration:2000 });
    return this.loading.present();
  }
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
