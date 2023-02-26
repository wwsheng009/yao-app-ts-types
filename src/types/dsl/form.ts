import YaoAction from "./action";
import YaoComponent from "./component";
import YaoField from "./field";
import YaoHook from "./hook";

export namespace YaoForm {
  // DSL the form DSL
  export interface FormDSL {
    id?: string;
    // root?: string;
    /**表单名称 */
    name?: string;
    /**操作 */
    action?: ActionDSL;
    /**表单布局 */
    layout?: LayoutDSL;
    /**字段列表 */
    fields?: FieldsDSL;
    /**配置项 */
    config?: { [key: string]: any };
    // cProps?: field.CloudProps;
    // computable?: compute.Computable;
    // mapping?: mapping.Mapping;
    $schema?: string;
  }

  // ActionDSL the form action DSL
  export interface ActionDSL {
    guard?: string; // the default guard
    bind?: BindActionDSL;
    setting?: YaoAction.Process;
    component?: YaoAction.Process;
    upload?: YaoAction.Process;
    download?: YaoAction.Process;
    find?: YaoAction.Process;
    save?: YaoAction.Process;
    update?: YaoAction.Process;
    create?: YaoAction.Process;
    delete?: YaoAction.Process;
    "before:find"?: YaoHook.Before;
    "after:find"?: YaoHook.After;
    "before:save"?: YaoHook.Before;
    "after:save"?: YaoHook.After;
    "before:create"?: YaoHook.Before;
    "after:create"?: YaoHook.After;
    "before:delete"?: YaoHook.Before;
    "after:delete"?: YaoHook.After;
    "before:update"?: YaoHook.Before;
    "after:update"?: YaoHook.After;
  }

  // BindActionDSL action.bind
  export interface BindActionDSL {
    /**绑定模型名称 */
    model?: string; // bind model
    /**操作store名称 */
    store?: string; // bind store
    /**绑定表格 */
    table?: string; // bind table
    /**绑定另外一个表单 */
    form?: string; // bind form
    /**选项 */
    option?: { [key: string]: any }; // bind option
  }

  // LayoutDSL the form layout DSL
  export interface LayoutDSL {
    primary?: string;
    actions?: YaoComponent.Actions;
    form?: ViewLayoutDSL;
    config?: { [key: string]: any };
  }

  // FieldsDSL the form fields DSL
  export interface FieldsDSL {
    form?: YaoField.Columns;
    // formMap?: { [key: string]: field.ColumnDSL };
  }

  // ViewLayoutDSL layout.form
  export interface ViewLayoutDSL {
    props?: YaoComponent.PropsDSL;
    sections?: SectionDSL[];
  }

  // SectionDSL layout.form.sections[*]
  export interface SectionDSL {
    title?: string;
    desc?: string;
    columns?: Column[];
  }

  // Column table columns
  export interface Column extends YaoComponent.InstanceDSL {
    tabs?: SectionDSL[];
    // instanceDSL?: ;
  }
}
export default YaoForm;
