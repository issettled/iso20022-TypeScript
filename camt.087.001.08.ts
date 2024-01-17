// IsSettled iso20022

// Document 
export type Document = Document;

// AccountIdentification4Choice 
export class AccountIdentification4Choice {
	IBAN: string;
	Othr: GenericAccountIdentification1;
}

// AccountSchemeName1Choice 
export class AccountSchemeName1Choice {
	Cd: string;
	Prtry: string;
}

// ActiveOrHistoricCurrencyAndAmount_SimpleType 
export type ActiveOrHistoricCurrencyAndAmount_SimpleType = number;

// ActiveOrHistoricCurrencyAndAmount 
export class ActiveOrHistoricCurrencyAndAmount {
	CcyAttr: string;
	Value: number;
}

// ActiveOrHistoricCurrencyCode 
export type ActiveOrHistoricCurrencyCode = string;

// AddressType2Code 
export enum AddressType2Code {
	ADDR = 'ADDR',
	PBOX = 'PBOX',
	HOME = 'HOME',
	BIZZ = 'BIZZ',
	MLTO = 'MLTO',
	DLVY = 'DLVY',
}

// AddressType3Choice 
export class AddressType3Choice {
	Cd: string;
	Prtry: GenericIdentification30;
}

// AmendmentInformationDetails14 
export class AmendmentInformationDetails14 {
	OrgnlMndtId: string;
	OrgnlCdtrSchmeId: PartyIdentification135;
	OrgnlCdtrAgt: BranchAndFinancialInstitutionIdentification6;
	OrgnlCdtrAgtAcct: CashAccount40;
	OrgnlDbtr: PartyIdentification135;
	OrgnlDbtrAcct: CashAccount40;
	OrgnlDbtrAgt: BranchAndFinancialInstitutionIdentification6;
	OrgnlDbtrAgtAcct: CashAccount40;
	OrgnlFnlColltnDt: string;
	OrgnlFrqcy: Frequency36Choice;
	OrgnlRsn: MandateSetupReason1Choice;
	OrgnlTrckgDays: string;
}

// AmountType4Choice 
export class AmountType4Choice {
	InstdAmt: ActiveOrHistoricCurrencyAndAmount;
	EqvtAmt: EquivalentAmount2;
}

// AnyBICDec2014Identifier 
export type AnyBICDec2014Identifier = string;

// BICFIDec2014Identifier 
export type BICFIDec2014Identifier = string;

// BranchAndFinancialInstitutionIdentification6 
export class BranchAndFinancialInstitutionIdentification6 {
	FinInstnId: FinancialInstitutionIdentification18;
	BrnchId: BranchData3;
}

// BranchData3 
export class BranchData3 {
	Id: string;
	LEI: string;
	Nm: string;
	PstlAdr: PostalAddress24;
}

// Case5 
export class Case5 {
	Id: string;
	Cretr: Party40Choice;
	ReopCaseIndctn: boolean;
}

// CaseAssignment5 
export class CaseAssignment5 {
	Id: string;
	Assgnr: Party40Choice;
	Assgne: Party40Choice;
	CreDtTm: string;
}

// CashAccount40 
export class CashAccount40 {
	Id: AccountIdentification4Choice;
	Tp: CashAccountType2Choice;
	Ccy: string;
	Nm: string;
	Prxy: ProxyAccountIdentification1;
}

// CashAccountType2Choice 
export class CashAccountType2Choice {
	Cd: string;
	Prtry: string;
}

// CategoryPurpose1Choice 
export class CategoryPurpose1Choice {
	Cd: string;
	Prtry: string;
}

// ChargeBearerType1Code 
export enum ChargeBearerType1Code {
	DEBT = 'DEBT',
	CRED = 'CRED',
	SHAR = 'SHAR',
	SLEV = 'SLEV',
}

// ClearingChannel2Code 
export enum ClearingChannel2Code {
	RTGS = 'RTGS',
	RTNS = 'RTNS',
	MPNS = 'MPNS',
	BOOK = 'BOOK',
}

