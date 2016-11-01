define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    ;
    var TunesViewModel = (function () {
        function TunesViewModel(data) {
            var _this = this;
            this.path = '/photos/';
            this.likes = ko.observable(data.Likes);
            this.shortDesc = ko.observable(data.ShortDesc);
            this.salePrice = ko.observable(data.SalePrice);
            this.description = ko.observable(data.Description);
            this.formatCurrency = ko.computed({
                read: function () {
                    return "Rs. " + data.SalePrice.toFixed(2);
                }
            });
            this.photoURL = ko.computed({
                read: function () {
                    return _this.path + data.fname;
                }
            });
        }
        return TunesViewModel;
    }());
    // Bind the ViewModel to the View using knockout
    ko.applyBindings(new TunesViewModel({
        "Id": 1001,
        "fname": "guitar3.jpg",
        "SalePrice": 35909.00,
        "ShortDesc": "Fender Duo-Sonic",
        "Description": "Fender Duo-Sonic Electric Guitar with Maple Fingerboard",
        "Likes": "Nagendra Prahalad"
    }));
});
//# sourceMappingURL=tunes.js.map