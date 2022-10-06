import React from "react";

const { Dimensions } = require("react-native");

global.LogginedUserToken = [""];

module.exports = Object.freeze({
    WIDTH: Dimensions.get("window").width,
    HEIGHT: Dimensions.get("window").height,
    COLOR: {
        ORANGE: "#FD4100",
        BLACK: "#000",
    },
});
