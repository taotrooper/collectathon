import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FilterService {

  constructor() { }

  filterByEdition(searchTerm: any, items: any[]) {
    if (searchTerm === null) return items;
    return items.filter(item => {
      return (item.ItemName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
      || (item.Summary.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    });
  }

  filterByItem(searchTerm: any, items: any[]) {
    if (searchTerm === null) return items;
    return items.filter(item => {
      return item.ItemSummary.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}