// IsSettled iso20022

// AppHdr 
export type AppHdr = BusinessApplicationHeaderV03;

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

// BusinessApplicationHeader7 
export class BusinessApplicationHeader7 {
	CharSet: string;
	Fr: Party44Choice;
	To: Party44Choice;
	BizMsgIdr: string;
	MsgDefIdr: string;
	BizSvc: string;
	MktPrctc: ImplementationSpecification1;
	CreDt: string;
	BizPrcgDt: string;
	CpyDplct: string;
	PssblDplct: boolean;
	Prty: string;
	Sgntr: SignatureEnvelope;
}

// BusinessApplicationHeaderV03 
export class BusinessApplicationHeaderV03 {
	CharSet: string;
	Fr: Party44Choice;
	To: Party44Choice;
	BizMsgIdr: string;
	MsgDefIdr: string;
	BizSvc: string;
	MktPrctc: ImplementationSpecification1;
	CreDt: string;
	BizPrcgDt: string;
	CpyDplct: string;
	PssblDplct: boolean;
	Prty: string;
	Sgntr: SignatureEnvelope;
	Rltd: Array<BusinessApplicationHeader7>;
}

// BusinessMessagePriorityCode 
export type BusinessMessagePriorityCode = string;

// ClearingSystemIdentification2Choice 
export class ClearingSystemIdentification2Choice {
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

// CopyDuplicate1Code 
export enum CopyDuplicate1Code {
	CODU = 'CODU',
	COPY = 'COPY',
	DUPL = 'DUPL',
}

// CountryCode 
export type CountryCode = string;

// DateAndPlaceOfBirth1 
export class DateAndPlaceOfBirth1 {
	BirthDt: string;
	PrvcOfBirth: string;
	CityOfBirth: string;
	CtryOfBirth: string;
}

// Exact4AlphaNumericText 
export type Exact4AlphaNumericText = string;

// ExternalClearingSystemIdentification1Code 
export type ExternalClearingSystemIdentification1Code = string;

// ExternalFinancialInstitutionIdentification1Code 
export type ExternalFinancialInstitutionIdentification1Code = string;

// ExternalOrganisationIdentification1Code 
export type ExternalOrganisationIdentification1Code = string;

// ExternalPersonIdentification1Code 
export type ExternalPersonIdentification1Code = string;

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

// ISODate 
export type ISODate = string;

// ISODateTime 
export type ISODateTime = string;

// ImplementationSpecification1 
export class ImplementationSpecification1 {
	Regy: string;
	Id: string;
}

// LEIIdentifier 
export type LEIIdentifier = string;

// Max128Text 
export type Max128Text = string;

// Max140Text 
export type Max140Text = string;

// Max16Text 
export type Max16Text = string;

// Max2048Text 
export type Max2048Text = string;

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

// Party44Choice 
export class Party44Choice {
	OrgId: PartyIdentification135;
	FIId: BranchAndFinancialInstitutionIdentification6;
}

// PartyIdentification135 
export class PartyIdentification135 {
	Nm: string;
	PstlAdr: PostalAddress24;
	Id: Party38Choice;
	CtryOfRes: string;
	CtctDtls: Contact4;
}

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

// SignatureEnvelope 
export class SignatureEnvelope {
}

// UnicodeChartsCode 
export type UnicodeChartsCode = string;

// YesNoIndicator 
export type YesNoIndicator = boolean;
