/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_SHAZAM_CORE_RAPID_API_KEY: string;
	readonly VITE_GEO_API_KEY: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
