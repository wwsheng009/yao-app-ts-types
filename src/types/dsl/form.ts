import YaoAction from "./action";
import YaoComponent from "./component";
import YaoField from "./field";
import YaoHook from "./hook";

export namespace YaoForm {
  // DSL the form DSL
  export interface FormDSL {
    id?: string;
    // root?: string;
    name?: string;
    action?: ActionDSL;
    layout?: LayoutDSL;
    fields?: FieldsDSL;
    config?: { [key: string]: any };
    // cProps?: field.CloudProps;
    // computable?: compute.Computable;
    // mapping?: mapping.Mapping;
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
    model?: string; // bind model
    store?: string; // bind store
    table?: string; // bind table
    form?: string; // bind form
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
