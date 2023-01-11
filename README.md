

## Requirements

* node.js (v14+)
* antlr4 [(link)](https://github.com/antlr/antlr4/blob/4.6/doc/getting-started.md)
* ps2pdf (optional/qol)  


dependencies:  

* antlr4 (JS target)
* xml2js
* yargs


## Config entries

```js
/*
1 - selects on edges
2 - guards as alternatives
4 - template parameters
8 - unfold templates to instances
0 - extended MAS graph (includes all)
*/
unfold: <0,1,2,3,4,5,6,7>

/*
0 - warnings
1 - info
2 - debug
*/
verbose: <0,1,2>

/*
MappingFunction:
- targetTemplate : string - name of the agent ('ext' by default)
- scope: Array.<locationId:string> | '*' - scope of locations (asterisk for all)
- argsR : Array.<string> - list of target variables (note their order)
- initVal : Array.<Array*.number> - initial values for the target variables (ordered matching argsR)
- argsN : Array.<{name:string, val:string, init:Array*.number}> - merge variable names, evaluation function and initial values
- hash : string - unique prefix used for auxiliary variables (also used as a select identifier for index of assumed local domain element)
*/
abstraction: Array.<MappingFunction>


/*
Approximation:
- type: <UPPER_APPROX:1 | LOWER_APPROX:2> - approximation type
- template: string - name of the agent (or agents in order of appearance for ext MAS graph)
- variables: Array.<string> - name of target variables (note their order)
- values: Map.<locationId:string, values:Array.<Array*.number>> 
*/
approximation: <PATH_TO_APPROXIMATION>

input: <PATH_TO_MODEL>

/*
<action>        -   <result>
unfold          -   unfolded model 
approximation   -   local domain approximation 
abstraction     -   abstract model (may/must depending on approximation type) 
*/
output: <PATH_TO_OUTPUT>
```

## Input model 

* must be syntactically correct (input verification is not provided)
* guard expressions must be in DNF and may use only equality check `==` and `!=` against literal/const values (`x==y` can be translated into `x==c1 && y==c1 || ... || x==cn && y==ck`)
* no function calls
* no custom typedefs, structs 
* unary increment/decrement operators `++`/`--` are not allowed
* no `+=`, `/=`, etc.
* each variable should have an explicit initial value
* target variables type must be written the same way as in the code (e.g., without calc in `1+1` or `x+1`)

Most of the above could be resolved/lifted by additional preprocessing (could be added in future), yet should not have impact on expressivity power (modulo simulation).

<!-- For the ext MAS graph approximation it is worth to run upper-approximation per non-target variables (i.e. without vector) along the way -->

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
node --max-old-space=8192 app.js <OPTION>
```
