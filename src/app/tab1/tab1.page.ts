import { Component } from '@angular/core';
import anime from 'animejs/lib/anime.es';
import { BitcoinService } from '../services/bitcoin.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  ammount: string;
  price: string;

  constructor(public bitcoinService: BitcoinService) {}

  ngOnInit() {
    this.bitcoinService.getPrice().subscribe(data => {
      this.bitcoinService.getExchangeRate().subscribe(dataRate => {
        this.price = (parseFloat(data["bpi"]["USD"]["rate_float"])
         * parseFloat(dataRate["observations"][0]["FXUSDCAD"]["v"])).toString();
         this.animePrice();
      })
    })
  }

  calculateAmmount() {
    let current_ammount = (parseFloat(this.ammount)*parseFloat(this.price))
    this.bitcoinService.toastDiplayer("Hi, you have " + (current_ammount.toFixed(2)|| "0") + "$ have a great day !")
    this.animeNumber(current_ammount);
    }

  private animePrice() {
    anime({
      targets: '.animated-price',
      translateX: {
        value: 110,
        duration: 800
      },
      rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
      },
      scale: {
        value: 1.8,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
      },
      delay: 250 });
      this.animeNumber(parseFloat(this.price));
    }

  private animeNumber(number: number) {
    anime({
      targets: '.price',
      innerHTML: [0, number],
      easing: 'linear',
      duration: 2800,
      round: 100,
      color: '#7044ff'
    });
  }

}