// ClearingSystemIdentification2Choice 
export class ClearingSystemIdentification2Choice {
	Cd: string;
	Prtry: string;
}

// ClearingSystemIdentification3Choice 
export class ClearingSystemIdentification3Choice {
	Cd: string;
	Prtry: string;
}

// ClearingSystemMemberIdentification2 
export class ClearingSystemMemberIdentification2 {
	ClrSysId: ClearingSystemIdentification2Choice;
	MmbId: string;
}

// Contact4 
export class Contact4 {
	NmPrfx: string;
	Nm: string;
	PhneNb: string;
	MobNb: string;
	FaxNb: string;
	EmailAdr: string;
	EmailPurp: string;
	JobTitl: string;
	Rspnsblty: string;
	Dept: string;
	Othr: Array<OtherContact1>;
	PrefrdMtd: string;
}

// CountryCode 
export type CountryCode = string;

// CreditDebitCode 
export enum CreditDebitCode {
	CRDT = 'CRDT',
	DBIT = 'DBIT',
}

// CreditTransferMandateData1 
export class CreditTransferMandateData1 {
	MndtId: string;
	Tp: MandateTypeInformation2;
	DtOfSgntr: string;
	DtOfVrfctn: string;
	ElctrncSgntr: Uint8Array;
	FrstPmtDt: string;
	FnlPmtDt: string;
	Frqcy: Frequency36Choice;
	Rsn: MandateSetupReason1Choice;
}

// CreditorReferenceInformation2 
export class CreditorReferenceInformation2 {
	Tp: CreditorReferenceType2;
	Ref: string;
}

// CreditorReferenceType1Choice 
export class CreditorReferenceType1Choice {
	Cd: string;
	Prtry: string;
}

// CreditorReferenceType2 
export class CreditorReferenceType2 {
	CdOrPrtry: CreditorReferenceType1Choice;
	Issr: string;
}

// DateAndDateTime2Choice 
export class DateAndDateTime2Choice {
	Dt: string;
	DtTm: string;
}

// DateAndPlaceOfBirth1 
export class DateAndPlaceOfBirth1 {
	BirthDt: string;
	PrvcOfBirth: string;
	CityOfBirth: string;
	CtryOfBirth: string;
}

// DatePeriod2 
export class DatePeriod2 {
	FrDt: string;
	ToDt: string;
}

// DecimalNumber 
export type DecimalNumber = number;

// DiscountAmountAndType1 
export class DiscountAmountAndType1 {
	Tp: DiscountAmountType1Choice;
	Amt: ActiveOrHistoricCurrencyAndAmount;
}

// DiscountAmountType1Choice 
export class DiscountAmountType1Choice {
	Cd: string;
	Prtry: string;
}

// DocumentAdjustment1 
export class DocumentAdjustment1 {
	Amt: ActiveOrHistoricCurrencyAndAmount;
	CdtDbtInd: string;
	Rsn: string;
	AddtlInf: string;
}

// DocumentLineIdentification1 
export class DocumentLineIdentification1 {
	Tp: DocumentLineType1;
	Nb: string;
	RltdDt: string;
}

// DocumentLineInformation1 
export class DocumentLineInformation1 {
	Id: Array<DocumentLineIdentification1>;
	Desc: string;
	Amt: RemittanceAmount3;
}

// DocumentLineType1 
export class DocumentLineType1 {
	CdOrPrtry: DocumentLineType1Choice;
	Issr: string;
}

