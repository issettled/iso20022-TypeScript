// IsSettled iso20022

// Document 
export type Document = Document;

// ExternalFinancialInstitutionIdentification1Code 
export type ExternalFinancialInstitutionIdentification1Code = string;

// Max35Text 
export type Max35Text = string;

// ISODateTime 
export type ISODateTime = string;

// BatchBookingIndicator 
export type BatchBookingIndicator = boolean;

// Max15NumericText 
export type Max15NumericText = string;

// DecimalNumber 
export type DecimalNumber = number;

// ActiveCurrencyAndAmount_SimpleType 
export type ActiveCurrencyAndAmount_SimpleType = number;

// ActiveCurrencyAndAmount 
export class ActiveCurrencyAndAmount {
	CcyAttr: string;
	Value: number;
}

// ActiveCurrencyCode 
export type ActiveCurrencyCode = string;

// ISODate 
export type ISODate = string;

// SettlementMethod1Code 
export enum SettlementMethod1Code {
	INDA = 'INDA',
	INGA = 'INGA',
	COVE = 'COVE',
	CLRG = 'CLRG',
	TDSO = 'TDSO',
	TDSA = 'TDSA',
}

// ExternalCashClearingSystem1Code 
export type ExternalCashClearingSystem1Code = string;

// IBAN2007Identifier 
export type IBAN2007Identifier = string;

// Max34Text 
export type Max34Text = string;

// ExternalAccountIdentification1Code 
export type ExternalAccountIdentification1Code = string;

// ExternalCashAccountType1Code 
export type ExternalCashAccountType1Code = string;

// ActiveOrHistoricCurrencyCode 
export type ActiveOrHistoricCurrencyCode = string;

// Max70Text 
export type Max70Text = string;

// SettlementInstruction4 
export class SettlementInstruction4 {
	SttlmMtd: string;
	SttlmAcct: CashAccount24;
	ClrSys: ClearingSystemIdentification3Choice;
	InstgRmbrsmntAgt: BranchAndFinancialInstitutionIdentification5;
	InstgRmbrsmntAgtAcct: CashAccount24;
	InstdRmbrsmntAgt: BranchAndFinancialInstitutionIdentification5;
	InstdRmbrsmntAgtAcct: CashAccount24;
	ThrdRmbrsmntAgt: BranchAndFinancialInstitutionIdentification5;
	ThrdRmbrsmntAgtAcct: CashAccount24;
}

// ClearingSystemIdentification3Choice 
export class ClearingSystemIdentification3Choice {
	Cd: string;
	Prtry: string;
}

// CashAccount24 
export class CashAccount24 {
	Id: AccountIdentification4Choice;
	Tp: CashAccountType2Choice;
	Ccy: string;
	Nm: string;
}

// AccountIdentification4Choice 
export class AccountIdentification4Choice {
	IBAN: string;
	Othr: GenericAccountIdentification1;
}

// GenericAccountIdentification1 
export class GenericAccountIdentification1 {
	Id: string;
	SchmeNm: AccountSchemeName1Choice;
	Issr: string;
}

// AccountSchemeName1Choice 
export class AccountSchemeName1Choice {
	Cd: string;
	Prtry: string;
}

// CashAccountType2Choice 
export class CashAccountType2Choice {
	Cd: string;
	Prtry: string;
}

// BranchAndFinancialInstitutionIdentification5 
export class BranchAndFinancialInstitutionIdentification5 {
	FinInstnId: FinancialInstitutionIdentification8;
	BrnchId: BranchData2;
}

// FinancialInstitutionIdentification8 
export class FinancialInstitutionIdentification8 {
	BICFI: string;
	ClrSysMmbId: ClearingSystemMemberIdentification2;
	Nm: string;
	PstlAdr: PostalAddress6;
	Othr: GenericFinancialIdentification1;
}

// BICFIIdentifier 
export type BICFIIdentifier = string;

// ClearingSystemMemberIdentification2 
export class ClearingSystemMemberIdentification2 {
	ClrSysId: ClearingSystemIdentification2Choice;
	MmbId: string;
}

// ClearingSystemIdentification2Choice 
export class ClearingSystemIdentification2Choice {
	Cd: string;
	Prtry: string;
}

// ExternalClearingSystemIdentification1Code 
export type ExternalClearingSystemIdentification1Code = string;

// Max140Text 
export type Max140Text = string;

// PostalAddress6 
export class PostalAddress6 {
	AdrTp: string;
	Dept: string;
	SubDept: string;
	StrtNm: string;
	BldgNb: string;
	PstCd: string;
	TwnNm: string;
	CtrySubDvsn: string;
	Ctry: string;
	AdrLine: string;
}

