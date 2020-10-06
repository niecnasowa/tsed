import {OpenSpecExternalDocs} from "../openspec2/OpenSpec2";

export interface OpenSpecTag {
  name: string;
  description?: string;
  externalDocs?: OpenSpecExternalDocs;
}
