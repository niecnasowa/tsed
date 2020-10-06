import {OS2Types} from "../openspec2/OS2Types";

export type OpenSpecBaseSchema = {
  title?: string;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  enum?: any[];
  description?: string;
  default?: any;
  format?: string;
  type?: OS2Types;
};
