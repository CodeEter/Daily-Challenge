"use strict";
let json = '{ "age" : 30 }';

try {
    user = JSON.parse(json);
    console.log("Success");
} catch (err) {
    console.log(err);
    console.log(err.name);
    console.log(err.message);
}