// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import yagListener from './yagListener.js';
const serializedATN = [4,1,69,321,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,1,0,1,0,1,0,1,1,1,1,4,1,50,8,1,11,1,12,1,51,1,2,1,2,1,
2,5,2,57,8,2,10,2,12,2,60,9,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,5,4,69,8,4,10,
4,12,4,72,9,4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,5,6,81,8,6,10,6,12,6,84,9,6,1,
6,1,6,1,7,1,7,3,7,90,8,7,1,7,1,7,3,7,94,8,7,1,8,1,8,1,8,1,8,4,8,100,8,8,
11,8,12,8,101,1,9,1,9,1,9,1,9,3,9,108,8,9,1,9,1,9,1,9,1,10,1,10,1,10,5,10,
116,8,10,10,10,12,10,119,9,10,1,11,1,11,1,11,3,11,124,8,11,1,12,1,12,5,12,
128,8,12,10,12,12,12,131,9,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,5,13,140,
8,13,10,13,12,13,143,9,13,1,13,1,13,3,13,147,8,13,1,13,1,13,3,13,151,8,13,
1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,160,8,13,1,13,1,13,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,4,13,175,8,13,11,13,12,13,176,1,
13,1,13,3,13,181,8,13,1,13,1,13,1,13,1,13,5,13,187,8,13,10,13,12,13,190,
9,13,1,13,1,13,1,13,1,13,1,13,3,13,197,8,13,1,14,1,14,1,14,1,14,1,15,1,15,
1,15,3,15,206,8,15,1,15,1,15,5,15,210,8,15,10,15,12,15,213,9,15,1,15,1,15,
1,15,1,16,1,16,1,16,5,16,221,8,16,10,16,12,16,224,9,16,1,17,1,17,1,17,1,
17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,3,17,250,8,17,1,17,1,17,1,17,1,17,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,
17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,5,17,293,8,17,10,17,12,17,296,9,17,1,18,1,
18,1,19,3,19,301,8,19,1,19,1,19,3,19,305,8,19,1,19,3,19,308,8,19,1,19,3,
19,311,8,19,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,211,1,34,22,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,0,11,2,0,32,32,
36,36,2,0,33,33,42,44,2,0,1,1,32,32,2,0,45,46,50,50,2,0,33,33,44,44,1,0,
2,3,2,0,34,35,39,40,2,0,38,38,41,41,1,0,42,43,1,0,16,17,1,0,53,63,354,0,
44,1,0,0,0,2,49,1,0,0,0,4,53,1,0,0,0,6,61,1,0,0,0,8,65,1,0,0,0,10,73,1,0,
0,0,12,76,1,0,0,0,14,87,1,0,0,0,16,99,1,0,0,0,18,103,1,0,0,0,20,112,1,0,
0,0,22,120,1,0,0,0,24,125,1,0,0,0,26,196,1,0,0,0,28,198,1,0,0,0,30,205,1,
0,0,0,32,217,1,0,0,0,34,249,1,0,0,0,36,297,1,0,0,0,38,307,1,0,0,0,40,312,
1,0,0,0,42,318,1,0,0,0,44,45,3,2,1,0,45,46,5,0,0,1,46,1,1,0,0,0,47,50,3,
12,6,0,48,50,3,18,9,0,49,47,1,0,0,0,49,48,1,0,0,0,50,51,1,0,0,0,51,49,1,
0,0,0,51,52,1,0,0,0,52,3,1,0,0,0,53,58,3,6,3,0,54,55,5,30,0,0,55,57,3,6,
3,0,56,54,1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,5,1,0,0,0,
60,58,1,0,0,0,61,62,3,36,18,0,62,63,5,37,0,0,63,64,3,38,19,0,64,7,1,0,0,
0,65,70,3,28,14,0,66,67,5,30,0,0,67,69,3,28,14,0,68,66,1,0,0,0,69,72,1,0,
0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,9,1,0,0,0,72,70,1,0,0,0,73,74,3,34,17,
0,74,75,7,0,0,0,75,11,1,0,0,0,76,77,3,38,19,0,77,82,3,14,7,0,78,79,5,30,
0,0,79,81,3,14,7,0,80,78,1,0,0,0,81,84,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,
0,83,85,1,0,0,0,84,82,1,0,0,0,85,86,5,29,0,0,86,13,1,0,0,0,87,89,3,36,18,
0,88,90,3,16,8,0,89,88,1,0,0,0,89,90,1,0,0,0,90,93,1,0,0,0,91,92,5,53,0,
0,92,94,3,34,17,0,93,91,1,0,0,0,93,94,1,0,0,0,94,15,1,0,0,0,95,96,5,27,0,
0,96,97,3,34,17,0,97,98,5,28,0,0,98,100,1,0,0,0,99,95,1,0,0,0,100,101,1,
0,0,0,101,99,1,0,0,0,101,102,1,0,0,0,102,17,1,0,0,0,103,104,3,38,19,0,104,
105,5,66,0,0,105,107,5,23,0,0,106,108,3,20,10,0,107,106,1,0,0,0,107,108,
1,0,0,0,108,109,1,0,0,0,109,110,5,24,0,0,110,111,3,24,12,0,111,19,1,0,0,
0,112,117,3,22,11,0,113,114,5,30,0,0,114,116,3,22,11,0,115,113,1,0,0,0,116,
119,1,0,0,0,117,115,1,0,0,0,117,118,1,0,0,0,118,21,1,0,0,0,119,117,1,0,0,
0,120,121,3,38,19,0,121,123,3,36,18,0,122,124,3,16,8,0,123,122,1,0,0,0,123,
124,1,0,0,0,124,23,1,0,0,0,125,129,5,25,0,0,126,128,3,26,13,0,127,126,1,
0,0,0,128,131,1,0,0,0,129,127,1,0,0,0,129,130,1,0,0,0,130,132,1,0,0,0,131,
129,1,0,0,0,132,133,5,26,0,0,133,25,1,0,0,0,134,197,3,24,12,0,135,197,3,
12,6,0,136,137,5,4,0,0,137,141,5,23,0,0,138,140,3,28,14,0,139,138,1,0,0,
0,140,143,1,0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,144,1,0,0,0,143,141,
1,0,0,0,144,146,5,29,0,0,145,147,3,32,16,0,146,145,1,0,0,0,146,147,1,0,0,
0,147,148,1,0,0,0,148,150,5,29,0,0,149,151,3,32,16,0,150,149,1,0,0,0,150,
151,1,0,0,0,151,152,1,0,0,0,152,153,5,24,0,0,153,197,3,26,13,0,154,155,5,
13,0,0,155,156,3,34,17,0,156,159,3,26,13,0,157,158,5,14,0,0,158,160,3,26,
13,0,159,157,1,0,0,0,159,160,1,0,0,0,160,197,1,0,0,0,161,162,5,6,0,0,162,
163,3,34,17,0,163,164,3,26,13,0,164,197,1,0,0,0,165,166,5,5,0,0,166,167,
3,26,13,0,167,168,5,6,0,0,168,169,3,34,17,0,169,170,5,29,0,0,170,197,1,0,
0,0,171,172,5,9,0,0,172,174,3,34,17,0,173,175,3,30,15,0,174,173,1,0,0,0,
175,176,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,197,1,0,0,0,178,180,
5,15,0,0,179,181,3,34,17,0,180,179,1,0,0,0,180,181,1,0,0,0,181,182,1,0,0,
0,182,197,5,29,0,0,183,188,3,28,14,0,184,185,5,30,0,0,185,187,3,28,14,0,
186,184,1,0,0,0,187,190,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,0,189,191,
1,0,0,0,190,188,1,0,0,0,191,192,5,29,0,0,192,197,1,0,0,0,193,194,3,34,17,
0,194,195,5,29,0,0,195,197,1,0,0,0,196,134,1,0,0,0,196,135,1,0,0,0,196,136,
1,0,0,0,196,154,1,0,0,0,196,161,1,0,0,0,196,165,1,0,0,0,196,171,1,0,0,0,
196,178,1,0,0,0,196,183,1,0,0,0,196,193,1,0,0,0,197,27,1,0,0,0,198,199,3,
34,17,0,199,200,3,42,21,0,200,201,3,34,17,0,201,29,1,0,0,0,202,203,5,10,
0,0,203,206,3,34,17,0,204,206,5,11,0,0,205,202,1,0,0,0,205,204,1,0,0,0,206,
207,1,0,0,0,207,211,5,37,0,0,208,210,3,26,13,0,209,208,1,0,0,0,210,213,1,
0,0,0,211,212,1,0,0,0,211,209,1,0,0,0,212,214,1,0,0,0,213,211,1,0,0,0,214,
215,5,7,0,0,215,216,5,29,0,0,216,31,1,0,0,0,217,222,3,34,17,0,218,219,5,
30,0,0,219,221,3,34,17,0,220,218,1,0,0,0,221,224,1,0,0,0,222,220,1,0,0,0,
222,223,1,0,0,0,223,33,1,0,0,0,224,222,1,0,0,0,225,226,6,17,-1,0,226,227,
3,36,18,0,227,228,3,16,8,0,228,250,1,0,0,0,229,230,7,1,0,0,230,250,3,34,
17,19,231,232,7,2,0,0,232,250,3,34,17,18,233,234,5,66,0,0,234,235,5,23,0,
0,235,236,3,32,16,0,236,237,5,24,0,0,237,250,1,0,0,0,238,250,3,36,18,0,239,
250,5,64,0,0,240,250,5,65,0,0,241,242,5,25,0,0,242,243,3,32,16,0,243,244,
5,26,0,0,244,250,1,0,0,0,245,246,5,23,0,0,246,247,3,34,17,0,247,248,5,24,
0,0,248,250,1,0,0,0,249,225,1,0,0,0,249,229,1,0,0,0,249,231,1,0,0,0,249,
233,1,0,0,0,249,238,1,0,0,0,249,239,1,0,0,0,249,240,1,0,0,0,249,241,1,0,
0,0,249,245,1,0,0,0,250,294,1,0,0,0,251,252,10,17,0,0,252,253,7,3,0,0,253,
293,3,34,17,18,254,255,10,16,0,0,255,256,7,4,0,0,256,293,3,34,17,17,257,
258,10,15,0,0,258,259,7,5,0,0,259,293,3,34,17,16,260,261,10,14,0,0,261,262,
7,6,0,0,262,293,3,34,17,15,263,264,10,13,0,0,264,265,7,7,0,0,265,293,3,34,
17,14,266,267,10,12,0,0,267,268,5,47,0,0,268,293,3,34,17,13,269,270,10,11,
0,0,270,271,5,49,0,0,271,293,3,34,17,12,272,273,10,10,0,0,273,274,5,48,0,
0,274,293,3,34,17,11,275,276,10,9,0,0,276,277,5,51,0,0,277,293,3,34,17,10,
278,279,10,8,0,0,279,280,5,52,0,0,280,293,3,34,17,9,281,282,10,7,0,0,282,
283,5,36,0,0,283,284,3,34,17,0,284,285,5,37,0,0,285,286,3,34,17,7,286,293,
1,0,0,0,287,288,10,22,0,0,288,289,5,31,0,0,289,293,3,36,18,0,290,291,10,
20,0,0,291,293,7,8,0,0,292,251,1,0,0,0,292,254,1,0,0,0,292,257,1,0,0,0,292,
260,1,0,0,0,292,263,1,0,0,0,292,266,1,0,0,0,292,269,1,0,0,0,292,272,1,0,
0,0,292,275,1,0,0,0,292,278,1,0,0,0,292,281,1,0,0,0,292,287,1,0,0,0,292,
290,1,0,0,0,293,296,1,0,0,0,294,292,1,0,0,0,294,295,1,0,0,0,295,35,1,0,0,
0,296,294,1,0,0,0,297,298,5,66,0,0,298,37,1,0,0,0,299,301,5,12,0,0,300,299,
1,0,0,0,300,301,1,0,0,0,301,302,1,0,0,0,302,308,7,9,0,0,303,305,5,20,0,0,
304,303,1,0,0,0,304,305,1,0,0,0,305,306,1,0,0,0,306,308,5,19,0,0,307,300,
1,0,0,0,307,304,1,0,0,0,308,310,1,0,0,0,309,311,3,40,20,0,310,309,1,0,0,
0,310,311,1,0,0,0,311,39,1,0,0,0,312,313,5,27,0,0,313,314,3,34,17,0,314,
315,5,30,0,0,315,316,3,34,17,0,316,317,5,28,0,0,317,41,1,0,0,0,318,319,7,
10,0,0,319,43,1,0,0,0,30,49,51,58,70,82,89,93,101,107,117,123,129,141,146,
150,159,176,180,188,196,205,211,222,249,292,294,300,304,307,310];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class yagParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'~'", "'<<'", "'>>'", "'for'", "'do'", 
                            "'while'", "'break'", "'continue'", "'switch'", 
                            "'case'", "'default'", "'const'", "'if'", "'else'", 
                            "'return'", "'int'", "'bool'", "'void'", "'chan'", 
                            "'broadcast'", "'struct'", "'typedef'", "'('", 
                            "')'", "'{'", "'}'", "'['", "']'", "';'", "','", 
                            "'.'", "'!'", "'-'", "'>'", "'<'", "'?'", "':'", 
                            "'=='", "'<='", "'>='", "'!='", "'++'", "'--'", 
                            "'+'", "'*'", "'/'", "'&'", "'|'", "'^'", "'%'", 
                            "'&&'", "'||'", "'='", "'+='", "'-='", "'*='", 
                            "'/='", "'&='", "'|='", "'^='", "'%='", "'<<='", 
                            "'>>='" ];
    static symbolicNames = [ null, null, null, null, "FOR", "DO", "WHILE", 
                             "BREAK", "CONTINUE", "SWITCH", "CASE", "DEFAULT", 
                             "CONST", "IF", "ELSE", "RETURN", "INT", "BOOL", 
                             "VOID", "CHAN", "BCAST", "STRUCT", "TYPEDEF", 
                             "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", 
                             "RBRACK", "SEMI", "COMMA", "DOT", "BANG", "SUB", 
                             "GT", "LT", "QUESTION", "COLON", "EQUAL", "LE", 
                             "GE", "NOTEQUAL", "INC", "DEC", "ADD", "MUL", 
                             "DIV", "BITAND", "BITOR", "CARET", "MOD", "AND", 
                             "OR", "ASSIGN", "ADD_ASSIGN", "SUB_ASSIGN", 
                             "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", 
                             "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", 
                             "RSHIFT_ASSIGN", "INTEGER", "BOOLEAN", "ID", 
                             "WHITESPACE", "BLOCK_COMMENT", "LINE_COMMENT" ];
    static ruleNames = [ "file", "translation", "select_label", "select_pair", 
                         "assignment_label", "synchronisation_label", "vdec_list", 
                         "vdec", "arr_size", "fdec", "fparam_list", "fparam", 
                         "block", "statement", "assignment_stmt", "case_block", 
                         "expr_list", "expr", "var_identifier", "vtype", 
                         "bound_range", "assignmentOp" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = yagParser.ruleNames;
        this.literalNames = yagParser.literalNames;
        this.symbolicNames = yagParser.symbolicNames;

        	let constMap = {};

    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 17:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 17);
    		case 1:
    			return this.precpred(this._ctx, 16);
    		case 2:
    			return this.precpred(this._ctx, 15);
    		case 3:
    			return this.precpred(this._ctx, 14);
    		case 4:
    			return this.precpred(this._ctx, 13);
    		case 5:
    			return this.precpred(this._ctx, 12);
    		case 6:
    			return this.precpred(this._ctx, 11);
    		case 7:
    			return this.precpred(this._ctx, 10);
    		case 8:
    			return this.precpred(this._ctx, 9);
    		case 9:
    			return this.precpred(this._ctx, 8);
    		case 10:
    			return this.precpred(this._ctx, 7);
    		case 11:
    			return this.precpred(this._ctx, 22);
    		case 12:
    			return this.precpred(this._ctx, 20);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, yagParser.RULE_file);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.translation();
	        this.state = 45;
	        this.match(yagParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	translation() {
	    let localctx = new TranslationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, yagParser.RULE_translation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 49;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 47;
	                this.vdec_list();
	                break;

	            case 2:
	                this.state = 48;
	                this.fdec();
	                break;

	            }
	            this.state = 51; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & 1773568) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	select_label() {
	    let localctx = new Select_labelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, yagParser.RULE_select_label);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.select_pair();
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 54;
	            this.match(yagParser.COMMA);
	            this.state = 55;
	            this.select_pair();
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	select_pair() {
	    let localctx = new Select_pairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, yagParser.RULE_select_pair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        localctx.vid = this.var_identifier();
	        this.state = 62;
	        this.match(yagParser.COLON);
	        this.state = 63;
	        localctx.range = this.vtype();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment_label() {
	    let localctx = new Assignment_labelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, yagParser.RULE_assignment_label);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.assignment_stmt();
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 66;
	            this.match(yagParser.COMMA);
	            this.state = 67;
	            this.assignment_stmt();
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	synchronisation_label() {
	    let localctx = new Synchronisation_labelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, yagParser.RULE_synchronisation_label);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        localctx.chan = this.expr(0);
	        this.state = 74;
	        localctx.symb = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===32 || _la===36)) {
	            localctx.symb = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vdec_list() {
	    let localctx = new Vdec_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, yagParser.RULE_vdec_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        localctx.type = this.vtype();
	        this.state = 77;
	        this.vdec();
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 78;
	            this.match(yagParser.COMMA);
	            this.state = 79;
	            this.vdec();
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 85;
	        this.match(yagParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vdec() {
	    let localctx = new VdecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, yagParser.RULE_vdec);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        localctx.vid = this.var_identifier();
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 88;
	            localctx.dim = this.arr_size();
	        }

	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===53) {
	            this.state = 91;
	            this.match(yagParser.ASSIGN);
	            this.state = 92;
	            localctx.init = this.expr(0);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arr_size() {
	    let localctx = new Arr_sizeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, yagParser.RULE_arr_size);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 95;
	        		this.match(yagParser.LBRACK);
	        		this.state = 96;
	        		this.expr(0);
	        		this.state = 97;
	        		this.match(yagParser.RBRACK);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 101; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fdec() {
	    let localctx = new FdecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, yagParser.RULE_fdec);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        localctx.ret = this.vtype();
	        this.state = 104;
	        localctx.fid = this.match(yagParser.ID);
	        this.state = 105;
	        this.match(yagParser.LPAREN);
	        this.state = 107;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 1773568) !== 0)) {
	            this.state = 106;
	            localctx.params = this.fparam_list();
	        }

	        this.state = 109;
	        this.match(yagParser.RPAREN);
	        this.state = 110;
	        localctx.bl = this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fparam_list() {
	    let localctx = new Fparam_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, yagParser.RULE_fparam_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.fparam();
	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 113;
	            this.match(yagParser.COMMA);
	            this.state = 114;
	            this.fparam();
	            this.state = 119;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fparam() {
	    let localctx = new FparamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, yagParser.RULE_fparam);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.vtype();
	        this.state = 121;
	        localctx.pid = this.var_identifier();
	        this.state = 123;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 122;
	            this.arr_size();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, yagParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(yagParser.LBRACE);
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 43758194) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 7171) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 7) !== 0)) {
	            this.state = 126;
	            this.statement();
	            this.state = 131;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 132;
	        this.match(yagParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, yagParser.RULE_statement);
	    var _la = 0; // Token type
	    try {
	        this.state = 196;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 134;
	            this.block();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 135;
	            this.vdec_list();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 136;
	            this.match(yagParser.FOR);
	            this.state = 137;
	            this.match(yagParser.LPAREN);
	            this.state = 141;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & 41943042) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 7171) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 7) !== 0)) {
	                this.state = 138;
	                this.assignment_stmt();
	                this.state = 143;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 144;
	            this.match(yagParser.SEMI);
	            this.state = 146;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & 41943042) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 7171) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 7) !== 0)) {
	                this.state = 145;
	                this.expr_list();
	            }

	            this.state = 148;
	            this.match(yagParser.SEMI);
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & 41943042) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 7171) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 7) !== 0)) {
	                this.state = 149;
	                this.expr_list();
	            }

	            this.state = 152;
	            this.match(yagParser.RPAREN);
	            this.state = 153;
	            this.statement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 154;
	            this.match(yagParser.IF);
	            this.state = 155;
	            this.expr(0);
	            this.state = 156;
	            this.statement();
	            this.state = 159;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	            if(la_===1) {
	                this.state = 157;
	                this.match(yagParser.ELSE);
	                this.state = 158;
	                this.statement();

	            }
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 161;
	            this.match(yagParser.WHILE);
	            this.state = 162;
	            this.expr(0);
	            this.state = 163;
	            this.statement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 165;
	            this.match(yagParser.DO);
	            this.state = 166;
	            this.statement();
	            this.state = 167;
	            this.match(yagParser.WHILE);
	            this.state = 168;
	            this.expr(0);
	            this.state = 169;
	            this.match(yagParser.SEMI);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 171;
	            this.match(yagParser.SWITCH);
	            this.state = 172;
	            this.expr(0);
	            this.state = 174; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 173;
	                this.case_block();
	                this.state = 176; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===10 || _la===11);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 178;
	            this.match(yagParser.RETURN);
	            this.state = 180;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & 41943042) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 7171) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 7) !== 0)) {
	                this.state = 179;
	                this.expr(0);
	            }

	            this.state = 182;
	            this.match(yagParser.SEMI);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 183;
	            this.assignment_stmt();
	            this.state = 188;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===30) {
	                this.state = 184;
	                this.match(yagParser.COMMA);
	                this.state = 185;
	                this.assignment_stmt();
	                this.state = 190;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 191;
	            this.match(yagParser.SEMI);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 193;
	            this.expr(0);
	            this.state = 194;
	            this.match(yagParser.SEMI);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment_stmt() {
	    let localctx = new Assignment_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, yagParser.RULE_assignment_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        localctx.lhs = this.expr(0);
	        this.state = 199;
	        this.assignmentOp();
	        this.state = 200;
	        localctx.rhs = this.expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	case_block() {
	    let localctx = new Case_blockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, yagParser.RULE_case_block);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.state = 202;
	            this.match(yagParser.CASE);
	            this.state = 203;
	            this.expr(0);
	            break;
	        case 11:
	            this.state = 204;
	            this.match(yagParser.DEFAULT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 207;
	        this.match(yagParser.COLON);
	        this.state = 211;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 208;
	                this.statement(); 
	            }
	            this.state = 213;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	        }

	        this.state = 214;
	        this.match(yagParser.BREAK);
	        this.state = 215;
	        this.match(yagParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr_list() {
	    let localctx = new Expr_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, yagParser.RULE_expr_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.expr(0);
	        this.state = 222;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 218;
	            this.match(yagParser.COMMA);
	            this.state = 219;
	            this.expr(0);
	            this.state = 224;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 34;
	    this.enterRecursionRule(localctx, 34, yagParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 226;
	            localctx.vid = this.var_identifier();
	            this.state = 227;
	            localctx.dim = this.arr_size();
	            break;

	        case 2:
	            this.state = 229;
	            _la = this._input.LA(1);
	            if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & 3585) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 230;
	            this.expr(19);
	            break;

	        case 3:
	            this.state = 231;
	            _la = this._input.LA(1);
	            if(!(_la===1 || _la===32)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 232;
	            this.expr(18);
	            break;

	        case 4:
	            this.state = 233;
	            localctx.fid = this.match(yagParser.ID);
	            this.state = 234;
	            this.match(yagParser.LPAREN);
	            this.state = 235;
	            localctx.fargs = this.expr_list();
	            this.state = 236;
	            this.match(yagParser.RPAREN);
	            break;

	        case 5:
	            this.state = 238;
	            localctx.vid = this.var_identifier();
	            break;

	        case 6:
	            this.state = 239;
	            this.match(yagParser.INTEGER);
	            break;

	        case 7:
	            this.state = 240;
	            this.match(yagParser.BOOLEAN);
	            break;

	        case 8:
	            this.state = 241;
	            this.match(yagParser.LBRACE);
	            this.state = 242;
	            this.expr_list();
	            this.state = 243;
	            this.match(yagParser.RBRACE);
	            break;

	        case 9:
	            this.state = 245;
	            this.match(yagParser.LPAREN);
	            this.state = 246;
	            this.expr(0);
	            this.state = 247;
	            this.match(yagParser.RPAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 294;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 292;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 251;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 252;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & 35) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 253;
	                    this.expr(18);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 254;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 255;
	                    _la = this._input.LA(1);
	                    if(!(_la===33 || _la===44)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 256;
	                    this.expr(17);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 257;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 258;
	                    _la = this._input.LA(1);
	                    if(!(_la===2 || _la===3)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 259;
	                    this.expr(16);
	                    break;

	                case 4:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 260;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 261;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & 99) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 262;
	                    this.expr(15);
	                    break;

	                case 5:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 263;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 264;
	                    _la = this._input.LA(1);
	                    if(!(_la===38 || _la===41)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 265;
	                    this.expr(14);
	                    break;

	                case 6:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 266;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }

	                    this.state = 267;
	                    this.match(yagParser.BITAND);
	                    this.state = 268;
	                    this.expr(13);
	                    break;

	                case 7:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 269;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }

	                    this.state = 270;
	                    this.match(yagParser.CARET);
	                    this.state = 271;
	                    this.expr(12);
	                    break;

	                case 8:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 272;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }

	                    this.state = 273;
	                    this.match(yagParser.BITOR);
	                    this.state = 274;
	                    this.expr(11);
	                    break;

	                case 9:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 275;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }

	                    this.state = 276;
	                    this.match(yagParser.AND);
	                    this.state = 277;
	                    this.expr(10);
	                    break;

	                case 10:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 278;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }

	                    this.state = 279;
	                    this.match(yagParser.OR);
	                    this.state = 280;
	                    this.expr(9);
	                    break;

	                case 11:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 281;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 282;
	                    this.match(yagParser.QUESTION);
	                    this.state = 283;
	                    this.expr(0);
	                    this.state = 284;
	                    this.match(yagParser.COLON);
	                    this.state = 285;
	                    this.expr(7);
	                    break;

	                case 12:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 287;
	                    if (!( this.precpred(this._ctx, 22))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
	                    }
	                    this.state = 288;
	                    this.match(yagParser.DOT);
	                    this.state = 289;
	                    this.var_identifier();
	                    break;

	                case 13:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 290;
	                    if (!( this.precpred(this._ctx, 20))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
	                    }
	                    this.state = 291;
	                    _la = this._input.LA(1);
	                    if(!(_la===42 || _la===43)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    break;

	                } 
	            }
	            this.state = 296;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	var_identifier() {
	    let localctx = new Var_identifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, yagParser.RULE_var_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 297;
	        this.match(yagParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vtype() {
	    let localctx = new VtypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, yagParser.RULE_vtype);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	        case 16:
	        case 17:
	            this.state = 300;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===12) {
	                this.state = 299;
	                localctx.constant = this.match(yagParser.CONST);
	            }

	            this.state = 302;
	            _la = this._input.LA(1);
	            if(!(_la===16 || _la===17)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 19:
	        case 20:
	            this.state = 304;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 303;
	                this.match(yagParser.BCAST);
	            }

	            this.state = 306;
	            localctx.ch = this.match(yagParser.CHAN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 310;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 309;
	            localctx.bound = this.bound_range();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bound_range() {
	    let localctx = new Bound_rangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, yagParser.RULE_bound_range);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
	        this.match(yagParser.LBRACK);
	        this.state = 313;
	        localctx.bmin = this.expr(0);
	        this.state = 314;
	        this.match(yagParser.COMMA);
	        this.state = 315;
	        localctx.bmax = this.expr(0);
	        this.state = 316;
	        this.match(yagParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentOp() {
	    let localctx = new AssignmentOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, yagParser.RULE_assignmentOp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 318;
	        _la = this._input.LA(1);
	        if(!(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & 2047) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

yagParser.EOF = antlr4.Token.EOF;
yagParser.T__0 = 1;
yagParser.T__1 = 2;
yagParser.T__2 = 3;
yagParser.FOR = 4;
yagParser.DO = 5;
yagParser.WHILE = 6;
yagParser.BREAK = 7;
yagParser.CONTINUE = 8;
yagParser.SWITCH = 9;
yagParser.CASE = 10;
yagParser.DEFAULT = 11;
yagParser.CONST = 12;
yagParser.IF = 13;
yagParser.ELSE = 14;
yagParser.RETURN = 15;
yagParser.INT = 16;
yagParser.BOOL = 17;
yagParser.VOID = 18;
yagParser.CHAN = 19;
yagParser.BCAST = 20;
yagParser.STRUCT = 21;
yagParser.TYPEDEF = 22;
yagParser.LPAREN = 23;
yagParser.RPAREN = 24;
yagParser.LBRACE = 25;
yagParser.RBRACE = 26;
yagParser.LBRACK = 27;
yagParser.RBRACK = 28;
yagParser.SEMI = 29;
yagParser.COMMA = 30;
yagParser.DOT = 31;
yagParser.BANG = 32;
yagParser.SUB = 33;
yagParser.GT = 34;
yagParser.LT = 35;
yagParser.QUESTION = 36;
yagParser.COLON = 37;
yagParser.EQUAL = 38;
yagParser.LE = 39;
yagParser.GE = 40;
yagParser.NOTEQUAL = 41;
yagParser.INC = 42;
yagParser.DEC = 43;
yagParser.ADD = 44;
yagParser.MUL = 45;
yagParser.DIV = 46;
yagParser.BITAND = 47;
yagParser.BITOR = 48;
yagParser.CARET = 49;
yagParser.MOD = 50;
yagParser.AND = 51;
yagParser.OR = 52;
yagParser.ASSIGN = 53;
yagParser.ADD_ASSIGN = 54;
yagParser.SUB_ASSIGN = 55;
yagParser.MUL_ASSIGN = 56;
yagParser.DIV_ASSIGN = 57;
yagParser.AND_ASSIGN = 58;
yagParser.OR_ASSIGN = 59;
yagParser.XOR_ASSIGN = 60;
yagParser.MOD_ASSIGN = 61;
yagParser.LSHIFT_ASSIGN = 62;
yagParser.RSHIFT_ASSIGN = 63;
yagParser.INTEGER = 64;
yagParser.BOOLEAN = 65;
yagParser.ID = 66;
yagParser.WHITESPACE = 67;
yagParser.BLOCK_COMMENT = 68;
yagParser.LINE_COMMENT = 69;

yagParser.RULE_file = 0;
yagParser.RULE_translation = 1;
yagParser.RULE_select_label = 2;
yagParser.RULE_select_pair = 3;
yagParser.RULE_assignment_label = 4;
yagParser.RULE_synchronisation_label = 5;
yagParser.RULE_vdec_list = 6;
yagParser.RULE_vdec = 7;
yagParser.RULE_arr_size = 8;
yagParser.RULE_fdec = 9;
yagParser.RULE_fparam_list = 10;
yagParser.RULE_fparam = 11;
yagParser.RULE_block = 12;
yagParser.RULE_statement = 13;
yagParser.RULE_assignment_stmt = 14;
yagParser.RULE_case_block = 15;
yagParser.RULE_expr_list = 16;
yagParser.RULE_expr = 17;
yagParser.RULE_var_identifier = 18;
yagParser.RULE_vtype = 19;
yagParser.RULE_bound_range = 20;
yagParser.RULE_assignmentOp = 21;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_file;
    }

	translation() {
	    return this.getTypedRuleContext(TranslationContext,0);
	};

	EOF() {
	    return this.getToken(yagParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitFile(this);
		}
	}


}



class TranslationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_translation;
    }

	vdec_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Vdec_listContext);
	    } else {
	        return this.getTypedRuleContext(Vdec_listContext,i);
	    }
	};

	fdec = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FdecContext);
	    } else {
	        return this.getTypedRuleContext(FdecContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterTranslation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitTranslation(this);
		}
	}


}



