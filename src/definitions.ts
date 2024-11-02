export enum Instractions {
	MOV = "MOV",
	ADD = "ADD",
	SUB = "SUB",
	MUL = "MUL",
	DIV = "DIV",
	AND = "AND",
	OR = "OR",
	XOR = "XOR",
	NOT = "NOT",
	SHL = "SHL",
	SHR = "SHR",
	INC = "INC",
	DEC = "DEC",
	CMP = "CMP",
	JMP = "JMP",
	JE = "JE",
	JNE = "JNE",
	JG = "JG",
	JGE = "JGE",
	JL = "JL",
	JLE = "JLE",
	CALL = "CALL",
	RET = "RET",
	PUSH = "PUSH",
	POP = "POP",
	INT = "INT",
	HLT = "HLT",
}

export type Operations = {
	instraction: Instractions | undefined,
	operand1: number | undefined,
	operand2: number | undefined,
}[];

export const NUMBER_OF_REGISTERS = 4;
export const NUMBER_OF_OPERATIONS = 7;
export const NUMBER_OF_OPERATION_TIME_MS = 800;