// DocumentLineType1Choice 
export class DocumentLineType1Choice {
	Cd: string;
	Prtry: string;
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

// DocumentType6Code 
export enum DocumentType6Code {
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
	BOLD = 'BOLD',
	VCHR = 'VCHR',
	AROI = 'AROI',
	TSUT = 'TSUT',
	PUOR = 'PUOR',
}

// EquivalentAmount2 
export class EquivalentAmount2 {
	Amt: ActiveOrHistoricCurrencyAndAmount;
	CcyOfTrf: string;
}

// Exact2NumericText 
export type Exact2NumericText = string;

// Exact4AlphaNumericText 
export type Exact4AlphaNumericText = string;

// ExternalAccountIdentification1Code 
export type ExternalAccountIdentification1Code = string;

// ExternalAgentInstruction1Code 
export type ExternalAgentInstruction1Code = string;

// ExternalCashAccountType1Code 
export type ExternalCashAccountType1Code = string;

// ExternalCashClearingSystem1Code 
export type ExternalCashClearingSystem1Code = string;

// ExternalCategoryPurpose1Code 
export type ExternalCategoryPurpose1Code = string;

// ExternalClearingSystemIdentification1Code 
export type ExternalClearingSystemIdentification1Code = string;

// ExternalCreditorAgentInstruction1Code 
export type ExternalCreditorAgentInstruction1Code = string;

// ExternalDiscountAmountType1Code 
export type ExternalDiscountAmountType1Code = string;

// ExternalDocumentLineType1Code 
export type ExternalDocumentLineType1Code = string;

// ExternalFinancialInstitutionIdentification1Code 
export type ExternalFinancialInstitutionIdentification1Code = string;

// ExternalGarnishmentType1Code 
export type ExternalGarnishmentType1Code = string;

// ExternalLocalInstrument1Code 
export type ExternalLocalInstrument1Code = string;

// ExternalMandateSetupReason1Code 
export type ExternalMandateSetupReason1Code = string;

// ExternalOrganisationIdentification1Code 
export type ExternalOrganisationIdentification1Code = string;

// ExternalPersonIdentification1Code 
export type ExternalPersonIdentification1Code = string;

// ExternalProxyAccountType1Code 
export type ExternalProxyAccountType1Code = string;

// ExternalPurpose1Code 
export type ExternalPurpose1Code = string;

// ExternalServiceLevel1Code 
export type ExternalServiceLevel1Code = string;

// ExternalTaxAmountType1Code 
export type ExternalTaxAmountType1Code = string;

// FinancialIdentificationSchemeName1Choice 
export class FinancialIdentificationSchemeName1Choice {
	Cd: string;
	Prtry: string;
}

// FinancialInstitutionIdentification18 
export class FinancialInstitutionIdentification18 {
	BICFI: string;
	ClrSysMmbId: ClearingSystemMemberIdentification2;
	LEI: string;
	Nm: string;
	PstlAdr: PostalAddress24;
	Othr: GenericFinancialIdentification1;
}

// Frequency36Choice 
export class Frequency36Choice {
	Tp: string;
	Prd: FrequencyPeriod1;
	PtInTm: FrequencyAndMoment1;
}

// Frequency6Code 
export enum Frequency6Code {
	YEAR = 'YEAR',
	MNTH = 'MNTH',
	QURT = 'QURT',
	MIAN = 'MIAN',
	WEEK = 'WEEK',
	DAIL = 'DAIL',
	ADHO = 'ADHO',
	INDA = 'INDA',
	FRTN = 'FRTN',
}

// FrequencyAndMoment1 
export class FrequencyAndMoment1 {
	Tp: string;
	PtInTm: string;
}

// FrequencyPeriod1 
export class FrequencyPeriod1 {
	Tp: string;
	CntPerPrd: number;
}

// Garnishment3 
export class Garnishment3 {
	Tp: GarnishmentType1;
	Grnshee: PartyIdentification135;
	GrnshmtAdmstr: PartyIdentification135;
	RefNb: string;
	Dt: string;
	RmtdAmt: ActiveOrHistoricCurrencyAndAmount;
	FmlyMdclInsrncInd: boolean;
	MplyeeTermntnInd: boolean;
}

// GarnishmentType1 
export class GarnishmentType1 {
	CdOrPrtry: GarnishmentType1Choice;
	Issr: string;
}

// GarnishmentType1Choice 
export class GarnishmentType1Choice {
	Cd: string;
	Prtry: string;
}

// GenericAccountIdentification1 
export class GenericAccountIdentification1 {
	Id: string;
	SchmeNm: AccountSchemeName1Choice;
	Issr: string;
}

// GenericFinancialIdentification1 
export class GenericFinancialIdentification1 {
	Id: string;
	SchmeNm: FinancialIdentificationSchemeName1Choice;
	Issr: string;
}

// GenericIdentification30 
export class GenericIdentification30 {
	Id: string;
	Issr: string;
	SchmeNm: string;
}

// GenericOrganisationIdentification1 
export class GenericOrganisationIdentification1 {
	Id: string;
	SchmeNm: OrganisationIdentificationSchemeName1Choice;
	Issr: string;
}

// GenericPersonIdentification1 
export class GenericPersonIdentification1 {
	Id: string;
	SchmeNm: PersonIdentificationSchemeName1Choice;
	Issr: string;
}

// IBAN2007Identifier 
export type IBAN2007Identifier = string;

// ISODate 
export type ISODate = string;

// ISODateTime 
export type ISODateTime = string;

// ISOYear 
export type ISOYear = string;

// Instruction4Code 
export enum Instruction4Code {
	PHOA = 'PHOA',
	TELA = 'TELA',
}

// InstructionForAssignee1 
export class InstructionForAssignee1 {
	Cd: string;
	InstrInf: string;
}

// InstructionForCreditorAgent3 
export class InstructionForCreditorAgent3 {
	Cd: string;
	InstrInf: string;
}

// InstructionForNextAgent1 
export class InstructionForNextAgent1 {
	Cd: string;
	InstrInf: string;
}

// LEIIdentifier 
export type LEIIdentifier = string;

// LocalInstrument2Choice 
export class LocalInstrument2Choice {
	Cd: string;
	Prtry: string;
}

// MandateClassification1Choice 
export class MandateClassification1Choice {
	Cd: string;
	Prtry: string;
}

// MandateClassification1Code 
export enum MandateClassification1Code {
	FIXE = 'FIXE',
	USGB = 'USGB',
	VARI = 'VARI',
}

// MandateRelatedData2Choice 
export class MandateRelatedData2Choice {
	DrctDbtMndt: MandateRelatedInformation15;
	CdtTrfMndt: CreditTransferMandateData1;
}

// MandateRelatedInformation15 
export class MandateRelatedInformation15 {
	MndtId: string;
	DtOfSgntr: string;
	AmdmntInd: boolean;
	AmdmntInfDtls: AmendmentInformationDetails14;
	ElctrncSgntr: string;
	FrstColltnDt: string;
	FnlColltnDt: string;
	Frqcy: Frequency36Choice;
	Rsn: MandateSetupReason1Choice;
	TrckgDays: string;
}

// MandateSetupReason1Choice 
export class MandateSetupReason1Choice {
	Cd: string;
	Prtry: string;
}

// MandateTypeInformation2 
export class MandateTypeInformation2 {
	SvcLvl: ServiceLevel8Choice;
	LclInstrm: LocalInstrument2Choice;
	CtgyPurp: CategoryPurpose1Choice;
	Clssfctn: MandateClassification1Choice;
}

// Max1025Text 
export type Max1025Text = string;

// Max10KBinary 
export type Max10KBinary = Uint8Array;

// Max128Text 
export type Max128Text = string;

// Max140Text 
export type Max140Text = string;

// Max16Text 
export type Max16Text = string;

// Max2048Text 
export type Max2048Text = string;

// Max34Text 
export type Max34Text = string;

// Max350Text 
export type Max350Text = string;

// Max35Text 
export type Max35Text = string;

// Max4Text 
export type Max4Text = string;

// Max70Text 
export type Max70Text = string;

// NameAndAddress16 
export class NameAndAddress16 {
	Nm: string;
	Adr: PostalAddress24;
}

// NamePrefix2Code 
export enum NamePrefix2Code {
	DOCT = 'DOCT',
	MADM = 'MADM',
	MISS = 'MISS',
	MIST = 'MIST',
	MIKS = 'MIKS',
}

// Number 
export type Number = number;

// OrganisationIdentification29 
export class OrganisationIdentification29 {
	AnyBIC: string;
	LEI: string;
	Othr: Array<GenericOrganisationIdentification1>;
}

// OrganisationIdentificationSchemeName1Choice 
export class OrganisationIdentificationSchemeName1Choice {
	Cd: string;
	Prtry: string;
}

// OriginalGroupInformation29 
export class OriginalGroupInformation29 {
	OrgnlMsgId: string;
	OrgnlMsgNmId: string;
	OrgnlCreDtTm: string;
}

// OriginalTransactionReference35 
export class OriginalTransactionReference35 {
	IntrBkSttlmAmt: ActiveOrHistoricCurrencyAndAmount;
	Amt: AmountType4Choice;
	IntrBkSttlmDt: string;
	ReqdColltnDt: string;
	ReqdExctnDt: DateAndDateTime2Choice;
	CdtrSchmeId: PartyIdentification135;
	SttlmInf: SettlementInstruction11;
	PmtTpInf: PaymentTypeInformation27;
	PmtMtd: string;
	MndtRltdInf: MandateRelatedData2Choice;
	RmtInf: RemittanceInformation21;
	UltmtDbtr: Party40Choice;
	Dbtr: Party40Choice;
	DbtrAcct: CashAccount40;
	DbtrAgt: BranchAndFinancialInstitutionIdentification6;
	DbtrAgtAcct: CashAccount40;
	CdtrAgt: BranchAndFinancialInstitutionIdentification6;
	CdtrAgtAcct: CashAccount40;
	Cdtr: Party40Choice;
	CdtrAcct: CashAccount40;
	UltmtCdtr: Party40Choice;
	Purp: Purpose2Choice;
}

// OtherContact1 
export class OtherContact1 {
	ChanlTp: string;
	Id: string;
}

// Party38Choice 
export class Party38Choice {
	OrgId: OrganisationIdentification29;
	PrvtId: PersonIdentification13;
}

// Party40Choice 
export class Party40Choice {
	Pty: PartyIdentification135;
	Agt: BranchAndFinancialInstitutionIdentification6;
}

// PartyIdentification135 
export class PartyIdentification135 {
	Nm: string;
	PstlAdr: PostalAddress24;
	Id: Party38Choice;
	CtryOfRes: string;
	CtctDtls: Contact4;
}

// PaymentMethod4Code 
export enum PaymentMethod4Code {
	CHK = 'CHK',
	TRF = 'TRF',
	DD = 'DD',
	TRA = 'TRA',
}

// PaymentTypeInformation27 
export class PaymentTypeInformation27 {
	InstrPrty: string;
	ClrChanl: string;
	SvcLvl: Array<ServiceLevel8Choice>;
	LclInstrm: LocalInstrument2Choice;
	SeqTp: string;
	CtgyPurp: CategoryPurpose1Choice;
}

// PercentageRate 
export type PercentageRate = number;

// PersonIdentification13 
export class PersonIdentification13 {
	DtAndPlcOfBirth: DateAndPlaceOfBirth1;
	Othr: Array<GenericPersonIdentification1>;
}

// PersonIdentificationSchemeName1Choice 
export class PersonIdentificationSchemeName1Choice {
	Cd: string;
	Prtry: string;
}

// PhoneNumber 
export type PhoneNumber = string;

// PostalAddress24 
export class PostalAddress24 {
	AdrTp: AddressType3Choice;
	Dept: string;
	SubDept: string;
	StrtNm: string;
	BldgNb: string;
	BldgNm: string;
	Flr: string;
	PstBx: string;
	Room: string;
	PstCd: string;
	TwnNm: string;
	TwnLctnNm: string;
	DstrctNm: string;
	CtrySubDvsn: string;
	Ctry: string;
	AdrLine: string;
}

// PreferredContactMethod1Code 
export enum PreferredContactMethod1Code {
	LETT = 'LETT',
	MAIL = 'MAIL',
	PHON = 'PHON',
	FAXX = 'FAXX',
	CELL = 'CELL',
}

// Priority2Code 
export enum Priority2Code {
	HIGH = 'HIGH',
	NORM = 'NORM',
}

// ProxyAccountIdentification1 
export class ProxyAccountIdentification1 {
	Tp: ProxyAccountType1Choice;
	Id: string;
}

// ProxyAccountType1Choice 
export class ProxyAccountType1Choice {
	Cd: string;
	Prtry: string;
}

// Purpose2Choice 
export class Purpose2Choice {
	Cd: string;
	Prtry: string;
}

// ReferredDocumentInformation7 
export class ReferredDocumentInformation7 {
	Tp: ReferredDocumentType4;
	Nb: string;
	RltdDt: string;
	LineDtls: Array<DocumentLineInformation1>;
}

// ReferredDocumentType3Choice 
export class ReferredDocumentType3Choice {
	Cd: string;
	Prtry: string;
}

// ReferredDocumentType4 
export class ReferredDocumentType4 {
	CdOrPrtry: ReferredDocumentType3Choice;
	Issr: string;
}

// RemittanceAmount2 
export class RemittanceAmount2 {
	DuePyblAmt: ActiveOrHistoricCurrencyAndAmount;
	DscntApldAmt: Array<DiscountAmountAndType1>;
	CdtNoteAmt: ActiveOrHistoricCurrencyAndAmount;
	TaxAmt: Array<TaxAmountAndType1>;
	AdjstmntAmtAndRsn: Array<DocumentAdjustment1>;
	RmtdAmt: ActiveOrHistoricCurrencyAndAmount;
}

// RemittanceAmount3 
export class RemittanceAmount3 {
	DuePyblAmt: ActiveOrHistoricCurrencyAndAmount;
	DscntApldAmt: Array<DiscountAmountAndType1>;
	CdtNoteAmt: ActiveOrHistoricCurrencyAndAmount;
	TaxAmt: Array<TaxAmountAndType1>;
	AdjstmntAmtAndRsn: Array<DocumentAdjustment1>;
	RmtdAmt: ActiveOrHistoricCurrencyAndAmount;
}

// RemittanceInformation21 
export class RemittanceInformation21 {
	Ustrd: string;
	Strd: Array<StructuredRemittanceInformation17>;
}

// RemittanceLocation7 
export class RemittanceLocation7 {
	RmtId: string;
	RmtLctnDtls: Array<RemittanceLocationData1>;
}

// RemittanceLocationData1 
export class RemittanceLocationData1 {
	Mtd: string;
	ElctrncAdr: string;
	PstlAdr: NameAndAddress16;
}

// RemittanceLocationMethod2Code 
export enum RemittanceLocationMethod2Code {
	FAXI = 'FAXI',
	EDIC = 'EDIC',
	URID = 'URID',
	EMAL = 'EMAL',
	POST = 'POST',
	SMSM = 'SMSM',
}

// RequestToModifyPaymentV08 
export class RequestToModifyPaymentV08 {
	Assgnmt: CaseAssignment5;
	Case: Case5;
	Undrlyg: UnderlyingTransaction7Choice;
	Mod: RequestedModification10;
	InstrForAssgne: InstructionForAssignee1;
	SplmtryData: Array<SupplementaryData1>;
}

// RequestedModification10 
export class RequestedModification10 {
	InstrId: string;
	EndToEndId: string;
	TxId: string;
	PmtTpInf: PaymentTypeInformation27;
	ReqdExctnDt: DateAndDateTime2Choice;
	ReqdColltnDt: string;
	IntrBkSttlmDt: string;
	SttlmTmIndctn: SettlementDateTimeIndication1;
	Amt: AmountType4Choice;
	IntrBkSttlmAmt: ActiveOrHistoricCurrencyAndAmount;
	ChrgBr: string;
	UltmtDbtr: PartyIdentification135;
	Dbtr: PartyIdentification135;
	DbtrAcct: CashAccount40;
	DbtrAgtAcct: CashAccount40;
	SttlmInf: SettlementInstruction13;
	CdtrAgtAcct: CashAccount40;
	Cdtr: PartyIdentification135;
	CdtrAcct: CashAccount40;
	UltmtCdtr: PartyIdentification135;
	Purp: Purpose2Choice;
	InstrForDbtrAgt: string;
	InstrForNxtAgt: Array<InstructionForNextAgent1>;
	InstrForCdtrAgt: Array<InstructionForCreditorAgent3>;
	RltdRmtInf: Array<RemittanceLocation7>;
	RmtInf: RemittanceInformation21;
}

// SequenceType3Code 
export enum SequenceType3Code {
	FRST = 'FRST',
	RCUR = 'RCUR',
	FNAL = 'FNAL',
	OOFF = 'OOFF',
	RPRE = 'RPRE',
}

// ServiceLevel8Choice 
export class ServiceLevel8Choice {
	Cd: string;
	Prtry: string;
}

// SettlementDateTimeIndication1 
export class SettlementDateTimeIndication1 {
	DbtDtTm: string;
	CdtDtTm: string;
}

// SettlementInstruction11 
export class SettlementInstruction11 {
	SttlmMtd: string;
	SttlmAcct: CashAccount40;
	ClrSys: ClearingSystemIdentification3Choice;
	InstgRmbrsmntAgt: BranchAndFinancialInstitutionIdentification6;
	InstgRmbrsmntAgtAcct: CashAccount40;
	InstdRmbrsmntAgt: BranchAndFinancialInstitutionIdentification6;
	InstdRmbrsmntAgtAcct: CashAccount40;
	ThrdRmbrsmntAgt: BranchAndFinancialInstitutionIdentification6;
	ThrdRmbrsmntAgtAcct: CashAccount40;
}

// SettlementInstruction13 
export class SettlementInstruction13 {
	InstgRmbrsmntAgt: BranchAndFinancialInstitutionIdentification6;
	InstgRmbrsmntAgtAcct: CashAccount40;
	InstdRmbrsmntAgt: BranchAndFinancialInstitutionIdentification6;
	InstdRmbrsmntAgtAcct: CashAccount40;
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

// StructuredRemittanceInformation17 
export class StructuredRemittanceInformation17 {
	RfrdDocInf: Array<ReferredDocumentInformation7>;
	RfrdDocAmt: RemittanceAmount2;
	CdtrRefInf: CreditorReferenceInformation2;
	Invcr: PartyIdentification135;
	Invcee: PartyIdentification135;
	TaxRmt: TaxData1;
	GrnshmtRmt: Garnishment3;
	AddtlRmtInf: string;
}

// SupplementaryData1 
export class SupplementaryData1 {
	PlcAndNm: string;
	Envlp: SupplementaryDataEnvelope1;
}

// SupplementaryDataEnvelope1 
export class SupplementaryDataEnvelope1 {
}

// TaxAmount3 
export class TaxAmount3 {
	Rate: number;
	TaxblBaseAmt: ActiveOrHistoricCurrencyAndAmount;
	TtlAmt: ActiveOrHistoricCurrencyAndAmount;
	Dtls: Array<TaxRecordDetails3>;
}

// TaxAmountAndType1 
export class TaxAmountAndType1 {
	Tp: TaxAmountType1Choice;
	Amt: ActiveOrHistoricCurrencyAndAmount;
}

// TaxAmountType1Choice 
export class TaxAmountType1Choice {
	Cd: string;
	Prtry: string;
}

// TaxAuthorisation1 
export class TaxAuthorisation1 {
	Titl: string;
	Nm: string;
}

// TaxData1 
export class TaxData1 {
	Cdtr: TaxParty1;
	Dbtr: TaxParty2;
	UltmtDbtr: TaxParty2;
	AdmstnZone: string;
	RefNb: string;
	Mtd: string;
	TtlTaxblBaseAmt: ActiveOrHistoricCurrencyAndAmount;
	TtlTaxAmt: ActiveOrHistoricCurrencyAndAmount;
	Dt: string;
	SeqNb: number;
	Rcrd: Array<TaxRecord3>;
}

// TaxParty1 
export class TaxParty1 {
	TaxId: string;
	RegnId: string;
	TaxTp: string;
}

// TaxParty2 
export class TaxParty2 {
	TaxId: string;
	RegnId: string;
	TaxTp: string;
	Authstn: TaxAuthorisation1;
}

// TaxPeriod3 
export class TaxPeriod3 {
	Yr: string;
	Tp: string;
	FrToDt: DatePeriod2;
}

// TaxRecord3 
export class TaxRecord3 {
	Tp: string;
	Ctgy: string;
	CtgyDtls: string;
	DbtrSts: string;
	CertId: string;
	FrmsCd: string;
	Prd: TaxPeriod3;
	TaxAmt: TaxAmount3;
	AddtlInf: string;
}

// TaxRecordDetails3 
export class TaxRecordDetails3 {
	Prd: TaxPeriod3;
	Amt: ActiveOrHistoricCurrencyAndAmount;
}

// TaxRecordPeriod1Code 
export enum TaxRecordPeriod1Code {
	MM01 = 'MM01',
	MM02 = 'MM02',
	MM03 = 'MM03',
	MM04 = 'MM04',
	MM05 = 'MM05',
	MM06 = 'MM06',
	MM07 = 'MM07',
	MM08 = 'MM08',
	MM09 = 'MM09',
	MM10 = 'MM10',
	MM11 = 'MM11',
	MM12 = 'MM12',
	QTR1 = 'QTR1',
	QTR2 = 'QTR2',
	QTR3 = 'QTR3',
	QTR4 = 'QTR4',
	HLF1 = 'HLF1',
	HLF2 = 'HLF2',
}

// TrueFalseIndicator 
export type TrueFalseIndicator = boolean;

// UUIDv4Identifier 
export type UUIDv4Identifier = string;

// UnderlyingGroupInformation1 
export class UnderlyingGroupInformation1 {
	OrgnlMsgId: string;
	OrgnlMsgNmId: string;
	OrgnlCreDtTm: string;
	OrgnlMsgDlvryChanl: string;
}

// UnderlyingPaymentInstruction7 
export class UnderlyingPaymentInstruction7 {
	OrgnlGrpInf: UnderlyingGroupInformation1;
	OrgnlPmtInfId: string;
	OrgnlInstrId: string;
	OrgnlEndToEndId: string;
	OrgnlUETR: string;
	OrgnlInstdAmt: ActiveOrHistoricCurrencyAndAmount;
	ReqdExctnDt: DateAndDateTime2Choice;
	ReqdColltnDt: string;
	OrgnlTxRef: OriginalTransactionReference35;
}

// UnderlyingPaymentTransaction6 
export class UnderlyingPaymentTransaction6 {
	OrgnlGrpInf: UnderlyingGroupInformation1;
	OrgnlInstrId: string;
	OrgnlEndToEndId: string;
	OrgnlTxId: string;
	OrgnlUETR: string;
	OrgnlIntrBkSttlmAmt: ActiveOrHistoricCurrencyAndAmount;
	OrgnlIntrBkSttlmDt: string;
	OrgnlTxRef: OriginalTransactionReference35;
}

// UnderlyingStatementEntry3 
export class UnderlyingStatementEntry3 {
	OrgnlGrpInf: OriginalGroupInformation29;
	OrgnlStmtId: string;
	OrgnlNtryId: string;
	OrgnlUETR: string;
}

// UnderlyingTransaction7Choice 
export class UnderlyingTransaction7Choice {
	Initn: UnderlyingPaymentInstruction7;
	IntrBk: UnderlyingPaymentTransaction6;
	StmtNtry: UnderlyingStatementEntry3;
}

// YesNoIndicator 
export type YesNoIndicator = boolean;
