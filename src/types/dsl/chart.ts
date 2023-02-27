import { GlobalConfig } from "./share_types";
import YaoAction from "./action";
import YaoComponent from "./component";
import YaoField from "./field";
import YaoHook from "./hook";

export namespace YaoChart {
  export interface ChartDSL {
    /**唯一标识 */
    id?: string;
    /**图表名称, 支持多语言 */
    name?: string;
    /**图表数据交互。用于指定统计数据读取处理器，设置数据 Hook，绑定模型等 */
    action?: ActionDSL;
    /**图表界面布局。字段、筛选器等 */
    layout?: LayoutDSL;
    /**图表字段定义。指定图表字段, 图表筛选器字段定义 */
    fields?: FieldsDSL;
    /**图表界面配置项。图表满屏显示等配置*/
    config?: GlobalConfig;
    // cProps: field.CloudProps;
    // computable: compute.Computable;
    // mapping: mapping.Mapping;
    $schema?: string;
  }

  export interface ActionDSL {
    /**关联处理器。返回图表页面配置 */
    setting?: YaoAction.Process;
    // component?: action.Process;
    /**关联处理器。指定数据图表分析结果处理器，返回图表数据*/
    data?: YaoAction.Process;
    /**Before Hook。在关联处理器之前运行，输入用户输入的参数表，返回处理后的参数表 */
    "before:data"?: YaoHook.Before;
    /**After Hook。在关联处理器之后运行，输入关联处理器返回结果，返回处理后的结果 */
    "after:data"?: YaoHook.After;
  }

  export interface FieldsDSL {
    filter?: YaoField.Filters;
    chart?: YaoField.Columns;
    // filterMap?: { [key: string]: field.FilterDSL };
    // chartMap?: { [key: string]: field.ColumnDSL };
  }

  export interface LayoutDSL {
    /**图表界面头部布局。设置批量操作、导入配置等 */
    operation?: OperationLayoutDSL;
    /**图表布局。设置显示，行操作按钮等 */
    chart?: ViewLayoutDSL;
    /**图表筛选器。设置筛选条件和右上角操作按钮等 */
    filter?: FilterLayoutDSL;
  }

  export interface FilterLayoutDSL {
    /**自定义操作按钮 */
    actions?: YaoComponent.Actions;
    /**筛选条件, 在 fields.filter 中定义的筛选条件字段 */
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
