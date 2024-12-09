"use strict";
/// <reference path="namespace1.ts"/>
var App;
(function (App) {
    const fisrtvehicle = new App.Vehicles('Alto', 'Suzuki', 'LEV-2020');
    console.log(fisrtvehicle);
})(App || (App = {}));
