
import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-image-slider', 
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})


export class ImageSliderComponent {
  // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  images = [
    'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/239192996_104241825309045_9131423280994117155_n.png?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=5W9U4RUF42MAX9ASmSg&_nc_ht=scontent.fsof8-1.fna&oh=00_AT97q46I1yOaHF_bMnnn0D1hTxhKvzNoZLzLoI1AWt6rvA&oe=62C364CC',
    'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/271753163_142412481491979_8438857115149421914_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2bFSfappOsYAX_YT7SZ&tn=YyqB3XIB0fiXcwdJ&_nc_ht=scontent.fsof8-1.fna&oh=00_AT-uOCtjUxYIeut5AG5u9nNOWzVo44qs7JdxjNkjLoDO2Q&oe=62C30AAE',
    'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/290946283_176074008125826_1927827208197909867_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=BK9C_ovDikEAX9muXBF&tn=YyqB3XIB0fiXcwdJ&_nc_ht=scontent.fsof8-1.fna&oh=00_AT_aiCiAniGxFmOVitp0H8tejS-OOcWhC33rrXacTCHuRQ&oe=62C32381',
    'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/278789350_161626459570581_2992350188975923300_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=c1qRCS_5f3wAX8VZ8Ny&_nc_ht=scontent.fsof8-1.fna&oh=00_AT_C_VyK8nEgU8XH50nVIzywNalxhsqFbT9HcbUf_tTEGw&oe=62C473A5',
    'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/277750644_5368631563149418_9018043861627831684_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=gO_ms-rrx7IAX_hpUGw&tn=YyqB3XIB0fiXcwdJ&_nc_ht=scontent.fsof8-1.fna&oh=00_AT-evxbWOV6t_8n6MwQkTumKlr5cnxsyrQ_sO4a5nZeiTQ&oe=62C40F50',
    'https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/275510843_5306606799351895_8342753426505120523_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=4mJy2VGTWKUAX97W-c1&_nc_ht=scontent.fsof8-1.fna&oh=00_AT9u7K8JnQZVz58CFLrZb6oeALsZzqQFLhSZnEh7QOpvZw&oe=62C49331',
    
  ]

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}