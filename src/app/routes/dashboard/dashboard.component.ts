import { ChangeDetectionStrategy, Component } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {

  constructor(private http: _HttpClient) {
    http.get(`/user/admin`).subscribe((result: any) => {
      console.log(result);
    });
  }

}
