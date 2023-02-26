import YaoComponent from "./component";

export namespace YaoField {
  // Filters the filters DSL
  export type Filters = { [key: string]: FilterDSL };

  // Columns the columns DSL
  export type Columns = { [key: string]: ColumnDSL };

  // ComputeFields the Compute filelds
  export type ComputeFields = { [key: string]: string };

  // CloudProps the cloud props
  export type CloudProps = { [key: string]: YaoComponent.CloudPropsDSL };

  // ColumnDSL the field column dsl
  export type ColumnDSL = {
    id?: string;
    $data?: YaoComponent.CloudPropsDSL;
    key?: string;
    bind?: string;
    link?: string;
    view?: YaoComponent.ComponentDSL;
    edit?: YaoComponent.ComponentDSL;
  };

  export type aliasColumnDSL = ColumnDSL;

  // FilterDSL the field filter dsl
  export type FilterDSL = {
    id?: string;
    key?: string;
    bind?: string;
    edit?: YaoComponent.ComponentDSL;
  };

  export type aliasFilterDSL = FilterDSL;

  // Compute the compute filed
  export type Compute = string;

  // Transform the field transform
  export type Transform = {
    variables?: { [key: string]: any };
    aliases?: { [key: string]: string };
    fields?: { [key: string]: TransformField };
  };

  // TransformField the transform.types[*]
  export type TransformField = {
    filter?: FilterDSL;
    form?: ColumnDSL;
    table?: ColumnDSL;
  };
}
export default YaoField;
