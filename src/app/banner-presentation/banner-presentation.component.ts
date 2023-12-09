import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-presentation',
  templateUrl: './banner-presentation.component.html',
  styleUrls: ['./banner-presentation.component.scss']
})
export class BannerPresentationComponent implements OnInit {
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: 'https://numeum.fr/sites/default/files/2023-06/tablette%20stats.png',
    };
    this.slides[1] = {
      src: 'https://salon-du-numerique.fr/wp-content/uploads/2021/01/les-nouveaux-metiers-du-numerique.jpg',
    }
    this.slides[2] = {
      src: 'https://esante.gouv.fr/sites/default/files/styles/1280_x_720_16_9_hd_landscape/public/2022-01/IMG_Accompagnement.jpeg?itok=FNpF9PKh',
    }
  }

  onItemChange($event: any): void {
    //console.log('Carousel onItemChange', $event);
  }
}
