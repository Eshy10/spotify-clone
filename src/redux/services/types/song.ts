export interface Song {
	layout: string;
	type: string;
	key: string;
	title: string;
	subtitle: string;
	images: Images;
	share: Share;
	hub: Hub;
	sections: Section[];
	url: string;
	artists: Artist[];
	alias: string;
	isrc: string;
	genres: Genres;
	urlparams: Urlparams;
	highlightsurls: {};
	albumadamid: string;
	trackadamid: string;
	releasedate: string;
}

interface Urlparams {
	'{tracktitle}': string;
	'{trackartist}': string;
}

interface Genres {
	primary: string;
}

interface Artist {
	alias: string;
	id: string;
	adamid: string;
}

interface Section {
	type: string;
	metapages?: Metapage[];
	tabname: string;
	metadata?: Metadatum[];
}

interface Metadatum {
	title: string;
	text: string;
}

interface Metapage {
	image: string;
	caption: string;
}

interface Hub {
	type: string;
	image: string;
	actions: Action[];
	options: Option[];
	explicit: boolean;
	displayname: string;
}

interface Option {
	caption: string;
	actions: Action2[];
	beacondata: Beacondata;
	image: string;
	type: string;
	listcaption: string;
	overflowimage: string;
	colouroverflowimage: boolean;
	providername: string;
}

interface Beacondata {
	type: string;
	providername: string;
}

interface Action2 {
	name: string;
	type: string;
	uri: string;
}

interface Action {
	name: string;
	type: string;
	id?: string;
	uri?: string;
}

interface Share {
	subject: string;
	text: string;
	href: string;
	image: string;
	twitter: string;
	html: string;
	avatar: string;
	snapchat: string;
}

interface Images {
	background: string;
	coverart: string;
	coverarthq: string;
	joecolor: string;
}
