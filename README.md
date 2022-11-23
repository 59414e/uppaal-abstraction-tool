

## Requirements

* node.js (v14+)
* antlr4 [(link)](https://github.com/antlr/antlr4/blob/4.6/doc/getting-started.md)
* ps2pdf (optional/qol)  


dependencies:  

* antlr4 (JS target)
* xml2js
* yargs


## Input model 

* must be syntactically correct (input verification is not provided)
* guard expressions must be in DNF and may use only equality check `==` and `!=` against literal/const values (`x==y` can be translated into `x==c1 && y==c1 || ... || x==cn && y==ck`)
* no function calls
* no custom typedefs, structs 
* unary increment/decrement operators `++`/`--` are not allowed
* no `+=`, `/=`, etc.
* each variable should have an explicit initial value

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