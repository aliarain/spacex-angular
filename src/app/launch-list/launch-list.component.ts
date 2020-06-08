import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PastLauncherListGQL } from '../services/spacexGraphql.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {

  constructor(private pasLaunchesService: PastLauncherListGQL) { }

  pastLaunches$ = this.pasLaunchesService.fetch({ limit: 30 })
  .pipe(map(res => res.data.launchesPast))

  ngOnInit(): void {
  }

}
