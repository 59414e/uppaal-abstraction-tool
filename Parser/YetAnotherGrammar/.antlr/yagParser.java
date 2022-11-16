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
		RULE_case_block = 15, RULE_expr_list = 16, RULE_expr = 17, RULE_var_identifier = 18, 
		RULE_vtype = 19, RULE_bound_range = 20, RULE_assignmentOp = 21;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "translation", "select_label", "select_pair", "assignment_label", 
			"synchronisation_label", "vdec_list", "vdec", "arr_size", "fdec", "fparam_list", 
			"fparam", "block", "statement", "assignment_stmt", "case_block", "expr_list", 
			"expr", "var_identifier", "vtype", "bound_range", "assignmentOp"
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
			setState(44);
			translation();
			setState(45);
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
			setState(49); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(49);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(47);
					vdec_list();
					}
					break;
				case 2:
					{
					setState(48);
					fdec();
					}
					break;
				}
				}
				setState(51); 
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
			setState(53);
			select_pair();
			setState(58);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(54);
				match(COMMA);
				setState(55);
				select_pair();
				}
				}
				setState(60);
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
			setState(61);
			((Select_pairContext)_localctx).vid = var_identifier();
			setState(62);
			match(COLON);
			setState(63);
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
			setState(65);
			assignment_stmt();
			setState(70);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(66);
				match(COMMA);
				setState(67);
				assignment_stmt();
				}
				}
				setState(72);
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
		enterRule(_localctx, 10, RULE_synchronisation_label);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			((Synchronisation_labelContext)_localctx).chan = expr(0);
			setState(74);
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
			setState(76);
			((Vdec_listContext)_localctx).type = vtype();
			setState(77);
			vdec();
			setState(82);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(78);
				match(COMMA);
				setState(79);
				vdec();
				}
				}
				setState(84);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(85);
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
		enterRule(_localctx, 14, RULE_vdec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(87);
			((VdecContext)_localctx).vid = var_identifier();
			setState(89);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(88);
				((VdecContext)_localctx).dim = arr_size();
				}
			}

			setState(93);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ASSIGN) {
				{
				setState(91);
				match(ASSIGN);
				setState(92);
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
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(99); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(95);
					match(LBRACK);
					setState(96);
					expr(0);
					setState(97);
					match(RBRACK);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(101); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
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
		enterRule(_localctx, 18, RULE_fdec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			((FdecContext)_localctx).ret = vtype();
			setState(104);
			((FdecContext)_localctx).fid = match(ID);
			setState(105);
			match(LPAREN);
			setState(107);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CONST) | (1L << INT) | (1L << BOOL) | (1L << CHAN) | (1L << BCAST))) != 0)) {
				{
				setState(106);
				((FdecContext)_localctx).params = fparam_list();
				}
			}

			setState(109);
			match(RPAREN);
			setState(110);
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
			setState(112);
			fparam();
			setState(117);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(113);
				match(COMMA);
				setState(114);
				fparam();
				}
				}
				setState(119);
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
		enterRule(_localctx, 22, RULE_fparam);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			vtype();
			setState(121);
			((FparamContext)_localctx).pid = var_identifier();
			setState(123);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(122);
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
			setState(125);
			match(LBRACE);
			setState(129);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << FOR) | (1L << DO) | (1L << WHILE) | (1L << SWITCH) | (1L << CONST) | (1L << IF) | (1L << RETURN) | (1L << INT) | (1L << BOOL) | (1L << CHAN) | (1L << BCAST) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
				{
				{
				setState(126);
				statement();
				}
				}
				setState(131);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(132);
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
			setState(196);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(134);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(135);
				vdec_list();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(136);
				match(FOR);
				setState(137);
				match(LPAREN);
				setState(141);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
					{
					{
					setState(138);
					assignment_stmt();
					}
					}
					setState(143);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(144);
				match(SEMI);
				setState(146);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
					{
					setState(145);
					expr_list();
					}
				}

				setState(148);
				match(SEMI);
				setState(150);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
					{
					setState(149);
					expr_list();
					}
				}

				setState(152);
				match(RPAREN);
				setState(153);
				statement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(154);
				match(IF);
				setState(155);
				expr(0);
				setState(156);
				statement();
				setState(159);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
				case 1:
					{
					setState(157);
					match(ELSE);
					setState(158);
					statement();
					}
					break;
				}
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(161);
				match(WHILE);
				setState(162);
				expr(0);
				setState(163);
				statement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(165);
				match(DO);
				setState(166);
				statement();
				setState(167);
				match(WHILE);
				setState(168);
				expr(0);
				setState(169);
				match(SEMI);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(171);
				match(SWITCH);
				setState(172);
				expr(0);
				setState(174); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(173);
					case_block();
					}
					}
					setState(176); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==CASE || _la==DEFAULT );
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(178);
				match(RETURN);
				setState(180);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << LPAREN) | (1L << LBRACE) | (1L << BANG) | (1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (INTEGER - 64)) | (1L << (BOOLEAN - 64)) | (1L << (ID - 64)))) != 0)) {
					{
					setState(179);
					expr(0);
					}
				}

				setState(182);
				match(SEMI);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(183);
				assignment_stmt();
				setState(188);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(184);
					match(COMMA);
					setState(185);
					assignment_stmt();
					}
					}
					setState(190);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(191);
				match(SEMI);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(193);
				expr(0);
				setState(194);
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
			setState(198);
			((Assignment_stmtContext)_localctx).lhs = expr(0);
			setState(199);
			assignmentOp();
			setState(200);
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
			setState(205);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CASE:
				{
				{
				setState(202);
				match(CASE);
				setState(203);
				expr(0);
				}
				}
				break;
			case DEFAULT:
				{
				setState(204);
				match(DEFAULT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(207);
			match(COLON);
			setState(211);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(208);
					statement();
					}
					} 
				}
				setState(213);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			}
			setState(214);
			match(BREAK);
			setState(215);
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
			setState(217);
			expr(0);
			setState(222);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(218);
				match(COMMA);
				setState(219);
				expr(0);
				}
				}
				setState(224);
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
		int _startState = 34;
		enterRecursionRule(_localctx, 34, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(249);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				{
				setState(226);
				((ExprContext)_localctx).vid = var_identifier();
				setState(227);
				((ExprContext)_localctx).dim = arr_size();
				}
				break;
			case 2:
				{
				setState(229);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SUB) | (1L << INC) | (1L << DEC) | (1L << ADD))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(230);
				expr(19);
				}
				break;
			case 3:
				{
				setState(231);
				_la = _input.LA(1);
				if ( !(_la==T__0 || _la==BANG) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(232);
				expr(18);
				}
				break;
			case 4:
				{
				setState(233);
				((ExprContext)_localctx).fid = match(ID);
				setState(234);
				match(LPAREN);
				setState(235);
				((ExprContext)_localctx).fargs = expr_list();
				setState(236);
				match(RPAREN);
				}
				break;
			case 5:
				{
				setState(238);
				((ExprContext)_localctx).vid = var_identifier();
				}
				break;
			case 6:
				{
				setState(239);
				match(INTEGER);
				}
				break;
			case 7:
				{
				setState(240);
				match(BOOLEAN);
				}
				break;
			case 8:
				{
				setState(241);
				match(LBRACE);
				setState(242);
				expr_list();
				setState(243);
				match(RBRACE);
				}
				break;
			case 9:
				{
				setState(245);
				match(LPAREN);
				setState(246);
				expr(0);
				setState(247);
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
						setState(251);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(252);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MUL) | (1L << DIV) | (1L << MOD))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(253);
						expr(18);
						}
						break;
					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(254);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(255);
						_la = _input.LA(1);
						if ( !(_la==SUB || _la==ADD) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(256);
						expr(17);
						}
						break;
					case 3:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(257);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(258);
						_la = _input.LA(1);
						if ( !(_la==T__1 || _la==T__2) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(259);
						expr(16);
						}
						break;
					case 4:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(260);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(261);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GT) | (1L << LT) | (1L << LE) | (1L << GE))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(262);
						expr(15);
						}
						break;
					case 5:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(263);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(264);
						_la = _input.LA(1);
						if ( !(_la==EQUAL || _la==NOTEQUAL) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(265);
						expr(14);
						}
						break;
					case 6:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(266);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						{
						setState(267);
						match(BITAND);
						}
						setState(268);
						expr(13);
						}
						break;
					case 7:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(269);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						{
						setState(270);
						match(CARET);
						}
						setState(271);
						expr(12);
						}
						break;
					case 8:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(272);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						{
						setState(273);
						match(BITOR);
						}
						setState(274);
						expr(11);
						}
						break;
					case 9:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(275);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						{
						setState(276);
						match(AND);
						}
						setState(277);
						expr(10);
						}
						break;
					case 10:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(278);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						{
						setState(279);
						match(OR);
						}
						setState(280);
						expr(9);
						}
						break;
					case 11:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(281);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(282);
						match(QUESTION);
						setState(283);
						expr(0);
						setState(284);
						match(COLON);
						setState(285);
						expr(7);
						}
						break;
					case 12:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(287);
						if (!(precpred(_ctx, 22))) throw new FailedPredicateException(this, "precpred(_ctx, 22)");
						setState(288);
						match(DOT);
						setState(289);
						var_identifier();
						}
						break;
					case 13:
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

	public static class Var_identifierContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(yagParser.ID, 0); }
		public Var_identifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_identifier; }
	}

	public final Var_identifierContext var_identifier() throws RecognitionException {
		Var_identifierContext _localctx = new Var_identifierContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_var_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(297);
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
		enterRule(_localctx, 38, RULE_vtype);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(307);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CONST:
			case INT:
			case BOOL:
				{
				{
				setState(300);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CONST) {
					{
					setState(299);
					((VtypeContext)_localctx).constant = match(CONST);
					}
				}

				setState(302);
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
				setState(304);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==BCAST) {
					{
					setState(303);
					match(BCAST);
					}
				}

				setState(306);
				((VtypeContext)_localctx).ch = match(CHAN);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(310);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACK) {
				{
				setState(309);
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
		enterRule(_localctx, 40, RULE_bound_range);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(312);
			match(LBRACK);
			setState(313);
			((Bound_rangeContext)_localctx).bmin = expr(0);
			setState(314);
			match(COMMA);
			setState(315);
			((Bound_rangeContext)_localctx).bmax = expr(0);
			setState(316);
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
		enterRule(_localctx, 42, RULE_assignmentOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(318);
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
			return precpred(_ctx, 20);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3G\u0143\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\3\2\3\2\3\2\3\3\3\3"+
		"\6\3\64\n\3\r\3\16\3\65\3\4\3\4\3\4\7\4;\n\4\f\4\16\4>\13\4\3\5\3\5\3"+
		"\5\3\5\3\6\3\6\3\6\7\6G\n\6\f\6\16\6J\13\6\3\7\3\7\3\7\3\b\3\b\3\b\3\b"+
		"\7\bS\n\b\f\b\16\bV\13\b\3\b\3\b\3\t\3\t\5\t\\\n\t\3\t\3\t\5\t`\n\t\3"+
		"\n\3\n\3\n\3\n\6\nf\n\n\r\n\16\ng\3\13\3\13\3\13\3\13\5\13n\n\13\3\13"+
		"\3\13\3\13\3\f\3\f\3\f\7\fv\n\f\f\f\16\fy\13\f\3\r\3\r\3\r\5\r~\n\r\3"+
		"\16\3\16\7\16\u0082\n\16\f\16\16\16\u0085\13\16\3\16\3\16\3\17\3\17\3"+
		"\17\3\17\3\17\7\17\u008e\n\17\f\17\16\17\u0091\13\17\3\17\3\17\5\17\u0095"+
		"\n\17\3\17\3\17\5\17\u0099\n\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\5\17"+
		"\u00a2\n\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\6\17\u00b1\n\17\r\17\16\17\u00b2\3\17\3\17\5\17\u00b7\n\17\3\17"+
		"\3\17\3\17\3\17\7\17\u00bd\n\17\f\17\16\17\u00c0\13\17\3\17\3\17\3\17"+
		"\3\17\3\17\5\17\u00c7\n\17\3\20\3\20\3\20\3\20\3\21\3\21\3\21\5\21\u00d0"+
		"\n\21\3\21\3\21\7\21\u00d4\n\21\f\21\16\21\u00d7\13\21\3\21\3\21\3\21"+
		"\3\22\3\22\3\22\7\22\u00df\n\22\f\22\16\22\u00e2\13\22\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\5\23\u00fc\n\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\7\23\u0127\n\23\f\23\16"+
		"\23\u012a\13\23\3\24\3\24\3\25\5\25\u012f\n\25\3\25\3\25\5\25\u0133\n"+
		"\25\3\25\5\25\u0136\n\25\3\25\5\25\u0139\n\25\3\26\3\26\3\26\3\26\3\26"+
		"\3\26\3\27\3\27\3\27\3\u00d5\3$\30\2\4\6\b\n\f\16\20\22\24\26\30\32\34"+
		"\36 \"$&(*,\2\r\4\2\"\"&&\4\2##,.\4\2\3\3\"\"\4\2/\60\64\64\4\2##..\3"+
		"\2\4\5\4\2$%)*\4\2((++\3\2,-\3\2\22\23\3\2\67A\2\u0164\2.\3\2\2\2\4\63"+
		"\3\2\2\2\6\67\3\2\2\2\b?\3\2\2\2\nC\3\2\2\2\fK\3\2\2\2\16N\3\2\2\2\20"+
		"Y\3\2\2\2\22e\3\2\2\2\24i\3\2\2\2\26r\3\2\2\2\30z\3\2\2\2\32\177\3\2\2"+
		"\2\34\u00c6\3\2\2\2\36\u00c8\3\2\2\2 \u00cf\3\2\2\2\"\u00db\3\2\2\2$\u00fb"+
		"\3\2\2\2&\u012b\3\2\2\2(\u0135\3\2\2\2*\u013a\3\2\2\2,\u0140\3\2\2\2."+
		"/\5\4\3\2/\60\7\2\2\3\60\3\3\2\2\2\61\64\5\16\b\2\62\64\5\24\13\2\63\61"+
		"\3\2\2\2\63\62\3\2\2\2\64\65\3\2\2\2\65\63\3\2\2\2\65\66\3\2\2\2\66\5"+
		"\3\2\2\2\67<\5\b\5\289\7 \2\29;\5\b\5\2:8\3\2\2\2;>\3\2\2\2<:\3\2\2\2"+
		"<=\3\2\2\2=\7\3\2\2\2><\3\2\2\2?@\5&\24\2@A\7\'\2\2AB\5(\25\2B\t\3\2\2"+
		"\2CH\5\36\20\2DE\7 \2\2EG\5\36\20\2FD\3\2\2\2GJ\3\2\2\2HF\3\2\2\2HI\3"+
		"\2\2\2I\13\3\2\2\2JH\3\2\2\2KL\5$\23\2LM\t\2\2\2M\r\3\2\2\2NO\5(\25\2"+
		"OT\5\20\t\2PQ\7 \2\2QS\5\20\t\2RP\3\2\2\2SV\3\2\2\2TR\3\2\2\2TU\3\2\2"+
		"\2UW\3\2\2\2VT\3\2\2\2WX\7\37\2\2X\17\3\2\2\2Y[\5&\24\2Z\\\5\22\n\2[Z"+
		"\3\2\2\2[\\\3\2\2\2\\_\3\2\2\2]^\7\67\2\2^`\5$\23\2_]\3\2\2\2_`\3\2\2"+
		"\2`\21\3\2\2\2ab\7\35\2\2bc\5$\23\2cd\7\36\2\2df\3\2\2\2ea\3\2\2\2fg\3"+
		"\2\2\2ge\3\2\2\2gh\3\2\2\2h\23\3\2\2\2ij\5(\25\2jk\7D\2\2km\7\31\2\2l"+
		"n\5\26\f\2ml\3\2\2\2mn\3\2\2\2no\3\2\2\2op\7\32\2\2pq\5\32\16\2q\25\3"+
		"\2\2\2rw\5\30\r\2st\7 \2\2tv\5\30\r\2us\3\2\2\2vy\3\2\2\2wu\3\2\2\2wx"+
		"\3\2\2\2x\27\3\2\2\2yw\3\2\2\2z{\5(\25\2{}\5&\24\2|~\5\22\n\2}|\3\2\2"+
		"\2}~\3\2\2\2~\31\3\2\2\2\177\u0083\7\33\2\2\u0080\u0082\5\34\17\2\u0081"+
		"\u0080\3\2\2\2\u0082\u0085\3\2\2\2\u0083\u0081\3\2\2\2\u0083\u0084\3\2"+
		"\2\2\u0084\u0086\3\2\2\2\u0085\u0083\3\2\2\2\u0086\u0087\7\34\2\2\u0087"+
		"\33\3\2\2\2\u0088\u00c7\5\32\16\2\u0089\u00c7\5\16\b\2\u008a\u008b\7\6"+
		"\2\2\u008b\u008f\7\31\2\2\u008c\u008e\5\36\20\2\u008d\u008c\3\2\2\2\u008e"+
		"\u0091\3\2\2\2\u008f\u008d\3\2\2\2\u008f\u0090\3\2\2\2\u0090\u0092\3\2"+
		"\2\2\u0091\u008f\3\2\2\2\u0092\u0094\7\37\2\2\u0093\u0095\5\"\22\2\u0094"+
		"\u0093\3\2\2\2\u0094\u0095\3\2\2\2\u0095\u0096\3\2\2\2\u0096\u0098\7\37"+
		"\2\2\u0097\u0099\5\"\22\2\u0098\u0097\3\2\2\2\u0098\u0099\3\2\2\2\u0099"+
		"\u009a\3\2\2\2\u009a\u009b\7\32\2\2\u009b\u00c7\5\34\17\2\u009c\u009d"+
		"\7\17\2\2\u009d\u009e\5$\23\2\u009e\u00a1\5\34\17\2\u009f\u00a0\7\20\2"+
		"\2\u00a0\u00a2\5\34\17\2\u00a1\u009f\3\2\2\2\u00a1\u00a2\3\2\2\2\u00a2"+
		"\u00c7\3\2\2\2\u00a3\u00a4\7\b\2\2\u00a4\u00a5\5$\23\2\u00a5\u00a6\5\34"+
		"\17\2\u00a6\u00c7\3\2\2\2\u00a7\u00a8\7\7\2\2\u00a8\u00a9\5\34\17\2\u00a9"+
		"\u00aa\7\b\2\2\u00aa\u00ab\5$\23\2\u00ab\u00ac\7\37\2\2\u00ac\u00c7\3"+
		"\2\2\2\u00ad\u00ae\7\13\2\2\u00ae\u00b0\5$\23\2\u00af\u00b1\5 \21\2\u00b0"+
		"\u00af\3\2\2\2\u00b1\u00b2\3\2\2\2\u00b2\u00b0\3\2\2\2\u00b2\u00b3\3\2"+
		"\2\2\u00b3\u00c7\3\2\2\2\u00b4\u00b6\7\21\2\2\u00b5\u00b7\5$\23\2\u00b6"+
		"\u00b5\3\2\2\2\u00b6\u00b7\3\2\2\2\u00b7\u00b8\3\2\2\2\u00b8\u00c7\7\37"+
		"\2\2\u00b9\u00be\5\36\20\2\u00ba\u00bb\7 \2\2\u00bb\u00bd\5\36\20\2\u00bc"+
		"\u00ba\3\2\2\2\u00bd\u00c0\3\2\2\2\u00be\u00bc\3\2\2\2\u00be\u00bf\3\2"+
		"\2\2\u00bf\u00c1\3\2\2\2\u00c0\u00be\3\2\2\2\u00c1\u00c2\7\37\2\2\u00c2"+
		"\u00c7\3\2\2\2\u00c3\u00c4\5$\23\2\u00c4\u00c5\7\37\2\2\u00c5\u00c7\3"+
		"\2\2\2\u00c6\u0088\3\2\2\2\u00c6\u0089\3\2\2\2\u00c6\u008a\3\2\2\2\u00c6"+
		"\u009c\3\2\2\2\u00c6\u00a3\3\2\2\2\u00c6\u00a7\3\2\2\2\u00c6\u00ad\3\2"+
		"\2\2\u00c6\u00b4\3\2\2\2\u00c6\u00b9\3\2\2\2\u00c6\u00c3\3\2\2\2\u00c7"+
		"\35\3\2\2\2\u00c8\u00c9\5$\23\2\u00c9\u00ca\5,\27\2\u00ca\u00cb\5$\23"+
		"\2\u00cb\37\3\2\2\2\u00cc\u00cd\7\f\2\2\u00cd\u00d0\5$\23\2\u00ce\u00d0"+
		"\7\r\2\2\u00cf\u00cc\3\2\2\2\u00cf\u00ce\3\2\2\2\u00d0\u00d1\3\2\2\2\u00d1"+
		"\u00d5\7\'\2\2\u00d2\u00d4\5\34\17\2\u00d3\u00d2\3\2\2\2\u00d4\u00d7\3"+
		"\2\2\2\u00d5\u00d6\3\2\2\2\u00d5\u00d3\3\2\2\2\u00d6\u00d8\3\2\2\2\u00d7"+
		"\u00d5\3\2\2\2\u00d8\u00d9\7\t\2\2\u00d9\u00da\7\37\2\2\u00da!\3\2\2\2"+
		"\u00db\u00e0\5$\23\2\u00dc\u00dd\7 \2\2\u00dd\u00df\5$\23\2\u00de\u00dc"+
		"\3\2\2\2\u00df\u00e2\3\2\2\2\u00e0\u00de\3\2\2\2\u00e0\u00e1\3\2\2\2\u00e1"+
		"#\3\2\2\2\u00e2\u00e0\3\2\2\2\u00e3\u00e4\b\23\1\2\u00e4\u00e5\5&\24\2"+
		"\u00e5\u00e6\5\22\n\2\u00e6\u00fc\3\2\2\2\u00e7\u00e8\t\3\2\2\u00e8\u00fc"+
		"\5$\23\25\u00e9\u00ea\t\4\2\2\u00ea\u00fc\5$\23\24\u00eb\u00ec\7D\2\2"+
		"\u00ec\u00ed\7\31\2\2\u00ed\u00ee\5\"\22\2\u00ee\u00ef\7\32\2\2\u00ef"+
		"\u00fc\3\2\2\2\u00f0\u00fc\5&\24\2\u00f1\u00fc\7B\2\2\u00f2\u00fc\7C\2"+
		"\2\u00f3\u00f4\7\33\2\2\u00f4\u00f5\5\"\22\2\u00f5\u00f6\7\34\2\2\u00f6"+
		"\u00fc\3\2\2\2\u00f7\u00f8\7\31\2\2\u00f8\u00f9\5$\23\2\u00f9\u00fa\7"+
		"\32\2\2\u00fa\u00fc\3\2\2\2\u00fb\u00e3\3\2\2\2\u00fb\u00e7\3\2\2\2\u00fb"+
		"\u00e9\3\2\2\2\u00fb\u00eb\3\2\2\2\u00fb\u00f0\3\2\2\2\u00fb\u00f1\3\2"+
		"\2\2\u00fb\u00f2\3\2\2\2\u00fb\u00f3\3\2\2\2\u00fb\u00f7\3\2\2\2\u00fc"+
		"\u0128\3\2\2\2\u00fd\u00fe\f\23\2\2\u00fe\u00ff\t\5\2\2\u00ff\u0127\5"+
		"$\23\24\u0100\u0101\f\22\2\2\u0101\u0102\t\6\2\2\u0102\u0127\5$\23\23"+
		"\u0103\u0104\f\21\2\2\u0104\u0105\t\7\2\2\u0105\u0127\5$\23\22\u0106\u0107"+
		"\f\20\2\2\u0107\u0108\t\b\2\2\u0108\u0127\5$\23\21\u0109\u010a\f\17\2"+
		"\2\u010a\u010b\t\t\2\2\u010b\u0127\5$\23\20\u010c\u010d\f\16\2\2\u010d"+
		"\u010e\7\61\2\2\u010e\u0127\5$\23\17\u010f\u0110\f\r\2\2\u0110\u0111\7"+
		"\63\2\2\u0111\u0127\5$\23\16\u0112\u0113\f\f\2\2\u0113\u0114\7\62\2\2"+
		"\u0114\u0127\5$\23\r\u0115\u0116\f\13\2\2\u0116\u0117\7\65\2\2\u0117\u0127"+
		"\5$\23\f\u0118\u0119\f\n\2\2\u0119\u011a\7\66\2\2\u011a\u0127\5$\23\13"+
		"\u011b\u011c\f\t\2\2\u011c\u011d\7&\2\2\u011d\u011e\5$\23\2\u011e\u011f"+
		"\7\'\2\2\u011f\u0120\5$\23\t\u0120\u0127\3\2\2\2\u0121\u0122\f\30\2\2"+
		"\u0122\u0123\7!\2\2\u0123\u0127\5&\24\2\u0124\u0125\f\26\2\2\u0125\u0127"+
		"\t\n\2\2\u0126\u00fd\3\2\2\2\u0126\u0100\3\2\2\2\u0126\u0103\3\2\2\2\u0126"+
		"\u0106\3\2\2\2\u0126\u0109\3\2\2\2\u0126\u010c\3\2\2\2\u0126\u010f\3\2"+
		"\2\2\u0126\u0112\3\2\2\2\u0126\u0115\3\2\2\2\u0126\u0118\3\2\2\2\u0126"+
		"\u011b\3\2\2\2\u0126\u0121\3\2\2\2\u0126\u0124\3\2\2\2\u0127\u012a\3\2"+
		"\2\2\u0128\u0126\3\2\2\2\u0128\u0129\3\2\2\2\u0129%\3\2\2\2\u012a\u0128"+
		"\3\2\2\2\u012b\u012c\7D\2\2\u012c\'\3\2\2\2\u012d\u012f\7\16\2\2\u012e"+
		"\u012d\3\2\2\2\u012e\u012f\3\2\2\2\u012f\u0130\3\2\2\2\u0130\u0136\t\13"+
		"\2\2\u0131\u0133\7\26\2\2\u0132\u0131\3\2\2\2\u0132\u0133\3\2\2\2\u0133"+
		"\u0134\3\2\2\2\u0134\u0136\7\25\2\2\u0135\u012e\3\2\2\2\u0135\u0132\3"+
		"\2\2\2\u0136\u0138\3\2\2\2\u0137\u0139\5*\26\2\u0138\u0137\3\2\2\2\u0138"+
		"\u0139\3\2\2\2\u0139)\3\2\2\2\u013a\u013b\7\35\2\2\u013b\u013c\5$\23\2"+
		"\u013c\u013d\7 \2\2\u013d\u013e\5$\23\2\u013e\u013f\7\36\2\2\u013f+\3"+
		"\2\2\2\u0140\u0141\t\f\2\2\u0141-\3\2\2\2 \63\65<HT[_gmw}\u0083\u008f"+
		"\u0094\u0098\u00a1\u00b2\u00b6\u00be\u00c6\u00cf\u00d5\u00e0\u00fb\u0126"+
		"\u0128\u012e\u0132\u0135\u0138";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}