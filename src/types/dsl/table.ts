import { CommonConfig } from "./share_types";
import YaoAction from "./action";
import YaoComponent from "./component";
import YaoField from "./field";
import YaoHook from "./hook";
import { YaoQueryParam } from "./query_param";

export namespace YaoTable {
  export type TableDSL = {
    // root: string;
    /**唯一标识 */
    id?: string;
    /**表格名称, 支持多语言*/
    name: string;
    /**表格数据交互。用于指定列表检索、保存等操作的处理器，设置数据 Hook，绑定模型等*/
    action: ActionDSL;
    /**表格界面布局。显示字段、筛选器、批量编辑等*/
    layout?: LayoutDSL;
    /**表格字段定义。指定表格列字段, 表格筛选器字段定义*/
    fields?: FieldsDSL;
    /**表格界面配置项。表格满屏显示等配置*/
    config?: CommonConfig;
    // c_props: field.CloudProps;
    // computable: compute.Computable;
    // mapping: mapping.Mapping;
    $schema?: string;
  };

  export type ActionDSL = {
    guard?: string;
    /**绑定 model 或 table。 根据关联 Widget ID 设定表格关联处理器和界面呈现默认值 */
    bind: BindActionDSL;
    /**关联处理器。返回表格页面配置 */
    setting?: YaoAction.Process;
    /** */
    component?: YaoAction.Process;
    /** */
    upload?: YaoAction.Process;
    /** */
    download?: YaoAction.Process;
    /**关联处理器。指定列表数据搜索处理器和默认参数, 返回带有分页信息和数据记录数组，默认:models.Widget ID.Paginate*/
    search?: YaoAction.Process;
    /**关联处理器。指定列表数据搜索处理器和默认参数, 返回数据记录数组 */
    get?: YaoAction.Process;
    /**关联处理器。指定按主键查询单条数据处理器和默认参数, 返回单条数据记录 */
    find?: YaoAction.Process;
    /**关联处理器。指定保存单条数据处理器 */
    save?: YaoAction.Process;
    /**关联处理器。指定新建单条数据处理器 */
    create?: YaoAction.Process;
    /**关联处理器。指定插入多条数据处理器 */
    insert?: YaoAction.Process;
    /**关联处理器。指定按主键删除单条数据处理器 */
    delete?: YaoAction.Process;
    /**关联处理器。指定按一组主键，删除多条数据处理器 */
    "delete-in"?: YaoAction.Process;
    /**关联处理器。指定按查询条件，删除多条数据处理器 */
    "delete-where"?: YaoAction.Process;
    /**关联处理器。指定按主键更新单条数据处理器 */
    update?: YaoAction.Process;
    /**关联处理器。指定按一组主键，更新多条数据处理器 */
    "update-in"?: YaoAction.Process;
    /**关联处理器。指定按查询条件，更新多条数据处理器 */
    "update-where"?: YaoAction.Process;
    /**在 Find 处理器之前调用|Find 接口传入数据|输出结果作为 Find 关联处理器输入参数|*/
    "before:find"?: YaoHook.Before;
    /**在 Find 处理器之后调用|Find 接口关联处理器执行结果|自定义(输出结果作为 Find 处理器的最终输出)|*/
    "after:find"?: YaoHook.After;
    /**在 Search 处理器之前调用|Search 接口传入数据|输出结果作为 Search 关联处理器输入参数|*/
    "before:search"?: YaoHook.Before;
    /**在 Search 处理器之后调用|Search 接口关联处理器执行结果|自定义 (输出结果作为 Search 处理器的最终输出)|*/
    "after:search"?: YaoHook.After;
    /**Before Hook。在关联处理器之前运行，输入用户输入的参数表，返回处理后的参数表 */
    "before:get"?: YaoHook.Before;
    /**After Hook。在关联处理器之后运行，输入关联处理器返回结果，返回处理后的结果 */
    "after:get"?: YaoHook.After;
    /**在 Save 处理器之前调用|Save 接口传入数据|输出结果作为 Save 关联处理器输入参数|*/
    "before:save"?: YaoHook.Before;
    /**在 Save 处理器之后调用|Save 接口关联处理器执行结果|自定义 (输出结果作为 Save 接口的最终输出)|*/
    "after:save"?: YaoHook.After;
    /**Before Hook。在关联处理器之前运行，输入用户输入的参数表，返回处理后的参数表 */
    "before:create"?: YaoHook.Before;
    /**After Hook。在关联处理器之后运行，输入关联处理器返回结果，返回处理后的结果 */
    "after:create"?: YaoHook.After;
    /**Before Hook。在关联处理器之前运行，输入用户输入的参数表，返回处理后的参数表 */
    "before:insert"?: YaoHook.Before;
    /**After Hook。在关联处理器之后运行，输入关联处理器返回结果，返回处理后的结果 */
    "after:insert"?: YaoHook.After;
    /**Before Hook。在关联处理器之前运行，输入用户输入的参数表，返回处理后的参数表 */
    "before:delete"?: YaoHook.Before;
    /**After Hook。在关联处理器之后运行，输入关联处理器返回结果，返回处理后的结果 */
    "after:delete"?: YaoHook.After;
    /**Before Hook。在关联处理器之前运行，输入用户输入的参数表，返回处理后的参数表 */
    "before:delete-in"?: YaoHook.Before;
    /**After Hook。在关联处理器之后运行，输入关联处理器返回结果，返回处理后的结果 */
    "after:delete-in"?: YaoHook.After;
    /**Before Hook。在关联处理器之前运行，输入用户输入的参数表，返回处理后的参数表 */
    "before:delete-where"?: YaoHook.Before;
    /**After Hook。在关联处理器之后运行，输入关联处理器返回结果，返回处理后的结果 */
    "after:delete-where"?: YaoHook.After;
    /**Before Hook。在关联处理器之前运行，输入用户输入的参数表，返回处理后的参数表 */
    "before:update"?: YaoHook.Before;
    /**After Hook。在关联处理器之后运行，输入关联处理器返回结果，返回处理后的结果 */
    "after:update"?: YaoHook.After;
    /**Before Hook。在关联处理器之前运行，输入用户输入的参数表，返回处理后的参数表 */
    "before:update-in"?: YaoHook.Before;
    /**After Hook。在关联处理器之后运行，输入关联处理器返回结果，返回处理后的结果 */
    "after:update-in"?: YaoHook.After;
    /**Before Hook。在关联处理器之前运行，输入用户输入的参数表，返回处理后的参数表 */
    "before:update-where"?: YaoHook.Before;
    /**After Hook。在关联处理器之后运行，输入关联处理器返回结果，返回处理后的结果 */
    "after:update-where"?: YaoHook.After;
  };

