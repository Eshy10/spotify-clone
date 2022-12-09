export interface Artist {
	data: Datum9[];
}

interface Datum9 {
	id: string;
	type: string;
	href: string;
	attributes: Attributes;
	relationships: Relationships;
	views: Views;
	meta: Meta2;
}

interface Meta2 {
	views: Views2;
}

interface Views2 {
	order: string[];
}

interface Views {
	'similar-artists': Similarartists;
	'latest-release': Latestrelease;
	'full-albums': Fullalbums;
	'top-music-videos': Topmusicvideos;
	'top-songs': Topsongs;
	'featured-albums': Featuredalbums;
	playlists: Playlists;
}

interface Playlists {
	href: string;
	next: string;
	attributes: Attributes2;
	data: Datum8[];
}

interface Datum8 {
	id: string;
	type: string;
	href: string;
	attributes: Attributes9;
}

interface Attributes9 {
	curatorName: string;
	lastModifiedDate: string;
	audioTraits: any[];
	editorialArtwork: EditorialArtwork8;
	name: string;
	isChart: boolean;
	playlistType: string;
	description: EditorialNotes3;
	editorialNotes: EditorialNotes4;
	artwork: OriginalFlowcaseBrick;
	url: string;
	playParams: PlayParams2;
}

interface PlayParams2 {
	id: string;
	kind: string;
	versionHash: string;
}

interface EditorialNotes4 {
	name: string;
	standard: string;
	short: string;
}

interface EditorialArtwork8 {
	subscriptionHero: OriginalFlowcaseBrick;
	subscriptionCover: OriginalFlowcaseBrick;
}

interface Featuredalbums {
	href: string;
	attributes: Attributes2;
	data: Datum7[];
}

interface Datum7 {
	id: string;
	type: string;
	href: string;
	attributes: Attributes8;
}

interface Attributes8 {
	copyright: string;
	genreNames: string[];
	releaseDate: string;
	upc: string;
	isMasteredForItunes: boolean;
	artwork: OriginalFlowcaseBrick;
	playParams: PlayParams;
	url: string;
	recordLabel: string;
	trackCount: number;
	isCompilation: boolean;
	isPrerelease: boolean;
	audioTraits: string[];
	editorialArtwork: EditorialArtwork7;
	isSingle: boolean;
	name: string;
	artistName: string;
	isComplete: boolean;
	editorialNotes?: EditorialNotes3;
}

interface EditorialNotes3 {
	standard: string;
	short: string;
}

interface EditorialArtwork7 {
	storeFlowcase: OriginalFlowcaseBrick;
	subscriptionHero: OriginalFlowcaseBrick;
	originalFlowcaseBrick?: OriginalFlowcaseBrick;
	bannerUber?: OriginalFlowcaseBrick;
	staticDetailSquare?: OriginalFlowcaseBrick;
	staticDetailTall?: StaticDetailTall;
}

interface Topsongs {
	href: string;
	next: string;
	attributes: Attributes2;
	data: Datum6[];
}

interface Datum6 {
	id: string;
	type: string;
	href: string;
	attributes: Attributes7;
	meta?: Meta;
}

interface Meta {
	formerIds: string[];
}

interface Attributes7 {
	hasTimeSyncedLyrics: boolean;
	albumName: string;
	genreNames: string[];
	trackNumber: number;
	releaseDate: string;
	durationInMillis: number;
	isVocalAttenuationAllowed: boolean;
	isMasteredForItunes: boolean;
	isrc: string;
	artwork: OriginalFlowcaseBrick;
	audioLocale: string;
	composerName: string;
	playParams: PlayParams;
	url: string;
	discNumber: number;
	isAppleDigitalMaster: boolean;
	hasLyrics: boolean;
	audioTraits: string[];
	editorialArtwork: EditorialArtwork6;
	name: string;
	previews: Preview2[];
	artistName: string;
}

interface Preview2 {
	url: string;
}

interface EditorialArtwork6 {
	subscriptionHero?: OriginalFlowcaseBrick;
}

interface Topmusicvideos {
	href: string;
	next: string;
	attributes: Attributes2;
	data: Datum5[];
}

interface Datum5 {
	id: string;
	type: string;
	href: string;
	attributes: Attributes6;
}

interface Attributes6 {
	albumName: string;
	genreNames: string[];
	trackNumber: number;
	releaseDate: string;
	durationInMillis: number;
	isrc: string;
	artwork: OriginalFlowcaseBrick;
	url: string;
	playParams: PlayParams;
	editorialArtwork: {};
	has4K: boolean;
	hasHDR: boolean;
	name: string;
	previews: Preview[];
	artistName: string;
}

interface Preview {
	url: string;
	hlsUrl: string;
	artwork: OriginalFlowcaseBrick;
}

// interface EditorialArtwork5 {}

interface Fullalbums {
	href: string;
	next: string;
	attributes: Attributes2;
	data: Datum4[];
}