// AddressType2Code 
export enum AddressType2Code {
	ADDR = 'ADDR',
	PBOX = 'PBOX',
	HOME = 'HOME',
	BIZZ = 'BIZZ',
	MLTO = 'MLTO',
	DLVY = 'DLVY',
}

// Max16Text 
export type Max16Text = string;

// CountryCode 
export type CountryCode = string;

// FinancialIdentificationSchemeName1Choice 
export class FinancialIdentificationSchemeName1Choice {
	Cd: string;
	Prtry: string;
}

// GenericFinancialIdentification1 
export class GenericFinancialIdentification1 {
	Id: string;
	SchmeNm: FinancialIdentificationSchemeName1Choice;
	Issr: string;
}

// BranchData2 
export class BranchData2 {
	Id: string;
	Nm: string;
	PstlAdr: PostalAddress6;
}

// PaymentTypeInformation21 
export class PaymentTypeInformation21 {
	InstrPrty: string;
	ClrChanl: string;
	SvcLvl: ServiceLevel8Choice;
	LclInstrm: LocalInstrument2Choice;
	CtgyPurp: CategoryPurpose1Choice;
}

// Priority2Code 
export enum Priority2Code {
	HIGH = 'HIGH',
	NORM = 'NORM',
}

// ClearingChannel2Code 
export enum ClearingChannel2Code {
	RTGS = 'RTGS',
	RTNS = 'RTNS',
	MPNS = 'MPNS',
	BOOK = 'BOOK',
}

// ServiceLevel8Choice 
export class ServiceLevel8Choice {
	Cd: string;
	Prtry: string;
}

// ExternalServiceLevel1Code 
export type ExternalServiceLevel1Code = string;

// LocalInstrument2Choice 
export class LocalInstrument2Choice {
	Cd: string;
	Prtry: string;
}

// ExternalLocalInstrument1Code 
export type ExternalLocalInstrument1Code = string;

// CategoryPurpose1Choice 
export class CategoryPurpose1Choice {
	Cd: string;
	Prtry: string;
}

// ExternalCategoryPurpose1Code 
export type ExternalCategoryPurpose1Code = string;

// GroupHeader70 
export class GroupHeader70 {
	MsgId: string;
	CreDtTm: string;
	BtchBookg: boolean;
	NbOfTxs: string;
	CtrlSum: number;
	TtlIntrBkSttlmAmt: ActiveCurrencyAndAmount;
	IntrBkSttlmDt: string;
	SttlmInf: SettlementInstruction4;
	PmtTpInf: PaymentTypeInformation21;
	InstgAgt: BranchAndFinancialInstitutionIdentification5;
	InstdAgt: BranchAndFinancialInstitutionIdentification5;
}

// CustomerIdentificationStatusNotificationV01 
export class CustomerIdentificationStatusNotificationV01 {
	GrpHdr: GroupHeader70;
	AcctInfAndIdSts: Array<AccountInformationAndIdentificationStatus1>;
}

// AccountInformationAndIdentificationStatus1 
export class AccountInformationAndIdentificationStatus1 {
	Id: string;
	AcctIdInf: AccountIdentificationInformation1;
	CstmrIdInf: CustomerIdentificationInformation1;
}

// AccountIdentificationInformation1 
export class AccountIdentificationInformation1 {
	AdrsngId: string;
	SttlmAcctId: string;
	NoteTp: string;
	Note: string;
	CstmrAcctIdSts: string;
	PmtId: PaymentIdentification3;
}

// CustomerIdentificationInformation1 
export class CustomerIdentificationInformation1 {
	KYCSts: string;
	AMLSts: string;
	PIIInf: string;
	PmtId: PaymentIdentification3;
}

// PaymentIdentification3 
export class PaymentIdentification3 {
	InstrId: string;
	EndToEndId: string;
	TxId: string;
	ClrSysRef: string;
}

// NoteType1 
export enum NoteType1 {
	TEXT = 'TEXT',
	ID = 'ID',
	HASH = 'HASH',
}

// Note1 
export type Note1 = string;

// CustomerAccountIdentificationStatus1 
export enum CustomerAccountIdentificationStatus1 {
	ACTC = 'ACTC',
	RJCT = 'RJCT',
}

// PersonallyIdentifiableInformationInfo1 
export type PersonallyIdentifiableInformationInfo1 = string;

// KYCStatus1 
export enum KYCStatus1 {
	ACTC = 'ACTC',
	RJCT = 'RJCT',
	PDNG = 'PDNG',
}

// AMLStatus1 
export enum AMLStatus1 {
	ACTC = 'ACTC',
	RJCT = 'RJCT',
	PDNG = 'PDNG',
}

// AddressingIdentification1 
export type AddressingIdentification1 = string;

// SettlementAccountIdentification1 
export type SettlementAccountIdentification1 = string;

// DateTimeString 
export type DateTimeString = string;

// DateString 
export type DateString = string;
