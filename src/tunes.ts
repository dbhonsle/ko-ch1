/* Copyright 2016 Springwiz Solutions Private Limited */
import * as ko from "knockout";
class TunesViewModel {
    likes: KnockoutObservable<string>
    shortDesc: KnockoutObservable<string>
    salePrice: KnockoutObservable<number>
    description: KnockoutObservable<string>
    formatCurrency: KnockoutComputed<string>
    photoURL: KnockoutComputed<string>

    path = '/photos/';
    data = {
        "Id": 1001,
        "fname": "guitar3.jpg",
        "path": "/photos/guitar3.jpg",
        "SalePrice": 10485.00,
        "ShortDesc": "Taylor ACE",
        "Description": "Taylor ACE made in INDIA",
        "Likes": "Nagendra Prahalad"
    };

    constructor() {
        this.likes = ko.observable(this.data.Likes);
        this.shortDesc = ko.observable(this.data.ShortDesc);
        this.salePrice = ko.observable(this.data.SalePrice);
        this.description = ko.observable(this.data.Description);
        this.formatCurrency = ko.computed({
            read: () => {
                return "$" + this.data.SalePrice.toFixed(2);
            }
        });
        this.photoURL = ko.computed({
            read: () => {
                return this.path + this.data.fname;
            }
        });

    }
}

// Bind the ViewModel to the View using knockout
ko.applyBindings(new TunesViewModel());