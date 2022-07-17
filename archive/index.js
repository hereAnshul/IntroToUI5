sap.ui.define([
    //"/sap/m/Text"
    // not needed as now this has been moved to component 
    //"sap/ui/core/mvc/XMLView"
    "sap/ui/core/ComponentContainer"

], function (ComponentContainer){
    "use strict";

    new ComponentContainer({
        name:"sap.ui.introtoui5",
        settings:{
            id:"introtoui5"
        },
        async:true
    }).placeAt("content");

    // since not more XML here hence no more this fn,
    /* function (XMLView){
    "use strict";

    XMLView.create({
        viewName:"sap.ui.introtoui5.view.App"
    }).then( function (oView){
        oView.placeAt("content");
    }); */

    // new Text({
    //     text: "Text from text attribute of Text object/control"
    // }).placeAt("content")
    //alert("Ready with the bootstrapping!");
});