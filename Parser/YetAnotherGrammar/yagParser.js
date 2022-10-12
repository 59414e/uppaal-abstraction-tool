// Generated from yag.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import yagListener from './yagListener.js';
const serializedATN = [4,1,69,288,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,1,0,1,1,1,1,4,1,40,8,1,11,
1,12,1,41,1,2,1,2,1,2,1,2,5,2,48,8,2,10,2,12,2,51,9,2,1,2,1,2,1,3,1,3,3,
3,57,8,3,1,3,1,3,3,3,61,8,3,1,4,1,4,1,4,1,4,4,4,67,8,4,11,4,12,4,68,1,5,
1,5,1,5,1,5,3,5,75,8,5,1,5,1,5,1,5,1,6,1,6,1,6,5,6,83,8,6,10,6,12,6,86,9,
6,1,7,1,7,1,7,3,7,91,8,7,1,8,1,8,5,8,95,8,8,10,8,12,8,98,9,8,1,8,1,8,1,9,
1,9,1,9,1,9,1,9,5,9,107,8,9,10,9,12,9,110,9,9,1,9,1,9,3,9,114,8,9,1,9,1,
9,3,9,118,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,127,8,9,1,9,1,9,1,9,1,9,1,
9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,4,9,142,8,9,11,9,12,9,143,1,9,1,9,3,9,
148,8,9,1,9,1,9,1,9,1,9,5,9,154,8,9,10,9,12,9,157,9,9,1,9,1,9,1,9,1,9,1,
9,3,9,164,8,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,3,11,173,8,11,1,11,1,11,
5,11,177,8,11,10,11,12,11,180,9,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,
12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,3,12,206,8,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,254,8,12,10,12,12,12,257,9,12,1,
13,1,13,1,13,5,13,262,8,13,10,13,12,13,265,9,13,1,14,1,14,1,14,1,14,1,14,
1,14,1,15,3,15,274,8,15,1,15,1,15,3,15,278,8,15,1,15,3,15,281,8,15,1,15,
3,15,284,8,15,1,16,1,16,1,16,1,178,1,24,17,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,0,10,2,0,33,33,42,44,2,0,1,1,32,32,2,0,45,46,50,50,2,0,33,
33,44,44,1,0,2,3,2,0,34,35,39,40,2,0,38,38,41,41,1,0,42,43,1,0,16,17,1,0,
53,63,324,0,34,1,0,0,0,2,39,1,0,0,0,4,43,1,0,0,0,6,54,1,0,0,0,8,66,1,0,0,
0,10,70,1,0,0,0,12,79,1,0,0,0,14,87,1,0,0,0,16,92,1,0,0,0,18,163,1,0,0,0,
20,165,1,0,0,0,22,172,1,0,0,0,24,205,1,0,0,0,26,258,1,0,0,0,28,266,1,0,0,
0,30,280,1,0,0,0,32,285,1,0,0,0,34,35,3,2,1,0,35,36,5,0,0,1,36,1,1,0,0,0,
37,40,3,4,2,0,38,40,3,10,5,0,39,37,1,0,0,0,39,38,1,0,0,0,40,41,1,0,0,0,41,
39,1,0,0,0,41,42,1,0,0,0,42,3,1,0,0,0,43,44,3,30,15,0,44,49,3,6,3,0,45,46,
5,30,0,0,46,48,3,6,3,0,47,45,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,
0,0,0,50,52,1,0,0,0,51,49,1,0,0,0,52,53,5,29,0,0,53,5,1,0,0,0,54,56,5,66,
0,0,55,57,3,8,4,0,56,55,1,0,0,0,56,57,1,0,0,0,57,60,1,0,0,0,58,59,5,53,0,
0,59,61,3,24,12,0,60,58,1,0,0,0,60,61,1,0,0,0,61,7,1,0,0,0,62,63,5,27,0,
0,63,64,3,24,12,0,64,65,5,28,0,0,65,67,1,0,0,0,66,62,1,0,0,0,67,68,1,0,0,
0,68,66,1,0,0,0,68,69,1,0,0,0,69,9,1,0,0,0,70,71,3,30,15,0,71,72,5,66,0,
0,72,74,5,23,0,0,73,75,3,12,6,0,74,73,1,0,0,0,74,75,1,0,0,0,75,76,1,0,0,
0,76,77,5,24,0,0,77,78,3,16,8,0,78,11,1,0,0,0,79,84,3,14,7,0,80,81,5,30,
0,0,81,83,3,14,7,0,82,80,1,0,0,0,83,86,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,
0,85,13,1,0,0,0,86,84,1,0,0,0,87,88,3,30,15,0,88,90,5,66,0,0,89,91,3,8,4,
0,90,89,1,0,0,0,90,91,1,0,0,0,91,15,1,0,0,0,92,96,5,25,0,0,93,95,3,18,9,
0,94,93,1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,97,99,1,0,0,0,
98,96,1,0,0,0,99,100,5,26,0,0,100,17,1,0,0,0,101,164,3,16,8,0,102,164,3,
4,2,0,103,104,5,4,0,0,104,108,5,23,0,0,105,107,3,20,10,0,106,105,1,0,0,0,
107,110,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,111,1,0,0,0,110,108,
1,0,0,0,111,113,5,29,0,0,112,114,3,26,13,0,113,112,1,0,0,0,113,114,1,0,0,
0,114,115,1,0,0,0,115,117,5,29,0,0,116,118,3,26,13,0,117,116,1,0,0,0,117,
118,1,0,0,0,118,119,1,0,0,0,119,120,5,24,0,0,120,164,3,18,9,0,121,122,5,
13,0,0,122,123,3,24,12,0,123,126,3,18,9,0,124,125,5,14,0,0,125,127,3,18,
9,0,126,124,1,0,0,0,126,127,1,0,0,0,127,164,1,0,0,0,128,129,5,6,0,0,129,
130,3,24,12,0,130,131,3,18,9,0,131,164,1,0,0,0,132,133,5,5,0,0,133,134,3,
18,9,0,134,135,5,6,0,0,135,136,3,24,12,0,136,137,5,29,0,0,137,164,1,0,0,
0,138,139,5,9,0,0,139,141,3,24,12,0,140,142,3,22,11,0,141,140,1,0,0,0,142,
143,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,0,144,164,1,0,0,0,145,147,5,15,
0,0,146,148,3,24,12,0,147,146,1,0,0,0,147,148,1,0,0,0,148,149,1,0,0,0,149,
164,5,29,0,0,150,155,3,20,10,0,151,152,5,30,0,0,152,154,3,20,10,0,153,151,
1,0,0,0,154,157,1,0,0,0,155,153,1,0,0,0,155,156,1,0,0,0,156,158,1,0,0,0,
157,155,1,0,0,0,158,159,5,29,0,0,159,164,1,0,0,0,160,161,3,24,12,0,161,162,
5,29,0,0,162,164,1,0,0,0,163,101,1,0,0,0,163,102,1,0,0,0,163,103,1,0,0,0,
163,121,1,0,0,0,163,128,1,0,0,0,163,132,1,0,0,0,163,138,1,0,0,0,163,145,
1,0,0,0,163,150,1,0,0,0,163,160,1,0,0,0,164,19,1,0,0,0,165,166,3,24,12,0,
166,167,3,32,16,0,167,168,3,24,12,0,168,21,1,0,0,0,169,170,5,10,0,0,170,
173,3,24,12,0,171,173,5,11,0,0,172,169,1,0,0,0,172,171,1,0,0,0,173,174,1,
0,0,0,174,178,5,37,0,0,175,177,3,18,9,0,176,175,1,0,0,0,177,180,1,0,0,0,
178,179,1,0,0,0,178,176,1,0,0,0,179,181,1,0,0,0,180,178,1,0,0,0,181,182,
5,7,0,0,182,183,5,29,0,0,183,23,1,0,0,0,184,185,6,12,-1,0,185,186,7,0,0,
0,186,206,3,24,12,19,187,188,7,1,0,0,188,206,3,24,12,18,189,190,5,66,0,0,
190,191,5,23,0,0,191,192,3,26,13,0,192,193,5,24,0,0,193,206,1,0,0,0,194,
206,5,66,0,0,195,206,5,64,0,0,196,206,5,65,0,0,197,198,5,25,0,0,198,199,
3,26,13,0,199,200,5,26,0,0,200,206,1,0,0,0,201,202,5,23,0,0,202,203,3,24,
12,0,203,204,5,24,0,0,204,206,1,0,0,0,205,184,1,0,0,0,205,187,1,0,0,0,205,
189,1,0,0,0,205,194,1,0,0,0,205,195,1,0,0,0,205,196,1,0,0,0,205,197,1,0,
0,0,205,201,1,0,0,0,206,255,1,0,0,0,207,208,10,17,0,0,208,209,7,2,0,0,209,
254,3,24,12,18,210,211,10,16,0,0,211,212,7,3,0,0,212,254,3,24,12,17,213,
214,10,15,0,0,214,215,7,4,0,0,215,254,3,24,12,16,216,217,10,14,0,0,217,218,
7,5,0,0,218,254,3,24,12,15,219,220,10,13,0,0,220,221,7,6,0,0,221,254,3,24,
12,14,222,223,10,12,0,0,223,224,5,47,0,0,224,254,3,24,12,13,225,226,10,11,
0,0,226,227,5,49,0,0,227,254,3,24,12,12,228,229,10,10,0,0,229,230,5,48,0,
0,230,254,3,24,12,11,231,232,10,9,0,0,232,233,5,51,0,0,233,254,3,24,12,10,
234,235,10,8,0,0,235,236,5,52,0,0,236,254,3,24,12,9,237,238,10,7,0,0,238,
239,5,36,0,0,239,240,3,24,12,0,240,241,5,37,0,0,241,242,3,24,12,7,242,254,
1,0,0,0,243,244,10,22,0,0,244,245,5,31,0,0,245,254,5,66,0,0,246,247,10,21,
0,0,247,248,5,27,0,0,248,249,3,24,12,0,249,250,5,28,0,0,250,254,1,0,0,0,
251,252,10,20,0,0,252,254,7,7,0,0,253,207,1,0,0,0,253,210,1,0,0,0,253,213,
1,0,0,0,253,216,1,0,0,0,253,219,1,0,0,0,253,222,1,0,0,0,253,225,1,0,0,0,
253,228,1,0,0,0,253,231,1,0,0,0,253,234,1,0,0,0,253,237,1,0,0,0,253,243,
1,0,0,0,253,246,1,0,0,0,253,251,1,0,0,0,254,257,1,0,0,0,255,253,1,0,0,0,
255,256,1,0,0,0,256,25,1,0,0,0,257,255,1,0,0,0,258,263,3,24,12,0,259,260,
5,30,0,0,260,262,3,24,12,0,261,259,1,0,0,0,262,265,1,0,0,0,263,261,1,0,0,
0,263,264,1,0,0,0,264,27,1,0,0,0,265,263,1,0,0,0,266,267,5,27,0,0,267,268,
3,24,12,0,268,269,5,30,0,0,269,270,3,24,12,0,270,271,5,28,0,0,271,29,1,0,
0,0,272,274,5,12,0,0,273,272,1,0,0,0,273,274,1,0,0,0,274,275,1,0,0,0,275,
281,7,8,0,0,276,278,5,20,0,0,277,276,1,0,0,0,277,278,1,0,0,0,278,279,1,0,
0,0,279,281,5,19,0,0,280,273,1,0,0,0,280,277,1,0,0,0,281,283,1,0,0,0,282,
284,3,28,14,0,283,282,1,0,0,0,283,284,1,0,0,0,284,31,1,0,0,0,285,286,7,9,
0,0,286,33,1,0,0,0,28,39,41,49,56,60,68,74,84,90,96,108,113,117,126,143,
147,155,163,172,178,205,253,255,263,273,277,280,283];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class yagParser extends antlr4.Parser {

    static grammarFileName = "yag.g4";
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
    static ruleNames = [ "file", "translation", "vdec_list", "vdec", "arr_size", 
                         "fdec", "fparam_list", "fparam", "block", "statement", 
                         "assignment_stmt", "case_block", "expr", "expr_list", 
                         "bound_range", "vtype", "assignmentOp" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = yagParser.ruleNames;
        this.literalNames = yagParser.literalNames;
        this.symbolicNames = yagParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 12:
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
	        this.state = 34;
	        this.translation();
	        this.state = 35;
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
	        this.state = 39; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 39;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 37;
	                this.vdec_list();
	                break;

	            case 2:
	                this.state = 38;
	                this.fdec();
	                break;

	            }
	            this.state = 41; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << yagParser.CONST) | (1 << yagParser.INT) | (1 << yagParser.BOOL) | (1 << yagParser.CHAN) | (1 << yagParser.BCAST))) !== 0));
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
	    this.enterRule(localctx, 4, yagParser.RULE_vdec_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.vtype();
	        this.state = 44;
	        this.vdec();
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===yagParser.COMMA) {
	            this.state = 45;
	            this.match(yagParser.COMMA);
	            this.state = 46;
	            this.vdec();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 52;
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
	    this.enterRule(localctx, 6, yagParser.RULE_vdec);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        localctx.vid = this.match(yagParser.ID);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===yagParser.LBRACK) {
	            this.state = 55;
	            localctx.dim = this.arr_size();
	        }

	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===yagParser.ASSIGN) {
	            this.state = 58;
	            this.match(yagParser.ASSIGN);
	            this.state = 59;
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
	    this.enterRule(localctx, 8, yagParser.RULE_arr_size);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 62;
	            this.match(yagParser.LBRACK);
	            this.state = 63;
	            this.expr(0);
	            this.state = 64;
	            this.match(yagParser.RBRACK);
	            this.state = 68; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===yagParser.LBRACK);
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
	    this.enterRule(localctx, 10, yagParser.RULE_fdec);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        localctx.ret = this.vtype();
	        this.state = 71;
	        localctx.fid = this.match(yagParser.ID);
	        this.state = 72;
	        this.match(yagParser.LPAREN);
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << yagParser.CONST) | (1 << yagParser.INT) | (1 << yagParser.BOOL) | (1 << yagParser.CHAN) | (1 << yagParser.BCAST))) !== 0)) {
	            this.state = 73;
	            localctx.params = this.fparam_list();
	        }

	        this.state = 76;
	        this.match(yagParser.RPAREN);
	        this.state = 77;
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
	    this.enterRule(localctx, 12, yagParser.RULE_fparam_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.fparam();
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===yagParser.COMMA) {
	            this.state = 80;
	            this.match(yagParser.COMMA);
	            this.state = 81;
	            this.fparam();
	            this.state = 86;
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
	    this.enterRule(localctx, 14, yagParser.RULE_fparam);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.vtype();
	        this.state = 88;
	        localctx.pid = this.match(yagParser.ID);
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===yagParser.LBRACK) {
	            this.state = 89;
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
	    this.enterRule(localctx, 16, yagParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(yagParser.LBRACE);
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << yagParser.T__0) | (1 << yagParser.FOR) | (1 << yagParser.DO) | (1 << yagParser.WHILE) | (1 << yagParser.SWITCH) | (1 << yagParser.CONST) | (1 << yagParser.IF) | (1 << yagParser.RETURN) | (1 << yagParser.INT) | (1 << yagParser.BOOL) | (1 << yagParser.CHAN) | (1 << yagParser.BCAST) | (1 << yagParser.LPAREN) | (1 << yagParser.LBRACE))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (yagParser.BANG - 32)) | (1 << (yagParser.SUB - 32)) | (1 << (yagParser.INC - 32)) | (1 << (yagParser.DEC - 32)) | (1 << (yagParser.ADD - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (yagParser.INTEGER - 64)) | (1 << (yagParser.BOOLEAN - 64)) | (1 << (yagParser.ID - 64)))) !== 0)) {
	            this.state = 93;
	            this.statement();
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 99;
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
	    this.enterRule(localctx, 18, yagParser.RULE_statement);
	    var _la = 0; // Token type
	    try {
	        this.state = 163;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 101;
	            this.block();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 102;
	            this.vdec_list();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 103;
	            this.match(yagParser.FOR);
	            this.state = 104;
	            this.match(yagParser.LPAREN);
	            this.state = 108;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << yagParser.T__0) | (1 << yagParser.LPAREN) | (1 << yagParser.LBRACE))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (yagParser.BANG - 32)) | (1 << (yagParser.SUB - 32)) | (1 << (yagParser.INC - 32)) | (1 << (yagParser.DEC - 32)) | (1 << (yagParser.ADD - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (yagParser.INTEGER - 64)) | (1 << (yagParser.BOOLEAN - 64)) | (1 << (yagParser.ID - 64)))) !== 0)) {
	                this.state = 105;
	                this.assignment_stmt();
	                this.state = 110;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 111;
	            this.match(yagParser.SEMI);
	            this.state = 113;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << yagParser.T__0) | (1 << yagParser.LPAREN) | (1 << yagParser.LBRACE))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (yagParser.BANG - 32)) | (1 << (yagParser.SUB - 32)) | (1 << (yagParser.INC - 32)) | (1 << (yagParser.DEC - 32)) | (1 << (yagParser.ADD - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (yagParser.INTEGER - 64)) | (1 << (yagParser.BOOLEAN - 64)) | (1 << (yagParser.ID - 64)))) !== 0)) {
	                this.state = 112;
	                this.expr_list();
	            }

	            this.state = 115;
	            this.match(yagParser.SEMI);
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << yagParser.T__0) | (1 << yagParser.LPAREN) | (1 << yagParser.LBRACE))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (yagParser.BANG - 32)) | (1 << (yagParser.SUB - 32)) | (1 << (yagParser.INC - 32)) | (1 << (yagParser.DEC - 32)) | (1 << (yagParser.ADD - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (yagParser.INTEGER - 64)) | (1 << (yagParser.BOOLEAN - 64)) | (1 << (yagParser.ID - 64)))) !== 0)) {
	                this.state = 116;
	                this.expr_list();
	            }

	            this.state = 119;
	            this.match(yagParser.RPAREN);
	            this.state = 120;
	            this.statement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 121;
	            this.match(yagParser.IF);
	            this.state = 122;
	            this.expr(0);
	            this.state = 123;
	            this.statement();
	            this.state = 126;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	            if(la_===1) {
	                this.state = 124;
	                this.match(yagParser.ELSE);
	                this.state = 125;
	                this.statement();

	            }
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 128;
	            this.match(yagParser.WHILE);
	            this.state = 129;
	            this.expr(0);
	            this.state = 130;
	            this.statement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 132;
	            this.match(yagParser.DO);
	            this.state = 133;
	            this.statement();
	            this.state = 134;
	            this.match(yagParser.WHILE);
	            this.state = 135;
	            this.expr(0);
	            this.state = 136;
	            this.match(yagParser.SEMI);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 138;
	            this.match(yagParser.SWITCH);
	            this.state = 139;
	            this.expr(0);
	            this.state = 141; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 140;
	                this.case_block();
	                this.state = 143; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===yagParser.CASE || _la===yagParser.DEFAULT);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 145;
	            this.match(yagParser.RETURN);
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << yagParser.T__0) | (1 << yagParser.LPAREN) | (1 << yagParser.LBRACE))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (yagParser.BANG - 32)) | (1 << (yagParser.SUB - 32)) | (1 << (yagParser.INC - 32)) | (1 << (yagParser.DEC - 32)) | (1 << (yagParser.ADD - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (yagParser.INTEGER - 64)) | (1 << (yagParser.BOOLEAN - 64)) | (1 << (yagParser.ID - 64)))) !== 0)) {
	                this.state = 146;
	                this.expr(0);
	            }

	            this.state = 149;
	            this.match(yagParser.SEMI);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 150;
	            this.assignment_stmt();
	            this.state = 155;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===yagParser.COMMA) {
	                this.state = 151;
	                this.match(yagParser.COMMA);
	                this.state = 152;
	                this.assignment_stmt();
	                this.state = 157;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 158;
	            this.match(yagParser.SEMI);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 160;
	            this.expr(0);
	            this.state = 161;
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
	    this.enterRule(localctx, 20, yagParser.RULE_assignment_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        localctx.lhs = this.expr(0);
	        this.state = 166;
	        this.assignmentOp();
	        this.state = 167;
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
	    this.enterRule(localctx, 22, yagParser.RULE_case_block);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case yagParser.CASE:
	            this.state = 169;
	            this.match(yagParser.CASE);
	            this.state = 170;
	            this.expr(0);
	            break;
	        case yagParser.DEFAULT:
	            this.state = 171;
	            this.match(yagParser.DEFAULT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 174;
	        this.match(yagParser.COLON);
	        this.state = 178;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 175;
	                this.statement(); 
	            }
	            this.state = 180;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	        this.state = 181;
	        this.match(yagParser.BREAK);
	        this.state = 182;
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 24;
	    this.enterRecursionRule(localctx, 24, yagParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 185;
	            _la = this._input.LA(1);
	            if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (yagParser.SUB - 33)) | (1 << (yagParser.INC - 33)) | (1 << (yagParser.DEC - 33)) | (1 << (yagParser.ADD - 33)))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 186;
	            this.expr(19);
	            break;

	        case 2:
	            this.state = 187;
	            _la = this._input.LA(1);
	            if(!(_la===yagParser.T__0 || _la===yagParser.BANG)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 188;
	            this.expr(18);
	            break;

	        case 3:
	            this.state = 189;
	            localctx.fid = this.match(yagParser.ID);
	            this.state = 190;
	            this.match(yagParser.LPAREN);
	            this.state = 191;
	            localctx.fargs = this.expr_list();
	            this.state = 192;
	            this.match(yagParser.RPAREN);
	            break;

	        case 4:
	            this.state = 194;
	            localctx.vid = this.match(yagParser.ID);
	            break;

	        case 5:
	            this.state = 195;
	            this.match(yagParser.INTEGER);
	            break;

	        case 6:
	            this.state = 196;
	            this.match(yagParser.BOOLEAN);
	            break;

	        case 7:
	            this.state = 197;
	            this.match(yagParser.LBRACE);
	            this.state = 198;
	            this.expr_list();
	            this.state = 199;
	            this.match(yagParser.RBRACE);
	            break;

	        case 8:
	            this.state = 201;
	            this.match(yagParser.LPAREN);
	            this.state = 202;
	            this.expr(0);
	            this.state = 203;
	            this.match(yagParser.RPAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 255;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 253;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 207;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 208;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (yagParser.MUL - 45)) | (1 << (yagParser.DIV - 45)) | (1 << (yagParser.MOD - 45)))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 209;
	                    this.expr(18);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 210;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 211;
	                    _la = this._input.LA(1);
	                    if(!(_la===yagParser.SUB || _la===yagParser.ADD)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 212;
	                    this.expr(17);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 213;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 214;
	                    _la = this._input.LA(1);
	                    if(!(_la===yagParser.T__1 || _la===yagParser.T__2)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 215;
	                    this.expr(16);
	                    break;

	                case 4:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 216;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 217;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (yagParser.GT - 34)) | (1 << (yagParser.LT - 34)) | (1 << (yagParser.LE - 34)) | (1 << (yagParser.GE - 34)))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 218;
	                    this.expr(15);
	                    break;

	                case 5:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 219;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 220;
	                    _la = this._input.LA(1);
	                    if(!(_la===yagParser.EQUAL || _la===yagParser.NOTEQUAL)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 221;
	                    this.expr(14);
	                    break;

	                case 6:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 222;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }

	                    this.state = 223;
	                    this.match(yagParser.BITAND);
	                    this.state = 224;
	                    this.expr(13);
	                    break;

	                case 7:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 225;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }

	                    this.state = 226;
	                    this.match(yagParser.CARET);
	                    this.state = 227;
	                    this.expr(12);
	                    break;

	                case 8:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 228;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }

	                    this.state = 229;
	                    this.match(yagParser.BITOR);
	                    this.state = 230;
	                    this.expr(11);
	                    break;

	                case 9:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 231;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }

	                    this.state = 232;
	                    this.match(yagParser.AND);
	                    this.state = 233;
	                    this.expr(10);
	                    break;

	                case 10:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 234;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }

	                    this.state = 235;
	                    this.match(yagParser.OR);
	                    this.state = 236;
	                    this.expr(9);
	                    break;

	                case 11:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 237;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 238;
	                    this.match(yagParser.QUESTION);
	                    this.state = 239;
	                    this.expr(0);
	                    this.state = 240;
	                    this.match(yagParser.COLON);
	                    this.state = 241;
	                    this.expr(7);
	                    break;

	                case 12:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 243;
	                    if (!( this.precpred(this._ctx, 22))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
	                    }
	                    this.state = 244;
	                    this.match(yagParser.DOT);
	                    this.state = 245;
	                    this.match(yagParser.ID);
	                    break;

	                case 13:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 246;
	                    if (!( this.precpred(this._ctx, 21))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
	                    }
	                    this.state = 247;
	                    this.match(yagParser.LBRACK);
	                    this.state = 248;
	                    this.expr(0);
	                    this.state = 249;
	                    this.match(yagParser.RBRACK);
	                    break;

	                case 14:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, yagParser.RULE_expr);
	                    this.state = 251;
	                    if (!( this.precpred(this._ctx, 20))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
	                    }
	                    this.state = 252;
	                    _la = this._input.LA(1);
	                    if(!(_la===yagParser.INC || _la===yagParser.DEC)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    break;

	                } 
	            }
	            this.state = 257;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
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



	expr_list() {
	    let localctx = new Expr_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, yagParser.RULE_expr_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.expr(0);
	        this.state = 263;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===yagParser.COMMA) {
	            this.state = 259;
	            this.match(yagParser.COMMA);
	            this.state = 260;
	            this.expr(0);
	            this.state = 265;
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



	bound_range() {
	    let localctx = new Bound_rangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, yagParser.RULE_bound_range);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 266;
	        this.match(yagParser.LBRACK);
	        this.state = 267;
	        this.expr(0);
	        this.state = 268;
	        this.match(yagParser.COMMA);
	        this.state = 269;
	        this.expr(0);
	        this.state = 270;
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



	vtype() {
	    let localctx = new VtypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, yagParser.RULE_vtype);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case yagParser.CONST:
	        case yagParser.INT:
	        case yagParser.BOOL:
	            this.state = 273;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===yagParser.CONST) {
	                this.state = 272;
	                this.match(yagParser.CONST);
	            }

	            this.state = 275;
	            _la = this._input.LA(1);
	            if(!(_la===yagParser.INT || _la===yagParser.BOOL)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case yagParser.CHAN:
	        case yagParser.BCAST:
	            this.state = 277;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===yagParser.BCAST) {
	                this.state = 276;
	                this.match(yagParser.BCAST);
	            }

	            this.state = 279;
	            this.match(yagParser.CHAN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 283;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===yagParser.LBRACK) {
	            this.state = 282;
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



	assignmentOp() {
	    let localctx = new AssignmentOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, yagParser.RULE_assignmentOp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 285;
	        _la = this._input.LA(1);
	        if(!(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (yagParser.ASSIGN - 53)) | (1 << (yagParser.ADD_ASSIGN - 53)) | (1 << (yagParser.SUB_ASSIGN - 53)) | (1 << (yagParser.MUL_ASSIGN - 53)) | (1 << (yagParser.DIV_ASSIGN - 53)) | (1 << (yagParser.AND_ASSIGN - 53)) | (1 << (yagParser.OR_ASSIGN - 53)) | (1 << (yagParser.XOR_ASSIGN - 53)) | (1 << (yagParser.MOD_ASSIGN - 53)) | (1 << (yagParser.LSHIFT_ASSIGN - 53)) | (1 << (yagParser.RSHIFT_ASSIGN - 53)))) !== 0))) {
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
yagParser.RULE_vdec_list = 2;
yagParser.RULE_vdec = 3;
yagParser.RULE_arr_size = 4;
yagParser.RULE_fdec = 5;
yagParser.RULE_fparam_list = 6;
yagParser.RULE_fparam = 7;
yagParser.RULE_block = 8;
yagParser.RULE_statement = 9;
yagParser.RULE_assignment_stmt = 10;
yagParser.RULE_case_block = 11;
yagParser.RULE_expr = 12;
yagParser.RULE_expr_list = 13;
yagParser.RULE_bound_range = 14;
yagParser.RULE_vtype = 15;
yagParser.RULE_assignmentOp = 16;

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
    }

	vtype() {
	    return this.getTypedRuleContext(VtypeContext,0);
	};

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

	CONST() {
	    return this.getToken(yagParser.CONST, 0);
	};

	BCAST() {
	    return this.getToken(yagParser.BCAST, 0);
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
yagParser.ExprContext = ExprContext; 
yagParser.Expr_listContext = Expr_listContext; 
yagParser.Bound_rangeContext = Bound_rangeContext; 
yagParser.VtypeContext = VtypeContext; 
yagParser.AssignmentOpContext = AssignmentOpContext; 
