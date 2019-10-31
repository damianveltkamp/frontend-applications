# Web app for exploring cultural heritage objects based on geolocations
This webapp displays cultural heritage objects from around the world based on geolocations.
The user can select area's on the map of which he/she wants to see the cultural heritage objects.

## Table of contents
* [Concept](#concept)
* [Application description](#application-description)
* [Live demo](#live-demo)
* [Installing](#installing)

## Concept
The concept of this application revolves around navigating the world map and discorering how culture's lived. This can be done by clicking on a highlighted area of the map, when the user does this he/she wil get some information about the area that he/she just clicked, and the option to dive into the collection of cultural heritage objects for that area of the map. 
!![](assetes/images/concept1.png)

The objects are devided in a few categories
* Clothing
* Art 
* Religion
* Weapons
Categories can ofcourse be expanded when this is desired.
![](assets/images/concept2.png)

## Application description
This application is build on the Angular framework and uses Typescript, Html and SCSS. The cultural heritage objects are retrieved from the [Netwerk digitaal erfgoed api](https://data.netwerkdigitaalerfgoed.nl/)

## Live demo
TODO: Live demo link plaatsen

## Installing
To install this application navigate to the folder you want the application to be contained by.
```
cd YOUR_DIRECTORY_PATH
```
After navigating to the folder, paste this command into your terminal:
```
git clone https://github.com/damian1997/frontend-applications.git
```
### Packages
This application makes use of the following packages
* [Leaflet](https://leafletjs.com/)