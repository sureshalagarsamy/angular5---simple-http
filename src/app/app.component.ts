import { Component } from '@angular/core';
import { DataService } from './data.service';
import { IUserInfo } from './interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	userInfo:IUserInfo;
	items:object;
	groups: [object];

		constructor(private dataService: DataService) { }
	
		ngOnInit() {
			
		}

		getUserData() {
			this.dataService.getData().subscribe(data => {
				this.groups = data.groups;
				console.log(this.groups);
			});
		}
}
