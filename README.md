# Description

## Requirements

* node.js (v14+)
* antlr4 [(link)](https://github.com/antlr/antlr4/blob/4.6/doc/getting-started.md)
* ps2pdf (optional/qol)  


Dependencies:  

* antlr4 (JS target)
* xml2js
* yargs


## Snippets

```sh
# generate the files for the runtime
antlr4 myGrammar.g4
javac *.java
# for testing
grun myGrammar translation -token
```

```sh
# if target is node.js
antlr4 -Dlanguage=JavaScript myGrammar.g4
```

```sh
grun myGrammar translation -ps tree.ps
ps2pdf -dEPSCrop tree.ps tree.pdf
```  

```sh
# compile chain
antlr4 *.g4 && javac *.java; antlr4 -Dlanguage=JavaScript *.g4;
# re-compile and grun tree pdf chain
antlr4 -Dlanguage=JavaScript *.g4; antlr4 *.g4 && javac *.java && grun yag translation test.txt -ps tree.ps && ps2pdf -dEPSCrop tree.ps tree.pdf
```

```sh
# allocate more memory for more complex model
node --max-old-space=8192 app.js <OPTIONS>
```


## Input model 

* must be syntactically correct (input verification is not provided)
* one declaration per one variable
* guard expressions must be in DNF and may use only equality check `==` and `!=` against literal/const values (`x==y` can be translated into `x==c1 && y==c1 || ... || x==cn && y==ck`)
* no function calls
* no custom typedefs, structs 
* unary increment/decrement operators `++`/`--` are not allowed
* no `+=`, `/=`, etc.
* each variable should have an explicit initial value
* target variables type must be written the same way as in the code (e.g., without calc in `1+1` or `x+1`)
* variables `int` (possibly bounded) type only (`bool` is encoded as `int[0,1]`)
* arrays should be flat (support for multi-dimensional arrays was added as experimental feature and will be further tested)

Most of the above could be resolved/lifted by additional preprocessing (could be added in future), yet should not have impact on expressivity power (modulo simulation).

<!-- For the ext MAS graph approximation it is worth to run upper-approximation per non-target variables (i.e. without vector) along the way -->


## Config entries

```js
input: <PATH_TO_CONCRETE_MODEL>
output: <PATH_TO_ABSTRACT_MODEL>
dmap: <PATH_TO_LOCAL_DOMAIN_APPROX>

/*
CODE=0 for combined MAS graph or obtained as sum of selected parameters:
1 - selects on edges
2 - guards as alternatives
4 - template parameters
8 - unfold templates to instances
*/
unfold: <CODE>

/* ... possible parameters for the commands ... */
```

## Commands/functionalities

`config [<KEY>=<VAL>...]`  
* stores the default value for a parameter with a given key
* default values have lower priority than the explicit inline arguments from command calls
* if no key-val pairs were given, print the content of current `config.json`

`info <SELECTOR>`
* allows to query the parser for (minimal) code analysis
* selector values regex is `vars(.global | .const)? | <TemplateName>( .vars | .locations | .edges )?`
* for technical reasons global variables and constants are treated separately

`approx <TYPE> targetVars=<TARGET_VARS> initVal=<INIT_VALS> targetTemplate=<TARGET_TEMPLATE>`  
* `1` and `2` for upper- and lower-aproximation types resp.
* `TARGET_VARS` - an ordered list of comma-separated variable names
* `INIT_VAL` - a list of comma-separated initial values (in order matching the variables)
* `TARGET_TEMPLATE` - (optional) restrict approximation to a given template (usually produces a coarser result, but faster performance)


`abstract targetVars=<TARGET_VARS> initVal=<INIT_VALS> targetTemplate=<TARGET_TEMPLATE> argsN=[<ID,EXPR,INIT>...] scope=<LOCATION_SCOPE>`  
* `TARGET_VARS` - an ordered list of comma-separated variable names
* `INIT_VAL` - a list of comma-separated initial values (in order matching the variables)
* `TARGET_TEMPLATE` - target template of abstraction,
* `<ID,EXPR,INIT>` - (optional) a merged variable name, evaluation expression and initial value
* `LOCATION_SCOPE` - (optional) a comma-separated list of target template's location ids, to which the abstraction will be restricted


# Examples

See folder `examples`.