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
		RULE_assignment_label = 4, RULE_synchronisation_label = 5, RULE_vdec_list = 6, 
		RULE_vdec = 7, RULE_arr_size = 8, RULE_fdec = 9, RULE_fparam_list = 10, 
		RULE_fparam = 11, RULE_block = 12, RULE_statement = 13, RULE_assignment_stmt = 14, 
		RULE_case_block = 15, RULE_expr_list = 16, RULE_expr = 17, RULE_vtype = 18, 
		RULE_bound_range = 19, RULE_assignmentOp = 20;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "translation", "select_label", "select_pair", "assignment_label", 
			"synchronisation_label", "vdec_list", "vdec", "arr_size", "fdec", "fparam_list", 
			"fparam", "block", "statement", "assignment_stmt", "case_block", "expr_list", 
			"expr", "vtype", "bound_range", "assignmentOp"
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


		let constMap = {};

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
			setState(42);
			translation();
			setState(43);
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
			setState(47); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(47);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(45);
					vdec_list();
					}
					break;
				case 2:
					{
					setState(46);
					fdec();
					}
					break;
				}
				}
				setState(49); 
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
			setState(51);
			select_pair();
			setState(56);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(52);
				match(COMMA);
				setState(53);
				select_pair();
				}
				}
				setState(58);
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
		public Token vid;
		public VtypeContext range;
		public TerminalNode COLON() { return getToken(yagParser.COLON, 0); }
		public TerminalNode ID() { return getToken(yagParser.ID, 0); }
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
			setState(59);
			((Select_pairContext)_localctx).vid = match(ID);
			setState(60);
			match(COLON);
			setState(61);
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
			setState(63);
			assignment_stmt();
			setState(68);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(64);
				match(COMMA);
				setState(65);
				assignment_stmt();
				}
				}
				setState(70);
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

	public static class Synchronisation_labelContext extends ParserRuleContext {
		public ExprContext chan;
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
		enterRule(_localctx, 10, RULE_synchronisation_label);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(71);
			((Synchronisation_labelContext)_localctx).chan = expr(0);
			setState(72);
			_la = _input.LA(1);
			if ( !(_la==BANG || _la==QUESTION) ) {
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
		enterRule(_localctx, 12, RULE_vdec_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			((Vdec_listContext)_localctx).type = vtype();
			setState(75);
			vdec();
			setState(80);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(76);
				match(COMMA);
				setState(77);
				vdec();
				}
				}
				setState(82);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(83);
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
		public Token vid;
		public Arr_sizeContext dim;
		public ExprContext init;
		public TerminalNode ID() { return getToken(yagParser.ID, 0); }
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
		enterRule(_localctx, 14, RULE_vdec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			((VdecContext)_localctx).vid = match(ID);
			setState(87);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(86);
				((VdecContext)_localctx).dim = arr_size();
				}
			}

			setState(91);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ASSIGN) {
				{
				setState(89);
				match(ASSIGN);
				setState(90);
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
		enterRule(_localctx, 16, RULE_arr_size);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(93);
				match(LBRACK);
				setState(94);
				expr(0);
				setState(95);
				match(RBRACK);
				}
				}
				setState(99); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==LBRACK );
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
		enterRule(_localctx, 18, RULE_fdec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
			((FdecContext)_localctx).ret = vtype();
			setState(102);
			((FdecContext)_localctx).fid = match(ID);
			setState(103);
			match(LPAREN);
			setState(105);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONST) | (1L << INT) | (1L << BOOL) | (1L << CHAN) | (1L << BCAST))) != 0)) {
				{
				setState(104);
				((FdecContext)_localctx).params = fparam_list();
				}
			}

			setState(107);
			match(RPAREN);
			setState(108);
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
		enterRule(_localctx, 20, RULE_fparam_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			fparam();
			setState(115);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(111);
				match(COMMA);
				setState(112);
				fparam();
				}
				}
				setState(117);
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
		public Token pid;
		public VtypeContext vtype() {
			return getRuleContext(VtypeContext.class,0);
		}
		public TerminalNode ID() { return getToken(yagParser.ID, 0); }
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
		enterRule(_localctx, 22, RULE_fparam);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			vtype();
			setState(119);
			((FparamContext)_localctx).pid = match(ID);
			setState(121);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(120);
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
		enterRule(_localctx, 24, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(123);
			match(LBRACE);
			setState(127);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << FOR) | (1L << DO) | (1L << WHILE) | (1L << SWITCH) | (1L << CONST) | (1L << IF) | (1L << RETURN) | (1L << INT) | (1L << BOOL) | (1L << CHAN) | (1L << BCAST) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
				{
				{
				setState(124);
				statement();
				}
				}
				setState(129);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(130);
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
		enterRule(_localctx, 26, RULE_statement);
		int _la;
		try {
			setState(194);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(132);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(133);
				vdec_list();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(134);
				match(FOR);
				setState(135);
				match(LPAREN);
				setState(139);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
					{
					{
					setState(136);
					assignment_stmt();
					}
					}
					setState(141);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(142);
				match(SEMI);
				setState(144);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
					{
					setState(143);
					expr_list();
					}
				}

				setState(146);
				match(SEMI);
				setState(148);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
					{
					setState(147);
					expr_list();
					}
				}

				setState(150);
				match(RPAREN);
				setState(151);
				statement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(152);
				match(IF);
				setState(153);
				expr(0);
				setState(154);
				statement();
				setState(157);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
				case 1:
					{
					setState(155);
					match(ELSE);
					setState(156);
					statement();
					}
					break;
				}
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(159);
				match(WHILE);
				setState(160);
				expr(0);
				setState(161);
				statement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(163);
				match(DO);
				setState(164);
				statement();
				setState(165);
				match(WHILE);
				setState(166);
				expr(0);
				setState(167);
				match(SEMI);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(169);
				match(SWITCH);
				setState(170);
				expr(0);
				setState(172); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(171);
					case_block();
					}
					}
					setState(174); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==CASE || _la==DEFAULT );
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(176);
				match(RETURN);
				setState(178);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
					{
					setState(177);
					expr(0);
					}
				}

				setState(180);
				match(SEMI);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(181);
				assignment_stmt();
				setState(186);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(182);
					match(COMMA);
					setState(183);
					assignment_stmt();
					}
					}
					setState(188);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(189);
				match(SEMI);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(191);
				expr(0);
				setState(192);
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
		enterRule(_localctx, 28, RULE_assignment_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(196);
			((Assignment_stmtContext)_localctx).lhs = expr(0);
			setState(197);
			assignmentOp();
			setState(198);
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
		enterRule(_localctx, 30, RULE_case_block);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CASE:
				{
				{
				setState(200);
				match(CASE);
				setState(201);
				expr(0);
				}
				}
				break;
			case DEFAULT:
				{
				setState(202);
				match(DEFAULT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(205);
			match(COLON);
			setState(209);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(206);
					statement();
					}
					} 
				}
				setState(211);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			}
			setState(212);
			match(BREAK);
			setState(213);
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
		enterRule(_localctx, 32, RULE_expr_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(215);
			expr(0);
			setState(220);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(216);
				match(COMMA);
				setState(217);
				expr(0);
				}
				}
				setState(222);
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
		public Token fid;
		public Expr_listContext fargs;
		public Token vid;
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
		public TerminalNode LBRACK() { return getToken(yagParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(yagParser.RBRACK, 0); }
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
		int _startState = 34;
		enterRecursionRule(_localctx, 34, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(244);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				{
				setState(224);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(225);
				expr(19);
				}
				break;
			case 2:
				{
				setState(226);
				_la = _input.LA(1);
				if ( !(_la==T__0 || _la==BANG) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(227);
				expr(18);
				}
				break;
			case 3:
				{
				setState(228);
				((ExprContext)_localctx).fid = match(ID);
				setState(229);
				match(LPAREN);
				setState(230);
				((ExprContext)_localctx).fargs = expr_list();
				setState(231);
				match(RPAREN);
				}
				break;
			case 4:
				{
				setState(233);
				((ExprContext)_localctx).vid = match(ID);
				}
				break;
			case 5:
				{
				setState(234);
				match(INTEGER);
				}
				break;
			case 6:
				{
				setState(235);
				match(BOOLEAN);
				}
				break;
			case 7:
				{
				setState(236);
				match(LBRACE);
				setState(237);
				expr_list();
				setState(238);
				match(RBRACE);
				}
				break;
			case 8:
				{
				setState(240);
				match(LPAREN);
				setState(241);
				expr(0);
				setState(242);
				match(RPAREN);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(294);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(292);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(246);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(247);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MUL) | (1L << DIV) | (1L << MOD))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(248);
						expr(18);
						}
						break;
					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(249);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(250);
						_la = _input.LA(1);
						if ( !(_la==SUB || _la==ADD) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(251);
						expr(17);
						}
						break;
					case 3:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(252);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(253);
						_la = _input.LA(1);
						if ( !(_la==T__1 || _la==T__2) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(254);
						expr(16);
						}
						break;
					case 4:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(255);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(256);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GT) | (1L << LT) | (1L << LE) | (1L << GE))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(257);
						expr(15);
						}
						break;
					case 5:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(258);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(259);
						_la = _input.LA(1);
						if ( !(_la==EQUAL || _la==NOTEQUAL) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(260);
						expr(14);
						}
						break;
					case 6:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(261);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						{
						setState(262);
						match(BITAND);
						}
						setState(263);
						expr(13);
						}
						break;
					case 7:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(264);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						{
						setState(265);
						match(CARET);
						}
						setState(266);
						expr(12);
						}
						break;
					case 8:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(267);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						{
						setState(268);
						match(BITOR);
						}
						setState(269);
						expr(11);
						}
						break;
					case 9:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(270);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						{
						setState(271);
						match(AND);
						}
						setState(272);
						expr(10);
						}
						break;
					case 10:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(273);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						{
						setState(274);
						match(OR);
						}
						setState(275);
						expr(9);
						}
						break;
					case 11:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(276);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(277);
						match(QUESTION);
						setState(278);
						expr(0);
						setState(279);
						match(COLON);
						setState(280);
						expr(7);
						}
						break;
					case 12:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(282);
						if (!(precpred(_ctx, 22))) throw new FailedPredicateException(this, "precpred(_ctx, 22)");
						setState(283);
						match(DOT);
						setState(284);
						match(ID);
						}
						break;
					case 13:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(285);
						if (!(precpred(_ctx, 21))) throw new FailedPredicateException(this, "precpred(_ctx, 21)");
						setState(286);
						match(LBRACK);
						setState(287);
						expr(0);
						setState(288);
						match(RBRACK);
						}
						break;
					case 14:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(290);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						setState(291);
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
				setState(296);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
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

	public static class VtypeContext extends ParserRuleContext {
		public Token constant;
		public Bound_rangeContext bound_range() {
			return getRuleContext(Bound_rangeContext.class,0);
		}
		public TerminalNode CHAN() { return getToken(yagParser.CHAN, 0); }
		public TerminalNode INT() { return getToken(yagParser.INT, 0); }
		public TerminalNode BOOL() { return getToken(yagParser.BOOL, 0); }
		public TerminalNode BCAST() { return getToken(yagParser.BCAST, 0); }
		public TerminalNode CONST() { return getToken(yagParser.CONST, 0); }
		public VtypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vtype; }
	}

	public final VtypeContext vtype() throws RecognitionException {
		VtypeContext _localctx = new VtypeContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_vtype);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(305);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CONST:
			case INT:
			case BOOL:
				{
				{
				setState(298);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CONST) {
					{
					setState(297);
					((VtypeContext)_localctx).constant = match(CONST);
					}
				}

				setState(300);
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
				setState(302);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==BCAST) {
					{
					setState(301);
					match(BCAST);
					}
				}

				setState(304);
				match(CHAN);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(308);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(307);
				bound_range();
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
		public TerminalNode LBRACK() { return getToken(yagParser.LBRACK, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode COMMA() { return getToken(yagParser.COMMA, 0); }
		public TerminalNode RBRACK() { return getToken(yagParser.RBRACK, 0); }
		public Bound_rangeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bound_range; }
	}

	public final Bound_rangeContext bound_range() throws RecognitionException {
		Bound_rangeContext _localctx = new Bound_rangeContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_bound_range);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(310);
			match(LBRACK);
			setState(311);
			expr(0);
			setState(312);
			match(COMMA);
			setState(313);
			expr(0);
			setState(314);
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
		enterRule(_localctx, 40, RULE_assignmentOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(316);
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
		case 17:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 17);
		case 1:
			return precpred(_ctx, 16);
		case 2:
			return precpred(_ctx, 15);
		case 3:
			return precpred(_ctx, 14);
		case 4:
			return precpred(_ctx, 13);
		case 5:
			return precpred(_ctx, 12);
		case 6:
			return precpred(_ctx, 11);
		case 7:
			return precpred(_ctx, 10);
		case 8:
			return precpred(_ctx, 9);
		case 9:
			return precpred(_ctx, 8);
		case 10:
			return precpred(_ctx, 7);
		case 11:
			return precpred(_ctx, 22);
		case 12:
			return precpred(_ctx, 21);
		case 13:
			return precpred(_ctx, 20);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3G\u0141\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\3\2\3\2\3\2\3\3\3\3\6\3\62\n"+
		"\3\r\3\16\3\63\3\4\3\4\3\4\7\49\n\4\f\4\16\4<\13\4\3\5\3\5\3\5\3\5\3\6"+
		"\3\6\3\6\7\6E\n\6\f\6\16\6H\13\6\3\7\3\7\3\7\3\b\3\b\3\b\3\b\7\bQ\n\b"+
		"\f\b\16\bT\13\b\3\b\3\b\3\t\3\t\5\tZ\n\t\3\t\3\t\5\t^\n\t\3\n\3\n\3\n"+
		"\3\n\6\nd\n\n\r\n\16\ne\3\13\3\13\3\13\3\13\5\13l\n\13\3\13\3\13\3\13"+
		"\3\f\3\f\3\f\7\ft\n\f\f\f\16\fw\13\f\3\r\3\r\3\r\5\r|\n\r\3\16\3\16\7"+
		"\16\u0080\n\16\f\16\16\16\u0083\13\16\3\16\3\16\3\17\3\17\3\17\3\17\3"+
		"\17\7\17\u008c\n\17\f\17\16\17\u008f\13\17\3\17\3\17\5\17\u0093\n\17\3"+
		"\17\3\17\5\17\u0097\n\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\5\17\u00a0"+
		"\n\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\6\17\u00af\n\17\r\17\16\17\u00b0\3\17\3\17\5\17\u00b5\n\17\3\17\3\17"+
		"\3\17\3\17\7\17\u00bb\n\17\f\17\16\17\u00be\13\17\3\17\3\17\3\17\3\17"+
		"\3\17\5\17\u00c5\n\17\3\20\3\20\3\20\3\20\3\21\3\21\3\21\5\21\u00ce\n"+
		"\21\3\21\3\21\7\21\u00d2\n\21\f\21\16\21\u00d5\13\21\3\21\3\21\3\21\3"+
		"\22\3\22\3\22\7\22\u00dd\n\22\f\22\16\22\u00e0\13\22\3\23\3\23\3\23\3"+
		"\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3"+
		"\23\3\23\3\23\3\23\5\23\u00f7\n\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\7\23\u0127\n\23"+
		"\f\23\16\23\u012a\13\23\3\24\5\24\u012d\n\24\3\24\3\24\5\24\u0131\n\24"+
		"\3\24\5\24\u0134\n\24\3\24\5\24\u0137\n\24\3\25\3\25\3\25\3\25\3\25\3"+
		"\25\3\26\3\26\3\26\3\u00d3\3$\27\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36"+
		" \"$&(*\2\r\4\2\"\"&&\4\2##,.\4\2\3\3\"\"\4\2/\60\64\64\4\2##..\3\2\4"+
		"\5\4\2$%)*\4\2((++\3\2,-\3\2\22\23\3\2\67A\2\u0163\2,\3\2\2\2\4\61\3\2"+
		"\2\2\6\65\3\2\2\2\b=\3\2\2\2\nA\3\2\2\2\fI\3\2\2\2\16L\3\2\2\2\20W\3\2"+
		"\2\2\22c\3\2\2\2\24g\3\2\2\2\26p\3\2\2\2\30x\3\2\2\2\32}\3\2\2\2\34\u00c4"+
		"\3\2\2\2\36\u00c6\3\2\2\2 \u00cd\3\2\2\2\"\u00d9\3\2\2\2$\u00f6\3\2\2"+
		"\2&\u0133\3\2\2\2(\u0138\3\2\2\2*\u013e\3\2\2\2,-\5\4\3\2-.\7\2\2\3.\3"+
		"\3\2\2\2/\62\5\16\b\2\60\62\5\24\13\2\61/\3\2\2\2\61\60\3\2\2\2\62\63"+
		"\3\2\2\2\63\61\3\2\2\2\63\64\3\2\2\2\64\5\3\2\2\2\65:\5\b\5\2\66\67\7"+
		" \2\2\679\5\b\5\28\66\3\2\2\29<\3\2\2\2:8\3\2\2\2:;\3\2\2\2;\7\3\2\2\2"+
		"<:\3\2\2\2=>\7D\2\2>?\7\'\2\2?@\5&\24\2@\t\3\2\2\2AF\5\36\20\2BC\7 \2"+
		"\2CE\5\36\20\2DB\3\2\2\2EH\3\2\2\2FD\3\2\2\2FG\3\2\2\2G\13\3\2\2\2HF\3"+
		"\2\2\2IJ\5$\23\2JK\t\2\2\2K\r\3\2\2\2LM\5&\24\2MR\5\20\t\2NO\7 \2\2OQ"+
		"\5\20\t\2PN\3\2\2\2QT\3\2\2\2RP\3\2\2\2RS\3\2\2\2SU\3\2\2\2TR\3\2\2\2"+
		"UV\7\37\2\2V\17\3\2\2\2WY\7D\2\2XZ\5\22\n\2YX\3\2\2\2YZ\3\2\2\2Z]\3\2"+
		"\2\2[\\\7\67\2\2\\^\5$\23\2][\3\2\2\2]^\3\2\2\2^\21\3\2\2\2_`\7\35\2\2"+
		"`a\5$\23\2ab\7\36\2\2bd\3\2\2\2c_\3\2\2\2de\3\2\2\2ec\3\2\2\2ef\3\2\2"+
		"\2f\23\3\2\2\2gh\5&\24\2hi\7D\2\2ik\7\31\2\2jl\5\26\f\2kj\3\2\2\2kl\3"+
		"\2\2\2lm\3\2\2\2mn\7\32\2\2no\5\32\16\2o\25\3\2\2\2pu\5\30\r\2qr\7 \2"+
		"\2rt\5\30\r\2sq\3\2\2\2tw\3\2\2\2us\3\2\2\2uv\3\2\2\2v\27\3\2\2\2wu\3"+
		"\2\2\2xy\5&\24\2y{\7D\2\2z|\5\22\n\2{z\3\2\2\2{|\3\2\2\2|\31\3\2\2\2}"+
		"\u0081\7\33\2\2~\u0080\5\34\17\2\177~\3\2\2\2\u0080\u0083\3\2\2\2\u0081"+
		"\177\3\2\2\2\u0081\u0082\3\2\2\2\u0082\u0084\3\2\2\2\u0083\u0081\3\2\2"+
		"\2\u0084\u0085\7\34\2\2\u0085\33\3\2\2\2\u0086\u00c5\5\32\16\2\u0087\u00c5"+
		"\5\16\b\2\u0088\u0089\7\6\2\2\u0089\u008d\7\31\2\2\u008a\u008c\5\36\20"+
		"\2\u008b\u008a\3\2\2\2\u008c\u008f\3\2\2\2\u008d\u008b\3\2\2\2\u008d\u008e"+
		"\3\2\2\2\u008e\u0090\3\2\2\2\u008f\u008d\3\2\2\2\u0090\u0092\7\37\2\2"+
		"\u0091\u0093\5\"\22\2\u0092\u0091\3\2\2\2\u0092\u0093\3\2\2\2\u0093\u0094"+
		"\3\2\2\2\u0094\u0096\7\37\2\2\u0095\u0097\5\"\22\2\u0096\u0095\3\2\2\2"+
		"\u0096\u0097\3\2\2\2\u0097\u0098\3\2\2\2\u0098\u0099\7\32\2\2\u0099\u00c5"+
		"\5\34\17\2\u009a\u009b\7\17\2\2\u009b\u009c\5$\23\2\u009c\u009f\5\34\17"+
		"\2\u009d\u009e\7\20\2\2\u009e\u00a0\5\34\17\2\u009f\u009d\3\2\2\2\u009f"+
		"\u00a0\3\2\2\2\u00a0\u00c5\3\2\2\2\u00a1\u00a2\7\b\2\2\u00a2\u00a3\5$"+
		"\23\2\u00a3\u00a4\5\34\17\2\u00a4\u00c5\3\2\2\2\u00a5\u00a6\7\7\2\2\u00a6"+
		"\u00a7\5\34\17\2\u00a7\u00a8\7\b\2\2\u00a8\u00a9\5$\23\2\u00a9\u00aa\7"+
		"\37\2\2\u00aa\u00c5\3\2\2\2\u00ab\u00ac\7\13\2\2\u00ac\u00ae\5$\23\2\u00ad"+
		"\u00af\5 \21\2\u00ae\u00ad\3\2\2\2\u00af\u00b0\3\2\2\2\u00b0\u00ae\3\2"+
		"\2\2\u00b0\u00b1\3\2\2\2\u00b1\u00c5\3\2\2\2\u00b2\u00b4\7\21\2\2\u00b3"+
		"\u00b5\5$\23\2\u00b4\u00b3\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\u00b6\3\2"+
		"\2\2\u00b6\u00c5\7\37\2\2\u00b7\u00bc\5\36\20\2\u00b8\u00b9\7 \2\2\u00b9"+
		"\u00bb\5\36\20\2\u00ba\u00b8\3\2\2\2\u00bb\u00be\3\2\2\2\u00bc\u00ba\3"+
		"\2\2\2\u00bc\u00bd\3\2\2\2\u00bd\u00bf\3\2\2\2\u00be\u00bc\3\2\2\2\u00bf"+
		"\u00c0\7\37\2\2\u00c0\u00c5\3\2\2\2\u00c1\u00c2\5$\23\2\u00c2\u00c3\7"+
		"\37\2\2\u00c3\u00c5\3\2\2\2\u00c4\u0086\3\2\2\2\u00c4\u0087\3\2\2\2\u00c4"+
		"\u0088\3\2\2\2\u00c4\u009a\3\2\2\2\u00c4\u00a1\3\2\2\2\u00c4\u00a5\3\2"+
		"\2\2\u00c4\u00ab\3\2\2\2\u00c4\u00b2\3\2\2\2\u00c4\u00b7\3\2\2\2\u00c4"+
		"\u00c1\3\2\2\2\u00c5\35\3\2\2\2\u00c6\u00c7\5$\23\2\u00c7\u00c8\5*\26"+
		"\2\u00c8\u00c9\5$\23\2\u00c9\37\3\2\2\2\u00ca\u00cb\7\f\2\2\u00cb\u00ce"+
		"\5$\23\2\u00cc\u00ce\7\r\2\2\u00cd\u00ca\3\2\2\2\u00cd\u00cc\3\2\2\2\u00ce"+
		"\u00cf\3\2\2\2\u00cf\u00d3\7\'\2\2\u00d0\u00d2\5\34\17\2\u00d1\u00d0\3"+
		"\2\2\2\u00d2\u00d5\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d3\u00d1\3\2\2\2\u00d4"+
		"\u00d6\3\2\2\2\u00d5\u00d3\3\2\2\2\u00d6\u00d7\7\t\2\2\u00d7\u00d8\7\37"+
		"\2\2\u00d8!\3\2\2\2\u00d9\u00de\5$\23\2\u00da\u00db\7 \2\2\u00db\u00dd"+
		"\5$\23\2\u00dc\u00da\3\2\2\2\u00dd\u00e0\3\2\2\2\u00de\u00dc\3\2\2\2\u00de"+
		"\u00df\3\2\2\2\u00df#\3\2\2\2\u00e0\u00de\3\2\2\2\u00e1\u00e2\b\23\1\2"+
		"\u00e2\u00e3\t\3\2\2\u00e3\u00f7\5$\23\25\u00e4\u00e5\t\4\2\2\u00e5\u00f7"+
		"\5$\23\24\u00e6\u00e7\7D\2\2\u00e7\u00e8\7\31\2\2\u00e8\u00e9\5\"\22\2"+
		"\u00e9\u00ea\7\32\2\2\u00ea\u00f7\3\2\2\2\u00eb\u00f7\7D\2\2\u00ec\u00f7"+
		"\7B\2\2\u00ed\u00f7\7C\2\2\u00ee\u00ef\7\33\2\2\u00ef\u00f0\5\"\22\2\u00f0"+
		"\u00f1\7\34\2\2\u00f1\u00f7\3\2\2\2\u00f2\u00f3\7\31\2\2\u00f3\u00f4\5"+
		"$\23\2\u00f4\u00f5\7\32\2\2\u00f5\u00f7\3\2\2\2\u00f6\u00e1\3\2\2\2\u00f6"+
		"\u00e4\3\2\2\2\u00f6\u00e6\3\2\2\2\u00f6\u00eb\3\2\2\2\u00f6\u00ec\3\2"+
		"\2\2\u00f6\u00ed\3\2\2\2\u00f6\u00ee\3\2\2\2\u00f6\u00f2\3\2\2\2\u00f7"+
		"\u0128\3\2\2\2\u00f8\u00f9\f\23\2\2\u00f9\u00fa\t\5\2\2\u00fa\u0127\5"+
		"$\23\24\u00fb\u00fc\f\22\2\2\u00fc\u00fd\t\6\2\2\u00fd\u0127\5$\23\23"+
		"\u00fe\u00ff\f\21\2\2\u00ff\u0100\t\7\2\2\u0100\u0127\5$\23\22\u0101\u0102"+
		"\f\20\2\2\u0102\u0103\t\b\2\2\u0103\u0127\5$\23\21\u0104\u0105\f\17\2"+
		"\2\u0105\u0106\t\t\2\2\u0106\u0127\5$\23\20\u0107\u0108\f\16\2\2\u0108"+
		"\u0109\7\61\2\2\u0109\u0127\5$\23\17\u010a\u010b\f\r\2\2\u010b\u010c\7"+
		"\63\2\2\u010c\u0127\5$\23\16\u010d\u010e\f\f\2\2\u010e\u010f\7\62\2\2"+
		"\u010f\u0127\5$\23\r\u0110\u0111\f\13\2\2\u0111\u0112\7\65\2\2\u0112\u0127"+
		"\5$\23\f\u0113\u0114\f\n\2\2\u0114\u0115\7\66\2\2\u0115\u0127\5$\23\13"+
		"\u0116\u0117\f\t\2\2\u0117\u0118\7&\2\2\u0118\u0119\5$\23\2\u0119\u011a"+
		"\7\'\2\2\u011a\u011b\5$\23\t\u011b\u0127\3\2\2\2\u011c\u011d\f\30\2\2"+
		"\u011d\u011e\7!\2\2\u011e\u0127\7D\2\2\u011f\u0120\f\27\2\2\u0120\u0121"+
		"\7\35\2\2\u0121\u0122\5$\23\2\u0122\u0123\7\36\2\2\u0123\u0127\3\2\2\2"+
		"\u0124\u0125\f\26\2\2\u0125\u0127\t\n\2\2\u0126\u00f8\3\2\2\2\u0126\u00fb"+
		"\3\2\2\2\u0126\u00fe\3\2\2\2\u0126\u0101\3\2\2\2\u0126\u0104\3\2\2\2\u0126"+
		"\u0107\3\2\2\2\u0126\u010a\3\2\2\2\u0126\u010d\3\2\2\2\u0126\u0110\3\2"+
		"\2\2\u0126\u0113\3\2\2\2\u0126\u0116\3\2\2\2\u0126\u011c\3\2\2\2\u0126"+
		"\u011f\3\2\2\2\u0126\u0124\3\2\2\2\u0127\u012a\3\2\2\2\u0128\u0126\3\2"+
		"\2\2\u0128\u0129\3\2\2\2\u0129%\3\2\2\2\u012a\u0128\3\2\2\2\u012b\u012d"+
		"\7\16\2\2\u012c\u012b\3\2\2\2\u012c\u012d\3\2\2\2\u012d\u012e\3\2\2\2"+
		"\u012e\u0134\t\13\2\2\u012f\u0131\7\26\2\2\u0130\u012f\3\2\2\2\u0130\u0131"+
		"\3\2\2\2\u0131\u0132\3\2\2\2\u0132\u0134\7\25\2\2\u0133\u012c\3\2\2\2"+
		"\u0133\u0130\3\2\2\2\u0134\u0136\3\2\2\2\u0135\u0137\5(\25\2\u0136\u0135"+
		"\3\2\2\2\u0136\u0137\3\2\2\2\u0137\'\3\2\2\2\u0138\u0139\7\35\2\2\u0139"+
		"\u013a\5$\23\2\u013a\u013b\7 \2\2\u013b\u013c\5$\23\2\u013c\u013d\7\36"+
		"\2\2\u013d)\3\2\2\2\u013e\u013f\t\f\2\2\u013f+\3\2\2\2 \61\63:FRY]eku"+
		"{\u0081\u008d\u0092\u0096\u009f\u00b0\u00b4\u00bc\u00c4\u00cd\u00d3\u00de"+
		"\u00f6\u0126\u0128\u012c\u0130\u0133\u0136";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}