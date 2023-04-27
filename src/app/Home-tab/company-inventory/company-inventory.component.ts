import { Component,OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

interface inventory {
	itemName: string;
	rate : number;
	condition : string;
	Qty: number;
}

const invtData: inventory[] = [
	{
		itemName: 'iName1',
		rate: 684,
		condition: 'New',
		Qty: 12345,
	},
	{
		itemName: 'iName2',
		rate: 684,
		condition: 'Used',
		Qty: 12345,
	},
	{
		itemName: 'iName3',
		rate: 684,
		condition: 'New',
		Qty: 12345,
	},
	{
		itemName: 'iName4',
		rate: 684,
		condition: 'Used',
		Qty: 12345,
	},
];

@Component({
  selector: 'app-company-inventory',
  templateUrl: './company-inventory.component.html',
  styleUrls: ['./company-inventory.component.css']
})
export class CompanyInventoryComponent {
	constructor(private appservice:AppServiceService){}
  invtDatas = invtData;

  ngOnInit() {
	this.getInvtdata();
  }

  getInvtdata(){
	this.appservice.getInventorydata().subscribe( (result: any)=>{
	},
	(err) => {
		console.log(err,'snd data err');
	})
 }
}
