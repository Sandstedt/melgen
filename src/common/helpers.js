// generate a random number between the provides min and max properties
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
export default random
