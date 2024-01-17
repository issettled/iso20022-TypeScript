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

// ActiveCurrencyAndAmount_SimpleType 
export type ActiveCurrencyAndAmount_SimpleType = number;

// ActiveCurrencyAndAmount 
export class ActiveCurrencyAndAmount {
	CcyAttr: string;
	Value: number;
}

// ActiveCurrencyCode 
export type ActiveCurrencyCode = string;

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

// AmendmentInformationDetails13 
export class AmendmentInformationDetails13 {
	OrgnlMndtId: string;
	OrgnlCdtrSchmeId: PartyIdentification135;
	OrgnlCdtrAgt: BranchAndFinancialInstitutionIdentification6;
	OrgnlCdtrAgtAcct: CashAccount38;
	OrgnlDbtr: PartyIdentification135;
	OrgnlDbtrAcct: CashAccount38;
	OrgnlDbtrAgt: BranchAndFinancialInstitutionIdentification6;
	OrgnlDbtrAgtAcct: CashAccount38;
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

// Authorisation1Choice 
export class Authorisation1Choice {
	Cd: string;
	Prtry: string;
}

// Authorisation1Code 
export enum Authorisation1Code {
	AUTH = 'AUTH',
	FDET = 'FDET',
	FSUM = 'FSUM',
	ILEV = 'ILEV',
}

// BICFIDec2014Identifier 
export type BICFIDec2014Identifier = string;

// BaseOneRate 
export type BaseOneRate = number;

// BatchBookingIndicator 
export type BatchBookingIndicator = boolean;

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

// CashAccount38 
export class CashAccount38 {
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

// Charges7 
export class Charges7 {
	Amt: ActiveOrHistoricCurrencyAndAmount;
	Agt: BranchAndFinancialInstitutionIdentification6;
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

// CreditTransferTransaction45 
export class CreditTransferTransaction45 {
	UltmtDbtr: PartyIdentification135;
	InitgPty: PartyIdentification135;
	Dbtr: PartyIdentification135;
	DbtrAcct: CashAccount38;
	DbtrAgt: BranchAndFinancialInstitutionIdentification6;
	DbtrAgtAcct: CashAccount38;
	PrvsInstgAgt1: BranchAndFinancialInstitutionIdentification6;
	PrvsInstgAgt1Acct: CashAccount38;
	PrvsInstgAgt2: BranchAndFinancialInstitutionIdentification6;
	PrvsInstgAgt2Acct: CashAccount38;
	PrvsInstgAgt3: BranchAndFinancialInstitutionIdentification6;
	PrvsInstgAgt3Acct: CashAccount38;
	IntrmyAgt1: BranchAndFinancialInstitutionIdentification6;
	IntrmyAgt1Acct: CashAccount38;
	IntrmyAgt2: BranchAndFinancialInstitutionIdentification6;
	IntrmyAgt2Acct: CashAccount38;
	IntrmyAgt3: BranchAndFinancialInstitutionIdentification6;
	IntrmyAgt3Acct: CashAccount38;
	CdtrAgt: BranchAndFinancialInstitutionIdentification6;
	CdtrAgtAcct: CashAccount38;
	Cdtr: PartyIdentification135;
	CdtrAcct: CashAccount38;
	UltmtCdtr: PartyIdentification135;
	InstrForCdtrAgt: Array<InstructionForCreditorAgent3>;
	InstrForNxtAgt: Array<InstructionForNextAgent1>;
	Tax: TaxInformation8;
	RmtInf: RemittanceInformation16;
	InstdAmt: ActiveOrHistoricCurrencyAndAmount;
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

// ExternalReturnReason1Code 
export type ExternalReturnReason1Code = string;

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

// GroupHeader90 
export class GroupHeader90 {
	MsgId: string;
	CreDtTm: string;
	Authstn: Array<Authorisation1Choice>;
	BtchBookg: boolean;
	NbOfTxs: string;
	CtrlSum: number;
	GrpRtr: boolean;
	TtlRtrdIntrBkSttlmAmt: ActiveCurrencyAndAmount;
	IntrBkSttlmDt: string;
	SttlmInf: SettlementInstruction7;
	InstgAgt: BranchAndFinancialInstitutionIdentification6;
	InstdAgt: BranchAndFinancialInstitutionIdentification6;
}

// IBAN2007Identifier 
export type IBAN2007Identifier = string;

// ISODate 
export type ISODate = string;

// ISODateTime 
export type ISODateTime = string;

// Instruction4Code 
export enum Instruction4Code {
	PHOA = 'PHOA',
	TELA = 'TELA',
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

// MandateRelatedData1Choice 
export class MandateRelatedData1Choice {
	DrctDbtMndt: MandateRelatedInformation14;
	CdtTrfMndt: CreditTransferMandateData1;
}

// MandateRelatedInformation14 
export class MandateRelatedInformation14 {
	MndtId: string;
	DtOfSgntr: string;
	AmdmntInd: boolean;
	AmdmntInfDtls: AmendmentInformationDetails13;
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

// Max105Text 
export type Max105Text = string;

// Max10KBinary 
export type Max10KBinary = Uint8Array;

// Max128Text 
export type Max128Text = string;

// Max140Text 
export type Max140Text = string;

// Max15NumericText 
export type Max15NumericText = string;

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

// OriginalGroupHeader18 
export class OriginalGroupHeader18 {
	OrgnlMsgId: string;
	OrgnlMsgNmId: string;
	OrgnlCreDtTm: string;
	RtrRsnInf: Array<PaymentReturnReason6>;
}

// OriginalGroupInformation29 
export class OriginalGroupInformation29 {
	OrgnlMsgId: string;
	OrgnlMsgNmId: string;
	OrgnlCreDtTm: string;
}

// OriginalTransactionReference32 
export class OriginalTransactionReference32 {
	IntrBkSttlmAmt: ActiveOrHistoricCurrencyAndAmount;
	Amt: AmountType4Choice;
	IntrBkSttlmDt: string;
	ReqdColltnDt: string;
	ReqdExctnDt: DateAndDateTime2Choice;
	CdtrSchmeId: PartyIdentification135;
	SttlmInf: SettlementInstruction7;
	PmtTpInf: PaymentTypeInformation27;
	PmtMtd: string;
	MndtRltdInf: MandateRelatedData1Choice;
	RmtInf: RemittanceInformation16;
	UltmtDbtr: Party40Choice;
	Dbtr: Party40Choice;
	DbtrAcct: CashAccount38;
	DbtrAgt: BranchAndFinancialInstitutionIdentification6;
	DbtrAgtAcct: CashAccount38;
	CdtrAgt: BranchAndFinancialInstitutionIdentification6;
	CdtrAgtAcct: CashAccount38;
	Cdtr: Party40Choice;
	CdtrAcct: CashAccount38;
	UltmtCdtr: Party40Choice;
	Purp: Purpose2Choice;
	UndrlygCstmrCdtTrf: CreditTransferTransaction45;
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

// PaymentReturnReason6 
export class PaymentReturnReason6 {
	Orgtr: PartyIdentification135;
	Rsn: ReturnReason5Choice;
	AddtlInf: string;
}

// PaymentReturnV10 
export class PaymentReturnV10 {
	GrpHdr: GroupHeader90;
	OrgnlGrpInf: OriginalGroupHeader18;
	TxInf: Array<PaymentTransaction118>;
	SplmtryData: Array<SupplementaryData1>;
}

// PaymentTransaction118 
export class PaymentTransaction118 {
	RtrId: string;
	OrgnlGrpInf: OriginalGroupInformation29;
	OrgnlInstrId: string;
	OrgnlEndToEndId: string;
	OrgnlTxId: string;
	OrgnlUETR: string;
	OrgnlClrSysRef: string;
	OrgnlIntrBkSttlmAmt: ActiveOrHistoricCurrencyAndAmount;
	OrgnlIntrBkSttlmDt: string;
	RtrdIntrBkSttlmAmt: ActiveCurrencyAndAmount;
	IntrBkSttlmDt: string;
	SttlmPrty: string;
	SttlmTmIndctn: SettlementDateTimeIndication1;
	RtrdInstdAmt: ActiveOrHistoricCurrencyAndAmount;
	XchgRate: number;
	CompstnAmt: ActiveOrHistoricCurrencyAndAmount;
	ChrgBr: string;
	ChrgsInf: Array<Charges7>;
	ClrSysRef: string;
	InstgAgt: BranchAndFinancialInstitutionIdentification6;
	InstdAgt: BranchAndFinancialInstitutionIdentification6;
	RtrChain: TransactionParties8;
	RtrRsnInf: Array<PaymentReturnReason6>;
	OrgnlTxRef: OriginalTransactionReference32;
	SplmtryData: Array<SupplementaryData1>;
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

// Priority3Code 
export enum Priority3Code {
	URGT = 'URGT',
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

// RemittanceInformation16 
export class RemittanceInformation16 {
	Ustrd: string;
	Strd: Array<StructuredRemittanceInformation16>;
}

// ReturnReason5Choice 
export class ReturnReason5Choice {
	Cd: string;
	Prtry: string;
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

// SettlementInstruction7 
export class SettlementInstruction7 {
	SttlmMtd: string;
	SttlmAcct: CashAccount38;
	ClrSys: ClearingSystemIdentification3Choice;
	InstgRmbrsmntAgt: BranchAndFinancialInstitutionIdentification6;
	InstgRmbrsmntAgtAcct: CashAccount38;
	InstdRmbrsmntAgt: BranchAndFinancialInstitutionIdentification6;
	InstdRmbrsmntAgtAcct: CashAccount38;
	ThrdRmbrsmntAgt: BranchAndFinancialInstitutionIdentification6;
	ThrdRmbrsmntAgtAcct: CashAccount38;
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

// StructuredRemittanceInformation16 
export class StructuredRemittanceInformation16 {
	RfrdDocInf: Array<ReferredDocumentInformation7>;
	RfrdDocAmt: RemittanceAmount2;
	CdtrRefInf: CreditorReferenceInformation2;
	Invcr: PartyIdentification135;
	Invcee: PartyIdentification135;
	TaxRmt: TaxInformation7;
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

// TaxAmount2 
export class TaxAmount2 {
	Rate: number;
	TaxblBaseAmt: ActiveOrHistoricCurrencyAndAmount;
	TtlAmt: ActiveOrHistoricCurrencyAndAmount;
	Dtls: Array<TaxRecordDetails2>;
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

// TaxInformation7 
export class TaxInformation7 {
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
	Rcrd: Array<TaxRecord2>;
}

// TaxInformation8 
export class TaxInformation8 {
	Cdtr: TaxParty1;
	Dbtr: TaxParty2;
	AdmstnZone: string;
	RefNb: string;
	Mtd: string;
	TtlTaxblBaseAmt: ActiveOrHistoricCurrencyAndAmount;
	TtlTaxAmt: ActiveOrHistoricCurrencyAndAmount;
	Dt: string;
	SeqNb: number;
	Rcrd: Array<TaxRecord2>;
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

// TaxPeriod2 
export class TaxPeriod2 {
	Yr: string;
	Tp: string;
	FrToDt: DatePeriod2;
}

// TaxRecord2 
export class TaxRecord2 {
	Tp: string;
	Ctgy: string;
	CtgyDtls: string;
	DbtrSts: string;
	CertId: string;
	FrmsCd: string;
	Prd: TaxPeriod2;
	TaxAmt: TaxAmount2;
	AddtlInf: string;
}

// TaxRecordDetails2 
export class TaxRecordDetails2 {
	Prd: TaxPeriod2;
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

// TransactionParties8 
export class TransactionParties8 {
	UltmtDbtr: Party40Choice;
	Dbtr: Party40Choice;
	DbtrAcct: CashAccount38;
	InitgPty: Party40Choice;
	DbtrAgt: BranchAndFinancialInstitutionIdentification6;
	DbtrAgtAcct: CashAccount38;
	PrvsInstgAgt1: BranchAndFinancialInstitutionIdentification6;
	PrvsInstgAgt1Acct: CashAccount38;
	PrvsInstgAgt2: BranchAndFinancialInstitutionIdentification6;
	PrvsInstgAgt2Acct: CashAccount38;
	PrvsInstgAgt3: BranchAndFinancialInstitutionIdentification6;
	PrvsInstgAgt3Acct: CashAccount38;
	IntrmyAgt1: BranchAndFinancialInstitutionIdentification6;
	IntrmyAgt1Acct: CashAccount38;
	IntrmyAgt2: BranchAndFinancialInstitutionIdentification6;
	IntrmyAgt2Acct: CashAccount38;
	IntrmyAgt3: BranchAndFinancialInstitutionIdentification6;
	IntrmyAgt3Acct: CashAccount38;
	CdtrAgt: BranchAndFinancialInstitutionIdentification6;
	CdtrAgtAcct: CashAccount38;
	Cdtr: Party40Choice;
	CdtrAcct: CashAccount38;
	UltmtCdtr: Party40Choice;
}

// TrueFalseIndicator 
export type TrueFalseIndicator = boolean;

// UUIDv4Identifier 
export type UUIDv4Identifier = string;
