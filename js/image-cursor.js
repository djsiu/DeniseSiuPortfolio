// learned from: https://www.youtube.com/watch?v=IMV-hf4JIK0&t=25s&ab_channel=OnlineTutorials

"use strict";

console.log("running image-cursor.js");

// PARENT APP
var parentAppCursor = document.getElementById('parent-app-cursor');
document.addEventListener('mousemove', function(e) {
    var x = e.pageX;
    var y = e.pageY;
    parentAppCursor.style.left = x + "px";
    parentAppCursor.style.top = y + "px";
})

//INTERRUPTING CHICKEN
var intChickenCursor = document.getElementById('int-chicken-cursor');
document.addEventListener('mousemove', function(e) {
    var x = e.pageX;
    var y = e.pageY;
    intChickenCursor.style.left = x + "px";
    intChickenCursor.style.top = y + "px";
})

// FIGMENT
var figmentCursor = document.getElementById('figment-cursor');
document.addEventListener('mousemove', function(e) {
    var x = e.pageX;
    var y = e.pageY;
    figmentCursor.style.left = x + "px";
    figmentCursor.style.top = y + "px";
})

// SAFE SPACES
var safeSpacesCursor = document.getElementById('safe-spaces-cursor');
document.addEventListener('mousemove', function(e) {
    var x = e.pageX;
    var y = e.pageY;
    safeSpacesCursor.style.left = x + "px";
    safeSpacesCursor.style.top = y + "px";
})

// HEATHER
var heatherCursor = document.getElementById('heather-cursor');
document.addEventListener('mousemove', function(e) {
    var x = e.pageX;
    var y = e.pageY;
    heatherCursor.style.left = x + "px";
    heatherCursor.style.top = y + "px";
})

// WAFFLE CAFE
var waffleCafeCursor = document.getElementById('waffle-cafe-cursor');
document.addEventListener('mousemove', function(e) {
    var x = e.pageX;
    var y = e.pageY;
    waffleCafeCursor.style.left = x + "px";
    waffleCafeCursor.style.top = y + "px";
})

// ABOUT NAME
var nameCursor = document.getElementById('name-cursor');
document.addEventListener('mousemove', function(e) {
    var x = e.pageX;
    var y = e.pageY;
    nameCursor.style.left = x + "px";
    nameCursor.style.top = y + "px";
})