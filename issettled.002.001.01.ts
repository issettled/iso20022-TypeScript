// IsSettled iso20022

// Document 
export type Document = Document;

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

// SettlementMethod1Code 
export enum SettlementMethod1Code {
	INDA = 'INDA',
	INGA = 'INGA',
	COVE = 'COVE',
	CLRG = 'CLRG',
	TDSO = 'TDSO',
	TDSA = 'TDSA',
}

// ClearingSystemIdentification3Choice 
export class ClearingSystemIdentification3Choice {
	Cd: string;
	Prtry: string;
}

// ExternalCashClearingSystem1Code 
export type ExternalCashClearingSystem1Code = string;

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

// IBAN2007Identifier 
export type IBAN2007Identifier = string;

// GenericAccountIdentification1 
export class GenericAccountIdentification1 {
	Id: string;
	SchmeNm: AccountSchemeName1Choice;
	Issr: string;
}

// Max34Text 
export type Max34Text = string;

// AccountSchemeName1Choice 
export class AccountSchemeName1Choice {
	Cd: string;
	Prtry: string;
}

// ExternalAccountIdentification1Code 
export type ExternalAccountIdentification1Code = string;

// CashAccountType2Choice 
export class CashAccountType2Choice {
	Cd: string;
	Prtry: string;
}

// ExternalCashAccountType1Code 
export type ExternalCashAccountType1Code = string;

// ActiveOrHistoricCurrencyCode 
export type ActiveOrHistoricCurrencyCode = string;

// Max70Text 
export type Max70Text = string;

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

// GenericFinancialIdentification1 
export class GenericFinancialIdentification1 {
	Id: string;
	SchmeNm: FinancialIdentificationSchemeName1Choice;
	Issr: string;
}

// FinancialIdentificationSchemeName1Choice 
export class FinancialIdentificationSchemeName1Choice {
	Cd: string;
	Prtry: string;
}

// ExternalFinancialInstitutionIdentification1Code 
export type ExternalFinancialInstitutionIdentification1Code = string;

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

// TransactionSettlementNotificationV01 
export class TransactionSettlementNotificationV01 {
	GrpHdr: GroupHeader70;
	TxSttlmInf: Array<TransactionSettlementInformation1>;
}

// TransactionSettlementInformation1 
export class TransactionSettlementInformation1 {
	OrgnlGrpInf: OriginalGroupInformation3;
	TxInf: Array<PaymentTransactionInformation2>;
}

// PaymentTransactionInformation2 
export class PaymentTransactionInformation2 {
	SttlmId: string;
	OrgnlInstrId: string;
	OrgnlEndToEndId: string;
	OrgnlTxId: string;
	ActlSttlmAmt: CurrencyAndAmount;
	OrgnlTxRef: OriginalTransactionReference1;
}

// CurrencyAndAmount 
export class CurrencyAndAmount extends number  {
	CcyAttr: string;
}

// OriginalGroupInformation3 
export class OriginalGroupInformation3 {
	OrgnlMsgId: string;
	OrgnlMsgNmId: string;
	OrgnlCreDtTm: string;
}

// CurrencyAndAmount_SimpleType 
export type CurrencyAndAmount_SimpleType = number;

// CurrencyCode 
export type CurrencyCode = string;

// OriginalTransactionReference1 
export class OriginalTransactionReference1 {
	IntrBkSttlmAmt: CurrencyAndAmount;
	Amt: AmountType2Choice;
	IntrBkSttlmDt: string;
	ReqdExctnDt: string;
	ReqdColltnDt: string;
	CdtrSchmeId: PartyIdentification8;
	SttlmInf: SettlementInformation3;
	PmtTpInf: PaymentTypeInformation6;
	PmtMtd: string;
	MndtRltdInf: MandateRelatedInformation1;
	RmtInf: RemittanceInformation1;
	UltmtDbtr: PartyIdentification8;
	Dbtr: PartyIdentification8;
	DbtrAcct: CashAccount7;
	DbtrAgt: BranchAndFinancialInstitutionIdentification3;
	DbtrAgtAcct: CashAccount7;
	CdtrAgt: BranchAndFinancialInstitutionIdentification3;
	CdtrAgtAcct: CashAccount7;
	Cdtr: PartyIdentification8;
	CdtrAcct: CashAccount7;
	UltmtCdtr: PartyIdentification8;
}

// AmountType2Choice 
export class AmountType2Choice {
	InstdAmt: CurrencyAndAmount;
	EqvtAmt: EquivalentAmount;
}

// EquivalentAmount 
export class EquivalentAmount {
	Amt: CurrencyAndAmount;
	CcyOfTrf: string;
}

