let _VERBOSE_LEVEL = 2;

function SET_VERBOSE(_level){
    _VERBOSE_LEVEL = _level;
}

// caught (expected) error due to user's input
function ERRR()  { _VERBOSE_LEVEL >= 0 && console.log.apply(console, arguments); }
// warn of potential problem (not necessarily leading to an error or invalid result)
function WARN()  { _VERBOSE_LEVEL >= 1 && console.log.apply(console, arguments); }
// all the rest 
function DEBUG() { _VERBOSE_LEVEL >= 2 && console.log.apply(console, arguments); }

function GROUP(){ _VERBOSE_LEVEL >= 2 && console.group.apply(console, arguments); }

export default {};
export {ERRR, WARN, DEBUG, SET_VERBOSE, GROUP};