import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { HttpHeaders } from '@angular/common/http';
import { CoronaService } from 'src/app/services/corona.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  providers: [ApiService],
})
export class MainPage implements OnInit {
  private loading: any;
  public estados = new Array<any>();
  countries: any;
 
  


  constructor(
    public modalCtrl: ModalController,
    private authService: AuthService,
    private router: Router,
    private corona: CoronaService,
    ) { this.getEstados();}
    
    ngOnInit() { }

  getEstados() {
    this.corona.getEstados().subscribe(data => {
     const res = (data as any);
     this.estados = this.estados.concat(res.data);
    })
  }
  map(){
    this.router.navigate(['/map'])
  }

  async logout() {
    
    try {
      await this.authService.logout();
      this.router.navigate(['/home']);
    } catch (error) {
      console.error(error);
    } finally {
      this.loading.dismiss();
    }
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}