// PartyIdentification8 
export class PartyIdentification8 {
	Nm: string;
	PstlAdr: PostalAddress1;
	Id: Party2Choice;
	CtryOfRes: string;
}

// PostalAddress1 
export class PostalAddress1 {
	AdrTp: string;
	AdrLine: string;
	StrtNm: string;
	BldgNb: string;
	PstCd: string;
	TwnNm: string;
	CtrySubDvsn: string;
	Ctry: string;
}

// Party2Choice 
export class Party2Choice {
	OrgId: OrganisationIdentification2;
	PrvtId: Array<PersonIdentification3>;
}

// OrganisationIdentification2 
export class OrganisationIdentification2 {
	BIC: string;
	IBEI: string;
	BEI: string;
	EANGLN: string;
	USCHU: string;
	DUNS: string;
	BkPtyId: string;
	TaxIdNb: string;
	PrtryId: GenericIdentification3;
}

// BICIdentifier 
export type BICIdentifier = string;

// IBEIIdentifier 
export type IBEIIdentifier = string;

// BEIIdentifier 
export type BEIIdentifier = string;

// EANGLNIdentifier 
export type EANGLNIdentifier = string;

// CHIPSUniversalIdentifier 
export type CHIPSUniversalIdentifier = string;

// DunsIdentifier 
export type DunsIdentifier = string;

// GenericIdentification3 
export class GenericIdentification3 {
	Id: string;
	Issr: string;
}

// PersonIdentification3 
export class PersonIdentification3 {
	DrvrsLicNb: string;
	CstmrNb: string;
	SclSctyNb: string;
	AlnRegnNb: string;
	PsptNb: string;
	TaxIdNb: string;
	IdntyCardNb: string;
	MplyrIdNb: string;
	DtAndPlcOfBirth: DateAndPlaceOfBirth;
	OthrId: GenericIdentification4;
	Issr: string;
}

// DateAndPlaceOfBirth 
export class DateAndPlaceOfBirth {
	BirthDt: string;
	PrvcOfBirth: string;
	CityOfBirth: string;
	CtryOfBirth: string;
}

// GenericIdentification4 
export class GenericIdentification4 {
	Id: string;
	IdTp: string;
}

// SettlementInformation3 
export class SettlementInformation3 {
	SttlmMtd: string;
	SttlmAcct: CashAccount7;
	ClrSys: ClearingSystemIdentification1Choice;
	InstgRmbrsmntAgt: BranchAndFinancialInstitutionIdentification3;
	InstgRmbrsmntAgtAcct: CashAccount7;
	InstdRmbrsmntAgt: BranchAndFinancialInstitutionIdentification3;
	InstdRmbrsmntAgtAcct: CashAccount7;
	ThrdRmbrsmntAgt: BranchAndFinancialInstitutionIdentification3;
	ThrdRmbrsmntAgtAcct: CashAccount7;
}

// CashAccount7 
export class CashAccount7 {
	Id: AccountIdentification3Choice;
	Tp: CashAccountType2;
	Ccy: string;
	Nm: string;
}

// AccountIdentification3Choice 
export class AccountIdentification3Choice {
	IBAN: string;
	BBAN: string;
	UPIC: string;
	PrtryAcct: SimpleIdentificationInformation2;
}

// IBANIdentifier 
export type IBANIdentifier = string;

// BBANIdentifier 
export type BBANIdentifier = string;

// UPICIdentifier 
export type UPICIdentifier = string;

// SimpleIdentificationInformation2 
export class SimpleIdentificationInformation2 {
	Id: string;
}

// CashAccountType2 
export class CashAccountType2 {
	Cd: string;
	Prtry: string;
}

// CashAccountType4Code 
export enum CashAccountType4Code {
	CASH = 'CASH',
	CHAR = 'CHAR',
	COMM = 'COMM',
	TAXE = 'TAXE',
	CISH = 'CISH',
	TRAS = 'TRAS',
	SACC = 'SACC',
	CACC = 'CACC',
	SVGS = 'SVGS',
	ONDP = 'ONDP',
	MGLD = 'MGLD',
	NREX = 'NREX',
	MOMA = 'MOMA',
	LOAN = 'LOAN',
	SLRY = 'SLRY',
	ODFT = 'ODFT',
}

// ClearingSystemIdentification1Choice 
export class ClearingSystemIdentification1Choice {
	ClrSysId: string;
	Prtry: string;
}

