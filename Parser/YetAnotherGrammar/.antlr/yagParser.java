// Generated from /home/yan/Desktop/uppaal-abstraction-tool/Parser/YetAnotherGrammar/yag.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class yagParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, FOR=4, DO=5, WHILE=6, BREAK=7, CONTINUE=8, SWITCH=9, 
		CASE=10, DEFAULT=11, CONST=12, IF=13, ELSE=14, RETURN=15, INT=16, BOOL=17, 
		VOID=18, CHAN=19, BCAST=20, STRUCT=21, TYPEDEF=22, LPAREN=23, RPAREN=24, 
		LBRACE=25, RBRACE=26, LBRACK=27, RBRACK=28, SEMI=29, COMMA=30, DOT=31, 
		BANG=32, SUB=33, GT=34, LT=35, QUESTION=36, COLON=37, EQUAL=38, LE=39, 
		GE=40, NOTEQUAL=41, INC=42, DEC=43, ADD=44, MUL=45, DIV=46, BITAND=47, 
		BITOR=48, CARET=49, MOD=50, AND=51, OR=52, ASSIGN=53, ADD_ASSIGN=54, SUB_ASSIGN=55, 
		MUL_ASSIGN=56, DIV_ASSIGN=57, AND_ASSIGN=58, OR_ASSIGN=59, XOR_ASSIGN=60, 
		MOD_ASSIGN=61, LSHIFT_ASSIGN=62, RSHIFT_ASSIGN=63, INTEGER=64, BOOLEAN=65, 
		ID=66, WHITESPACE=67, BLOCK_COMMENT=68, LINE_COMMENT=69;
	public static final int
		RULE_file = 0, RULE_translation = 1, RULE_select_label = 2, RULE_select_pair = 3, 
		RULE_assignment_label = 4, RULE_fcall = 5, RULE_synchronisation_label = 6, 
		RULE_dnf = 7, RULE_conjuction = 8, RULE_literal = 9, RULE_vdec_list = 10, 
		RULE_vdec = 11, RULE_arr_size = 12, RULE_fdec = 13, RULE_fparam_list = 14, 
		RULE_fparam = 15, RULE_block = 16, RULE_statement = 17, RULE_assignment_stmt = 18, 
		RULE_case_block = 19, RULE_expr_list = 20, RULE_expr = 21, RULE_var_identifier = 22, 
		RULE_vtype = 23, RULE_bound_range = 24, RULE_assignmentOp = 25;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "translation", "select_label", "select_pair", "assignment_label", 
			"fcall", "synchronisation_label", "dnf", "conjuction", "literal", "vdec_list", 
			"vdec", "arr_size", "fdec", "fparam_list", "fparam", "block", "statement", 
			"assignment_stmt", "case_block", "expr_list", "expr", "var_identifier", 
			"vtype", "bound_range", "assignmentOp"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'~'", "'<<'", "'>>'", "'for'", "'do'", "'while'", "'break'", "'continue'", 
			"'switch'", "'case'", "'default'", "'const'", "'if'", "'else'", "'return'", 
			"'int'", "'bool'", "'void'", "'chan'", "'broadcast'", "'struct'", "'typedef'", 
			"'('", "')'", "'{'", "'}'", "'['", "']'", "';'", "','", "'.'", "'!'", 
			"'-'", "'>'", "'<'", "'?'", "':'", "'=='", "'<='", "'>='", "'!='", "'++'", 
			"'--'", "'+'", "'*'", "'/'", "'&'", "'|'", "'^'", "'%'", "'&&'", "'||'", 
			"'='", "'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", "'%='", 
			"'<<='", "'>>='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, "FOR", "DO", "WHILE", "BREAK", "CONTINUE", "SWITCH", 
			"CASE", "DEFAULT", "CONST", "IF", "ELSE", "RETURN", "INT", "BOOL", "VOID", 
			"CHAN", "BCAST", "STRUCT", "TYPEDEF", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
			"LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", "BANG", "SUB", "GT", "LT", 
			"QUESTION", "COLON", "EQUAL", "LE", "GE", "NOTEQUAL", "INC", "DEC", "ADD", 
			"MUL", "DIV", "BITAND", "BITOR", "CARET", "MOD", "AND", "OR", "ASSIGN", 
			"ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", 
			"OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", 
			"INTEGER", "BOOLEAN", "ID", "WHITESPACE", "BLOCK_COMMENT", "LINE_COMMENT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "yag.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public yagParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class FileContext extends ParserRuleContext {
		public TranslationContext translation() {
			return getRuleContext(TranslationContext.class,0);
		}
		public TerminalNode EOF() { return getToken(yagParser.EOF, 0); }
		public FileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_file; }
	}

	public final FileContext file() throws RecognitionException {
		FileContext _localctx = new FileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_file);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(52);
			translation();
			setState(53);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TranslationContext extends ParserRuleContext {
		public List<Vdec_listContext> vdec_list() {
			return getRuleContexts(Vdec_listContext.class);
		}
		public Vdec_listContext vdec_list(int i) {
			return getRuleContext(Vdec_listContext.class,i);
		}
		public List<FdecContext> fdec() {
			return getRuleContexts(FdecContext.class);
		}
		public FdecContext fdec(int i) {
			return getRuleContext(FdecContext.class,i);
		}
		public TranslationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_translation; }
	}

	public final TranslationContext translation() throws RecognitionException {
		TranslationContext _localctx = new TranslationContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_translation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(57); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(57);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(55);
					vdec_list();
					}
					break;
				case 2:
					{
					setState(56);
					fdec();
					}
					break;
				}
				}
				setState(59); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONST) | (1L << INT) | (1L << BOOL) | (1L << CHAN) | (1L << BCAST))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Select_labelContext extends ParserRuleContext {
		public List<Select_pairContext> select_pair() {
			return getRuleContexts(Select_pairContext.class);
		}
		public Select_pairContext select_pair(int i) {
			return getRuleContext(Select_pairContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(yagParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(yagParser.COMMA, i);
		}
		public Select_labelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_select_label; }
	}

	public final Select_labelContext select_label() throws RecognitionException {
		Select_labelContext _localctx = new Select_labelContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_select_label);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			select_pair();
			setState(66);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(62);
				match(COMMA);
				setState(63);
				select_pair();
				}
				}
				setState(68);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Select_pairContext extends ParserRuleContext {
		public Var_identifierContext vid;
		public VtypeContext range;
		public TerminalNode COLON() { return getToken(yagParser.COLON, 0); }
		public Var_identifierContext var_identifier() {
			return getRuleContext(Var_identifierContext.class,0);
		}
		public VtypeContext vtype() {
			return getRuleContext(VtypeContext.class,0);
		}
		public Select_pairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_select_pair; }
	}

	public final Select_pairContext select_pair() throws RecognitionException {
		Select_pairContext _localctx = new Select_pairContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_select_pair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			((Select_pairContext)_localctx).vid = var_identifier();
			setState(70);
			match(COLON);
			setState(71);
			((Select_pairContext)_localctx).range = vtype();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Assignment_labelContext extends ParserRuleContext {
		public List<Assignment_stmtContext> assignment_stmt() {
			return getRuleContexts(Assignment_stmtContext.class);
		}
		public Assignment_stmtContext assignment_stmt(int i) {
			return getRuleContext(Assignment_stmtContext.class,i);
		}
		public List<FcallContext> fcall() {
			return getRuleContexts(FcallContext.class);
		}
		public FcallContext fcall(int i) {
			return getRuleContext(FcallContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(yagParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(yagParser.COMMA, i);
		}
		public Assignment_labelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment_label; }
	}

	public final Assignment_labelContext assignment_label() throws RecognitionException {
		Assignment_labelContext _localctx = new Assignment_labelContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_assignment_label);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(73);
				assignment_stmt();
				}
				break;
			case 2:
				{
				setState(74);
				fcall();
				}
				break;
			}
			setState(84);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(77);
				match(COMMA);
				setState(80);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
				case 1:
					{
					setState(78);
					assignment_stmt();
					}
					break;
				case 2:
					{
					setState(79);
					fcall();
					}
					break;
				}
				}
				}
				setState(86);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FcallContext extends ParserRuleContext {
		public Token fid;
		public Expr_listContext fargs;
		public TerminalNode LPAREN() { return getToken(yagParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(yagParser.RPAREN, 0); }
		public TerminalNode ID() { return getToken(yagParser.ID, 0); }
		public Expr_listContext expr_list() {
			return getRuleContext(Expr_listContext.class,0);
		}
		public FcallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fcall; }
	}

	public final FcallContext fcall() throws RecognitionException {
		FcallContext _localctx = new FcallContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_fcall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(87);
			((FcallContext)_localctx).fid = match(ID);
			setState(88);
			match(LPAREN);
			setState(90);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
				{
				setState(89);
				((FcallContext)_localctx).fargs = expr_list();
				}
			}

			setState(92);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Synchronisation_labelContext extends ParserRuleContext {
		public ExprContext chan;
		public Token symb;
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode QUESTION() { return getToken(yagParser.QUESTION, 0); }
		public TerminalNode BANG() { return getToken(yagParser.BANG, 0); }
		public Synchronisation_labelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_synchronisation_label; }
	}

	public final Synchronisation_labelContext synchronisation_label() throws RecognitionException {
		Synchronisation_labelContext _localctx = new Synchronisation_labelContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_synchronisation_label);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(94);
			((Synchronisation_labelContext)_localctx).chan = expr(0);
			setState(95);
			((Synchronisation_labelContext)_localctx).symb = _input.LT(1);
			_la = _input.LA(1);
			if ( !(_la==BANG || _la==QUESTION) ) {
				((Synchronisation_labelContext)_localctx).symb = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DnfContext extends ParserRuleContext {
		public List<ConjuctionContext> conjuction() {
			return getRuleContexts(ConjuctionContext.class);
		}
		public ConjuctionContext conjuction(int i) {
			return getRuleContext(ConjuctionContext.class,i);
		}
		public List<TerminalNode> OR() { return getTokens(yagParser.OR); }
		public TerminalNode OR(int i) {
			return getToken(yagParser.OR, i);
		}
		public DnfContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dnf; }
	}

	public final DnfContext dnf() throws RecognitionException {
		DnfContext _localctx = new DnfContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_dnf);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			conjuction();
			setState(102);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==OR) {
				{
				{
				setState(98);
				match(OR);
				setState(99);
				conjuction();
				}
				}
				setState(104);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConjuctionContext extends ParserRuleContext {
		public List<LiteralContext> literal() {
			return getRuleContexts(LiteralContext.class);
		}
		public LiteralContext literal(int i) {
			return getRuleContext(LiteralContext.class,i);
		}
		public List<TerminalNode> AND() { return getTokens(yagParser.AND); }
		public TerminalNode AND(int i) {
			return getToken(yagParser.AND, i);
		}
		public ConjuctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conjuction; }
	}

	public final ConjuctionContext conjuction() throws RecognitionException {
		ConjuctionContext _localctx = new ConjuctionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_conjuction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			literal(0);
			setState(110);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AND) {
				{
				{
				setState(106);
				match(AND);
				setState(107);
				literal(0);
				}
				}
				setState(112);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode BANG() { return getToken(yagParser.BANG, 0); }
		public List<LiteralContext> literal() {
			return getRuleContexts(LiteralContext.class);
		}
		public LiteralContext literal(int i) {
			return getRuleContext(LiteralContext.class,i);
		}
		public TerminalNode LPAREN() { return getToken(yagParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(yagParser.RPAREN, 0); }
		public Var_identifierContext var_identifier() {
			return getRuleContext(Var_identifierContext.class,0);
		}
		public Arr_sizeContext arr_size() {
			return getRuleContext(Arr_sizeContext.class,0);
		}
		public TerminalNode INTEGER() { return getToken(yagParser.INTEGER, 0); }
		public TerminalNode BOOLEAN() { return getToken(yagParser.BOOLEAN, 0); }
		public TerminalNode EQUAL() { return getToken(yagParser.EQUAL, 0); }
		public TerminalNode NOTEQUAL() { return getToken(yagParser.NOTEQUAL, 0); }
		public TerminalNode MUL() { return getToken(yagParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(yagParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(yagParser.MOD, 0); }
		public TerminalNode ADD() { return getToken(yagParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(yagParser.SUB, 0); }
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		return literal(0);
	}

	private LiteralContext literal(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		LiteralContext _localctx = new LiteralContext(_ctx, _parentState);
		LiteralContext _prevctx = _localctx;
		int _startState = 18;
		enterRecursionRule(_localctx, 18, RULE_literal, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(126);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BANG:
				{
				setState(114);
				match(BANG);
				setState(115);
				literal(7);
				}
				break;
			case LPAREN:
				{
				setState(116);
				match(LPAREN);
				setState(117);
				literal(0);
				setState(118);
				match(RPAREN);
				}
				break;
			case ID:
				{
				setState(120);
				var_identifier();
				setState(122);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
				case 1:
					{
					setState(121);
					arr_size();
					}
					break;
				}
				}
				break;
			case INTEGER:
				{
				setState(124);
				match(INTEGER);
				}
				break;
			case BOOLEAN:
				{
				setState(125);
				match(BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(142);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(140);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
					case 1:
						{
						_localctx = new LiteralContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_literal);
						setState(128);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(129);
						match(EQUAL);
						setState(130);
						literal(10);
						}
						break;
					case 2:
						{
						_localctx = new LiteralContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_literal);
						setState(131);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(132);
						match(NOTEQUAL);
						setState(133);
						literal(9);
						}
						break;
					case 3:
						{
						_localctx = new LiteralContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_literal);
						setState(134);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(135);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MUL) | (1L << DIV) | (1L << MOD))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(136);
						literal(6);
						}
						break;
					case 4:
						{
						_localctx = new LiteralContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_literal);
						setState(137);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(138);
						_la = _input.LA(1);
						if ( !(_la==SUB || _la==ADD) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(139);
						literal(5);
						}
						break;
					}
					} 
				}
				setState(144);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Vdec_listContext extends ParserRuleContext {
		public VtypeContext type;
		public List<VdecContext> vdec() {
			return getRuleContexts(VdecContext.class);
		}
		public VdecContext vdec(int i) {
			return getRuleContext(VdecContext.class,i);
		}
		public TerminalNode SEMI() { return getToken(yagParser.SEMI, 0); }
		public VtypeContext vtype() {
			return getRuleContext(VtypeContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(yagParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(yagParser.COMMA, i);
		}
		public Vdec_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vdec_list; }
	}

	public final Vdec_listContext vdec_list() throws RecognitionException {
		Vdec_listContext _localctx = new Vdec_listContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_vdec_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
			((Vdec_listContext)_localctx).type = vtype();
			setState(146);
			vdec();
			setState(151);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(147);
				match(COMMA);
				setState(148);
				vdec();
				}
				}
				setState(153);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(154);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VdecContext extends ParserRuleContext {
		public Var_identifierContext vid;
		public Arr_sizeContext dim;
		public ExprContext init;
		public Var_identifierContext var_identifier() {
			return getRuleContext(Var_identifierContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(yagParser.ASSIGN, 0); }
		public Arr_sizeContext arr_size() {
			return getRuleContext(Arr_sizeContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public VdecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vdec; }
	}

	public final VdecContext vdec() throws RecognitionException {
		VdecContext _localctx = new VdecContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_vdec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(156);
			((VdecContext)_localctx).vid = var_identifier();
			setState(158);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(157);
				((VdecContext)_localctx).dim = arr_size();
				}
			}

			setState(162);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ASSIGN) {
				{
				setState(160);
				match(ASSIGN);
				setState(161);
				((VdecContext)_localctx).init = expr(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Arr_sizeContext extends ParserRuleContext {
		public List<TerminalNode> LBRACK() { return getTokens(yagParser.LBRACK); }
		public TerminalNode LBRACK(int i) {
			return getToken(yagParser.LBRACK, i);
		}
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> RBRACK() { return getTokens(yagParser.RBRACK); }
		public TerminalNode RBRACK(int i) {
			return getToken(yagParser.RBRACK, i);
		}
		public Arr_sizeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arr_size; }
	}

	public final Arr_sizeContext arr_size() throws RecognitionException {
		Arr_sizeContext _localctx = new Arr_sizeContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_arr_size);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(168); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(164);
					match(LBRACK);
					setState(165);
					expr(0);
					setState(166);
					match(RBRACK);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(170); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FdecContext extends ParserRuleContext {
		public VtypeContext ret;
		public Token fid;
		public Fparam_listContext params;
		public BlockContext bl;
		public TerminalNode LPAREN() { return getToken(yagParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(yagParser.RPAREN, 0); }
		public VtypeContext vtype() {
			return getRuleContext(VtypeContext.class,0);
		}
		public TerminalNode ID() { return getToken(yagParser.ID, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public Fparam_listContext fparam_list() {
			return getRuleContext(Fparam_listContext.class,0);
		}
		public FdecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fdec; }
	}

	public final FdecContext fdec() throws RecognitionException {
		FdecContext _localctx = new FdecContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_fdec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(172);
			((FdecContext)_localctx).ret = vtype();
			setState(173);
			((FdecContext)_localctx).fid = match(ID);
			setState(174);
			match(LPAREN);
			setState(176);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONST) | (1L << INT) | (1L << BOOL) | (1L << CHAN) | (1L << BCAST))) != 0)) {
				{
				setState(175);
				((FdecContext)_localctx).params = fparam_list();
				}
			}

			setState(178);
			match(RPAREN);
			setState(179);
			((FdecContext)_localctx).bl = block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Fparam_listContext extends ParserRuleContext {
		public List<FparamContext> fparam() {
			return getRuleContexts(FparamContext.class);
		}
		public FparamContext fparam(int i) {
			return getRuleContext(FparamContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(yagParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(yagParser.COMMA, i);
		}
		public Fparam_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fparam_list; }
	}

	public final Fparam_listContext fparam_list() throws RecognitionException {
		Fparam_listContext _localctx = new Fparam_listContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_fparam_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			fparam();
			setState(186);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(182);
				match(COMMA);
				setState(183);
				fparam();
				}
				}
				setState(188);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FparamContext extends ParserRuleContext {
		public Var_identifierContext pid;
		public VtypeContext vtype() {
			return getRuleContext(VtypeContext.class,0);
		}
		public Var_identifierContext var_identifier() {
			return getRuleContext(Var_identifierContext.class,0);
		}
		public Arr_sizeContext arr_size() {
			return getRuleContext(Arr_sizeContext.class,0);
		}
		public FparamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fparam; }
	}

	public final FparamContext fparam() throws RecognitionException {
		FparamContext _localctx = new FparamContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_fparam);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(189);
			vtype();
			setState(190);
			((FparamContext)_localctx).pid = var_identifier();
			setState(192);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(191);
				arr_size();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(yagParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(yagParser.RBRACE, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			match(LBRACE);
			setState(198);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << FOR) | (1L << DO) | (1L << WHILE) | (1L << SWITCH) | (1L << CONST) | (1L << IF) | (1L << RETURN) | (1L << INT) | (1L << BOOL) | (1L << CHAN) | (1L << BCAST) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
				{
				{
				setState(195);
				statement();
				}
				}
				setState(200);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(201);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public Vdec_listContext vdec_list() {
			return getRuleContext(Vdec_listContext.class,0);
		}
		public TerminalNode FOR() { return getToken(yagParser.FOR, 0); }
		public TerminalNode LPAREN() { return getToken(yagParser.LPAREN, 0); }
		public List<TerminalNode> SEMI() { return getTokens(yagParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(yagParser.SEMI, i);
		}
		public TerminalNode RPAREN() { return getToken(yagParser.RPAREN, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<Assignment_stmtContext> assignment_stmt() {
			return getRuleContexts(Assignment_stmtContext.class);
		}
		public Assignment_stmtContext assignment_stmt(int i) {
			return getRuleContext(Assignment_stmtContext.class,i);
		}
		public List<Expr_listContext> expr_list() {
			return getRuleContexts(Expr_listContext.class);
		}
		public Expr_listContext expr_list(int i) {
			return getRuleContext(Expr_listContext.class,i);
		}
		public TerminalNode IF() { return getToken(yagParser.IF, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode ELSE() { return getToken(yagParser.ELSE, 0); }
		public TerminalNode WHILE() { return getToken(yagParser.WHILE, 0); }
		public TerminalNode DO() { return getToken(yagParser.DO, 0); }
		public TerminalNode SWITCH() { return getToken(yagParser.SWITCH, 0); }
		public List<Case_blockContext> case_block() {
			return getRuleContexts(Case_blockContext.class);
		}
		public Case_blockContext case_block(int i) {
			return getRuleContext(Case_blockContext.class,i);
		}
		public TerminalNode RETURN() { return getToken(yagParser.RETURN, 0); }
		public List<TerminalNode> COMMA() { return getTokens(yagParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(yagParser.COMMA, i);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_statement);
		int _la;
		try {
			setState(265);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(203);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(204);
				vdec_list();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(205);
				match(FOR);
				setState(206);
				match(LPAREN);
				setState(210);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
					{
					{
					setState(207);
					assignment_stmt();
					}
					}
					setState(212);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(213);
				match(SEMI);
				setState(215);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
					{
					setState(214);
					expr_list();
					}
				}

				setState(217);
				match(SEMI);
				setState(219);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
					{
					setState(218);
					expr_list();
					}
				}

				setState(221);
				match(RPAREN);
				setState(222);
				statement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(223);
				match(IF);
				setState(224);
				expr(0);
				setState(225);
				statement();
				setState(228);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
				case 1:
					{
					setState(226);
					match(ELSE);
					setState(227);
					statement();
					}
					break;
				}
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(230);
				match(WHILE);
				setState(231);
				expr(0);
				setState(232);
				statement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(234);
				match(DO);
				setState(235);
				statement();
				setState(236);
				match(WHILE);
				setState(237);
				expr(0);
				setState(238);
				match(SEMI);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(240);
				match(SWITCH);
				setState(241);
				expr(0);
				setState(243); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(242);
					case_block();
					}
					}
					setState(245); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==CASE || _la==DEFAULT );
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(247);
				match(RETURN);
				setState(249);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
					{
					setState(248);
					expr(0);
					}
				}

				setState(251);
				match(SEMI);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(252);
				assignment_stmt();
				setState(257);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(253);
					match(COMMA);
					setState(254);
					assignment_stmt();
					}
					}
					setState(259);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(260);
				match(SEMI);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(262);
				expr(0);
				setState(263);
				match(SEMI);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Assignment_stmtContext extends ParserRuleContext {
		public ExprContext lhs;
		public ExprContext rhs;
		public AssignmentOpContext assignmentOp() {
			return getRuleContext(AssignmentOpContext.class,0);
		}
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public Assignment_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment_stmt; }
	}

	public final Assignment_stmtContext assignment_stmt() throws RecognitionException {
		Assignment_stmtContext _localctx = new Assignment_stmtContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_assignment_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(267);
			((Assignment_stmtContext)_localctx).lhs = expr(0);
			setState(268);
			assignmentOp();
			setState(269);
			((Assignment_stmtContext)_localctx).rhs = expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Case_blockContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(yagParser.COLON, 0); }
		public TerminalNode BREAK() { return getToken(yagParser.BREAK, 0); }
		public TerminalNode SEMI() { return getToken(yagParser.SEMI, 0); }
		public TerminalNode DEFAULT() { return getToken(yagParser.DEFAULT, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode CASE() { return getToken(yagParser.CASE, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public Case_blockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_case_block; }
	}

	public final Case_blockContext case_block() throws RecognitionException {
		Case_blockContext _localctx = new Case_blockContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_case_block);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(274);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CASE:
				{
				{
				setState(271);
				match(CASE);
				setState(272);
				expr(0);
				}
				}
				break;
			case DEFAULT:
				{
				setState(273);
				match(DEFAULT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(276);
			match(COLON);
			setState(280);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(277);
					statement();
					}
					} 
				}
				setState(282);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
			}
			setState(283);
			match(BREAK);
			setState(284);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Expr_listContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(yagParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(yagParser.COMMA, i);
		}
		public Expr_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr_list; }
	}

	public final Expr_listContext expr_list() throws RecognitionException {
		Expr_listContext _localctx = new Expr_listContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_expr_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(286);
			expr(0);
			setState(291);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(287);
				match(COMMA);
				setState(288);
				expr(0);
				}
				}
				setState(293);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public Var_identifierContext vid;
		public Arr_sizeContext dim;
		public Token fid;
		public Expr_listContext fargs;
		public Var_identifierContext var_identifier() {
			return getRuleContext(Var_identifierContext.class,0);
		}
		public Arr_sizeContext arr_size() {
			return getRuleContext(Arr_sizeContext.class,0);
		}
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode INC() { return getToken(yagParser.INC, 0); }
		public TerminalNode DEC() { return getToken(yagParser.DEC, 0); }
		public TerminalNode ADD() { return getToken(yagParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(yagParser.SUB, 0); }
		public TerminalNode BANG() { return getToken(yagParser.BANG, 0); }
		public TerminalNode LPAREN() { return getToken(yagParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(yagParser.RPAREN, 0); }
		public TerminalNode ID() { return getToken(yagParser.ID, 0); }
		public Expr_listContext expr_list() {
			return getRuleContext(Expr_listContext.class,0);
		}
		public TerminalNode INTEGER() { return getToken(yagParser.INTEGER, 0); }
		public TerminalNode BOOLEAN() { return getToken(yagParser.BOOLEAN, 0); }
		public TerminalNode LBRACE() { return getToken(yagParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(yagParser.RBRACE, 0); }
		public TerminalNode MUL() { return getToken(yagParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(yagParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(yagParser.MOD, 0); }
		public TerminalNode LE() { return getToken(yagParser.LE, 0); }
		public TerminalNode GE() { return getToken(yagParser.GE, 0); }
		public TerminalNode LT() { return getToken(yagParser.LT, 0); }
		public TerminalNode GT() { return getToken(yagParser.GT, 0); }
		public TerminalNode EQUAL() { return getToken(yagParser.EQUAL, 0); }
		public TerminalNode NOTEQUAL() { return getToken(yagParser.NOTEQUAL, 0); }
		public TerminalNode BITAND() { return getToken(yagParser.BITAND, 0); }
		public TerminalNode CARET() { return getToken(yagParser.CARET, 0); }
		public TerminalNode BITOR() { return getToken(yagParser.BITOR, 0); }
		public TerminalNode AND() { return getToken(yagParser.AND, 0); }
		public TerminalNode OR() { return getToken(yagParser.OR, 0); }
		public TerminalNode QUESTION() { return getToken(yagParser.QUESTION, 0); }
		public TerminalNode COLON() { return getToken(yagParser.COLON, 0); }
		public TerminalNode DOT() { return getToken(yagParser.DOT, 0); }
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 42;
		enterRecursionRule(_localctx, 42, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(319);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				{
				setState(295);
				((ExprContext)_localctx).vid = var_identifier();
				setState(296);
				((ExprContext)_localctx).dim = arr_size();
				}
				break;
			case 2:
				{
				setState(298);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(299);
				expr(19);
				}
				break;
			case 3:
				{
				setState(300);
				_la = _input.LA(1);
				if ( !(_la==T__0 || _la==BANG) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(301);
				expr(18);
				}
				break;
			case 4:
				{
				setState(302);
				((ExprContext)_localctx).fid = match(ID);
				setState(303);
				match(LPAREN);
				setState(305);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
					{
					setState(304);
					((ExprContext)_localctx).fargs = expr_list();
					}
				}

				setState(307);
				match(RPAREN);
				}
				break;
			case 5:
				{
				setState(308);
				((ExprContext)_localctx).vid = var_identifier();
				}
				break;
			case 6:
				{
				setState(309);
				match(INTEGER);
				}
				break;
			case 7:
				{
				setState(310);
				match(BOOLEAN);
				}
				break;
			case 8:
				{
				setState(311);
				match(LBRACE);
				setState(312);
				expr_list();
				setState(313);
				match(RBRACE);
				}
				break;
			case 9:
				{
				setState(315);
				match(LPAREN);
				setState(316);
				expr(0);
				setState(317);
				match(RPAREN);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(364);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(362);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(321);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(322);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MUL) | (1L << DIV) | (1L << MOD))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(323);
						expr(18);
						}
						break;
					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(324);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(325);
						_la = _input.LA(1);
						if ( !(_la==SUB || _la==ADD) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(326);
						expr(17);
						}
						break;
					case 3:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(327);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(328);
						_la = _input.LA(1);
						if ( !(_la==T__1 || _la==T__2) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(329);
						expr(16);
						}
						break;
					case 4:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(330);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(331);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GT) | (1L << LT) | (1L << LE) | (1L << GE))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(332);
						expr(15);
						}
						break;
					case 5:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(333);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(334);
						_la = _input.LA(1);
						if ( !(_la==EQUAL || _la==NOTEQUAL) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(335);
						expr(14);
						}
						break;
					case 6:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(336);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						{
						setState(337);
						match(BITAND);
						}
						setState(338);
						expr(13);
						}
						break;
					case 7:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(339);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						{
						setState(340);
						match(CARET);
						}
						setState(341);
						expr(12);
						}
						break;
					case 8:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(342);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						{
						setState(343);
						match(BITOR);
						}
						setState(344);
						expr(11);
						}
						break;
					case 9:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(345);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						{
						setState(346);
						match(AND);
						}
						setState(347);
						expr(10);
						}
						break;
					case 10:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(348);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						{
						setState(349);
						match(OR);
						}
						setState(350);
						expr(9);
						}
						break;
					case 11:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(351);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(352);
						match(QUESTION);
						setState(353);
						expr(0);
						setState(354);
						match(COLON);
						setState(355);
						expr(7);
						}
						break;
					case 12:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(357);
						if (!(precpred(_ctx, 22))) throw new FailedPredicateException(this, "precpred(_ctx, 22)");
						setState(358);
						match(DOT);
						setState(359);
						var_identifier();
						}
						break;
					case 13:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(360);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						setState(361);
						_la = _input.LA(1);
						if ( !(_la==INC || _la==DEC) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						break;
					}
					} 
				}
				setState(366);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Var_identifierContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(yagParser.ID, 0); }
		public Var_identifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_identifier; }
	}

	public final Var_identifierContext var_identifier() throws RecognitionException {
		Var_identifierContext _localctx = new Var_identifierContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_var_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(367);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VtypeContext extends ParserRuleContext {
		public Token constant;
		public Token ch;
		public Bound_rangeContext bound;
		public Bound_rangeContext bound_range() {
			return getRuleContext(Bound_rangeContext.class,0);
		}
		public TerminalNode INT() { return getToken(yagParser.INT, 0); }
		public TerminalNode BOOL() { return getToken(yagParser.BOOL, 0); }
		public TerminalNode CHAN() { return getToken(yagParser.CHAN, 0); }
		public TerminalNode BCAST() { return getToken(yagParser.BCAST, 0); }
		public TerminalNode CONST() { return getToken(yagParser.CONST, 0); }
		public VtypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vtype; }
	}

	public final VtypeContext vtype() throws RecognitionException {
		VtypeContext _localctx = new VtypeContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_vtype);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(377);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CONST:
			case INT:
			case BOOL:
				{
				{
				setState(370);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CONST) {
					{
					setState(369);
					((VtypeContext)_localctx).constant = match(CONST);
					}
				}

				setState(372);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==BOOL) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				break;
			case CHAN:
			case BCAST:
				{
				{
				setState(374);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==BCAST) {
					{
					setState(373);
					match(BCAST);
					}
				}

				setState(376);
				((VtypeContext)_localctx).ch = match(CHAN);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(380);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(379);
				((VtypeContext)_localctx).bound = bound_range();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Bound_rangeContext extends ParserRuleContext {
		public ExprContext bmin;
		public ExprContext bmax;
		public TerminalNode LBRACK() { return getToken(yagParser.LBRACK, 0); }
		public TerminalNode COMMA() { return getToken(yagParser.COMMA, 0); }
		public TerminalNode RBRACK() { return getToken(yagParser.RBRACK, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public Bound_rangeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bound_range; }
	}

	public final Bound_rangeContext bound_range() throws RecognitionException {
		Bound_rangeContext _localctx = new Bound_rangeContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_bound_range);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(382);
			match(LBRACK);
			setState(383);
			((Bound_rangeContext)_localctx).bmin = expr(0);
			setState(384);
			match(COMMA);
			setState(385);
			((Bound_rangeContext)_localctx).bmax = expr(0);
			setState(386);
			match(RBRACK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentOpContext extends ParserRuleContext {
		public TerminalNode ASSIGN() { return getToken(yagParser.ASSIGN, 0); }
		public TerminalNode ADD_ASSIGN() { return getToken(yagParser.ADD_ASSIGN, 0); }
		public TerminalNode SUB_ASSIGN() { return getToken(yagParser.SUB_ASSIGN, 0); }
		public TerminalNode MUL_ASSIGN() { return getToken(yagParser.MUL_ASSIGN, 0); }
		public TerminalNode DIV_ASSIGN() { return getToken(yagParser.DIV_ASSIGN, 0); }
		public TerminalNode MOD_ASSIGN() { return getToken(yagParser.MOD_ASSIGN, 0); }
		public TerminalNode AND_ASSIGN() { return getToken(yagParser.AND_ASSIGN, 0); }
		public TerminalNode OR_ASSIGN() { return getToken(yagParser.OR_ASSIGN, 0); }
		public TerminalNode XOR_ASSIGN() { return getToken(yagParser.XOR_ASSIGN, 0); }
		public TerminalNode LSHIFT_ASSIGN() { return getToken(yagParser.LSHIFT_ASSIGN, 0); }
		public TerminalNode RSHIFT_ASSIGN() { return getToken(yagParser.RSHIFT_ASSIGN, 0); }
		public AssignmentOpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentOp; }
	}

	public final AssignmentOpContext assignmentOp() throws RecognitionException {
		AssignmentOpContext _localctx = new AssignmentOpContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_assignmentOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(388);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ASSIGN) | (1L << ADD_ASSIGN) | (1L << SUB_ASSIGN) | (1L << MUL_ASSIGN) | (1L << DIV_ASSIGN) | (1L << AND_ASSIGN) | (1L << OR_ASSIGN) | (1L << XOR_ASSIGN) | (1L << MOD_ASSIGN) | (1L << LSHIFT_ASSIGN) | (1L << RSHIFT_ASSIGN))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 9:
			return literal_sempred((LiteralContext)_localctx, predIndex);
		case 21:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean literal_sempred(LiteralContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 9);
		case 1:
			return precpred(_ctx, 8);
		case 2:
			return precpred(_ctx, 5);
		case 3:
			return precpred(_ctx, 4);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 4:
			return precpred(_ctx, 17);
		case 5:
			return precpred(_ctx, 16);
		case 6:
			return precpred(_ctx, 15);
		case 7:
			return precpred(_ctx, 14);
		case 8:
			return precpred(_ctx, 13);
		case 9:
			return precpred(_ctx, 12);
		case 10:
			return precpred(_ctx, 11);
		case 11:
			return precpred(_ctx, 10);
		case 12:
			return precpred(_ctx, 9);
		case 13:
			return precpred(_ctx, 8);
		case 14:
			return precpred(_ctx, 7);
		case 15:
			return precpred(_ctx, 22);
		case 16:
			return precpred(_ctx, 20);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3G\u0189\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\3\2\3\2\3\2\3\3\3\3\6\3<\n\3\r\3\16\3=\3\4\3\4\3"+
		"\4\7\4C\n\4\f\4\16\4F\13\4\3\5\3\5\3\5\3\5\3\6\3\6\5\6N\n\6\3\6\3\6\3"+
		"\6\5\6S\n\6\7\6U\n\6\f\6\16\6X\13\6\3\7\3\7\3\7\5\7]\n\7\3\7\3\7\3\b\3"+
		"\b\3\b\3\t\3\t\3\t\7\tg\n\t\f\t\16\tj\13\t\3\n\3\n\3\n\7\no\n\n\f\n\16"+
		"\nr\13\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\5\13}\n\13\3\13"+
		"\3\13\5\13\u0081\n\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\7\13\u008f\n\13\f\13\16\13\u0092\13\13\3\f\3\f\3\f\3\f\7\f"+
		"\u0098\n\f\f\f\16\f\u009b\13\f\3\f\3\f\3\r\3\r\5\r\u00a1\n\r\3\r\3\r\5"+
		"\r\u00a5\n\r\3\16\3\16\3\16\3\16\6\16\u00ab\n\16\r\16\16\16\u00ac\3\17"+
		"\3\17\3\17\3\17\5\17\u00b3\n\17\3\17\3\17\3\17\3\20\3\20\3\20\7\20\u00bb"+
		"\n\20\f\20\16\20\u00be\13\20\3\21\3\21\3\21\5\21\u00c3\n\21\3\22\3\22"+
		"\7\22\u00c7\n\22\f\22\16\22\u00ca\13\22\3\22\3\22\3\23\3\23\3\23\3\23"+
		"\3\23\7\23\u00d3\n\23\f\23\16\23\u00d6\13\23\3\23\3\23\5\23\u00da\n\23"+
		"\3\23\3\23\5\23\u00de\n\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\5\23\u00e7"+
		"\n\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\6\23\u00f6\n\23\r\23\16\23\u00f7\3\23\3\23\5\23\u00fc\n\23\3\23\3\23"+
		"\3\23\3\23\7\23\u0102\n\23\f\23\16\23\u0105\13\23\3\23\3\23\3\23\3\23"+
		"\3\23\5\23\u010c\n\23\3\24\3\24\3\24\3\24\3\25\3\25\3\25\5\25\u0115\n"+
		"\25\3\25\3\25\7\25\u0119\n\25\f\25\16\25\u011c\13\25\3\25\3\25\3\25\3"+
		"\26\3\26\3\26\7\26\u0124\n\26\f\26\16\26\u0127\13\26\3\27\3\27\3\27\3"+
		"\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\5\27\u0134\n\27\3\27\3\27\3\27"+
		"\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\5\27\u0142\n\27\3\27\3\27"+
		"\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27"+
		"\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27"+
		"\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\7\27\u016d\n\27"+
		"\f\27\16\27\u0170\13\27\3\30\3\30\3\31\5\31\u0175\n\31\3\31\3\31\5\31"+
		"\u0179\n\31\3\31\5\31\u017c\n\31\3\31\5\31\u017f\n\31\3\32\3\32\3\32\3"+
		"\32\3\32\3\32\3\33\3\33\3\33\3\u011a\4\24,\34\2\4\6\b\n\f\16\20\22\24"+
		"\26\30\32\34\36 \"$&(*,.\60\62\64\2\r\4\2\"\"&&\4\2/\60\64\64\4\2##.."+
		"\4\2##,.\4\2\3\3\"\"\3\2\4\5\4\2$%)*\4\2((++\3\2,-\3\2\22\23\3\2\67A\2"+
		"\u01b5\2\66\3\2\2\2\4;\3\2\2\2\6?\3\2\2\2\bG\3\2\2\2\nM\3\2\2\2\fY\3\2"+
		"\2\2\16`\3\2\2\2\20c\3\2\2\2\22k\3\2\2\2\24\u0080\3\2\2\2\26\u0093\3\2"+
		"\2\2\30\u009e\3\2\2\2\32\u00aa\3\2\2\2\34\u00ae\3\2\2\2\36\u00b7\3\2\2"+
		"\2 \u00bf\3\2\2\2\"\u00c4\3\2\2\2$\u010b\3\2\2\2&\u010d\3\2\2\2(\u0114"+
		"\3\2\2\2*\u0120\3\2\2\2,\u0141\3\2\2\2.\u0171\3\2\2\2\60\u017b\3\2\2\2"+
		"\62\u0180\3\2\2\2\64\u0186\3\2\2\2\66\67\5\4\3\2\678\7\2\2\38\3\3\2\2"+
		"\29<\5\26\f\2:<\5\34\17\2;9\3\2\2\2;:\3\2\2\2<=\3\2\2\2=;\3\2\2\2=>\3"+
		"\2\2\2>\5\3\2\2\2?D\5\b\5\2@A\7 \2\2AC\5\b\5\2B@\3\2\2\2CF\3\2\2\2DB\3"+
		"\2\2\2DE\3\2\2\2E\7\3\2\2\2FD\3\2\2\2GH\5.\30\2HI\7\'\2\2IJ\5\60\31\2"+
		"J\t\3\2\2\2KN\5&\24\2LN\5\f\7\2MK\3\2\2\2ML\3\2\2\2NV\3\2\2\2OR\7 \2\2"+
		"PS\5&\24\2QS\5\f\7\2RP\3\2\2\2RQ\3\2\2\2SU\3\2\2\2TO\3\2\2\2UX\3\2\2\2"+
		"VT\3\2\2\2VW\3\2\2\2W\13\3\2\2\2XV\3\2\2\2YZ\7D\2\2Z\\\7\31\2\2[]\5*\26"+
		"\2\\[\3\2\2\2\\]\3\2\2\2]^\3\2\2\2^_\7\32\2\2_\r\3\2\2\2`a\5,\27\2ab\t"+
		"\2\2\2b\17\3\2\2\2ch\5\22\n\2de\7\66\2\2eg\5\22\n\2fd\3\2\2\2gj\3\2\2"+
		"\2hf\3\2\2\2hi\3\2\2\2i\21\3\2\2\2jh\3\2\2\2kp\5\24\13\2lm\7\65\2\2mo"+
		"\5\24\13\2nl\3\2\2\2or\3\2\2\2pn\3\2\2\2pq\3\2\2\2q\23\3\2\2\2rp\3\2\2"+
		"\2st\b\13\1\2tu\7\"\2\2u\u0081\5\24\13\tvw\7\31\2\2wx\5\24\13\2xy\7\32"+
		"\2\2y\u0081\3\2\2\2z|\5.\30\2{}\5\32\16\2|{\3\2\2\2|}\3\2\2\2}\u0081\3"+
		"\2\2\2~\u0081\7B\2\2\177\u0081\7C\2\2\u0080s\3\2\2\2\u0080v\3\2\2\2\u0080"+
		"z\3\2\2\2\u0080~\3\2\2\2\u0080\177\3\2\2\2\u0081\u0090\3\2\2\2\u0082\u0083"+
		"\f\13\2\2\u0083\u0084\7(\2\2\u0084\u008f\5\24\13\f\u0085\u0086\f\n\2\2"+
		"\u0086\u0087\7+\2\2\u0087\u008f\5\24\13\13\u0088\u0089\f\7\2\2\u0089\u008a"+
		"\t\3\2\2\u008a\u008f\5\24\13\b\u008b\u008c\f\6\2\2\u008c\u008d\t\4\2\2"+
		"\u008d\u008f\5\24\13\7\u008e\u0082\3\2\2\2\u008e\u0085\3\2\2\2\u008e\u0088"+
		"\3\2\2\2\u008e\u008b\3\2\2\2\u008f\u0092\3\2\2\2\u0090\u008e\3\2\2\2\u0090"+
		"\u0091\3\2\2\2\u0091\25\3\2\2\2\u0092\u0090\3\2\2\2\u0093\u0094\5\60\31"+
		"\2\u0094\u0099\5\30\r\2\u0095\u0096\7 \2\2\u0096\u0098\5\30\r\2\u0097"+
		"\u0095\3\2\2\2\u0098\u009b\3\2\2\2\u0099\u0097\3\2\2\2\u0099\u009a\3\2"+
		"\2\2\u009a\u009c\3\2\2\2\u009b\u0099\3\2\2\2\u009c\u009d\7\37\2\2\u009d"+
		"\27\3\2\2\2\u009e\u00a0\5.\30\2\u009f\u00a1\5\32\16\2\u00a0\u009f\3\2"+
		"\2\2\u00a0\u00a1\3\2\2\2\u00a1\u00a4\3\2\2\2\u00a2\u00a3\7\67\2\2\u00a3"+
		"\u00a5\5,\27\2\u00a4\u00a2\3\2\2\2\u00a4\u00a5\3\2\2\2\u00a5\31\3\2\2"+
		"\2\u00a6\u00a7\7\35\2\2\u00a7\u00a8\5,\27\2\u00a8\u00a9\7\36\2\2\u00a9"+
		"\u00ab\3\2\2\2\u00aa\u00a6\3\2\2\2\u00ab\u00ac\3\2\2\2\u00ac\u00aa\3\2"+
		"\2\2\u00ac\u00ad\3\2\2\2\u00ad\33\3\2\2\2\u00ae\u00af\5\60\31\2\u00af"+
		"\u00b0\7D\2\2\u00b0\u00b2\7\31\2\2\u00b1\u00b3\5\36\20\2\u00b2\u00b1\3"+
		"\2\2\2\u00b2\u00b3\3\2\2\2\u00b3\u00b4\3\2\2\2\u00b4\u00b5\7\32\2\2\u00b5"+
		"\u00b6\5\"\22\2\u00b6\35\3\2\2\2\u00b7\u00bc\5 \21\2\u00b8\u00b9\7 \2"+
		"\2\u00b9\u00bb\5 \21\2\u00ba\u00b8\3\2\2\2\u00bb\u00be\3\2\2\2\u00bc\u00ba"+
		"\3\2\2\2\u00bc\u00bd\3\2\2\2\u00bd\37\3\2\2\2\u00be\u00bc\3\2\2\2\u00bf"+
		"\u00c0\5\60\31\2\u00c0\u00c2\5.\30\2\u00c1\u00c3\5\32\16\2\u00c2\u00c1"+
		"\3\2\2\2\u00c2\u00c3\3\2\2\2\u00c3!\3\2\2\2\u00c4\u00c8\7\33\2\2\u00c5"+
		"\u00c7\5$\23\2\u00c6\u00c5\3\2\2\2\u00c7\u00ca\3\2\2\2\u00c8\u00c6\3\2"+
		"\2\2\u00c8\u00c9\3\2\2\2\u00c9\u00cb\3\2\2\2\u00ca\u00c8\3\2\2\2\u00cb"+
		"\u00cc\7\34\2\2\u00cc#\3\2\2\2\u00cd\u010c\5\"\22\2\u00ce\u010c\5\26\f"+
		"\2\u00cf\u00d0\7\6\2\2\u00d0\u00d4\7\31\2\2\u00d1\u00d3\5&\24\2\u00d2"+
		"\u00d1\3\2\2\2\u00d3\u00d6\3\2\2\2\u00d4\u00d2\3\2\2\2\u00d4\u00d5\3\2"+
		"\2\2\u00d5\u00d7\3\2\2\2\u00d6\u00d4\3\2\2\2\u00d7\u00d9\7\37\2\2\u00d8"+
		"\u00da\5*\26\2\u00d9\u00d8\3\2\2\2\u00d9\u00da\3\2\2\2\u00da\u00db\3\2"+
		"\2\2\u00db\u00dd\7\37\2\2\u00dc\u00de\5*\26\2\u00dd\u00dc\3\2\2\2\u00dd"+
		"\u00de\3\2\2\2\u00de\u00df\3\2\2\2\u00df\u00e0\7\32\2\2\u00e0\u010c\5"+
		"$\23\2\u00e1\u00e2\7\17\2\2\u00e2\u00e3\5,\27\2\u00e3\u00e6\5$\23\2\u00e4"+
		"\u00e5\7\20\2\2\u00e5\u00e7\5$\23\2\u00e6\u00e4\3\2\2\2\u00e6\u00e7\3"+
		"\2\2\2\u00e7\u010c\3\2\2\2\u00e8\u00e9\7\b\2\2\u00e9\u00ea\5,\27\2\u00ea"+
		"\u00eb\5$\23\2\u00eb\u010c\3\2\2\2\u00ec\u00ed\7\7\2\2\u00ed\u00ee\5$"+
		"\23\2\u00ee\u00ef\7\b\2\2\u00ef\u00f0\5,\27\2\u00f0\u00f1\7\37\2\2\u00f1"+
		"\u010c\3\2\2\2\u00f2\u00f3\7\13\2\2\u00f3\u00f5\5,\27\2\u00f4\u00f6\5"+
		"(\25\2\u00f5\u00f4\3\2\2\2\u00f6\u00f7\3\2\2\2\u00f7\u00f5\3\2\2\2\u00f7"+
		"\u00f8\3\2\2\2\u00f8\u010c\3\2\2\2\u00f9\u00fb\7\21\2\2\u00fa\u00fc\5"+
		",\27\2\u00fb\u00fa\3\2\2\2\u00fb\u00fc\3\2\2\2\u00fc\u00fd\3\2\2\2\u00fd"+
		"\u010c\7\37\2\2\u00fe\u0103\5&\24\2\u00ff\u0100\7 \2\2\u0100\u0102\5&"+
		"\24\2\u0101\u00ff\3\2\2\2\u0102\u0105\3\2\2\2\u0103\u0101\3\2\2\2\u0103"+
		"\u0104\3\2\2\2\u0104\u0106\3\2\2\2\u0105\u0103\3\2\2\2\u0106\u0107\7\37"+
		"\2\2\u0107\u010c\3\2\2\2\u0108\u0109\5,\27\2\u0109\u010a\7\37\2\2\u010a"+
		"\u010c\3\2\2\2\u010b\u00cd\3\2\2\2\u010b\u00ce\3\2\2\2\u010b\u00cf\3\2"+
		"\2\2\u010b\u00e1\3\2\2\2\u010b\u00e8\3\2\2\2\u010b\u00ec\3\2\2\2\u010b"+
		"\u00f2\3\2\2\2\u010b\u00f9\3\2\2\2\u010b\u00fe\3\2\2\2\u010b\u0108\3\2"+
		"\2\2\u010c%\3\2\2\2\u010d\u010e\5,\27\2\u010e\u010f\5\64\33\2\u010f\u0110"+
		"\5,\27\2\u0110\'\3\2\2\2\u0111\u0112\7\f\2\2\u0112\u0115\5,\27\2\u0113"+
		"\u0115\7\r\2\2\u0114\u0111\3\2\2\2\u0114\u0113\3\2\2\2\u0115\u0116\3\2"+
		"\2\2\u0116\u011a\7\'\2\2\u0117\u0119\5$\23\2\u0118\u0117\3\2\2\2\u0119"+
		"\u011c\3\2\2\2\u011a\u011b\3\2\2\2\u011a\u0118\3\2\2\2\u011b\u011d\3\2"+
		"\2\2\u011c\u011a\3\2\2\2\u011d\u011e\7\t\2\2\u011e\u011f\7\37\2\2\u011f"+
		")\3\2\2\2\u0120\u0125\5,\27\2\u0121\u0122\7 \2\2\u0122\u0124\5,\27\2\u0123"+
		"\u0121\3\2\2\2\u0124\u0127\3\2\2\2\u0125\u0123\3\2\2\2\u0125\u0126\3\2"+
		"\2\2\u0126+\3\2\2\2\u0127\u0125\3\2\2\2\u0128\u0129\b\27\1\2\u0129\u012a"+
		"\5.\30\2\u012a\u012b\5\32\16\2\u012b\u0142\3\2\2\2\u012c\u012d\t\5\2\2"+
		"\u012d\u0142\5,\27\25\u012e\u012f\t\6\2\2\u012f\u0142\5,\27\24\u0130\u0131"+
		"\7D\2\2\u0131\u0133\7\31\2\2\u0132\u0134\5*\26\2\u0133\u0132\3\2\2\2\u0133"+
		"\u0134\3\2\2\2\u0134\u0135\3\2\2\2\u0135\u0142\7\32\2\2\u0136\u0142\5"+
		".\30\2\u0137\u0142\7B\2\2\u0138\u0142\7C\2\2\u0139\u013a\7\33\2\2\u013a"+
		"\u013b\5*\26\2\u013b\u013c\7\34\2\2\u013c\u0142\3\2\2\2\u013d\u013e\7"+
		"\31\2\2\u013e\u013f\5,\27\2\u013f\u0140\7\32\2\2\u0140\u0142\3\2\2\2\u0141"+
		"\u0128\3\2\2\2\u0141\u012c\3\2\2\2\u0141\u012e\3\2\2\2\u0141\u0130\3\2"+
		"\2\2\u0141\u0136\3\2\2\2\u0141\u0137\3\2\2\2\u0141\u0138\3\2\2\2\u0141"+
		"\u0139\3\2\2\2\u0141\u013d\3\2\2\2\u0142\u016e\3\2\2\2\u0143\u0144\f\23"+
		"\2\2\u0144\u0145\t\3\2\2\u0145\u016d\5,\27\24\u0146\u0147\f\22\2\2\u0147"+
		"\u0148\t\4\2\2\u0148\u016d\5,\27\23\u0149\u014a\f\21\2\2\u014a\u014b\t"+
		"\7\2\2\u014b\u016d\5,\27\22\u014c\u014d\f\20\2\2\u014d\u014e\t\b\2\2\u014e"+
		"\u016d\5,\27\21\u014f\u0150\f\17\2\2\u0150\u0151\t\t\2\2\u0151\u016d\5"+
		",\27\20\u0152\u0153\f\16\2\2\u0153\u0154\7\61\2\2\u0154\u016d\5,\27\17"+
		"\u0155\u0156\f\r\2\2\u0156\u0157\7\63\2\2\u0157\u016d\5,\27\16\u0158\u0159"+
		"\f\f\2\2\u0159\u015a\7\62\2\2\u015a\u016d\5,\27\r\u015b\u015c\f\13\2\2"+
		"\u015c\u015d\7\65\2\2\u015d\u016d\5,\27\f\u015e\u015f\f\n\2\2\u015f\u0160"+
		"\7\66\2\2\u0160\u016d\5,\27\13\u0161\u0162\f\t\2\2\u0162\u0163\7&\2\2"+
		"\u0163\u0164\5,\27\2\u0164\u0165\7\'\2\2\u0165\u0166\5,\27\t\u0166\u016d"+
		"\3\2\2\2\u0167\u0168\f\30\2\2\u0168\u0169\7!\2\2\u0169\u016d\5.\30\2\u016a"+
		"\u016b\f\26\2\2\u016b\u016d\t\n\2\2\u016c\u0143\3\2\2\2\u016c\u0146\3"+
		"\2\2\2\u016c\u0149\3\2\2\2\u016c\u014c\3\2\2\2\u016c\u014f\3\2\2\2\u016c"+
		"\u0152\3\2\2\2\u016c\u0155\3\2\2\2\u016c\u0158\3\2\2\2\u016c\u015b\3\2"+
		"\2\2\u016c\u015e\3\2\2\2\u016c\u0161\3\2\2\2\u016c\u0167\3\2\2\2\u016c"+
		"\u016a\3\2\2\2\u016d\u0170\3\2\2\2\u016e\u016c\3\2\2\2\u016e\u016f\3\2"+
		"\2\2\u016f-\3\2\2\2\u0170\u016e\3\2\2\2\u0171\u0172\7D\2\2\u0172/\3\2"+
		"\2\2\u0173\u0175\7\16\2\2\u0174\u0173\3\2\2\2\u0174\u0175\3\2\2\2\u0175"+
		"\u0176\3\2\2\2\u0176\u017c\t\13\2\2\u0177\u0179\7\26\2\2\u0178\u0177\3"+
		"\2\2\2\u0178\u0179\3\2\2\2\u0179\u017a\3\2\2\2\u017a\u017c\7\25\2\2\u017b"+
		"\u0174\3\2\2\2\u017b\u0178\3\2\2\2\u017c\u017e\3\2\2\2\u017d\u017f\5\62"+
		"\32\2\u017e\u017d\3\2\2\2\u017e\u017f\3\2\2\2\u017f\61\3\2\2\2\u0180\u0181"+
		"\7\35\2\2\u0181\u0182\5,\27\2\u0182\u0183\7 \2\2\u0183\u0184\5,\27\2\u0184"+
		"\u0185\7\36\2\2\u0185\63\3\2\2\2\u0186\u0187\t\f\2\2\u0187\65\3\2\2\2"+
		"*;=DMRV\\hp|\u0080\u008e\u0090\u0099\u00a0\u00a4\u00ac\u00b2\u00bc\u00c2"+
		"\u00c8\u00d4\u00d9\u00dd\u00e6\u00f7\u00fb\u0103\u010b\u0114\u011a\u0125"+
		"\u0133\u0141\u016c\u016e\u0174\u0178\u017b\u017e";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}