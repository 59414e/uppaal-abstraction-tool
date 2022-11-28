let _VERBOSE_LEVEL = 0;

function SET_VERBOSE(_level){
    _VERBOSE_LEVEL = _level;
}

function WARN()  { _VERBOSE_LEVEL >= 0 && console.log.apply(console, arguments); }
function INFO()  { _VERBOSE_LEVEL >= 1 && console.log.apply(console, arguments); }
function DEBUG() { _VERBOSE_LEVEL >= 2 && console.log.apply(console, arguments); }

function GROUP(){_VERBOSE_LEVEL >= 2 && console.group.apply(console, arguments);}

export default {};
export {WARN, INFO, DEBUG, SET_VERBOSE, GROUP};