### Intro to basics of UI5

- folder `webapp` contains all sources of the app hence this is called the **“app folder”**.
- create `index.html` for the classic Hello World webapp,

#### Bootstrapping

- process of loading the resources necessary for the application to run, basically a process of initializing and loading SAPUI5.
- SAPUI5 is a JavaScript library that can either be loaded from the same Web server where the app resides, or from a different server
- it can be made part of the app package and loaded from there or we can leverage the library thorough a Content Delivery Network, 
- we can either use a [https://ui5.sap.com/resources/sap-ui-core.js](https://ui5.sap.com/resources/sap-ui-core.js)
or [https://ui5.sap.com/1.103.1/resources/sap-ui-core.js](https://ui5.sap.com/1.103.1/resources/sap-ui-core.js)
Latter looks a bit more specific version wise and would need regular maintenance.
- More on [bootstrapping](https://sapui5.hana.ondemand.com/#/topic/2d3eb2f322ea4a82983c1c62a33ec4ae.html)
- More on [theme](https://sapui5.hana.ondemand.com/sdk/#/topic/e9fc648661d84ed89360bbec3ae02611)

- we will write the application logic in a separate javascript file which will get called by the html file

- "We tell SAPUI5 core that resources in the sap.ui.demo.walkthrough namespace are located in the same folder as index.html", but I am still not 100% convinced on what this means,
(need more reading on this)

#### Control

- Controls are used to define appearance and behavior of parts of the screen
- we used a standard basic SAPUI5 text control,
- we instantiated the object in the `init` event and then set the **text** property of the control object to whatever text we want on the screen.

> end of day 2 [commit - *hello control*]
--- 