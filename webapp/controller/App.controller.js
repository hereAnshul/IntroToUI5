sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast){
    "use strict";
    return Controller.extend("sap.ui.introtoui5.controller.App", {
        onClickShowSomething : function () {
            // alert("Text once the event 'ButtonClick' event is triggered");
            MessageToast.show("Toast after press of the button.");
        }
    });
});