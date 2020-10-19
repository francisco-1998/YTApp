import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../models/youtube.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos: Video[] = [];

  constructor(private YTservice: YoutubeService) { }

  ngOnInit(): void {
    this.cargarVideos();
  }

  cargarVideos(){
    this.YTservice.getVideos().subscribe(resp => {
      console.log(resp);
      this.videos.push(...resp)
    })
  }

}
