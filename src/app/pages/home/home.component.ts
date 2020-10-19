import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private YTservice:YoutubeService) { }

  ngOnInit(): void {
    this.YTservice.getVideos().subscribe(videos=>{
      console.log(videos);
    })
  }

}
