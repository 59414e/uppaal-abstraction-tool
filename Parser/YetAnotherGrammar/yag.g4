/*
Yet Another Grammar
notes:
- check "else if" construct
- no support for struct/typedef
- (ALL) assignment operators assumed to be right-assoc
- one assignment per statement (no 'x=1,y=2,z=3' seqs/cascades)
- for the switch-case it is not required that "default" has to be at the end
- no exponent (**) operator
*/

grammar yag;

@members{
	let constMap = {};
}

file
	: translation EOF
	;

// Global or Template declaration body
translation
	: (vdec_list | fdec)+
	;

// begin{ULABELS}
select_label
	: select_pair (',' select_pair)*
	;
select_pair
	: vid=var_identifier ':' range=vtype
	;
assignment_label
	: assignment_stmt (',' assignment_stmt)* 
	;
synchronisation_label
	: chan=expr symb=('?'|'!')
	;
// end{ULABELS}

vdec_list
	: type=vtype vdec (',' vdec)* ';'
	;

vdec
	: vid=var_identifier dim=arr_size? ('=' init=expr)?
	;

arr_size
	: ('['expr']')+
	;

fdec
	: ret=vtype fid=ID '(' params=fparam_list? ')' bl=block 
	;
fparam_list
	: fparam (',' fparam)*
	;
fparam
	: vtype pid=var_identifier arr_size?
	;

block
	: '{' statement* '}'
	;

statement
	: block
	| vdec_list
    | FOR '(' assignment_stmt* ';' expr_list? ';' expr_list? ')' statement
    // | FOR '(' expr_list ';' expr_list ';' expr_list ')' statement
	| IF expr statement (ELSE statement)?
	| WHILE expr statement
	| DO statement WHILE expr ';'
	| SWITCH expr case_block+
	| RETURN expr? ';'
	| assignment_stmt (',' assignment_stmt)* ';'
	| expr ';'
	;
assignment_stmt
	:  <assoc = right> lhs = expr assignmentOp rhs = expr
	;
case_block
	: ((CASE expr) | DEFAULT) ':' statement*? BREAK ';'
	;

expr_list
	: expr (',' expr)*
	;
expr
	: expr '.' var_identifier
	// | expr '[' ind=expr ']'
	| vid=var_identifier dim=arr_size
	| expr ('++' | '--')
	| ('++' | '--' | '+' | '-') expr
	| ('~' | '!') expr
	| expr ('*' | '/' | '%') expr
	| expr ('+' | '-') expr
	| expr ('<<' | '>>') expr
	| expr ('<=' | '>=' | '<' | '>') expr
	| expr ('==' | '!=') expr
	| expr ('&') expr
	| expr ('^') expr
	| expr ('|') expr
	| expr ('&&') expr
	| expr ('||') expr
	| <assoc = right> expr '?' expr ':' expr
	| fid=ID '(' fargs=expr_list ')' // function call
	| vid=var_identifier
	| INTEGER
	| BOOLEAN
	| '{' expr_list '}' // array 
	| '(' expr ')'
	;

var_identifier
	: ID
	;

vtype
	: ( (constant=CONST? (INT | BOOL)) | (BCAST? CHAN)) (bound_range)?
	;
bound_range
	: '[' expr ',' expr ']'
	;

assignmentOp
	: ASSIGN
	| ADD_ASSIGN
	| SUB_ASSIGN
	| MUL_ASSIGN
	| DIV_ASSIGN
	| MOD_ASSIGN
	| AND_ASSIGN
	| OR_ASSIGN
	| XOR_ASSIGN
	| LSHIFT_ASSIGN
	| RSHIFT_ASSIGN
	;


/*
 * Lexer Rules
 */

// Reserved keywords

FOR: 'for';
DO: 'do';
WHILE: 'while';
BREAK: 'break';
CONTINUE: 'continue';

SWITCH: 'switch';
CASE: 'case';
DEFAULT: 'default';

CONST: 'const';

IF: 'if';
ELSE: 'else';

RETURN: 'return';
INT: 'int';
BOOL: 'bool';
VOID: 'void';
CHAN: 'chan';
BCAST: 'broadcast';

STRUCT: 'struct';
TYPEDEF: 'typedef';

// Separators
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
LBRACK: '[';
RBRACK: ']';
SEMI: ';';
COMMA: ',';
DOT: '.';

// Unary operators
BANG: '!';
SUB: '-';

// Binary operators
GT: '>';
LT: '<';
QUESTION: '?';
COLON: ':';
EQUAL: '==';
LE: '<=';
GE: '>=';
NOTEQUAL: '!=';
INC: '++';
DEC: '--';
ADD: '+';
MUL: '*';
DIV: '/';
BITAND: '&';
BITOR: '|';
CARET: '^';
MOD: '%';

// Bool operators
AND: '&&';
OR: '||';

// Assignment operators
ASSIGN: '=';
ADD_ASSIGN: '+=';
SUB_ASSIGN: '-=';
MUL_ASSIGN: '*=';
DIV_ASSIGN: '/=';
AND_ASSIGN: '&=';
OR_ASSIGN: '|=';
XOR_ASSIGN: '^=';
MOD_ASSIGN: '%=';
LSHIFT_ASSIGN: '<<=';
RSHIFT_ASSIGN: '>>=';

// 
fragment ARRAY_DIM: '[' [1-9][0-9]* ']';

INTEGER: [1-9][0-9]* | '0';

BOOLEAN: 'true' | 'false';
// ID: [a-zA-Z_$] [a-zA-Z_$0-9]*;
ID: [a-zA-Z_] [a-zA-Z_0-9]*; // according to Uppaal doc - $ is not allowed

// Whitespace and comments
WHITESPACE: [ \t\r\n]+ -> channel(HIDDEN);
BLOCK_COMMENT:
	'/*' .*? '*/' -> channel(HIDDEN); // multi-line comment
LINE_COMMENT:
	'//' ~[\r\n]* -> channel(HIDDEN); // single-line comment

// Other OTHER: . -> skip;