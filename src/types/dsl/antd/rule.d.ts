export type StoreValue = any;
export type RuleType =
  | "string"
  | "number"
  | "boolean"
  | "method"
  | "regexp"
  | "integer"
  | "float"
  | "object"
  | "enum"
  | "date"
  | "url"
  | "hex"
  | "email";

export interface BaseRule {
  warningOnly?: boolean;
  enum?: StoreValue[];
  len?: number;
  max?: number;
  message?: string;
  min?: number;
  pattern?: RegExp;
  required?: boolean;
  type?: RuleType;
  whitespace?: boolean;
  /** Customize rule level `validateTrigger`. Must be subset of Field `validateTrigger` */
  validateTrigger?: string | string[];
}

export type AggregationRule = BaseRule & Partial<ValidatorRule>;

export interface ArrayRule extends Omit<AggregationRule, "type"> {
  type: "array";
  defaultField?: RuleObject;
}

export type RuleObject = AggregationRule | ArrayRule;

export interface ValidatorRule {
  warningOnly?: boolean;
  message?: string;
}