class Select_labelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_select_label;
    }

	select_pair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Select_pairContext);
	    } else {
	        return this.getTypedRuleContext(Select_pairContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(yagParser.COMMA);
	    } else {
	        return this.getToken(yagParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterSelect_label(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitSelect_label(this);
		}
	}


}



class Select_pairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_select_pair;
        this.vid = null; // Var_identifierContext
        this.range = null; // VtypeContext
    }

	COLON() {
	    return this.getToken(yagParser.COLON, 0);
	};

	var_identifier() {
	    return this.getTypedRuleContext(Var_identifierContext,0);
	};

	vtype() {
	    return this.getTypedRuleContext(VtypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterSelect_pair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitSelect_pair(this);
		}
	}


}



class Assignment_labelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_assignment_label;
    }

	assignment_stmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Assignment_stmtContext);
	    } else {
	        return this.getTypedRuleContext(Assignment_stmtContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(yagParser.COMMA);
	    } else {
	        return this.getToken(yagParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterAssignment_label(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitAssignment_label(this);
		}
	}


}



class Synchronisation_labelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_synchronisation_label;
        this.chan = null; // ExprContext
        this.symb = null; // Token
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	QUESTION() {
	    return this.getToken(yagParser.QUESTION, 0);
	};

	BANG() {
	    return this.getToken(yagParser.BANG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterSynchronisation_label(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitSynchronisation_label(this);
		}
	}


}



class Vdec_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_vdec_list;
        this.type = null; // VtypeContext
    }

	vdec = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VdecContext);
	    } else {
	        return this.getTypedRuleContext(VdecContext,i);
	    }
	};

	SEMI() {
	    return this.getToken(yagParser.SEMI, 0);
	};

	vtype() {
	    return this.getTypedRuleContext(VtypeContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(yagParser.COMMA);
	    } else {
	        return this.getToken(yagParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterVdec_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitVdec_list(this);
		}
	}


}



class VdecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_vdec;
        this.vid = null; // Var_identifierContext
        this.dim = null; // Arr_sizeContext
        this.init = null; // ExprContext
    }

	var_identifier() {
	    return this.getTypedRuleContext(Var_identifierContext,0);
	};

	ASSIGN() {
	    return this.getToken(yagParser.ASSIGN, 0);
	};

	arr_size() {
	    return this.getTypedRuleContext(Arr_sizeContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterVdec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitVdec(this);
		}
	}


}



class Arr_sizeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_arr_size;
    }

	LBRACK = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(yagParser.LBRACK);
	    } else {
	        return this.getToken(yagParser.LBRACK, i);
	    }
	};


	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	RBRACK = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(yagParser.RBRACK);
	    } else {
	        return this.getToken(yagParser.RBRACK, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterArr_size(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitArr_size(this);
		}
	}


}



class FdecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_fdec;
        this.ret = null; // VtypeContext
        this.fid = null; // Token
        this.params = null; // Fparam_listContext
        this.bl = null; // BlockContext
    }

	LPAREN() {
	    return this.getToken(yagParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(yagParser.RPAREN, 0);
	};

	vtype() {
	    return this.getTypedRuleContext(VtypeContext,0);
	};

	ID() {
	    return this.getToken(yagParser.ID, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	fparam_list() {
	    return this.getTypedRuleContext(Fparam_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterFdec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitFdec(this);
		}
	}


}



class Fparam_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_fparam_list;
    }

	fparam = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FparamContext);
	    } else {
	        return this.getTypedRuleContext(FparamContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(yagParser.COMMA);
	    } else {
	        return this.getToken(yagParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterFparam_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitFparam_list(this);
		}
	}


}



class FparamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_fparam;
        this.pid = null; // Var_identifierContext
    }

	vtype() {
	    return this.getTypedRuleContext(VtypeContext,0);
	};

	var_identifier() {
	    return this.getTypedRuleContext(Var_identifierContext,0);
	};

	arr_size() {
	    return this.getTypedRuleContext(Arr_sizeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterFparam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitFparam(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_block;
    }

	LBRACE() {
	    return this.getToken(yagParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(yagParser.RBRACE, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitBlock(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_statement;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	vdec_list() {
	    return this.getTypedRuleContext(Vdec_listContext,0);
	};

	FOR() {
	    return this.getToken(yagParser.FOR, 0);
	};

	LPAREN() {
	    return this.getToken(yagParser.LPAREN, 0);
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(yagParser.SEMI);
	    } else {
	        return this.getToken(yagParser.SEMI, i);
	    }
	};


	RPAREN() {
	    return this.getToken(yagParser.RPAREN, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	assignment_stmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Assignment_stmtContext);
	    } else {
	        return this.getTypedRuleContext(Assignment_stmtContext,i);
	    }
	};

	expr_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expr_listContext);
	    } else {
	        return this.getTypedRuleContext(Expr_listContext,i);
	    }
	};

	IF() {
	    return this.getToken(yagParser.IF, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	ELSE() {
	    return this.getToken(yagParser.ELSE, 0);
	};

	WHILE() {
	    return this.getToken(yagParser.WHILE, 0);
	};

	DO() {
	    return this.getToken(yagParser.DO, 0);
	};

	SWITCH() {
	    return this.getToken(yagParser.SWITCH, 0);
	};

	case_block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Case_blockContext);
	    } else {
	        return this.getTypedRuleContext(Case_blockContext,i);
	    }
	};

	RETURN() {
	    return this.getToken(yagParser.RETURN, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(yagParser.COMMA);
	    } else {
	        return this.getToken(yagParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitStatement(this);
		}
	}


}