interface Datum4 {
	id: string;
	type: string;
	href: string;
	attributes: Attributes5;
}

interface Attributes5 {
	copyright: string;
	genreNames: string[];
	releaseDate: string;
	isMasteredForItunes: boolean;
	upc: string;
	artwork: OriginalFlowcaseBrick;
	url: string;
	playParams: PlayParams;
	recordLabel: string;
	trackCount: number;
	isCompilation: boolean;
	isPrerelease: boolean;
	audioTraits: string[];
	editorialArtwork: EditorialArtwork4;
	isSingle: boolean;
	name: string;
	artistName: string;
	editorialNotes?: EditorialNotes2;
	isComplete: boolean;
}

interface EditorialNotes2 {
	standard: string;
	short: string;
	tagline?: string;
}

interface EditorialArtwork4 {
	storeFlowcase?: OriginalFlowcaseBrick;
	subscriptionHero?: OriginalFlowcaseBrick;
	superHeroTall?: OriginalFlowcaseBrick;
	staticDetailSquare?: OriginalFlowcaseBrick;
	staticDetailTall?: StaticDetailTall;
	originalFlowcaseBrick?: OriginalFlowcaseBrick;
	bannerUber?: OriginalFlowcaseBrick;
}

interface Latestrelease {
	href: string;
	attributes: Attributes2;
	data: Datum3[];
}

interface Datum3 {
	id: string;
	type: string;
	href: string;
	attributes: Attributes4;
}

interface Attributes4 {
	copyright: string;
	genreNames: string[];
	releaseDate: string;
	isMasteredForItunes: boolean;
	upc: string;
	artwork: OriginalFlowcaseBrick;
	playParams: PlayParams;
	url: string;
	recordLabel: string;
	isCompilation: boolean;
	trackCount: number;
	isPrerelease: boolean;
	audioTraits: string[];
	editorialArtwork: EditorialArtwork3;
	isSingle: boolean;
	name: string;
	artistName: string;
	editorialNotes: EditorialNotes;
	isComplete: boolean;
}

interface EditorialNotes {
	standard: string;
	short: string;
	tagline: string;
}

interface EditorialArtwork3 {
	superHeroTall: OriginalFlowcaseBrick;
	storeFlowcase: OriginalFlowcaseBrick;
	subscriptionHero: OriginalFlowcaseBrick;
	staticDetailSquare: OriginalFlowcaseBrick;
	staticDetailTall: StaticDetailTall;
}

interface StaticDetailTall {
	width: number;
	url: string;
	textGradient: string[];
	height: number;
	textColor3: string;
	textColor2: string;
	textColor4: string;
	textColor1: string;
	bgColor: string;
	hasP3: boolean;
}

interface PlayParams {
	id: string;
	kind: string;
}

interface Similarartists {
	href: string;
	next: string;
	attributes: Attributes2;
	data: Datum2[];
}

interface Datum2 {
	id: string;
	type: string;
	href: string;
	attributes: Attributes3;
	relationships: Relationships2;
}

interface Relationships2 {
	albums: Albums2;
}

interface Albums2 {
	href: string;
	data: Datum[];
	next?: string;
}

interface Attributes3 {
	genreNames: string[];
	editorialArtwork: EditorialArtwork2;
	name: string;
	url: string;
	artwork?: OriginalFlowcaseBrick;
	origin?: string;
	artistBio?: string;
	bornOrFormed?: string;
}

interface EditorialArtwork2 {
	originalFlowcaseBrick?: OriginalFlowcaseBrick;
	storeFlowcase?: OriginalFlowcaseBrick;
	subscriptionHero?: OriginalFlowcaseBrick;
	centeredFullscreenBackground?: OriginalFlowcaseBrick;
	bannerUber?: OriginalFlowcaseBrick;
}

interface Attributes2 {
	title: string;
}

interface Relationships {
	albums: Albums;
}

interface Albums {
	href: string;
	next: string;
	data: Datum[];
}

interface Datum {
	id: string;
	type: string;
	href: string;
}

interface Attributes {
	bornOrFormed: string;
	genreNames: string[];
	editorialArtwork: EditorialArtwork;
	origin: string;
	name: string;
	artwork: OriginalFlowcaseBrick;
	url: string;
	artistBio: string;
}

interface EditorialArtwork {
	originalFlowcaseBrick: OriginalFlowcaseBrick;
	centeredFullscreenBackground: OriginalFlowcaseBrick;
	storeFlowcase: OriginalFlowcaseBrick;
	subscriptionHero: OriginalFlowcaseBrick;
	bannerUber: OriginalFlowcaseBrick;
	vipSquare: OriginalFlowcaseBrick;
}

interface OriginalFlowcaseBrick {
	width: number;
	url: string;
	height: number;
	textColor3: string;
	textColor2: string;
	textColor4: string;
	textColor1: string;
	bgColor: string;
	hasP3: boolean;
}
