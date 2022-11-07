// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import yagListener from './yagListener.js';
const serializedATN = [4,1,69,319,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,1,0,1,0,1,0,1,1,1,1,4,1,48,8,1,11,1,12,1,49,1,2,1,2,1,2,5,2,55,8,
2,10,2,12,2,58,9,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,5,4,67,8,4,10,4,12,4,70,9,
4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,5,6,79,8,6,10,6,12,6,82,9,6,1,6,1,6,1,7,1,
7,3,7,88,8,7,1,7,1,7,3,7,92,8,7,1,8,1,8,1,8,1,8,4,8,98,8,8,11,8,12,8,99,
1,9,1,9,1,9,1,9,3,9,106,8,9,1,9,1,9,1,9,1,10,1,10,1,10,5,10,114,8,10,10,
10,12,10,117,9,10,1,11,1,11,1,11,3,11,122,8,11,1,12,1,12,5,12,126,8,12,10,
12,12,12,129,9,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,5,13,138,8,13,10,13,
12,13,141,9,13,1,13,1,13,3,13,145,8,13,1,13,1,13,3,13,149,8,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,3,13,158,8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,1,13,4,13,173,8,13,11,13,12,13,174,1,13,1,13,3,
13,179,8,13,1,13,1,13,1,13,1,13,5,13,185,8,13,10,13,12,13,188,9,13,1,13,
1,13,1,13,1,13,1,13,3,13,195,8,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,3,15,
204,8,15,1,15,1,15,5,15,208,8,15,10,15,12,15,211,9,15,1,15,1,15,1,15,1,16,
1,16,1,16,5,16,219,8,16,10,16,12,16,222,9,16,1,17,1,17,1,17,1,17,1,17,1,
17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
1,17,3,17,245,8,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,
17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,5,17,293,8,17,10,17,12,17,296,9,17,1,18,3,
18,299,8,18,1,18,1,18,3,18,303,8,18,1,18,3,18,306,8,18,1,18,3,18,309,8,18,
1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,209,1,34,21,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,0,11,2,0,32,32,36,36,2,0,33,
33,42,44,2,0,1,1,32,32,2,0,45,46,50,50,2,0,33,33,44,44,1,0,2,3,2,0,34,35,
39,40,2,0,38,38,41,41,1,0,42,43,1,0,16,17,1,0,53,63,353,0,42,1,0,0,0,2,47,
1,0,0,0,4,51,1,0,0,0,6,59,1,0,0,0,8,63,1,0,0,0,10,71,1,0,0,0,12,74,1,0,0,
0,14,85,1,0,0,0,16,97,1,0,0,0,18,101,1,0,0,0,20,110,1,0,0,0,22,118,1,0,0,
0,24,123,1,0,0,0,26,194,1,0,0,0,28,196,1,0,0,0,30,203,1,0,0,0,32,215,1,0,
0,0,34,244,1,0,0,0,36,305,1,0,0,0,38,310,1,0,0,0,40,316,1,0,0,0,42,43,3,
2,1,0,43,44,5,0,0,1,44,1,1,0,0,0,45,48,3,12,6,0,46,48,3,18,9,0,47,45,1,0,
0,0,47,46,1,0,0,0,48,49,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,3,1,0,0,0,
51,56,3,6,3,0,52,53,5,30,0,0,53,55,3,6,3,0,54,52,1,0,0,0,55,58,1,0,0,0,56,
54,1,0,0,0,56,57,1,0,0,0,57,5,1,0,0,0,58,56,1,0,0,0,59,60,5,66,0,0,60,61,
5,37,0,0,61,62,3,36,18,0,62,7,1,0,0,0,63,68,3,28,14,0,64,65,5,30,0,0,65,
67,3,28,14,0,66,64,1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,
9,1,0,0,0,70,68,1,0,0,0,71,72,3,34,17,0,72,73,7,0,0,0,73,11,1,0,0,0,74,75,
3,36,18,0,75,80,3,14,7,0,76,77,5,30,0,0,77,79,3,14,7,0,78,76,1,0,0,0,79,
82,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,83,1,0,0,0,82,80,1,0,0,0,83,84,
5,29,0,0,84,13,1,0,0,0,85,87,5,66,0,0,86,88,3,16,8,0,87,86,1,0,0,0,87,88,
1,0,0,0,88,91,1,0,0,0,89,90,5,53,0,0,90,92,3,34,17,0,91,89,1,0,0,0,91,92,
1,0,0,0,92,15,1,0,0,0,93,94,5,27,0,0,94,95,3,34,17,0,95,96,5,28,0,0,96,98,
1,0,0,0,97,93,1,0,0,0,98,99,1,0,0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,17,
1,0,0,0,101,102,3,36,18,0,102,103,5,66,0,0,103,105,5,23,0,0,104,106,3,20,
10,0,105,104,1,0,0,0,105,106,1,0,0,0,106,107,1,0,0,0,107,108,5,24,0,0,108,
109,3,24,12,0,109,19,1,0,0,0,110,115,3,22,11,0,111,112,5,30,0,0,112,114,
3,22,11,0,113,111,1,0,0,0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,
0,116,21,1,0,0,0,117,115,1,0,0,0,118,119,3,36,18,0,119,121,5,66,0,0,120,
122,3,16,8,0,121,120,1,0,0,0,121,122,1,0,0,0,122,23,1,0,0,0,123,127,5,25,
0,0,124,126,3,26,13,0,125,124,1,0,0,0,126,129,1,0,0,0,127,125,1,0,0,0,127,
128,1,0,0,0,128,130,1,0,0,0,129,127,1,0,0,0,130,131,5,26,0,0,131,25,1,0,
0,0,132,195,3,24,12,0,133,195,3,12,6,0,134,135,5,4,0,0,135,139,5,23,0,0,
136,138,3,28,14,0,137,136,1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,0,139,140,
1,0,0,0,140,142,1,0,0,0,141,139,1,0,0,0,142,144,5,29,0,0,143,145,3,32,16,
0,144,143,1,0,0,0,144,145,1,0,0,0,145,146,1,0,0,0,146,148,5,29,0,0,147,149,
3,32,16,0,148,147,1,0,0,0,148,149,1,0,0,0,149,150,1,0,0,0,150,151,5,24,0,
0,151,195,3,26,13,0,152,153,5,13,0,0,153,154,3,34,17,0,154,157,3,26,13,0,
155,156,5,14,0,0,156,158,3,26,13,0,157,155,1,0,0,0,157,158,1,0,0,0,158,195,
1,0,0,0,159,160,5,6,0,0,160,161,3,34,17,0,161,162,3,26,13,0,162,195,1,0,
0,0,163,164,5,5,0,0,164,165,3,26,13,0,165,166,5,6,0,0,166,167,3,34,17,0,
167,168,5,29,0,0,168,195,1,0,0,0,169,170,5,9,0,0,170,172,3,34,17,0,171,173,
3,30,15,0,172,171,1,0,0,0,173,174,1,0,0,0,174,172,1,0,0,0,174,175,1,0,0,
0,175,195,1,0,0,0,176,178,5,15,0,0,177,179,3,34,17,0,178,177,1,0,0,0,178,
179,1,0,0,0,179,180,1,0,0,0,180,195,5,29,0,0,181,186,3,28,14,0,182,183,5,
30,0,0,183,185,3,28,14,0,184,182,1,0,0,0,185,188,1,0,0,0,186,184,1,0,0,0,
186,187,1,0,0,0,187,189,1,0,0,0,188,186,1,0,0,0,189,190,5,29,0,0,190,195,
1,0,0,0,191,192,3,34,17,0,192,193,5,29,0,0,193,195,1,0,0,0,194,132,1,0,0,
0,194,133,1,0,0,0,194,134,1,0,0,0,194,152,1,0,0,0,194,159,1,0,0,0,194,163,
1,0,0,0,194,169,1,0,0,0,194,176,1,0,0,0,194,181,1,0,0,0,194,191,1,0,0,0,
195,27,1,0,0,0,196,197,3,34,17,0,197,198,3,40,20,0,198,199,3,34,17,0,199,
29,1,0,0,0,200,201,5,10,0,0,201,204,3,34,17,0,202,204,5,11,0,0,203,200,1,
0,0,0,203,202,1,0,0,0,204,205,1,0,0,0,205,209,5,37,0,0,206,208,3,26,13,0,
207,206,1,0,0,0,208,211,1,0,0,0,209,210,1,0,0,0,209,207,1,0,0,0,210,212,
1,0,0,0,211,209,1,0,0,0,212,213,5,7,0,0,213,214,5,29,0,0,214,31,1,0,0,0,
215,220,3,34,17,0,216,217,5,30,0,0,217,219,3,34,17,0,218,216,1,0,0,0,219,
222,1,0,0,0,220,218,1,0,0,0,220,221,1,0,0,0,221,33,1,0,0,0,222,220,1,0,0,
0,223,224,6,17,-1,0,224,225,7,1,0,0,225,245,3,34,17,19,226,227,7,2,0,0,227,
245,3,34,17,18,228,229,5,66,0,0,229,230,5,23,0,0,230,231,3,32,16,0,231,232,
5,24,0,0,232,245,1,0,0,0,233,245,5,66,0,0,234,245,5,64,0,0,235,245,5,65,
0,0,236,237,5,25,0,0,237,238,3,32,16,0,238,239,5,26,0,0,239,245,1,0,0,0,
240,241,5,23,0,0,241,242,3,34,17,0,242,243,5,24,0,0,243,245,1,0,0,0,244,
223,1,0,0,0,244,226,1,0,0,0,244,228,1,0,0,0,244,233,1,0,0,0,244,234,1,0,
0,0,244,235,1,0,0,0,244,236,1,0,0,0,244,240,1,0,0,0,245,294,1,0,0,0,246,
247,10,17,0,0,247,248,7,3,0,0,248,293,3,34,17,18,249,250,10,16,0,0,250,251,
7,4,0,0,251,293,3,34,17,17,252,253,10,15,0,0,253,254,7,5,0,0,254,293,3,34,
17,16,255,256,10,14,0,0,256,257,7,6,0,0,257,293,3,34,17,15,258,259,10,13,
0,0,259,260,7,7,0,0,260,293,3,34,17,14,261,262,10,12,0,0,262,263,5,47,0,
0,263,293,3,34,17,13,264,265,10,11,0,0,265,266,5,49,0,0,266,293,3,34,17,
12,267,268,10,10,0,0,268,269,5,48,0,0,269,293,3,34,17,11,270,271,10,9,0,
0,271,272,5,51,0,0,272,293,3,34,17,10,273,274,10,8,0,0,274,275,5,52,0,0,
275,293,3,34,17,9,276,277,10,7,0,0,277,278,5,36,0,0,278,279,3,34,17,0,279,
280,5,37,0,0,280,281,3,34,17,7,281,293,1,0,0,0,282,283,10,22,0,0,283,284,
5,31,0,0,284,293,5,66,0,0,285,286,10,21,0,0,286,287,5,27,0,0,287,288,3,34,
17,0,288,289,5,28,0,0,289,293,1,0,0,0,290,291,10,20,0,0,291,293,7,8,0,0,
292,246,1,0,0,0,292,249,1,0,0,0,292,252,1,0,0,0,292,255,1,0,0,0,292,258,
1,0,0,0,292,261,1,0,0,0,292,264,1,0,0,0,292,267,1,0,0,0,292,270,1,0,0,0,
292,273,1,0,0,0,292,276,1,0,0,0,292,282,1,0,0,0,292,285,1,0,0,0,292,290,
1,0,0,0,293,296,1,0,0,0,294,292,1,0,0,0,294,295,1,0,0,0,295,35,1,0,0,0,296,
294,1,0,0,0,297,299,5,12,0,0,298,297,1,0,0,0,298,299,1,0,0,0,299,300,1,0,
0,0,300,306,7,9,0,0,301,303,5,20,0,0,302,301,1,0,0,0,302,303,1,0,0,0,303,
304,1,0,0,0,304,306,5,19,0,0,305,298,1,0,0,0,305,302,1,0,0,0,306,308,1,0,
0,0,307,309,3,38,19,0,308,307,1,0,0,0,308,309,1,0,0,0,309,37,1,0,0,0,310,
311,5,27,0,0,311,312,3,34,17,0,312,313,5,30,0,0,313,314,3,34,17,0,314,315,
5,28,0,0,315,39,1,0,0,0,316,317,7,10,0,0,317,41,1,0,0,0,30,47,49,56,68,80,
87,91,99,105,115,121,127,139,144,148,157,174,178,186,194,203,209,220,244,
292,294,298,302,305,308];


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
                         "expr_list", "expr", "vtype", "bound_range", "assignmentOp" ];

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
    			return this.precpred(this._ctx, 21);
    		case 13:
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
	        this.state = 42;
	        this.translation();
	        this.state = 43;
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
	        this.state = 47; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 47;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 45;
	                this.vdec_list();
	                break;

	            case 2:
	                this.state = 46;
	                this.fdec();
	                break;

	            }
	            this.state = 49; 
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
	        this.state = 51;
	        this.select_pair();
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 52;
	            this.match(yagParser.COMMA);
	            this.state = 53;
	            this.select_pair();
	            this.state = 58;
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
	        this.state = 59;
	        localctx.vid = this.match(yagParser.ID);
	        this.state = 60;
	        this.match(yagParser.COLON);
	        this.state = 61;
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
	        this.state = 63;
	        this.assignment_stmt();
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 64;
	            this.match(yagParser.COMMA);
	            this.state = 65;
	            this.assignment_stmt();
	            this.state = 70;
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
	        this.state = 71;
	        localctx.chan = this.expr(0);
	        this.state = 72;
	        _la = this._input.LA(1);
	        if(!(_la===32 || _la===36)) {
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



	vdec_list() {
	    let localctx = new Vdec_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, yagParser.RULE_vdec_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        localctx.type = this.vtype();
	        this.state = 75;
	        this.vdec();
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 76;
	            this.match(yagParser.COMMA);
	            this.state = 77;
	            this.vdec();
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 83;
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
	        this.state = 85;
	        localctx.vid = this.match(yagParser.ID);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 86;
	            localctx.dim = this.arr_size();
	        }

	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===53) {
	            this.state = 89;
	            this.match(yagParser.ASSIGN);
	            this.state = 90;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 93;
	            this.match(yagParser.LBRACK);
	            this.state = 94;
	            this.expr(0);
	            this.state = 95;
	            this.match(yagParser.RBRACK);
	            this.state = 99; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===27);
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
	        this.state = 101;
	        localctx.ret = this.vtype();
	        this.state = 102;
	        localctx.fid = this.match(yagParser.ID);
	        this.state = 103;
	        this.match(yagParser.LPAREN);
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 1773568) !== 0)) {
	            this.state = 104;
	            localctx.params = this.fparam_list();
	        }

	        this.state = 107;
	        this.match(yagParser.RPAREN);
	        this.state = 108;
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
	        this.state = 110;
	        this.fparam();
	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 111;
	            this.match(yagParser.COMMA);
	            this.state = 112;
	            this.fparam();
	            this.state = 117;
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
	        this.state = 118;
	        this.vtype();
	        this.state = 119;
	        localctx.pid = this.match(yagParser.ID);
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 120;
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
	        this.state = 123;
	        this.match(yagParser.LBRACE);
	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 43758194) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 7171) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 7) !== 0)) {
	            this.state = 124;
	            this.statement();
	            this.state = 129;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 130;
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
	        this.state = 194;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 132;
	            this.block();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 133;
	            this.vdec_list();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 134;
	            this.match(yagParser.FOR);
	            this.state = 135;
	            this.match(yagParser.LPAREN);
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & 41943042) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 7171) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 7) !== 0)) {
	                this.state = 136;
	                this.assignment_stmt();
	                this.state = 141;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 142;
	            this.match(yagParser.SEMI);
	            this.state = 144;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & 41943042) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 7171) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 7) !== 0)) {
	                this.state = 143;
	                this.expr_list();
	            }

	            this.state = 146;
	            this.match(yagParser.SEMI);
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & 41943042) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 7171) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 7) !== 0)) {
	                this.state = 147;
	                this.expr_list();
	            }

	            this.state = 150;
	            this.match(yagParser.RPAREN);
	            this.state = 151;
	            this.statement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 152;
	            this.match(yagParser.IF);
	            this.state = 153;
	            this.expr(0);
	            this.state = 154;
	            this.statement();
	            this.state = 157;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	            if(la_===1) {
	                this.state = 155;
	                this.match(yagParser.ELSE);
	                this.state = 156;
	                this.statement();

	            }
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 159;
	            this.match(yagParser.WHILE);
	            this.state = 160;
	            this.expr(0);
	            this.state = 161;
	            this.statement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 163;
	            this.match(yagParser.DO);
	            this.state = 164;
	            this.statement();
	            this.state = 165;
	            this.match(yagParser.WHILE);
	            this.state = 166;
	            this.expr(0);
	            this.state = 167;
	            this.match(yagParser.SEMI);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 169;
	            this.match(yagParser.SWITCH);
	            this.state = 170;
	            this.expr(0);
	            this.state = 172; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 171;
	                this.case_block();
	                this.state = 174; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===10 || _la===11);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 176;
	            this.match(yagParser.RETURN);
	            this.state = 178;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & 41943042) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 7171) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 7) !== 0)) {
	                this.state = 177;
	                this.expr(0);
	            }

	            this.state = 180;
	            this.match(yagParser.SEMI);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 181;
	            this.assignment_stmt();
	            this.state = 186;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===30) {
	                this.state = 182;
	                this.match(yagParser.COMMA);
	                this.state = 183;
	                this.assignment_stmt();
	                this.state = 188;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 189;
	            this.match(yagParser.SEMI);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 191;
	            this.expr(0);
	            this.state = 192;
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
	        this.state = 196;
	        localctx.lhs = this.expr(0);
	        this.state = 197;
	        this.assignmentOp();
	        this.state = 198;
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
	        this.state = 203;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.state = 200;
	            this.match(yagParser.CASE);
	            this.state = 201;
	            this.expr(0);
	            break;
	        case 11:
	            this.state = 202;
	            this.match(yagParser.DEFAULT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 205;
	        this.match(yagParser.COLON);
	        this.state = 209;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 206;
	                this.statement(); 
	            }
	            this.state = 211;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	        }

	        this.state = 212;
	        this.match(yagParser.BREAK);
	        this.state = 213;
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
	        this.state = 215;
	        this.expr(0);
	        this.state = 220;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 216;
	            this.match(yagParser.COMMA);
	            this.state = 217;
	            this.expr(0);
	            this.state = 222;
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
	        this.state = 244;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 224;
	            _la = this._input.LA(1);
	            if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & 3585) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 225;
	            this.expr(19);
	            break;

	        case 2:
	            this.state = 226;
	            _la = this._input.LA(1);
	            if(!(_la===1 || _la===32)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 227;
	            this.expr(18);
	            break;

	        case 3:
	            this.state = 228;
	            localctx.fid = this.match(yagParser.ID);
	            this.state = 229;
	            this.match(yagParser.LPAREN);
	            this.state = 230;
	            localctx.fargs = this.expr_list();
	            this.state = 231;
	            this.match(yagParser.RPAREN);
	            break;

	        case 4:
	            this.state = 233;
	            localctx.vid = this.match(yagParser.ID);
	            break;

	        case 5:
	            this.state = 234;
	            this.match(yagParser.INTEGER);
	            break;

	        case 6:
	            this.state = 235;
	            this.match(yagParser.BOOLEAN);
	            break;

	        case 7:
	            this.state = 236;
	            this.match(yagParser.LBRACE);
	            this.state = 237;
	            this.expr_list();
	            this.state = 238;
	            this.match(yagParser.RBRACE);
	            break;

	        case 8:
	            this.state = 240;
	            this.match(yagParser.LPAREN);
	            this.state = 241;
	            this.expr(0);
	            this.state = 242;
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
	                    this.state = 246;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 247;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & 35) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 248;
	                    this.expr(18);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 249;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 250;
	                    _la = this._input.LA(1);
	                    if(!(_la===33 || _la===44)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 251;
	                    this.expr(17);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 252;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 253;
	                    _la = this._input.LA(1);
	                    if(!(_la===2 || _la===3)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 254;
	                    this.expr(16);
	                    break;

	                case 4:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 255;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 256;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & 99) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 257;
	                    this.expr(15);
	                    break;

	                case 5:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 258;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 259;
	                    _la = this._input.LA(1);
	                    if(!(_la===38 || _la===41)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 260;
	                    this.expr(14);
	                    break;

	                case 6:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 261;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }

	                    this.state = 262;
	                    this.match(yagParser.BITAND);
	                    this.state = 263;
	                    this.expr(13);
	                    break;

	                case 7:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 264;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }

	                    this.state = 265;
	                    this.match(yagParser.CARET);
	                    this.state = 266;
	                    this.expr(12);
	                    break;

	                case 8:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 267;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }

	                    this.state = 268;
	                    this.match(yagParser.BITOR);
	                    this.state = 269;
	                    this.expr(11);
	                    break;

	                case 9:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 270;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }

	                    this.state = 271;
	                    this.match(yagParser.AND);
	                    this.state = 272;
	                    this.expr(10);
	                    break;

	                case 10:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 273;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }

	                    this.state = 274;
	                    this.match(yagParser.OR);
	                    this.state = 275;
	                    this.expr(9);
	                    break;

	                case 11:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 276;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 277;
	                    this.match(yagParser.QUESTION);
	                    this.state = 278;
	                    this.expr(0);
	                    this.state = 279;
	                    this.match(yagParser.COLON);
	                    this.state = 280;
	                    this.expr(7);
	                    break;

	                case 12:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 282;
	                    if (!( this.precpred(this._ctx, 22))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
	                    }
	                    this.state = 283;
	                    this.match(yagParser.DOT);
	                    this.state = 284;
	                    this.match(yagParser.ID);
	                    break;

	                case 13:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 285;
	                    if (!( this.precpred(this._ctx, 21))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
	                    }
	                    this.state = 286;
	                    this.match(yagParser.LBRACK);
	                    this.state = 287;
	                    this.expr(0);
	                    this.state = 288;
	                    this.match(yagParser.RBRACK);
	                    break;

	                case 14:
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



	vtype() {
	    let localctx = new VtypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, yagParser.RULE_vtype);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 305;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	        case 16:
	        case 17:
	            this.state = 298;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===12) {
	                this.state = 297;
	                localctx.constant = this.match(yagParser.CONST);
	            }

	            this.state = 300;
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
	            this.state = 302;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 301;
	                this.match(yagParser.BCAST);
	            }

	            this.state = 304;
	            this.match(yagParser.CHAN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 308;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 307;
	            this.bound_range();
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
	    this.enterRule(localctx, 38, yagParser.RULE_bound_range);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        this.match(yagParser.LBRACK);
	        this.state = 311;
	        this.expr(0);
	        this.state = 312;
	        this.match(yagParser.COMMA);
	        this.state = 313;
	        this.expr(0);
	        this.state = 314;
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
	    this.enterRule(localctx, 40, yagParser.RULE_assignmentOp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 316;
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
yagParser.RULE_vtype = 18;
yagParser.RULE_bound_range = 19;
yagParser.RULE_assignmentOp = 20;

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
        this.vid = null; // Token
        this.range = null; // VtypeContext
    }

	COLON() {
	    return this.getToken(yagParser.COLON, 0);
	};

	ID() {
	    return this.getToken(yagParser.ID, 0);
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
        this.vid = null; // Token
        this.dim = null; // Arr_sizeContext
        this.init = null; // ExprContext
    }

	ID() {
	    return this.getToken(yagParser.ID, 0);
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
        this.pid = null; // Token
    }

	vtype() {
	    return this.getTypedRuleContext(VtypeContext,0);
	};

	ID() {
	    return this.getToken(yagParser.ID, 0);
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
        this.fid = null; // Token
        this.fargs = null; // Expr_listContext
        this.vid = null; // Token
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

	LBRACK() {
	    return this.getToken(yagParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(yagParser.RBRACK, 0);
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
    }

	bound_range() {
	    return this.getTypedRuleContext(Bound_rangeContext,0);
	};

	CHAN() {
	    return this.getToken(yagParser.CHAN, 0);
	};

	INT() {
	    return this.getToken(yagParser.INT, 0);
	};

	BOOL() {
	    return this.getToken(yagParser.BOOL, 0);
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
    }

	LBRACK() {
	    return this.getToken(yagParser.LBRACK, 0);
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

	COMMA() {
	    return this.getToken(yagParser.COMMA, 0);
	};

	RBRACK() {
	    return this.getToken(yagParser.RBRACK, 0);
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
yagParser.VtypeContext = VtypeContext; 
yagParser.Bound_rangeContext = Bound_rangeContext; 
yagParser.AssignmentOpContext = AssignmentOpContext; 
