import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YoutubeResponse } from '../models/youtube.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private ytUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyARevbBHxF8SExzJ50K8EVpXsQ-ZkOQTzM';
  private playlist = 'UUyQqzYXQBUWgBTn4pw_fFSQ';
  private nextPageToken = '';


  constructor(private http: HttpClient) { }


  getVideos() {

    const url = `${this.ytUrl}/playlistItems`;
    const params = new HttpParams()
      .set('playlistId', this.playlist)
      .set('part', 'snippet')
      .set('key', this.apiKey)
      .set('maxResults', '10')

    return this.http.get<YoutubeResponse>(url, { params: params }).pipe(
      map(resp => {
        this.nextPageToken = resp.nextPageToken;
        return resp.items;
      }),
      map(items => {
        return items.map(video => {
          return video.snippet;
        })
      })
    )
  }

}


// https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyARevbBHxF8SExzJ50K8EVpXsQ-ZkOQTzM&playlistId=UUyQqzYXQBUWgBTn4pw_fFSQ&maxResults=10
