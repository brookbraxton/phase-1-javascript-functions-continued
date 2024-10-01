
// Function declaration for saturdayFun
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun('bathe my dog'));


// Function expression for mondayWork
let mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
};
console.log(mondayWork('work from home'));


// Function for wrapping an adjective
function wrapAdjective(wrapper = '*') {
    return function(adjective) {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}
const wrapWithStars = wrapAdjective('*');
console.log(wrapWithStars('amazing'));

const wrapWithL1s = wrapAdjective('||');
console.log(wrapWithL1s('wonderful'));

    

