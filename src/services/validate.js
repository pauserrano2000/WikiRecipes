
export const errorCheck = (name, value) => {
    switch (name) {
        case "name":
            if (! /^([ a-zA-Z0-9&/\(\)\.'-]+)$/.test(value)) {
                return "Name format is invalid"
            } else {
                return "";
            }

        case "category":
            if (! /^([ a-zA-Z0-9&/\(\)\.'-]+)$/.test(value)) {
                return "Category format is invalid"
            } else {
                return "";
            }

        case "country":
            if (! /^([ a-zA-Z0-9&/\(\)\.'-]+)$/.test(value)) {
                return "Country format is invalid"
            } else {
                return "";
            }

        case "picture":
            if (! /(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg)(\?[^\s[",><]*)?/.test(value)) {
                return "Picture format is invalid"
            } else {
                return "";
            }

        case "video":
            if (! /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(value)) {
                return "Video format is invalid"
            } else {
                return "";
            }

        case "instructions":
            if (! /[^A-Za-z0-9 .'?!,@$#-_]/.test(value)) {
                return "Method format is invalid"
            } else {
                return "";
            }

        default:
            console.log("This case is not covered")
    }
};
