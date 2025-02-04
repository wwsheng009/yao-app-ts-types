/**
 * Represents the query conditions used in QueryDSL.
 */
export interface Condition {
  /** Field in the query condition */
  field?: Expression | string;
  /** Operator for the condition */
  op?: string;
  /** Value to match against the field */
  value?: any;
  /** Logical OR operator flag */
  or?: boolean;
  /** Subquery for complex conditions */
  query?: QueryDSL;
  /** A comment regarding this query condition */
  comment?: string;

  /** Supported operators with their respective value types */
  "="?: any;
  ">"?: any;
  ">="?: any;
  "<"?: any;
  "<="?: any;
  "<>"?: any;
  like?: any;
  match?: any;
  in?: any;
  is?: null;
}

/**
 * Represents a where clause in QueryDSL.
 */
export interface Where extends Condition {
  /** Nested where clauses for complex conditions */
  wheres?: Where[];
}

/**
 * Represents an order condition in QueryDSL.
 */
export interface Order {
  /** Field by which to sort */
  field: Expression | string;
  /** Sort direction, e.g., ASC or DESC */
  sort?: string;
  /** A comment regarding this order condition */
  comment?: string;
}

/**
 * Represents an individual group in grouping conditions.
 */
export interface Group {
  /** Field to be grouped */
  field: Expression | string;
  /** Rollup field name for multi-level aggregation results */
  rollup?: string;
  /** A comment regarding this grouping condition */
  comment?: string;
}

/**
 * Represents a having clause in grouping results.
 */
export interface Having extends Condition {
  /** Nested having clauses for complex conditions */
  havings?: Having[];
}

/**
 * Represents a join condition between tables.
 */
export interface Join {
  /** Source table for the join */
  from: Table | string;
  /** Key field for the join */
  key: Expression | string;
  /** Foreign key field for the join */
  foreign: Expression | string;
  /** LEFT JOIN flag */
  left?: boolean;
  /** RIGHT JOIN flag */
  right?: boolean;
  /** A comment regarding this join condition */
  comment?: string;
}

/**
 * Represents a SQL statement.
 */
export interface SQL {
  /** SQL statement string */
  stmt?: string;
  /** List of bound parameters */
  args?: any[];
  /** A comment regarding this SQL statement */
  comment?: string;
}

export type Expression = string;

/**
 * Represents a complete QueryDSL with multiple options for querying fields.
 */
export interface QueryDSL {
  /** List of fields to select */
  select: Expression[];
  /** Main table or model to select from */
  from?: string;
  /** A list of where clauses */
  wheres?: Where[];
  /** A list of order conditions */
  orders?: Order[];
  /** Grouping fields and options */
  groups?: (Group | string)[];
  /** Filtering options for group results */
  havings?: Having[];
  /** Return only the first result */
  first?: boolean | any;
  /** Limit the number of records */
  limit?: number;
  /** Offset to start returning records from */
  offset?: number;
  /** Page number for pagination */
  page?: number;
  /** Number of records per page */
  pagesize?: number;
  /** Restrict result to data only or not */
  "data-only"?: boolean;
  /** Union query options */
  unions?: QueryDSL[];
  /** Subquery option */
  query?: QueryDSL;
  /** Query alias */
  alias?: string;
  /** Join conditions */
  joins?: Join[];
  /** Direct SQL statement if provided */
  sql?: SQL;
  /** A general comment on the query */
  comment?: string;
  /** Enable or disable debugging */
  debug?: boolean;
}

/**
 * Provides methods for executing different types of queries.
 */
export declare class Query {
  /**
   * Create a new Query instance
   * @param connector - The connector ID to use for the query
   */
  constructor(connector: string);

  /**
   * Execute a SELECT query with provided QueryDSL.
   * @param query - The QueryDSL object containing SELECT conditions
   */
  Get(query: QueryDSL): any;

  /**
   * Execute a SQL statement with the given QueryDSL.
   * @param query - The QueryDSL object containing SQL statement and parameters
   */
  Run(query: QueryDSL): any;

  /**
   * Execute a paginated query using QueryDSL.
   * @param query - The QueryDSL object containing conditions and pagination setup
   */
  Paginate(query: QueryDSL): any;

  /**
   * Execute a query to get the first matching record using QueryDSL.
   * @param query - The QueryDSL object containing selection conditions
   */
  First(query: QueryDSL): any;
}
