# REDUX INSTALLATION
Install all the following packages that will allow for Redux to work with Angular. Due to some versioning conflicts specific versions will need to be installed.


## Install Redux
Install Redux with the version 4.0.1. For whatever reason, the latest version
of redux has issues with the latest version of angular-redux. 
`npm install redux@4.0.1 --save`

## Install Angular-Redux
Install the ^9 version of angular-redux/store
`npm install @angular-redux/store --save`
`npm install @angular-redux/store@^9 --save`

## Install the Redux Devtools
`npm install redux-devtools-extension --save`

## Install tassign
tassign will be used to set the states and prevent extra properties from being added.
`npm install tassign --save`

# FIREBASE INSTALLATION
Install and deploy a firebase project.

## Firebase packages
Install both the firebase and angularfire2 packages.
`npm install firebase angularfire2 --save`

## Create Firebase WebApp

 1. Go to `console.firebase.google.com` and create a new project.
 2. Copy the Project SDK Snippet and enter them both within the `environment.ts` & `environment.prod.ts` files.
```ts
export  const  environment  =  {
production:  false,
firebase:  {
'...'
}};
```
## Deployment
1. In the terminal login to firebase.
`firebase login`
2. Initialize firebase
`firebase init`
3. Update the `firebase.json` file to point the "public" path to `"dist/[project name]"`
4. Build the project
`ng build --prod`
5. Deploy the project to firebase
`firebase deploy`

## Simplify Deployment
Within the `package.json` file, create a new script for simplify building and deploying the project.
```json
"scripts":  {
"...": "...",
"deploy":  "ng build --prod && firebase deploy"
},
```
With that the deployment can be done using
`npm run deploy`