class Assignment_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_assignment_stmt;
        this.lhs = null; // ExprContext
        this.rhs = null; // ExprContext
    }

	assignmentOp() {
	    return this.getTypedRuleContext(AssignmentOpContext,0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterAssignment_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitAssignment_stmt(this);
		}
	}


}



class Case_blockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_case_block;
    }

	COLON() {
	    return this.getToken(yagParser.COLON, 0);
	};

	BREAK() {
	    return this.getToken(yagParser.BREAK, 0);
	};

	SEMI() {
	    return this.getToken(yagParser.SEMI, 0);
	};

	DEFAULT() {
	    return this.getToken(yagParser.DEFAULT, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	CASE() {
	    return this.getToken(yagParser.CASE, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterCase_block(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitCase_block(this);
		}
	}


}



class Expr_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_expr_list;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(yagParser.COMMA);
	    } else {
	        return this.getToken(yagParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterExpr_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitExpr_list(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_expr;
        this.vid = null; // Var_identifierContext
        this.dim = null; // Arr_sizeContext
        this.fid = null; // Token
        this.fargs = null; // Expr_listContext
    }

	var_identifier() {
	    return this.getTypedRuleContext(Var_identifierContext,0);
	};

	arr_size() {
	    return this.getTypedRuleContext(Arr_sizeContext,0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	INC() {
	    return this.getToken(yagParser.INC, 0);
	};

	DEC() {
	    return this.getToken(yagParser.DEC, 0);
	};

	ADD() {
	    return this.getToken(yagParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(yagParser.SUB, 0);
	};

	BANG() {
	    return this.getToken(yagParser.BANG, 0);
	};

	LPAREN() {
	    return this.getToken(yagParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(yagParser.RPAREN, 0);
	};

	ID() {
	    return this.getToken(yagParser.ID, 0);
	};

	expr_list() {
	    return this.getTypedRuleContext(Expr_listContext,0);
	};

	INTEGER() {
	    return this.getToken(yagParser.INTEGER, 0);
	};

	BOOLEAN() {
	    return this.getToken(yagParser.BOOLEAN, 0);
	};

	LBRACE() {
	    return this.getToken(yagParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(yagParser.RBRACE, 0);
	};

	MUL() {
	    return this.getToken(yagParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(yagParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(yagParser.MOD, 0);
	};

	LE() {
	    return this.getToken(yagParser.LE, 0);
	};

	GE() {
	    return this.getToken(yagParser.GE, 0);
	};

	LT() {
	    return this.getToken(yagParser.LT, 0);
	};

	GT() {
	    return this.getToken(yagParser.GT, 0);
	};

	EQUAL() {
	    return this.getToken(yagParser.EQUAL, 0);
	};

	NOTEQUAL() {
	    return this.getToken(yagParser.NOTEQUAL, 0);
	};

	BITAND() {
	    return this.getToken(yagParser.BITAND, 0);
	};

	CARET() {
	    return this.getToken(yagParser.CARET, 0);
	};

	BITOR() {
	    return this.getToken(yagParser.BITOR, 0);
	};

	AND() {
	    return this.getToken(yagParser.AND, 0);
	};

	OR() {
	    return this.getToken(yagParser.OR, 0);
	};

	QUESTION() {
	    return this.getToken(yagParser.QUESTION, 0);
	};

	COLON() {
	    return this.getToken(yagParser.COLON, 0);
	};

	DOT() {
	    return this.getToken(yagParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitExpr(this);
		}
	}


}



class Var_identifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_var_identifier;
    }

	ID() {
	    return this.getToken(yagParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterVar_identifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitVar_identifier(this);
		}
	}


}



class VtypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_vtype;
        this.constant = null; // Token
        this.ch = null; // Token
        this.bound = null; // Bound_rangeContext
    }

	bound_range() {
	    return this.getTypedRuleContext(Bound_rangeContext,0);
	};

	INT() {
	    return this.getToken(yagParser.INT, 0);
	};

	BOOL() {
	    return this.getToken(yagParser.BOOL, 0);
	};

	CHAN() {
	    return this.getToken(yagParser.CHAN, 0);
	};

	BCAST() {
	    return this.getToken(yagParser.BCAST, 0);
	};

	CONST() {
	    return this.getToken(yagParser.CONST, 0);
	};

	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterVtype(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitVtype(this);
		}
	}


}



class Bound_rangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_bound_range;
        this.bmin = null; // ExprContext
        this.bmax = null; // ExprContext
    }

	LBRACK() {
	    return this.getToken(yagParser.LBRACK, 0);
	};

	COMMA() {
	    return this.getToken(yagParser.COMMA, 0);
	};

	RBRACK() {
	    return this.getToken(yagParser.RBRACK, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterBound_range(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitBound_range(this);
		}
	}


}



class AssignmentOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = yagParser.RULE_assignmentOp;
    }

	ASSIGN() {
	    return this.getToken(yagParser.ASSIGN, 0);
	};

	ADD_ASSIGN() {
	    return this.getToken(yagParser.ADD_ASSIGN, 0);
	};

	SUB_ASSIGN() {
	    return this.getToken(yagParser.SUB_ASSIGN, 0);
	};

	MUL_ASSIGN() {
	    return this.getToken(yagParser.MUL_ASSIGN, 0);
	};

	DIV_ASSIGN() {
	    return this.getToken(yagParser.DIV_ASSIGN, 0);
	};

	MOD_ASSIGN() {
	    return this.getToken(yagParser.MOD_ASSIGN, 0);
	};

	AND_ASSIGN() {
	    return this.getToken(yagParser.AND_ASSIGN, 0);
	};

	OR_ASSIGN() {
	    return this.getToken(yagParser.OR_ASSIGN, 0);
	};

	XOR_ASSIGN() {
	    return this.getToken(yagParser.XOR_ASSIGN, 0);
	};

	LSHIFT_ASSIGN() {
	    return this.getToken(yagParser.LSHIFT_ASSIGN, 0);
	};

	RSHIFT_ASSIGN() {
	    return this.getToken(yagParser.RSHIFT_ASSIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.enterAssignmentOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof yagListener ) {
	        listener.exitAssignmentOp(this);
		}
	}


}




yagParser.FileContext = FileContext; 
yagParser.TranslationContext = TranslationContext; 
yagParser.Select_labelContext = Select_labelContext; 
yagParser.Select_pairContext = Select_pairContext; 
yagParser.Assignment_labelContext = Assignment_labelContext; 
yagParser.Synchronisation_labelContext = Synchronisation_labelContext; 
yagParser.Vdec_listContext = Vdec_listContext; 
yagParser.VdecContext = VdecContext; 
yagParser.Arr_sizeContext = Arr_sizeContext; 
yagParser.FdecContext = FdecContext; 
yagParser.Fparam_listContext = Fparam_listContext; 
yagParser.FparamContext = FparamContext; 
yagParser.BlockContext = BlockContext; 
yagParser.StatementContext = StatementContext; 
yagParser.Assignment_stmtContext = Assignment_stmtContext; 
yagParser.Case_blockContext = Case_blockContext; 
yagParser.Expr_listContext = Expr_listContext; 
yagParser.ExprContext = ExprContext; 
yagParser.Var_identifierContext = Var_identifierContext; 
yagParser.VtypeContext = VtypeContext; 
yagParser.Bound_rangeContext = Bound_rangeContext; 
yagParser.AssignmentOpContext = AssignmentOpContext; 
