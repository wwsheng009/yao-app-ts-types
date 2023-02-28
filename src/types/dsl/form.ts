import { GlobalConfig, HookType } from "./share_types";
import YaoAction from "./action";
import YaoComponent from "./component";
import YaoField from "./field";
import YaoHook from "./hook";

export namespace YaoForm {
  // DSL the form DSL
  export interface FormDSL {
    /**唯一标识 */
    id?: string;
    // root?: string;
    /**表单名称, 支持多语言 */
    name?: string;
    /**表单数据交互。用于指定数据读取、保存等操作的处理器，设置数据 Hook，绑定模型等 */
    action?: ActionDSL;
    /**表单界面布局 */
    layout?: LayoutDSL;
    /**表单字段定义。指定表单字段定义 */
    fields?: FieldsDSL;
    /**表单界面配置项。表单满屏显示等配置 */
    config?: GlobalConfig;
    // cProps?: field.CloudProps;
    // computable?: compute.Computable;
    // mapping?: mapping.Mapping;
    /**hook事件，框架自动生成 */
    hooks?: HookType;
    $schema?: string;
  }

  // ActionDSL the form action DSL
  export interface ActionDSL {
    guard?: string; // the default guard
    /**绑定 model 或 form。 根据关联 Widget ID 设定表单关联处理器和界面呈现默认值 */
    bind?: BindActionDSL;
    /**关联处理器。返回表单页面配置 */
    setting?: YaoAction.Process;
    component?: YaoAction.Process;
    upload?: YaoAction.Process;
    download?: YaoAction.Process;
    /**关联处理器。指定按主键查询单条数据处理器和默认参数, 返回单条数据记录 */
    find?: YaoAction.Process;
    /**关联处理器。指定保存单条数据处理器  */
    save?: YaoAction.Process;
    /**关联处理器。指定按主键更新单条数据处理器 */
    update?: YaoAction.Process;
    /**关联处理器。指定新建单条数据处理器  */
    create?: YaoAction.Process;
    /**关联处理器。指定按主键删除单条数据处理器 */
    delete?: YaoAction.Process;
    /**Before Hook。在关联处理器之前运行，输入用户输入的参数表，返回处理后的参数表 */
    "before:find"?: YaoHook.Before;
    /**在关联处理器 find 之后运行 */
    "after:find"?: YaoHook.After;
    /**Before Hook。在关联处理器之前运行，输入用户输入的参数表，返回处理后的参数表 */
    "before:save"?: YaoHook.Before;
    /**在关联处理器 save 之后运行 */
    "after:save"?: YaoHook.After;
    /**Before Hook。在关联处理器之前运行，输入用户输入的参数表，返回处理后的参数表 */
    "before:create"?: YaoHook.Before;
    /**在关联处理器 create 之后运行 */
    "after:create"?: YaoHook.After;
    /**Before Hook。在关联处理器之前运行，输入用户输入的参数表，返回处理后的参数表 */
    "before:delete"?: YaoHook.Before;
    /**在关联处理器 delete 之后运行 */
    "after:delete"?: YaoHook.After;
    /**在关联处理器 update 之后运行 */
    "before:update"?: YaoHook.Before;
    /**After Hook。在关联处理器之前运行，输入关联处理器返回结果，返回处理后的结果 */
    "after:update"?: YaoHook.After;
  }

  // BindActionDSL action.bind
  export interface BindActionDSL {
    /**绑定模型名称 */
    model?: string;
    /**操作store名称 */
    store?: string;
    /**绑定表格 */
    table?: string;
    /**绑定另外一个表单 */
    form?: string;
    /**绑定选项 */
    option?: { [key: string]: any };
  }

  // LayoutDSL the form layout DSL
  /**表单布局配置 */
  export interface LayoutDSL {
    /**主键字段 */
    primary?: string;
    /**自定义操作 */
    actions?: YaoComponent.Actions;
    /**表单布局配置 */
    form?: ViewLayoutDSL;
    /**全局配置 */
    config?: GlobalConfig;
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
  /**布局中的分区配置 */
  export interface SectionDSL {
    /*标题*/
    title?: string;
    /**长描述 */
    desc?: string;
    /**列 */
    columns?: Column[];
  }

  // Column table columns
  export interface Column extends YaoComponent.InstanceDSL {
    tabs?: SectionDSL[];
    // instanceDSL?: ;
  }
}
export default YaoForm;
