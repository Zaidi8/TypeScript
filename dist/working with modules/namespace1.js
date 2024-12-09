"use strict";
var App;
(function (App) {
    class Vehicles {
        constructor(name, brand, nameplate) {
            this.name = name;
            this.brand = brand;
            this.nameplate = nameplate;
        }
    }
    App.Vehicles = Vehicles;
})(App || (App = {}));
