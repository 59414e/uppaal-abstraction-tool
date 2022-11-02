

## Requirements

* antlr4 [(link)](https://github.com/antlr/antlr4/blob/4.6/doc/getting-started.md)
* ps2pdf (optional)  
`sudo apt-get install ghostscript`


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
