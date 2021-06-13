import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public userRegister: User ={};
  public loading: any;
  
  constructor(
    private router: Router,
    public modalCtrl: ModalController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  async register() {
    await this.presentLoading();
    
    try {
      await this.authService.register(this.userRegister)
      this.router.navigate(['/main']);
      
    } catch (error) {
      this.presentToast(error.message);
      this.userRegister.email = "";
      this.userRegister.password = "";
    }
    finally{
      this.modalCtrl.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Carregando...',
      duration: 2000,
    });
    return this.loading.present();
  }


  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }


  async dismiss() {
    return await this.modalCtrl.dismiss();
  }

}