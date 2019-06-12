import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

export class BitcoinService {

  API_URL_BITCOIN = "https://api.coindesk.com/v1/bpi/currentprice.json"
  API_URL_EXCHANGE_RATE = "https://www.bankofcanada.ca/valet/observations/FXUSDCAD/json?recent=1"

  constructor(private http: HttpClient, public toastController: ToastController) { }

  getPrice() {
    return this.http.get(this.API_URL_BITCOIN);
  }

  getExchangeRate() {
    return this.http.get(this.API_URL_EXCHANGE_RATE);
  }

  async toastDiplayer(text_diplayed: string) {
    const toast = await this.toastController.create({
      message: text_diplayed,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
