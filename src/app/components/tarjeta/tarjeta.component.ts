import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Video } from '../../models/youtube.model';
import Swal from 'sweetalert2'
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() lista: Video;

  constructor(private YTservice: YoutubeService) { }

  ngOnInit(): void {
    console.log();
  }

  verVideo(video: Video) {
    console.log(video);
    Swal.fire({
      html:
        `
      <h4>${video.title}</h4>
      <hr>
      <iframe width="100%"
               height="315"
               src="https://www.youtube.com/embed/${video.resourceId.videoId}"
               frameborder="0"
               allow="accelerometer;
               autoplay;
               clipboard-write;
               encrypted-media;
               gyroscope;
               picture-in-picture"
               allowfullscreen>
        </iframe>
        `,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
    })
  }

}
