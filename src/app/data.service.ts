import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { IUserInfo } from './interface';

@Injectable()
export class DataService {

	constructor(private http: HttpClient) { }

	getData(): Observable<IUserInfo> {
		return this.http.get("https://api.myjson.com/bins/1etfxj")
			.map((response: IUserInfo) => response);
	}
}
