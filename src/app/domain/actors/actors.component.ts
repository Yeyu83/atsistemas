import { Component, OnInit } from '@angular/core';
import { ActorsService } from '@shared/services/actors.service';
import { Actor } from '@models/interfaces/actor.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss'],
})
export class ActorsComponent implements OnInit {
  public actors$: Observable<Actor[]> | undefined;

  constructor(
    private readonly actorsService: ActorsService,
  ) { }

  ngOnInit() {
    this.actors$ = this.actorsService.getActors();
  }
}
