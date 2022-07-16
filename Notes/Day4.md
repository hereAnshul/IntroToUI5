##### JSON Model

- This is the start of **M**odel of MVC,
- we start in hte App.controller.js
- `onInit` is one of SAPUI5’s lifecycle methods which invoked by the framework when the controller is created,

- we start with adding the JSONModel module in the app controller,
- add this to the constructor function,
- define the model and then set it to the view,

- In the view we created an input control and we binded the data from the model with it,
interesting this to note here, `data-sap-ui-compatVersion="edge"` helps enable complex binding, otherwise we couldnt have done "*text (binding)*".
- the live update also works because of this above snippet in the script tag,
- we can also use - `data-sap-ui-bindingSyntax="complex"`.


##### Translatable Text

- Just like how in ABAP we create messages in SE91 and then they are translated so as to show the text in users' system langugae,
in SAPUI5 we have something called as `i18n` file.
- this way all the texts are maintained at a central place and can be easily translated into other languages
- it is achieved in SAPUI5 by using a special resource model and the standard data binding syntax, but without preceding /. 

- create a `i18n` folder inside webapp, inside which we get a `i18n.properties` file
- define the resource model in the app controller,
- initialze a ResourceModel object inside onInit,
- set the view's model as this above created resource model `.setModel(modelName, "alias")`

- during preview I saw 2 console error, 404 **i18n_en.properties** not found and **i18n_en_US.properties** not found,
what I understand is that `i18n.properties` is more general in nature and the `_language` files are more specific and hence has higher priority.

> end of day 4 [commit - *internationalization*]
--- 