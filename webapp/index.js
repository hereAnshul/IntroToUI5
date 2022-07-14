sap.ui.define([
    //"/sap/m/Text"
    "sap/ui/core/mvc/XMLView"

], function (XMLView){
    "use strict";

    XMLView.create({
        viewName:"sap.ui.introtoui5.view.App"
    }).then( function (oView){
        oView.placeAt("content");
    });

    // new Text({
    //     text: "Text from text attribute of Text object/control"
    // }).placeAt("content")
    //alert("Ready with the bootstrapping!");
});