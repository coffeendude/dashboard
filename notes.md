<!-- # Repository Installs

* material-ui
* react-pro-router
* react-pro-sidebar
* formik - Formik makes form validation easy! When paired with Yup, they abstract all the complexities that surround handling forms in React. With that we can then go ahead to create the schema we’ll be using for the sign in form using Yup.
* yup - 
* fullcalendar - calendar integration
* nivo charts - programtic import for data charts

## Dependency install script
`npm i @mui/material @emotion/react @emotion/styled @mui/x-data-grid @mui/icons-material react-router-dom@6 react-pro-sidebar@0.7.1 formik yup @fullcalendar/core @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/list @nivo/core @nivo/pie @nivo/line @nivo/bar @nivo/geo`

**Note: When you want to edit multiple of the same string value - you can highlight the first value and hit command + d to select multiple of the same value and edit at the same time

**Note: With the help of Tailwind-shades we can highlight one of the main colors of our pallet and create a gradient by hitting cmd + k, cmd + g - this creates a list of shades for that color 1 - 9 (100-900)

**Note: to sort lines you can highlight them, hit cmd + p, type >, then search sort lines: ascending/descending - like we did in the theme.js with the color shades
 -->
* NOTE: make sure you are cd into the client: "dash-client" 

 # Repository Details
 * react-redux - state management lib
 * reduxjs/toolkit - wrapper for redux 
 * react-router-dom - navigation for webste
 * mui/material - material ui components
 * emotion/react - styling for material
 * emotion/styled - styling for material
 * mui/icons-material - material ui icons
 * mui/x-data-grid- material ui table

 ### script
 `npm i react-redux @reduxjs/toolkit react-router-dom @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid`


## dev dependencies
* types/react-dom - react router dom needs types to be used with typescript 
* eslint eslint-config-react-app - setting create react app eslint initialized default settings into vite
* types/node - typescript for nodejs. This is so we can use the import path and set the @ alias to src in vite.config

### script
`npm i -D @types/react-dom eslint eslint-config-react-app`

# Setup Themes for website 

* We create the expanded-theme.ts file to add the gradient colors we brought into our theme.ts


# Dependencies on the Server Side:

* express - framework for nodejs to handle apis
* body-parser - handles json files coming from the body of a request
* Cors - cross origin resource sharing requests so that you can call from a different url
* dotenv - to handle env variables
* helmet - api endpoint security
* morgan - for handling console.logs, anhtime we hit an endpoint it will log info 
* mongoose - orm used for mongodb
* mongoose-currency - so that we can handle currency and numbers for currency values

`npm i express body-parser cors dotenv helmet morgan mongoose mongoose-currency`

## Dev Dependencies for server side:

* nodemon - allows us to run server and automaticallly refresh when we change files 

`npm i -D nodemon`

## Note:
To use imports we have to go to the package.json in dash-server and add just below "main":
"type": "module"

We also need to add in our package.json in scripts:
"dev": "nodemon index.js"

Adding the last dependency for the simple ML computation of Linear Regression in js.
`npm install regression`