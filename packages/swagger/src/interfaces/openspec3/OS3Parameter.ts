export type OS3BaseParameter = {
  name: string;
  in: "body" | "query" | "path" | "header" | "formData";
  required?: boolean;
};

export type OS3Parameter = OS3BaseParameter;
