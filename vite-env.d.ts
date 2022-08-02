/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  [key: string]: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
