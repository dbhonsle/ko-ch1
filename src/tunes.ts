/* Copyright 2016 Springwiz Solutions Private Limited */
import * as ko from "knockout";
export interface Data {
    "Id": number,
    "fname": string,
    "SalePrice": number,
    "ShortDesc": string,
    "Description": string,
    "Likes": string
};

class TunesViewModel {
    likes: KnockoutObservable<string>
    shortDesc: KnockoutObservable<string>
    salePrice: KnockoutObservable<number>
    description: KnockoutObservable<string>
    formatCurrency: KnockoutComputed<string>
    photoURL: KnockoutComputed<string>

    path = '/photos/';

    constructor(data: Data) {
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

// Bind the ViewModel to the View using knockout
ko.applyBindings(new TunesViewModel({
        "Id": 1001,
        "fname": "guitar3.jpg",
        "SalePrice": 35909.00,
        "ShortDesc": "Fender Duo-Sonic",
        "Description": "Fender Duo-Sonic Electric Guitar with Maple Fingerboard",
        "Likes": "Nagendra Prahalad"
    }));