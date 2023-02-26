import YaoAction from "./action";
import YaoComponent from "./component";
import YaoField from "./field";
import YaoHook from "./hook";

export namespace YaoChart {
  export interface ChartDSL {
    id?: string;
    name?: string;
    action?: ActionDSL;
    layout?: LayoutDSL;
    fields?: FieldsDSL;
    config?: { [key: string]: any };
    // cProps: field.CloudProps;
    // computable: compute.Computable;
    // mapping: mapping.Mapping;
  }

  export interface ActionDSL {
    setting?: YaoAction.Process;
    // component?: action.Process;
    data?: YaoAction.Process;
    "before:data"?: YaoHook.Before;
    "after:data"?: YaoHook.After;
  }

  export interface FieldsDSL {
    filter?: YaoField.Filters;
    chart?: YaoField.Columns;
    // filterMap?: { [key: string]: field.FilterDSL };
    // chartMap?: { [key: string]: field.ColumnDSL };
  }

  export interface LayoutDSL {
    operation?: OperationLayoutDSL;
    chart?: ViewLayoutDSL;
    filter?: FilterLayoutDSL;
  }

  export interface FilterLayoutDSL {
    actions?: YaoComponent.Actions;
    columns?: YaoComponent.Instances;
  }

  export interface OperationLayoutDSL {
    actions?: YaoComponent.Actions;
  }

  export interface ViewLayoutDSL {
    columns?: YaoComponent.Instances;
  }
}
export default YaoChart;
