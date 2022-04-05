import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActorsService } from '@shared/services/actors.service';
import { Actor } from '@models/interfaces/actor.interface';
import { Observable } from 'rxjs';
import { TitleService } from '@shared/services/title.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorsComponent implements OnInit {
  public actors$: Observable<Actor[]> | undefined;

  constructor(
    private readonly actorsService: ActorsService,
    private readonly titleService: TitleService,
  ) { }

  ngOnInit() {
    this.actors$ = this.actorsService.getActors();
    this.titleService.setTitle('LAYOUT.HEADER.TITLE.ACTORS.ALL')
  }
}
