// import antlr4 from 'antlr4';
// import yagLexer from './YetAnotherGrammar/yagLexer.js';
// import yagParser from './YetAnotherGrammar/yagParser.js';
// import yagListener from './YetAnotherGrammar/yagListener.js';
// import UppaalXML from './uppaalxml.js';
// import CustomListener from './customListener.js';
// import CustomListener1 from './customListener1.js';

// const foo = "bar"
// const bar = "foo";

// function parseTreeWalk(input, ruleName = 'expr'){
//     const chars = new antlr4.InputStream(input);
//     const lexer = new yagLexer(chars);
//     const tokens = new antlr4.CommonTokenStream(lexer);
//     const parser = new yagParser(tokens);
//     parser.buildParseTrees = true;
//     const tree = parser[ruleName]();
//     const myListener = new CustomListener1();
//     antlr4.tree.ParseTreeWalker.DEFAULT.walk(myListener, tree);
//     return {
//         "tree": tree,
//         "myListener": myListener
//     }
// }


// export {UppaalXML, CustomListener, CustomListener1};
// export default {UppaalXML, CustomListener, CustomListener1};
