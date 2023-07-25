import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/interface/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allMoments: Moment[] = []
  moments: Moment[] = []
  baseApiUrl = environment.baseApiUrl

  constructor(private momentService: MomentService) {
    this.momentService.getMoments().subscribe((itens) => {
      const data = itens.data;
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleString('pt-BR')
      })
      this.allMoments = data;
      this.moments = data;
    })
  }

  ngOnInit(): void {
      
  }

}