// CashClearingSystem3Code 
export enum CashClearingSystem3Code {
	ABE = 'ABE',
	ART = 'ART',
	AVP = 'AVP',
	AZM = 'AZM',
	BAP = 'BAP',
	BEL = 'BEL',
	BOF = 'BOF',
	BRL = 'BRL',
	CAD = 'CAD',
	CAM = 'CAM',
	CBJ = 'CBJ',
	CHP = 'CHP',
	DKC = 'DKC',
	RTP = 'RTP',
	EBA = 'EBA',
	ELS = 'ELS',
	ERP = 'ERP',
	XCT = 'XCT',
	HRK = 'HRK',
	HRM = 'HRM',
	HUF = 'HUF',
	LGS = 'LGS',
	LVL = 'LVL',
	MUP = 'MUP',
	NOC = 'NOC',
	PCH = 'PCH',
	PDS = 'PDS',
	PEG = 'PEG',
	PNS = 'PNS',
	PVE = 'PVE',
	SEC = 'SEC',
	SIT = 'SIT',
	SLB = 'SLB',
	SPG = 'SPG',
	SSK = 'SSK',
	TBF = 'TBF',
	TGT = 'TGT',
	TOP = 'TOP',
	FDW = 'FDW',
	BOJ = 'BOJ',
	FEY = 'FEY',
	ZEN = 'ZEN',
	DDK = 'DDK',
	AIP = 'AIP',
	BCC = 'BCC',
	BDS = 'BDS',
	BGN = 'BGN',
	BHS = 'BHS',
	BIS = 'BIS',
	BSP = 'BSP',
	EPM = 'EPM',
	EPN = 'EPN',
	FDA = 'FDA',
	GIS = 'GIS',
	INC = 'INC',
	JOD = 'JOD',
	KPS = 'KPS',
	LKB = 'LKB',
	MEP = 'MEP',
	MRS = 'MRS',
	NAM = 'NAM',
	PTR = 'PTR',
	ROL = 'ROL',
	ROS = 'ROS',
	SCP = 'SCP',
	STG = 'STG',
	THB = 'THB',
	TIS = 'TIS',
	TTD = 'TTD',
	UIS = 'UIS',
	MOS = 'MOS',
	ZET = 'ZET',
	ZIS = 'ZIS',
	CHI = 'CHI',
	COP = 'COP',
}

// BranchAndFinancialInstitutionIdentification3 
export class BranchAndFinancialInstitutionIdentification3 {
	FinInstnId: FinancialInstitutionIdentification5Choice;
	BrnchId: BranchData;
}

// FinancialInstitutionIdentification5Choice 
export class FinancialInstitutionIdentification5Choice {
	BIC: string;
	ClrSysMmbId: ClearingSystemMemberIdentification3Choice;
	NmAndAdr: NameAndAddress7;
	PrtryId: GenericIdentification3;
	CmbndId: FinancialInstitutionIdentification3;
}

// ClearingSystemMemberIdentification3Choice 
export class ClearingSystemMemberIdentification3Choice {
	Id: string;
	Prtry: string;
}

// ExternalClearingSystemMemberCode 
export type ExternalClearingSystemMemberCode = string;

// NameAndAddress7 
export class NameAndAddress7 {
	Nm: string;
	PstlAdr: PostalAddress1;
}

// FinancialInstitutionIdentification3 
export class FinancialInstitutionIdentification3 {
	BIC: string;
	ClrSysMmbId: ClearingSystemMemberIdentification3Choice;
	Nm: string;
	PstlAdr: PostalAddress1;
	PrtryId: GenericIdentification3;
}

// BranchData 
export class BranchData {
	Id: string;
	Nm: string;
	PstlAdr: PostalAddress1;
}

// PaymentTypeInformation6 
export class PaymentTypeInformation6 {
	InstrPrty: string;
	SvcLvl: ServiceLevel2Choice;
	ClrChanl: string;
	LclInstrm: LocalInstrument1Choice;
	SeqTp: string;
	CtgyPurp: string;
}

// ServiceLevel2Choice 
export class ServiceLevel2Choice {
	Cd: string;
	Prtry: string;
}

// ServiceLevel1Code 
export enum ServiceLevel1Code {
	SEPA = 'SEPA',
	SDVA = 'SDVA',
	PRPT = 'PRPT',
}

// LocalInstrument1Choice 
export class LocalInstrument1Choice {
	Cd: string;
	Prtry: string;
}

// ExternalLocalInstrumentCode 
export type ExternalLocalInstrumentCode = string;

// SequenceType1Code 
export enum SequenceType1Code {
	FRST = 'FRST',
	RCUR = 'RCUR',
	FNAL = 'FNAL',
	OOFF = 'OOFF',
}

