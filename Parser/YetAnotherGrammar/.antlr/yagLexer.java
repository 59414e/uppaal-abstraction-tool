// Generated from /home/yan/Desktop/uppaal-abstraction-tool/CodeAnalyzer/YetAnotherGrammar/yag.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class yagLexer extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "FOR", "DO", "WHILE", "BREAK", "CONTINUE", "SWITCH", 
			"CASE", "DEFAULT", "CONST", "IF", "ELSE", "RETURN", "INT", "BOOL", "VOID", 
			"CHAN", "BCAST", "STRUCT", "TYPEDEF", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
			"LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", "BANG", "SUB", "GT", "LT", 
			"QUESTION", "COLON", "EQUAL", "LE", "GE", "NOTEQUAL", "INC", "DEC", "ADD", 
			"MUL", "DIV", "BITAND", "BITOR", "CARET", "MOD", "AND", "OR", "ASSIGN", 
			"ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", 
			"OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", 
			"ARRAY_DIM", "INTEGER", "BOOLEAN", "ID", "WHITESPACE", "BLOCK_COMMENT", 
			"LINE_COMMENT"
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


	public yagLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "yag.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2G\u01b4\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\3\2\3\2\3"+
		"\3\3\3\3\3\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3"+
		"\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3"+
		"\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\17\3\17\3\17\3\17"+
		"\3\17\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\22\3\22"+
		"\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\25"+
		"\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26"+
		"\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\30\3\30\3\31\3\31"+
		"\3\32\3\32\3\33\3\33\3\34\3\34\3\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3!"+
		"\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3&\3&\3\'\3\'\3\'\3(\3(\3(\3)\3)\3)\3*\3"+
		"*\3*\3+\3+\3+\3,\3,\3,\3-\3-\3.\3.\3/\3/\3\60\3\60\3\61\3\61\3\62\3\62"+
		"\3\63\3\63\3\64\3\64\3\64\3\65\3\65\3\65\3\66\3\66\3\67\3\67\3\67\38\3"+
		"8\38\39\39\39\3:\3:\3:\3;\3;\3;\3<\3<\3<\3=\3=\3=\3>\3>\3>\3?\3?\3?\3"+
		"?\3@\3@\3@\3@\3A\3A\3A\7A\u0172\nA\fA\16A\u0175\13A\3A\3A\3B\3B\7B\u017b"+
		"\nB\fB\16B\u017e\13B\3B\5B\u0181\nB\3C\3C\3C\3C\3C\3C\3C\3C\3C\5C\u018c"+
		"\nC\3D\3D\7D\u0190\nD\fD\16D\u0193\13D\3E\6E\u0196\nE\rE\16E\u0197\3E"+
		"\3E\3F\3F\3F\3F\7F\u01a0\nF\fF\16F\u01a3\13F\3F\3F\3F\3F\3F\3G\3G\3G\3"+
		"G\7G\u01ae\nG\fG\16G\u01b1\13G\3G\3G\3\u01a1\2H\3\3\5\4\7\5\t\6\13\7\r"+
		"\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25"+
		")\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O"+
		")Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65i\66k\67m8o9q:s;u<w=y>{?}@\177A\u0081"+
		"\2\u0083B\u0085C\u0087D\u0089E\u008bF\u008dG\3\2\b\3\2\63;\3\2\62;\5\2"+
		"C\\aac|\6\2\62;C\\aac|\5\2\13\f\17\17\"\"\4\2\f\f\17\17\2\u01ba\2\3\3"+
		"\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2"+
		"\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3"+
		"\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2"+
		"%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61"+
		"\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2"+
		"\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I"+
		"\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2"+
		"\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2"+
		"\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o"+
		"\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2"+
		"\2\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0083\3\2\2\2\2\u0085\3\2\2\2\2\u0087"+
		"\3\2\2\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2\2\3\u008f\3\2\2"+
		"\2\5\u0091\3\2\2\2\7\u0094\3\2\2\2\t\u0097\3\2\2\2\13\u009b\3\2\2\2\r"+
		"\u009e\3\2\2\2\17\u00a4\3\2\2\2\21\u00aa\3\2\2\2\23\u00b3\3\2\2\2\25\u00ba"+
		"\3\2\2\2\27\u00bf\3\2\2\2\31\u00c7\3\2\2\2\33\u00cd\3\2\2\2\35\u00d0\3"+
		"\2\2\2\37\u00d5\3\2\2\2!\u00dc\3\2\2\2#\u00e0\3\2\2\2%\u00e5\3\2\2\2\'"+
		"\u00ea\3\2\2\2)\u00ef\3\2\2\2+\u00f9\3\2\2\2-\u0100\3\2\2\2/\u0108\3\2"+
		"\2\2\61\u010a\3\2\2\2\63\u010c\3\2\2\2\65\u010e\3\2\2\2\67\u0110\3\2\2"+
		"\29\u0112\3\2\2\2;\u0114\3\2\2\2=\u0116\3\2\2\2?\u0118\3\2\2\2A\u011a"+
		"\3\2\2\2C\u011c\3\2\2\2E\u011e\3\2\2\2G\u0120\3\2\2\2I\u0122\3\2\2\2K"+
		"\u0124\3\2\2\2M\u0126\3\2\2\2O\u0129\3\2\2\2Q\u012c\3\2\2\2S\u012f\3\2"+
		"\2\2U\u0132\3\2\2\2W\u0135\3\2\2\2Y\u0138\3\2\2\2[\u013a\3\2\2\2]\u013c"+
		"\3\2\2\2_\u013e\3\2\2\2a\u0140\3\2\2\2c\u0142\3\2\2\2e\u0144\3\2\2\2g"+
		"\u0146\3\2\2\2i\u0149\3\2\2\2k\u014c\3\2\2\2m\u014e\3\2\2\2o\u0151\3\2"+
		"\2\2q\u0154\3\2\2\2s\u0157\3\2\2\2u\u015a\3\2\2\2w\u015d\3\2\2\2y\u0160"+
		"\3\2\2\2{\u0163\3\2\2\2}\u0166\3\2\2\2\177\u016a\3\2\2\2\u0081\u016e\3"+
		"\2\2\2\u0083\u0180\3\2\2\2\u0085\u018b\3\2\2\2\u0087\u018d\3\2\2\2\u0089"+
		"\u0195\3\2\2\2\u008b\u019b\3\2\2\2\u008d\u01a9\3\2\2\2\u008f\u0090\7\u0080"+
		"\2\2\u0090\4\3\2\2\2\u0091\u0092\7>\2\2\u0092\u0093\7>\2\2\u0093\6\3\2"+
		"\2\2\u0094\u0095\7@\2\2\u0095\u0096\7@\2\2\u0096\b\3\2\2\2\u0097\u0098"+
		"\7h\2\2\u0098\u0099\7q\2\2\u0099\u009a\7t\2\2\u009a\n\3\2\2\2\u009b\u009c"+
		"\7f\2\2\u009c\u009d\7q\2\2\u009d\f\3\2\2\2\u009e\u009f\7y\2\2\u009f\u00a0"+
		"\7j\2\2\u00a0\u00a1\7k\2\2\u00a1\u00a2\7n\2\2\u00a2\u00a3\7g\2\2\u00a3"+
		"\16\3\2\2\2\u00a4\u00a5\7d\2\2\u00a5\u00a6\7t\2\2\u00a6\u00a7\7g\2\2\u00a7"+
		"\u00a8\7c\2\2\u00a8\u00a9\7m\2\2\u00a9\20\3\2\2\2\u00aa\u00ab\7e\2\2\u00ab"+
		"\u00ac\7q\2\2\u00ac\u00ad\7p\2\2\u00ad\u00ae\7v\2\2\u00ae\u00af\7k\2\2"+
		"\u00af\u00b0\7p\2\2\u00b0\u00b1\7w\2\2\u00b1\u00b2\7g\2\2\u00b2\22\3\2"+
		"\2\2\u00b3\u00b4\7u\2\2\u00b4\u00b5\7y\2\2\u00b5\u00b6\7k\2\2\u00b6\u00b7"+
		"\7v\2\2\u00b7\u00b8\7e\2\2\u00b8\u00b9\7j\2\2\u00b9\24\3\2\2\2\u00ba\u00bb"+
		"\7e\2\2\u00bb\u00bc\7c\2\2\u00bc\u00bd\7u\2\2\u00bd\u00be\7g\2\2\u00be"+
		"\26\3\2\2\2\u00bf\u00c0\7f\2\2\u00c0\u00c1\7g\2\2\u00c1\u00c2\7h\2\2\u00c2"+
		"\u00c3\7c\2\2\u00c3\u00c4\7w\2\2\u00c4\u00c5\7n\2\2\u00c5\u00c6\7v\2\2"+
		"\u00c6\30\3\2\2\2\u00c7\u00c8\7e\2\2\u00c8\u00c9\7q\2\2\u00c9\u00ca\7"+
		"p\2\2\u00ca\u00cb\7u\2\2\u00cb\u00cc\7v\2\2\u00cc\32\3\2\2\2\u00cd\u00ce"+
		"\7k\2\2\u00ce\u00cf\7h\2\2\u00cf\34\3\2\2\2\u00d0\u00d1\7g\2\2\u00d1\u00d2"+
		"\7n\2\2\u00d2\u00d3\7u\2\2\u00d3\u00d4\7g\2\2\u00d4\36\3\2\2\2\u00d5\u00d6"+
		"\7t\2\2\u00d6\u00d7\7g\2\2\u00d7\u00d8\7v\2\2\u00d8\u00d9\7w\2\2\u00d9"+
		"\u00da\7t\2\2\u00da\u00db\7p\2\2\u00db \3\2\2\2\u00dc\u00dd\7k\2\2\u00dd"+
		"\u00de\7p\2\2\u00de\u00df\7v\2\2\u00df\"\3\2\2\2\u00e0\u00e1\7d\2\2\u00e1"+
		"\u00e2\7q\2\2\u00e2\u00e3\7q\2\2\u00e3\u00e4\7n\2\2\u00e4$\3\2\2\2\u00e5"+
		"\u00e6\7x\2\2\u00e6\u00e7\7q\2\2\u00e7\u00e8\7k\2\2\u00e8\u00e9\7f\2\2"+
		"\u00e9&\3\2\2\2\u00ea\u00eb\7e\2\2\u00eb\u00ec\7j\2\2\u00ec\u00ed\7c\2"+
		"\2\u00ed\u00ee\7p\2\2\u00ee(\3\2\2\2\u00ef\u00f0\7d\2\2\u00f0\u00f1\7"+
		"t\2\2\u00f1\u00f2\7q\2\2\u00f2\u00f3\7c\2\2\u00f3\u00f4\7f\2\2\u00f4\u00f5"+
		"\7e\2\2\u00f5\u00f6\7c\2\2\u00f6\u00f7\7u\2\2\u00f7\u00f8\7v\2\2\u00f8"+
		"*\3\2\2\2\u00f9\u00fa\7u\2\2\u00fa\u00fb\7v\2\2\u00fb\u00fc\7t\2\2\u00fc"+
		"\u00fd\7w\2\2\u00fd\u00fe\7e\2\2\u00fe\u00ff\7v\2\2\u00ff,\3\2\2\2\u0100"+
		"\u0101\7v\2\2\u0101\u0102\7{\2\2\u0102\u0103\7r\2\2\u0103\u0104\7g\2\2"+
		"\u0104\u0105\7f\2\2\u0105\u0106\7g\2\2\u0106\u0107\7h\2\2\u0107.\3\2\2"+
		"\2\u0108\u0109\7*\2\2\u0109\60\3\2\2\2\u010a\u010b\7+\2\2\u010b\62\3\2"+
		"\2\2\u010c\u010d\7}\2\2\u010d\64\3\2\2\2\u010e\u010f\7\177\2\2\u010f\66"+
		"\3\2\2\2\u0110\u0111\7]\2\2\u01118\3\2\2\2\u0112\u0113\7_\2\2\u0113:\3"+
		"\2\2\2\u0114\u0115\7=\2\2\u0115<\3\2\2\2\u0116\u0117\7.\2\2\u0117>\3\2"+
		"\2\2\u0118\u0119\7\60\2\2\u0119@\3\2\2\2\u011a\u011b\7#\2\2\u011bB\3\2"+
		"\2\2\u011c\u011d\7/\2\2\u011dD\3\2\2\2\u011e\u011f\7@\2\2\u011fF\3\2\2"+
		"\2\u0120\u0121\7>\2\2\u0121H\3\2\2\2\u0122\u0123\7A\2\2\u0123J\3\2\2\2"+
		"\u0124\u0125\7<\2\2\u0125L\3\2\2\2\u0126\u0127\7?\2\2\u0127\u0128\7?\2"+
		"\2\u0128N\3\2\2\2\u0129\u012a\7>\2\2\u012a\u012b\7?\2\2\u012bP\3\2\2\2"+
		"\u012c\u012d\7@\2\2\u012d\u012e\7?\2\2\u012eR\3\2\2\2\u012f\u0130\7#\2"+
		"\2\u0130\u0131\7?\2\2\u0131T\3\2\2\2\u0132\u0133\7-\2\2\u0133\u0134\7"+
		"-\2\2\u0134V\3\2\2\2\u0135\u0136\7/\2\2\u0136\u0137\7/\2\2\u0137X\3\2"+
		"\2\2\u0138\u0139\7-\2\2\u0139Z\3\2\2\2\u013a\u013b\7,\2\2\u013b\\\3\2"+
		"\2\2\u013c\u013d\7\61\2\2\u013d^\3\2\2\2\u013e\u013f\7(\2\2\u013f`\3\2"+
		"\2\2\u0140\u0141\7~\2\2\u0141b\3\2\2\2\u0142\u0143\7`\2\2\u0143d\3\2\2"+
		"\2\u0144\u0145\7\'\2\2\u0145f\3\2\2\2\u0146\u0147\7(\2\2\u0147\u0148\7"+
		"(\2\2\u0148h\3\2\2\2\u0149\u014a\7~\2\2\u014a\u014b\7~\2\2\u014bj\3\2"+
		"\2\2\u014c\u014d\7?\2\2\u014dl\3\2\2\2\u014e\u014f\7-\2\2\u014f\u0150"+
		"\7?\2\2\u0150n\3\2\2\2\u0151\u0152\7/\2\2\u0152\u0153\7?\2\2\u0153p\3"+
		"\2\2\2\u0154\u0155\7,\2\2\u0155\u0156\7?\2\2\u0156r\3\2\2\2\u0157\u0158"+
		"\7\61\2\2\u0158\u0159\7?\2\2\u0159t\3\2\2\2\u015a\u015b\7(\2\2\u015b\u015c"+
		"\7?\2\2\u015cv\3\2\2\2\u015d\u015e\7~\2\2\u015e\u015f\7?\2\2\u015fx\3"+
		"\2\2\2\u0160\u0161\7`\2\2\u0161\u0162\7?\2\2\u0162z\3\2\2\2\u0163\u0164"+
		"\7\'\2\2\u0164\u0165\7?\2\2\u0165|\3\2\2\2\u0166\u0167\7>\2\2\u0167\u0168"+
		"\7>\2\2\u0168\u0169\7?\2\2\u0169~\3\2\2\2\u016a\u016b\7@\2\2\u016b\u016c"+
		"\7@\2\2\u016c\u016d\7?\2\2\u016d\u0080\3\2\2\2\u016e\u016f\7]\2\2\u016f"+
		"\u0173\t\2\2\2\u0170\u0172\t\3\2\2\u0171\u0170\3\2\2\2\u0172\u0175\3\2"+
		"\2\2\u0173\u0171\3\2\2\2\u0173\u0174\3\2\2\2\u0174\u0176\3\2\2\2\u0175"+
		"\u0173\3\2\2\2\u0176\u0177\7_\2\2\u0177\u0082\3\2\2\2\u0178\u017c\t\2"+
		"\2\2\u0179\u017b\t\3\2\2\u017a\u0179\3\2\2\2\u017b\u017e\3\2\2\2\u017c"+
		"\u017a\3\2\2\2\u017c\u017d\3\2\2\2\u017d\u0181\3\2\2\2\u017e\u017c\3\2"+
		"\2\2\u017f\u0181\7\62\2\2\u0180\u0178\3\2\2\2\u0180\u017f\3\2\2\2\u0181"+
		"\u0084\3\2\2\2\u0182\u0183\7v\2\2\u0183\u0184\7t\2\2\u0184\u0185\7w\2"+
		"\2\u0185\u018c\7g\2\2\u0186\u0187\7h\2\2\u0187\u0188\7c\2\2\u0188\u0189"+
		"\7n\2\2\u0189\u018a\7u\2\2\u018a\u018c\7g\2\2\u018b\u0182\3\2\2\2\u018b"+
		"\u0186\3\2\2\2\u018c\u0086\3\2\2\2\u018d\u0191\t\4\2\2\u018e\u0190\t\5"+
		"\2\2\u018f\u018e\3\2\2\2\u0190\u0193\3\2\2\2\u0191\u018f\3\2\2\2\u0191"+
		"\u0192\3\2\2\2\u0192\u0088\3\2\2\2\u0193\u0191\3\2\2\2\u0194\u0196\t\6"+
		"\2\2\u0195\u0194\3\2\2\2\u0196\u0197\3\2\2\2\u0197\u0195\3\2\2\2\u0197"+
		"\u0198\3\2\2\2\u0198\u0199\3\2\2\2\u0199\u019a\bE\2\2\u019a\u008a\3\2"+
		"\2\2\u019b\u019c\7\61\2\2\u019c\u019d\7,\2\2\u019d\u01a1\3\2\2\2\u019e"+
		"\u01a0\13\2\2\2\u019f\u019e\3\2\2\2\u01a0\u01a3\3\2\2\2\u01a1\u01a2\3"+
		"\2\2\2\u01a1\u019f\3\2\2\2\u01a2\u01a4\3\2\2\2\u01a3\u01a1\3\2\2\2\u01a4"+
		"\u01a5\7,\2\2\u01a5\u01a6\7\61\2\2\u01a6\u01a7\3\2\2\2\u01a7\u01a8\bF"+
		"\2\2\u01a8\u008c\3\2\2\2\u01a9\u01aa\7\61\2\2\u01aa\u01ab\7\61\2\2\u01ab"+
		"\u01af\3\2\2\2\u01ac\u01ae\n\7\2\2\u01ad\u01ac\3\2\2\2\u01ae\u01b1\3\2"+
		"\2\2\u01af\u01ad\3\2\2\2\u01af\u01b0\3\2\2\2\u01b0\u01b2\3\2\2\2\u01b1"+
		"\u01af\3\2\2\2\u01b2\u01b3\bG\2\2\u01b3\u008e\3\2\2\2\13\2\u0173\u017c"+
		"\u0180\u018b\u0191\u0197\u01a1\u01af\3\2\3\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}