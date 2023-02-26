import YaoAction from "./action";
import YaoComponent from "./component";
import YaoField from "./field";
import YaoHook from "./hook";

export namespace YaoList {
  // DSL the list DSL
  export interface ListDSL {
    id?: string;
    // root?: string;
    name?: string;
    action: ActionDSL;
    layout: LayoutDSL;
    fields: FieldsDSL;
    config?: { [key: string]: any };
    // cprops?: field.CloudProps;
    // computable?: compute.Computable;
    // mapping?: mapping.Mapping;
  }

  // ActionDSL the list action DSL
  export interface ActionDSL {
    bind?: BindActionDSL;
    setting?: YaoAction.Process;
    component?: YaoAction.Process;
    upload?: YaoAction.Process;
    download?: YaoAction.Process;
    get?: YaoAction.Process;
    save?: YaoAction.Process;
    "before:find"?: YaoHook.Before;
    "after:find"?: YaoHook.After;
    "before:save"?: YaoHook.Before;
    "after:save"?: YaoHook.After;
  }

  // BindActionDSL action.bind
  export interface BindActionDSL {
    model?: string;
    store?: string;
    table?: string;
    option?: { [key: string]: any };
  }

  // LayoutDSL the list layout DSL
  export interface LayoutDSL {
    list?: ViewLayoutDSL;
    config?: { [key: string]: any };
  }

  // OperationLayoutDSL layout.operation
  export interface OperationLayoutDSL {
    preset?: { [key: string]: { [key: string]: any } };
    actions?: YaoComponent.ActionDSL[];
  }

  // FieldsDSL the list fields DSL
  export interface FieldsDSL {
    list?: YaoField.Columns;
    // listMap?: { [key: string]: field.ColumnDSL };
  }

  // ViewLayoutDSL layout.list
  export interface ViewLayoutDSL {
    props?: YaoComponent.PropsDSL;
    columns?: YaoComponent.InstanceDSL[];
  }
}
export default YaoList;
