sap.ui.define([
    "/sap/m/Text"
], function (Text){
    "use strict";

    new Text({
        text: "Text from text attribute of Text object/control"
    }).placeAt("content")
    //alert("Ready with the bootstrapping!");
});