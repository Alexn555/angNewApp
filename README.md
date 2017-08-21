# AngNewApp

Same Ang_forms but with Angular-CLI and webpack.
By standards of July 2017.
Now you can build app.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
 The app will automatically reload if you change any of the source files.

## Build

Run npm run build it will create dist folder with output files.

## Install

1. create folder angNewApp
2. cd angNewApp
3. npm install
4.  Change node_modules/ng2-popup/dist/ng2-popup.module.d
    put import { NgModule } from '@angular/core';
    put  instead of export declare class 
	@NgModule() export declare class Ng2PopupModule{ } */
5. start app by using  npm run start	
	