// PaymentCategoryPurpose1Code 
export enum PaymentCategoryPurpose1Code {
	CORT = 'CORT',
	SALA = 'SALA',
	TREA = 'TREA',
	CASH = 'CASH',
	DIVI = 'DIVI',
	GOVT = 'GOVT',
	INTE = 'INTE',
	LOAN = 'LOAN',
	PENS = 'PENS',
	SECU = 'SECU',
	SSBE = 'SSBE',
	SUPP = 'SUPP',
	TAXS = 'TAXS',
	TRAD = 'TRAD',
	VATX = 'VATX',
	HEDG = 'HEDG',
	INTC = 'INTC',
	WHLD = 'WHLD',
}

// PaymentMethod4Code 
export enum PaymentMethod4Code {
	CHK = 'CHK',
	TRF = 'TRF',
	DD = 'DD',
	TRA = 'TRA',
}

// MandateRelatedInformation1 
export class MandateRelatedInformation1 {
	MndtId: string;
	DtOfSgntr: string;
	AmdmntInd: boolean;
	AmdmntInfDtls: AmendmentInformationDetails1;
	ElctrncSgntr: string;
	FrstColltnDt: string;
	FnlColltnDt: string;
	Frqcy: string;
}

// TrueFalseIndicator 
export type TrueFalseIndicator = boolean;

// AmendmentInformationDetails1 
export class AmendmentInformationDetails1 {
	OrgnlMndtId: string;
	OrgnlCdtrSchmeId: PartyIdentification8;
	OrgnlCdtrAgt: BranchAndFinancialInstitutionIdentification3;
	OrgnlCdtrAgtAcct: CashAccount7;
	OrgnlDbtr: PartyIdentification8;
	OrgnlDbtrAcct: CashAccount7;
	OrgnlDbtrAgt: BranchAndFinancialInstitutionIdentification3;
	OrgnlDbtrAgtAcct: CashAccount7;
	OrgnlFnlColltnDt: string;
	OrgnlFrqcy: string;
}

// Frequency1Code 
export enum Frequency1Code {
	YEAR = 'YEAR',
	MNTH = 'MNTH',
	QURT = 'QURT',
	MIAN = 'MIAN',
	WEEK = 'WEEK',
	DAIL = 'DAIL',
	ADHO = 'ADHO',
	INDA = 'INDA',
}

// Max1025Text 
export type Max1025Text = string;

// RemittanceInformation1 
export class RemittanceInformation1 {
	Ustrd: string;
	Strd: Array<StructuredRemittanceInformation6>;
}

// StructuredRemittanceInformation6 
export class StructuredRemittanceInformation6 {
	RfrdDocInf: ReferredDocumentInformation1;
	RfrdDocRltdDt: string;
	RfrdDocAmt: Array<ReferredDocumentAmount1Choice>;
	CdtrRefInf: CreditorReferenceInformation1;
	Invcr: PartyIdentification8;
	Invcee: PartyIdentification8;
	AddtlRmtInf: string;
}

// ReferredDocumentInformation1 
export class ReferredDocumentInformation1 {
	RfrdDocTp: ReferredDocumentType1;
	RfrdDocNb: string;
}

// ReferredDocumentType1 
export class ReferredDocumentType1 {
	Cd: string;
	Prtry: string;
	Issr: string;
}

// DocumentType2Code 
export enum DocumentType2Code {
	MSIN = 'MSIN',
	CNFA = 'CNFA',
	DNFA = 'DNFA',
	CINV = 'CINV',
	CREN = 'CREN',
	DEBN = 'DEBN',
	HIRI = 'HIRI',
	SBIN = 'SBIN',
	CMCN = 'CMCN',
	SOAC = 'SOAC',
	DISP = 'DISP',
}

// ReferredDocumentAmount1Choice 
export class ReferredDocumentAmount1Choice {
	DuePyblAmt: CurrencyAndAmount;
	DscntApldAmt: CurrencyAndAmount;
	RmtdAmt: CurrencyAndAmount;
	CdtNoteAmt: CurrencyAndAmount;
	TaxAmt: CurrencyAndAmount;
}

// CreditorReferenceInformation1 
export class CreditorReferenceInformation1 {
	CdtrRefTp: CreditorReferenceType1;
	CdtrRef: string;
}

// CreditorReferenceType1 
export class CreditorReferenceType1 {
	Cd: string;
	Prtry: string;
	Issr: string;
}

// DocumentType3Code 
export enum DocumentType3Code {
	RADM = 'RADM',
	RPIN = 'RPIN',
	FXDR = 'FXDR',
	DISP = 'DISP',
	PUOR = 'PUOR',
	SCOR = 'SCOR',
}
