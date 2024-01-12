import { Component, Input, OnInit } from '@angular/core';
import { MenuserviceService } from '../menuservice.service';

@Component({
  selector: 'app-menutree',
  templateUrl: './menutree.component.html',
  styleUrls: ['./menutree.component.css']
})
export class MenutreeComponent implements OnInit {

  @Input() treeData: any;
  lists: any[] = [];
  childId:any;

    constructor(private menuservice: MenuserviceService,
    ) { }

  ngOnInit(): void {
    this.menuDetails();
  }

  menuDetails() {
    this.menuservice.getMenuData().subscribe(
      (data) => {
        this.treeData = data;
        this.lists = this.treeData.data;

        for (let lis of this.lists) {
          for (let nextIndex = this.lists.indexOf(lis) + 1; nextIndex < this.lists.length; nextIndex++) {
            const nextItem = this.lists[nextIndex];
            console.log(nextItem);

            if (lis.id == nextItem.refMenuId) {
              this.childId == nextItem.id;
            }
          }
        }

      }
    );
  }

  toggleChildVisibility(index: number): void {
    this.lists[index].showChildren =! this.lists[index].showChildren;
  }
  
  toggleSubChildVisibility(id:any): void {
    alert("No Sub child present for this Child...");
  }

}
