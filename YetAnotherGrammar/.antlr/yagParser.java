// Generated from c:\Users\yan.kim\Dropbox\from_repo\abstraction_tool\YetAnotherGrammar\yag.g4 by ANTLR 4.9.2
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
		RULE_file = 0, RULE_translation = 1, RULE_vdec_list = 2, RULE_vdec = 3, 
		RULE_arr_size = 4, RULE_fdec = 5, RULE_fparam_list = 6, RULE_fparam = 7, 
		RULE_block = 8, RULE_statement = 9, RULE_assignment_stmt = 10, RULE_case_block = 11, 
		RULE_expr = 12, RULE_expr_list = 13, RULE_bound_range = 14, RULE_vtype = 15, 
		RULE_assignmentOp = 16;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "translation", "vdec_list", "vdec", "arr_size", "fdec", "fparam_list", 
			"fparam", "block", "statement", "assignment_stmt", "case_block", "expr", 
			"expr_list", "bound_range", "vtype", "assignmentOp"
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
			setState(34);
			translation();
			setState(35);
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
			setState(39); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(39);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(37);
					vdec_list();
					}
					break;
				case 2:
					{
					setState(38);
					fdec();
					}
					break;
				}
				}
				setState(41); 
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

	public static class Vdec_listContext extends ParserRuleContext {
		public VtypeContext vtype() {
			return getRuleContext(VtypeContext.class,0);
		}
		public List<VdecContext> vdec() {
			return getRuleContexts(VdecContext.class);
		}
		public VdecContext vdec(int i) {
			return getRuleContext(VdecContext.class,i);
		}
		public TerminalNode SEMI() { return getToken(yagParser.SEMI, 0); }
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
		enterRule(_localctx, 4, RULE_vdec_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(43);
			vtype();
			setState(44);
			vdec();
			setState(49);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(45);
				match(COMMA);
				setState(46);
				vdec();
				}
				}
				setState(51);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(52);
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
		enterRule(_localctx, 6, RULE_vdec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(54);
			((VdecContext)_localctx).vid = match(ID);
			setState(56);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(55);
				((VdecContext)_localctx).dim = arr_size();
				}
			}

			setState(60);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ASSIGN) {
				{
				setState(58);
				match(ASSIGN);
				setState(59);
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
		enterRule(_localctx, 8, RULE_arr_size);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(66); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(62);
				match(LBRACK);
				setState(63);
				expr(0);
				setState(64);
				match(RBRACK);
				}
				}
				setState(68); 
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
		enterRule(_localctx, 10, RULE_fdec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(70);
			((FdecContext)_localctx).ret = vtype();
			setState(71);
			((FdecContext)_localctx).fid = match(ID);
			setState(72);
			match(LPAREN);
			setState(74);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONST) | (1L << INT) | (1L << BOOL) | (1L << CHAN) | (1L << BCAST))) != 0)) {
				{
				setState(73);
				((FdecContext)_localctx).params = fparam_list();
				}
			}

			setState(76);
			match(RPAREN);
			setState(77);
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
		enterRule(_localctx, 12, RULE_fparam_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			fparam();
			setState(84);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(80);
				match(COMMA);
				setState(81);
				fparam();
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
		enterRule(_localctx, 14, RULE_fparam);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(87);
			vtype();
			setState(88);
			((FparamContext)_localctx).pid = match(ID);
			setState(90);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(89);
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
		enterRule(_localctx, 16, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(92);
			match(LBRACE);
			setState(96);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << FOR) | (1L << DO) | (1L << WHILE) | (1L << SWITCH) | (1L << CONST) | (1L << IF) | (1L << RETURN) | (1L << INT) | (1L << BOOL) | (1L << CHAN) | (1L << BCAST) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
				{
				{
				setState(93);
				statement();
				}
				}
				setState(98);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(99);
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
		enterRule(_localctx, 18, RULE_statement);
		int _la;
		try {
			setState(163);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(101);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(102);
				vdec_list();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(103);
				match(FOR);
				setState(104);
				match(LPAREN);
				setState(108);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
					{
					{
					setState(105);
					assignment_stmt();
					}
					}
					setState(110);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(111);
				match(SEMI);
				setState(113);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
					{
					setState(112);
					expr_list();
					}
				}

				setState(115);
				match(SEMI);
				setState(117);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
					{
					setState(116);
					expr_list();
					}
				}

				setState(119);
				match(RPAREN);
				setState(120);
				statement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(121);
				match(IF);
				setState(122);
				expr(0);
				setState(123);
				statement();
				setState(126);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
				case 1:
					{
					setState(124);
					match(ELSE);
					setState(125);
					statement();
					}
					break;
				}
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(128);
				match(WHILE);
				setState(129);
				expr(0);
				setState(130);
				statement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(132);
				match(DO);
				setState(133);
				statement();
				setState(134);
				match(WHILE);
				setState(135);
				expr(0);
				setState(136);
				match(SEMI);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(138);
				match(SWITCH);
				setState(139);
				expr(0);
				setState(141); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(140);
					case_block();
					}
					}
					setState(143); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==CASE || _la==DEFAULT );
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(145);
				match(RETURN);
				setState(147);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
					{
					setState(146);
					expr(0);
					}
				}

				setState(149);
				match(SEMI);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(150);
				assignment_stmt();
				setState(155);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(151);
					match(COMMA);
					setState(152);
					assignment_stmt();
					}
					}
					setState(157);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(158);
				match(SEMI);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(160);
				expr(0);
				setState(161);
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
		enterRule(_localctx, 20, RULE_assignment_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(165);
			((Assignment_stmtContext)_localctx).lhs = expr(0);
			setState(166);
			assignmentOp();
			setState(167);
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
		enterRule(_localctx, 22, RULE_case_block);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(172);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CASE:
				{
				{
				setState(169);
				match(CASE);
				setState(170);
				expr(0);
				}
				}
				break;
			case DEFAULT:
				{
				setState(171);
				match(DEFAULT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(174);
			match(COLON);
			setState(178);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(175);
					statement();
					}
					} 
				}
				setState(180);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			}
			setState(181);
			match(BREAK);
			setState(182);
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
		int _startState = 24;
		enterRecursionRule(_localctx, 24, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(205);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				{
				setState(185);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(186);
				expr(19);
				}
				break;
			case 2:
				{
				setState(187);
				_la = _input.LA(1);
				if ( !(_la==T__0 || _la==BANG) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(188);
				expr(18);
				}
				break;
			case 3:
				{
				setState(189);
				((ExprContext)_localctx).fid = match(ID);
				setState(190);
				match(LPAREN);
				setState(191);
				((ExprContext)_localctx).fargs = expr_list();
				setState(192);
				match(RPAREN);
				}
				break;
			case 4:
				{
				setState(194);
				((ExprContext)_localctx).vid = match(ID);
				}
				break;
			case 5:
				{
				setState(195);
				match(INTEGER);
				}
				break;
			case 6:
				{
				setState(196);
				match(BOOLEAN);
				}
				break;
			case 7:
				{
				setState(197);
				match(LBRACE);
				setState(198);
				expr_list();
				setState(199);
				match(RBRACE);
				}
				break;
			case 8:
				{
				setState(201);
				match(LPAREN);
				setState(202);
				expr(0);
				setState(203);
				match(RPAREN);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(255);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(253);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(207);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(208);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MUL) | (1L << DIV) | (1L << MOD))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(209);
						expr(18);
						}
						break;
					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(210);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(211);
						_la = _input.LA(1);
						if ( !(_la==SUB || _la==ADD) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(212);
						expr(17);
						}
						break;
					case 3:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(213);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(214);
						_la = _input.LA(1);
						if ( !(_la==T__1 || _la==T__2) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(215);
						expr(16);
						}
						break;
					case 4:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(216);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(217);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GT) | (1L << LT) | (1L << LE) | (1L << GE))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(218);
						expr(15);
						}
						break;
					case 5:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(219);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(220);
						_la = _input.LA(1);
						if ( !(_la==EQUAL || _la==NOTEQUAL) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(221);
						expr(14);
						}
						break;
					case 6:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(222);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						{
						setState(223);
						match(BITAND);
						}
						setState(224);
						expr(13);
						}
						break;
					case 7:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(225);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						{
						setState(226);
						match(CARET);
						}
						setState(227);
						expr(12);
						}
						break;
					case 8:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(228);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						{
						setState(229);
						match(BITOR);
						}
						setState(230);
						expr(11);
						}
						break;
					case 9:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(231);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						{
						setState(232);
						match(AND);
						}
						setState(233);
						expr(10);
						}
						break;
					case 10:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(234);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						{
						setState(235);
						match(OR);
						}
						setState(236);
						expr(9);
						}
						break;
					case 11:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(237);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(238);
						match(QUESTION);
						setState(239);
						expr(0);
						setState(240);
						match(COLON);
						setState(241);
						expr(7);
						}
						break;
					case 12:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(243);
						if (!(precpred(_ctx, 22))) throw new FailedPredicateException(this, "precpred(_ctx, 22)");
						setState(244);
						match(DOT);
						setState(245);
						match(ID);
						}
						break;
					case 13:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(246);
						if (!(precpred(_ctx, 21))) throw new FailedPredicateException(this, "precpred(_ctx, 21)");
						setState(247);
						match(LBRACK);
						setState(248);
						expr(0);
						setState(249);
						match(RBRACK);
						}
						break;
					case 14:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(251);
						if (!(precpred(_ctx, 20))) throw new FailedPredicateException(this, "precpred(_ctx, 20)");
						setState(252);
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
				setState(257);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
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
		enterRule(_localctx, 26, RULE_expr_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			expr(0);
			setState(263);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(259);
				match(COMMA);
				setState(260);
				expr(0);
				}
				}
				setState(265);
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
		enterRule(_localctx, 28, RULE_bound_range);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			match(LBRACK);
			setState(267);
			expr(0);
			setState(268);
			match(COMMA);
			setState(269);
			expr(0);
			setState(270);
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

	public static class VtypeContext extends ParserRuleContext {
		public Bound_rangeContext bound_range() {
			return getRuleContext(Bound_rangeContext.class,0);
		}
		public TerminalNode CHAN() { return getToken(yagParser.CHAN, 0); }
		public TerminalNode INT() { return getToken(yagParser.INT, 0); }
		public TerminalNode BOOL() { return getToken(yagParser.BOOL, 0); }
		public TerminalNode CONST() { return getToken(yagParser.CONST, 0); }
		public TerminalNode BCAST() { return getToken(yagParser.BCAST, 0); }
		public VtypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vtype; }
	}

	public final VtypeContext vtype() throws RecognitionException {
		VtypeContext _localctx = new VtypeContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_vtype);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(280);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CONST:
			case INT:
			case BOOL:
				{
				{
				setState(273);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CONST) {
					{
					setState(272);
					match(CONST);
					}
				}

				setState(275);
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
				setState(277);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==BCAST) {
					{
					setState(276);
					match(BCAST);
					}
				}

				setState(279);
				match(CHAN);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(283);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(282);
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
		enterRule(_localctx, 32, RULE_assignmentOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(285);
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
		case 12:
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3G\u0122\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\3\2\3\2\3\2\3\3\3\3\6\3*\n\3\r\3\16\3+\3\4\3\4\3\4\3\4\7\4\62\n\4\f\4"+
		"\16\4\65\13\4\3\4\3\4\3\5\3\5\5\5;\n\5\3\5\3\5\5\5?\n\5\3\6\3\6\3\6\3"+
		"\6\6\6E\n\6\r\6\16\6F\3\7\3\7\3\7\3\7\5\7M\n\7\3\7\3\7\3\7\3\b\3\b\3\b"+
		"\7\bU\n\b\f\b\16\bX\13\b\3\t\3\t\3\t\5\t]\n\t\3\n\3\n\7\na\n\n\f\n\16"+
		"\nd\13\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\7\13m\n\13\f\13\16\13p\13\13"+
		"\3\13\3\13\5\13t\n\13\3\13\3\13\5\13x\n\13\3\13\3\13\3\13\3\13\3\13\3"+
		"\13\3\13\5\13\u0081\n\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\6\13\u0090\n\13\r\13\16\13\u0091\3\13\3\13\5\13\u0096"+
		"\n\13\3\13\3\13\3\13\3\13\7\13\u009c\n\13\f\13\16\13\u009f\13\13\3\13"+
		"\3\13\3\13\3\13\3\13\5\13\u00a6\n\13\3\f\3\f\3\f\3\f\3\r\3\r\3\r\5\r\u00af"+
		"\n\r\3\r\3\r\7\r\u00b3\n\r\f\r\16\r\u00b6\13\r\3\r\3\r\3\r\3\16\3\16\3"+
		"\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3"+
		"\16\3\16\3\16\3\16\3\16\5\16\u00d0\n\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\7\16\u0100"+
		"\n\16\f\16\16\16\u0103\13\16\3\17\3\17\3\17\7\17\u0108\n\17\f\17\16\17"+
		"\u010b\13\17\3\20\3\20\3\20\3\20\3\20\3\20\3\21\5\21\u0114\n\21\3\21\3"+
		"\21\5\21\u0118\n\21\3\21\5\21\u011b\n\21\3\21\5\21\u011e\n\21\3\22\3\22"+
		"\3\22\3\u00b4\3\32\23\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"\2\f\4"+
		"\2##,.\4\2\3\3\"\"\4\2/\60\64\64\4\2##..\3\2\4\5\4\2$%)*\4\2((++\3\2,"+
		"-\3\2\22\23\3\2\67A\2\u0146\2$\3\2\2\2\4)\3\2\2\2\6-\3\2\2\2\b8\3\2\2"+
		"\2\nD\3\2\2\2\fH\3\2\2\2\16Q\3\2\2\2\20Y\3\2\2\2\22^\3\2\2\2\24\u00a5"+
		"\3\2\2\2\26\u00a7\3\2\2\2\30\u00ae\3\2\2\2\32\u00cf\3\2\2\2\34\u0104\3"+
		"\2\2\2\36\u010c\3\2\2\2 \u011a\3\2\2\2\"\u011f\3\2\2\2$%\5\4\3\2%&\7\2"+
		"\2\3&\3\3\2\2\2\'*\5\6\4\2(*\5\f\7\2)\'\3\2\2\2)(\3\2\2\2*+\3\2\2\2+)"+
		"\3\2\2\2+,\3\2\2\2,\5\3\2\2\2-.\5 \21\2.\63\5\b\5\2/\60\7 \2\2\60\62\5"+
		"\b\5\2\61/\3\2\2\2\62\65\3\2\2\2\63\61\3\2\2\2\63\64\3\2\2\2\64\66\3\2"+
		"\2\2\65\63\3\2\2\2\66\67\7\37\2\2\67\7\3\2\2\28:\7D\2\29;\5\n\6\2:9\3"+
		"\2\2\2:;\3\2\2\2;>\3\2\2\2<=\7\67\2\2=?\5\32\16\2><\3\2\2\2>?\3\2\2\2"+
		"?\t\3\2\2\2@A\7\35\2\2AB\5\32\16\2BC\7\36\2\2CE\3\2\2\2D@\3\2\2\2EF\3"+
		"\2\2\2FD\3\2\2\2FG\3\2\2\2G\13\3\2\2\2HI\5 \21\2IJ\7D\2\2JL\7\31\2\2K"+
		"M\5\16\b\2LK\3\2\2\2LM\3\2\2\2MN\3\2\2\2NO\7\32\2\2OP\5\22\n\2P\r\3\2"+
		"\2\2QV\5\20\t\2RS\7 \2\2SU\5\20\t\2TR\3\2\2\2UX\3\2\2\2VT\3\2\2\2VW\3"+
		"\2\2\2W\17\3\2\2\2XV\3\2\2\2YZ\5 \21\2Z\\\7D\2\2[]\5\n\6\2\\[\3\2\2\2"+
		"\\]\3\2\2\2]\21\3\2\2\2^b\7\33\2\2_a\5\24\13\2`_\3\2\2\2ad\3\2\2\2b`\3"+
		"\2\2\2bc\3\2\2\2ce\3\2\2\2db\3\2\2\2ef\7\34\2\2f\23\3\2\2\2g\u00a6\5\22"+
		"\n\2h\u00a6\5\6\4\2ij\7\6\2\2jn\7\31\2\2km\5\26\f\2lk\3\2\2\2mp\3\2\2"+
		"\2nl\3\2\2\2no\3\2\2\2oq\3\2\2\2pn\3\2\2\2qs\7\37\2\2rt\5\34\17\2sr\3"+
		"\2\2\2st\3\2\2\2tu\3\2\2\2uw\7\37\2\2vx\5\34\17\2wv\3\2\2\2wx\3\2\2\2"+
		"xy\3\2\2\2yz\7\32\2\2z\u00a6\5\24\13\2{|\7\17\2\2|}\5\32\16\2}\u0080\5"+
		"\24\13\2~\177\7\20\2\2\177\u0081\5\24\13\2\u0080~\3\2\2\2\u0080\u0081"+
		"\3\2\2\2\u0081\u00a6\3\2\2\2\u0082\u0083\7\b\2\2\u0083\u0084\5\32\16\2"+
		"\u0084\u0085\5\24\13\2\u0085\u00a6\3\2\2\2\u0086\u0087\7\7\2\2\u0087\u0088"+
		"\5\24\13\2\u0088\u0089\7\b\2\2\u0089\u008a\5\32\16\2\u008a\u008b\7\37"+
		"\2\2\u008b\u00a6\3\2\2\2\u008c\u008d\7\13\2\2\u008d\u008f\5\32\16\2\u008e"+
		"\u0090\5\30\r\2\u008f\u008e\3\2\2\2\u0090\u0091\3\2\2\2\u0091\u008f\3"+
		"\2\2\2\u0091\u0092\3\2\2\2\u0092\u00a6\3\2\2\2\u0093\u0095\7\21\2\2\u0094"+
		"\u0096\5\32\16\2\u0095\u0094\3\2\2\2\u0095\u0096\3\2\2\2\u0096\u0097\3"+
		"\2\2\2\u0097\u00a6\7\37\2\2\u0098\u009d\5\26\f\2\u0099\u009a\7 \2\2\u009a"+
		"\u009c\5\26\f\2\u009b\u0099\3\2\2\2\u009c\u009f\3\2\2\2\u009d\u009b\3"+
		"\2\2\2\u009d\u009e\3\2\2\2\u009e\u00a0\3\2\2\2\u009f\u009d\3\2\2\2\u00a0"+
		"\u00a1\7\37\2\2\u00a1\u00a6\3\2\2\2\u00a2\u00a3\5\32\16\2\u00a3\u00a4"+
		"\7\37\2\2\u00a4\u00a6\3\2\2\2\u00a5g\3\2\2\2\u00a5h\3\2\2\2\u00a5i\3\2"+
		"\2\2\u00a5{\3\2\2\2\u00a5\u0082\3\2\2\2\u00a5\u0086\3\2\2\2\u00a5\u008c"+
		"\3\2\2\2\u00a5\u0093\3\2\2\2\u00a5\u0098\3\2\2\2\u00a5\u00a2\3\2\2\2\u00a6"+
		"\25\3\2\2\2\u00a7\u00a8\5\32\16\2\u00a8\u00a9\5\"\22\2\u00a9\u00aa\5\32"+
		"\16\2\u00aa\27\3\2\2\2\u00ab\u00ac\7\f\2\2\u00ac\u00af\5\32\16\2\u00ad"+
		"\u00af\7\r\2\2\u00ae\u00ab\3\2\2\2\u00ae\u00ad\3\2\2\2\u00af\u00b0\3\2"+
		"\2\2\u00b0\u00b4\7\'\2\2\u00b1\u00b3\5\24\13\2\u00b2\u00b1\3\2\2\2\u00b3"+
		"\u00b6\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b4\u00b2\3\2\2\2\u00b5\u00b7\3\2"+
		"\2\2\u00b6\u00b4\3\2\2\2\u00b7\u00b8\7\t\2\2\u00b8\u00b9\7\37\2\2\u00b9"+
		"\31\3\2\2\2\u00ba\u00bb\b\16\1\2\u00bb\u00bc\t\2\2\2\u00bc\u00d0\5\32"+
		"\16\25\u00bd\u00be\t\3\2\2\u00be\u00d0\5\32\16\24\u00bf\u00c0\7D\2\2\u00c0"+
		"\u00c1\7\31\2\2\u00c1\u00c2\5\34\17\2\u00c2\u00c3\7\32\2\2\u00c3\u00d0"+
		"\3\2\2\2\u00c4\u00d0\7D\2\2\u00c5\u00d0\7B\2\2\u00c6\u00d0\7C\2\2\u00c7"+
		"\u00c8\7\33\2\2\u00c8\u00c9\5\34\17\2\u00c9\u00ca\7\34\2\2\u00ca\u00d0"+
		"\3\2\2\2\u00cb\u00cc\7\31\2\2\u00cc\u00cd\5\32\16\2\u00cd\u00ce\7\32\2"+
		"\2\u00ce\u00d0\3\2\2\2\u00cf\u00ba\3\2\2\2\u00cf\u00bd\3\2\2\2\u00cf\u00bf"+
		"\3\2\2\2\u00cf\u00c4\3\2\2\2\u00cf\u00c5\3\2\2\2\u00cf\u00c6\3\2\2\2\u00cf"+
		"\u00c7\3\2\2\2\u00cf\u00cb\3\2\2\2\u00d0\u0101\3\2\2\2\u00d1\u00d2\f\23"+
		"\2\2\u00d2\u00d3\t\4\2\2\u00d3\u0100\5\32\16\24\u00d4\u00d5\f\22\2\2\u00d5"+
		"\u00d6\t\5\2\2\u00d6\u0100\5\32\16\23\u00d7\u00d8\f\21\2\2\u00d8\u00d9"+
		"\t\6\2\2\u00d9\u0100\5\32\16\22\u00da\u00db\f\20\2\2\u00db\u00dc\t\7\2"+
		"\2\u00dc\u0100\5\32\16\21\u00dd\u00de\f\17\2\2\u00de\u00df\t\b\2\2\u00df"+
		"\u0100\5\32\16\20\u00e0\u00e1\f\16\2\2\u00e1\u00e2\7\61\2\2\u00e2\u0100"+
		"\5\32\16\17\u00e3\u00e4\f\r\2\2\u00e4\u00e5\7\63\2\2\u00e5\u0100\5\32"+
		"\16\16\u00e6\u00e7\f\f\2\2\u00e7\u00e8\7\62\2\2\u00e8\u0100\5\32\16\r"+
		"\u00e9\u00ea\f\13\2\2\u00ea\u00eb\7\65\2\2\u00eb\u0100\5\32\16\f\u00ec"+
		"\u00ed\f\n\2\2\u00ed\u00ee\7\66\2\2\u00ee\u0100\5\32\16\13\u00ef\u00f0"+
		"\f\t\2\2\u00f0\u00f1\7&\2\2\u00f1\u00f2\5\32\16\2\u00f2\u00f3\7\'\2\2"+
		"\u00f3\u00f4\5\32\16\t\u00f4\u0100\3\2\2\2\u00f5\u00f6\f\30\2\2\u00f6"+
		"\u00f7\7!\2\2\u00f7\u0100\7D\2\2\u00f8\u00f9\f\27\2\2\u00f9\u00fa\7\35"+
		"\2\2\u00fa\u00fb\5\32\16\2\u00fb\u00fc\7\36\2\2\u00fc\u0100\3\2\2\2\u00fd"+
		"\u00fe\f\26\2\2\u00fe\u0100\t\t\2\2\u00ff\u00d1\3\2\2\2\u00ff\u00d4\3"+
		"\2\2\2\u00ff\u00d7\3\2\2\2\u00ff\u00da\3\2\2\2\u00ff\u00dd\3\2\2\2\u00ff"+
		"\u00e0\3\2\2\2\u00ff\u00e3\3\2\2\2\u00ff\u00e6\3\2\2\2\u00ff\u00e9\3\2"+
		"\2\2\u00ff\u00ec\3\2\2\2\u00ff\u00ef\3\2\2\2\u00ff\u00f5\3\2\2\2\u00ff"+
		"\u00f8\3\2\2\2\u00ff\u00fd\3\2\2\2\u0100\u0103\3\2\2\2\u0101\u00ff\3\2"+
		"\2\2\u0101\u0102\3\2\2\2\u0102\33\3\2\2\2\u0103\u0101\3\2\2\2\u0104\u0109"+
		"\5\32\16\2\u0105\u0106\7 \2\2\u0106\u0108\5\32\16\2\u0107\u0105\3\2\2"+
		"\2\u0108\u010b\3\2\2\2\u0109\u0107\3\2\2\2\u0109\u010a\3\2\2\2\u010a\35"+
		"\3\2\2\2\u010b\u0109\3\2\2\2\u010c\u010d\7\35\2\2\u010d\u010e\5\32\16"+
		"\2\u010e\u010f\7 \2\2\u010f\u0110\5\32\16\2\u0110\u0111\7\36\2\2\u0111"+
		"\37\3\2\2\2\u0112\u0114\7\16\2\2\u0113\u0112\3\2\2\2\u0113\u0114\3\2\2"+
		"\2\u0114\u0115\3\2\2\2\u0115\u011b\t\n\2\2\u0116\u0118\7\26\2\2\u0117"+
		"\u0116\3\2\2\2\u0117\u0118\3\2\2\2\u0118\u0119\3\2\2\2\u0119\u011b\7\25"+
		"\2\2\u011a\u0113\3\2\2\2\u011a\u0117\3\2\2\2\u011b\u011d\3\2\2\2\u011c"+
		"\u011e\5\36\20\2\u011d\u011c\3\2\2\2\u011d\u011e\3\2\2\2\u011e!\3\2\2"+
		"\2\u011f\u0120\t\13\2\2\u0120#\3\2\2\2\36)+\63:>FLV\\bnsw\u0080\u0091"+
		"\u0095\u009d\u00a5\u00ae\u00b4\u00cf\u00ff\u0101\u0109\u0113\u0117\u011a"+
		"\u011d";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}