/* Copyright 2016 Springwiz Solutions Private Limited */
import * as ko from "knockout";
import * as tm from "tunesmodel"

interface IArrayData {
    Id: KnockoutObservable<number>;
    fname: KnockoutObservable<string>;
    salePrice: KnockoutObservable<number>;
    shortDesc: KnockoutObservable<string>;
    description: KnockoutObservable<string>;
    likes: KnockoutObservable<string>;
    photoURL: KnockoutComputed<string>;
};

class ArrayData implements IArrayData {
    Id: KnockoutObservable<number>;
    fname: KnockoutObservable<string>;
    salePrice: KnockoutObservable<number>;
    shortDesc: KnockoutObservable<string>;
    description: KnockoutObservable<string>;
    likes: KnockoutObservable<string>;
    photoURL: KnockoutComputed<string>;
}

class TunesViewModel {
    likes: KnockoutObservable<string>
    shortDesc: KnockoutObservable<string>
    salePrice: KnockoutObservable<number>
    description: KnockoutObservable<string>
    formatCurrency: KnockoutComputed<string>
    photoURL: KnockoutComputed<string>

    path = '/photos/';

    constructor(data: tm.Data) {
        this.likes = ko.observable(data.Likes);
        this.shortDesc = ko.observable(data.ShortDesc);
        this.salePrice = ko.observable(data.SalePrice);
        this.description = ko.observable(data.Description);
        this.formatCurrency = ko.computed({
            read: () => {
                return "Rs. " + data.SalePrice.toFixed(2);
            }
        });
        this.photoURL = ko.computed({
            read: () => {
                return this.path + data.fname;
            }
        });

    }
}

class TunesTableViewModel {
    public MytunesList: KnockoutObservableArray<ArrayData>;
    path = '/photos/';
    constructor(theModel: tm.Data[]) {
        this.MytunesList = ko.observableArray([]);
        for (let modelItem of theModel){
            let tunesListItem = <IArrayData>{} // new ArrayData();
            tunesListItem.Id = ko.observable(modelItem.Id);
            tunesListItem.fname = ko.observable(modelItem.fname);
            tunesListItem.salePrice = ko.observable(modelItem.SalePrice);
            tunesListItem.shortDesc = ko.observable(modelItem.ShortDesc);
            tunesListItem.description = ko.observable(modelItem.Description);
            tunesListItem.likes = ko.observable(modelItem.Likes);
            tunesListItem.photoURL = ko.computed({
            read: () => {
                return this.path + modelItem.fname;
            }
        });
            this.MytunesList.push(tunesListItem);
            console.log(this.MytunesList);
        } 

    }


}

class MasterViewModel {
    ttvm: TunesTableViewModel;
    constructor(theModel: tm.Data[]){
        this.ttvm = new TunesTableViewModel(theModel);
    }
}

// Bind the ViewModel to the View using knockout
/*
ko.applyBindings(new TunesViewModel({
         Id: 1001,
         fname: "guitar3.jpg",
         SalePrice: 35909.00,
         ShortDesc: "Fender Duo-Sonic",
         Description: "Fender Duo-Sonic Electric Guitar with Maple Fingerboard",
         Likes: "Nagendra Prahalad"
    }));
*/
// ko.applyBindings(new TunesViewModel(tm.tunesListModel[3]));
ko.applyBindings(new MasterViewModel(tm.tunesListModel));
