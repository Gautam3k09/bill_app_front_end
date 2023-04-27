import { Component } from '@angular/core';

interface machine {
	machineName: string;
	modelNo : number;
	size : string;
}

const machineData: machine[] = [
	{
		machineName: 'comp1',
		modelNo: 123,
		size: 'S',
	},
	{
		machineName: 'comp2',
		modelNo: 456,
		size: 'M',
	},
	{
		machineName: 'comp3',
		modelNo: 789,
		size: 'L',
	},
	{
		machineName: 'comp4',
		modelNo: 987,
		size: 'XL',
	},
];

@Component({
  selector: 'app-company-machines',
  templateUrl: './company-machines.component.html',
  styleUrls: ['./company-machines.component.css']
})
export class CompanyMachinesComponent {
  machineDatas = machineData;
}
