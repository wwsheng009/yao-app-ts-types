import { GlobalConfig, HookType } from "./share_types";
import YaoAction from "./action";
import YaoComponent from "./component";
import YaoField from "./field";
import YaoHook from "./hook";

export namespace YaoList {
  // DSL the list DSL
  export interface ListDSL {
    /**唯一标识 */
    id?: string;
    // root?: string;
    name?: string;
    action: ActionDSL;
    /**布局 */
    layout: LayoutDSL;
    /**字段定义 */
    fields: FieldsDSL;
    /**配置 */
    config?: GlobalConfig;
    // cprops?: field.CloudProps;
    // computable?: compute.Computable;
    // mapping?: mapping.Mapping;
    /**hook事件，框架自动生成 */
    hooks?: HookType;
    $schema?: string;
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
    config?: GlobalConfig;
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
