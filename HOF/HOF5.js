const urlPattern = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[.][a-zA-Z]+$/;

function isValidURL(input) {
    return urlPattern.test(input);
}
const url = "https://www.google.com"
if (isValidURL(url)) {
    console.log(`"${url}" is a valid URL.`);
} else {
    console.log(`"${url}" is not a valid URL.`);
}
