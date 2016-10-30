define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    var TunesViewModel = (function () {
        function TunesViewModel() {
            var _this = this;
            this.path = '/photos/';
            this.data = {
                "Id": 1001,
                "fname": "guitar3.jpg",
                "path": "/photos/guitar3.jpg",
                "SalePrice": 10485.00,
                "ShortDesc": "Taylor ACE",
                "Description": "Taylor ACE made in INDIA",
                "Likes": "Nagendra Prahalad"
            };
            this.likes = ko.observable(this.data.Likes);
            this.shortDesc = ko.observable(this.data.ShortDesc);
            this.salePrice = ko.observable(this.data.SalePrice);
            this.description = ko.observable(this.data.Description);
            this.formatCurrency = ko.computed({
                read: function () {
                    return "$" + _this.data.SalePrice.toFixed(2);
                }
            });
            this.photoURL = ko.computed({
                read: function () {
                    return _this.path + _this.data.fname;
                }
            });
        }
        return TunesViewModel;
    }());
    // Bind the ViewModel to the View using knockout
    ko.applyBindings(new TunesViewModel());
});
//# sourceMappingURL=tunes.js.map