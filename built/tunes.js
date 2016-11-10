define(["require", "exports", "knockout", "tunesmodel"], function (require, exports, ko, tm) {
    "use strict";
    ;
    var ArrayData = (function () {
        function ArrayData() {
        }
        return ArrayData;
    }());
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
    var TunesTableViewModel = (function () {
        function TunesTableViewModel(theModel) {
            var _this = this;
            this.path = '/photos/';
            this.MytunesList = ko.observableArray([]);
            var _loop_1 = function(modelItem) {
                var tunesListItem = {}; // new ArrayData();
                tunesListItem.Id = ko.observable(modelItem.Id);
                tunesListItem.fname = ko.observable(modelItem.fname);
                tunesListItem.salePrice = ko.observable(modelItem.SalePrice);
                tunesListItem.shortDesc = ko.observable(modelItem.ShortDesc);
                tunesListItem.description = ko.observable(modelItem.Description);
                tunesListItem.likes = ko.observable(modelItem.Likes);
                tunesListItem.photoURL = ko.computed({
                    read: function () {
                        return _this.path + modelItem.fname;
                    }
                });
                this_1.MytunesList.push(tunesListItem);
                console.log(this_1.MytunesList);
            };
            var this_1 = this;
            for (var _i = 0, theModel_1 = theModel; _i < theModel_1.length; _i++) {
                var modelItem = theModel_1[_i];
                _loop_1(modelItem);
            }
        }
        return TunesTableViewModel;
    }());
    var MasterViewModel = (function () {
        function MasterViewModel(theModel) {
            this.ttvm = new TunesTableViewModel(theModel);
        }
        return MasterViewModel;
    }());
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
});
//# sourceMappingURL=tunes.js.map