  export type BindActionDSL = {
    /**绑定数据模型 */
    model?: string;
    store?: string;
    /**绑定表格 */
    table?: string;
    /**绑定表单 */
    form?: string;
    /**指定 Form Widget ID 关联表单, **bind.model 不为空时有效** */
    option?: { [key: string]: any } & { form?: string, withs?: { [key: string]: YaoQueryParam.QueryWith } };
  };

  export type LayoutDSL = {
    /**数据主键,默认id */
    primary?: string;
    /**表格界面头部布局。设置批量操作、导入配置等 */
    header: HeaderLayoutDSL;
    /**表格筛选器。设置筛选条件和右上角操作按钮等 */
    filter?: FilterLayoutDSL;
    /**表格布局。设置显示列，行操作按钮等 */
    table?: ViewLayoutDSL;
  };

  export type HeaderLayoutDSL = {
    /**批量操作、导入配置等 */
    preset?: PresetHeaderDSL;
    /**自定义操作按钮,请使用filter.actions */
    actions?: YaoComponent.ActionDSL[];
  };

  export type PresetHeaderDSL = {
    /**批量操作 */
    batch?: BatchPresetDSL;
    /**数据导入 */
    import?: ImportPresetDSL;
  };

  /**批量处理数据 */
  export type BatchPresetDSL = {
    /**需要显示的列 */
    columns?: YaoComponent.InstanceDSL[];
    /**是否可以删除 */
    deletable?: boolean;
  };

  export type ImportPresetDSL = {
    /**名称 */
    name?: string;
    /**操作 */
    actions?: YaoComponent.Actions;
  };

  export type FilterLayoutDSL = {
    /**自定义操作按钮(界面右上方) */
    actions?: YaoComponent.Actions;
    /**筛选条件, 在 fields.filter 中定义的筛选条件字段 */
    columns?: YaoComponent.Instances;
  };

  export type ViewLayoutDSL = {
    /**属性配置 */
    props?: YaoComponent.PropsDSL;
    /**表格列定义 */
    columns?: YaoComponent.Instances;
    /**表格行操作区定义,右边的按钮，查看，编辑，删除等 */
    operation?: OperationTableDSL;
  };

  /**表格布局。设置显示列，行操作按钮等 */
  export type OperationTableDSL = {
    /**行操作区宽度(单位 px) */
    width?: number;
    /**是否折叠行操作区 */
    fold?: boolean;
    /**是否隐藏行操作区 */
    hide?: boolean;
    /**自定义行操作按钮 */
    actions: YaoComponent.Actions;
  };

  /**表格字段定义。指定表格列字段, 表格筛选器字段定义 */
  export type FieldsDSL = {
    /**表格筛选器字段定义 */
    filter?: YaoField.Filters;
    /**表格列字段定义 */
    table?: YaoField.Columns;
    // filter_map: { [key: string]: field.FilterDSL };
    // table_map: { [key: string]: field.ColumnDSL };
  };
}
export default YaoTable;
