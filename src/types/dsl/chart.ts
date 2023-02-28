import { GlobalConfig } from "./share_types";
import YaoAction from "./action";
import YaoComponent from "./component";
import YaoField from "./field";
import YaoHook from "./hook";

export namespace YaoChart {
  export enum ChartComponentEnum {
    "Bar" = "Bar",
    "Funnel" = "Funnel",
    "Line" = "Line",
    "LineBar" = "LineBar",
    "Number" = "Number",
    "NumberChart" = "NumberChart",
    "Pie" = "Pie",
    "Table" = "Table",
  }
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
    chart?: ChartColumns;
    // filterMap?: { [key: string]: field.FilterDSL };
    // chartMap?: { [key: string]: field.ColumnDSL };
  }

  // Columns the columns DSL
  export type ChartColumns = { [key: string]: ChartColumnDSL };

  // ColumnDSL the field column dsl
  export type ChartColumnDSL = {
    /**唯一标识 */
    id?: string;
    $data?: YaoComponent.CloudPropsDSL;
    /**列主键名，不需要显式设置 */
    key?: string;
    /**默认绑定API接口返回字段名称 */
    bind?: string;
    /**chart图表链接地址 */
    link?: string;
    /** 显示控件设置 */
    view?: ChartComponentDSL;
    /** 编辑控件设置 */
    // edit?: YaoComponent.EditComponentDSL;
  };

  export interface ChartComponentDSL {
    /**绑定字段名称，如不指定使用默认值 */
    bind?: string;
    /**组件名称，可用组件参考文档 https://yaoapps.com/components */
    type?: ChartComponentEnum | string | "public/xxx";
    /**数据数值计算 */
    compute?: YaoComponent.Compute | string;
    /**控件属性，可参考antd控件 */
    props?: YaoComponent.PropsDSL & {
      /**显示成卡片的样式 */
      cardStyle?: YaoComponent.PropsDSL & {
        padding?: number;
      };
      type?: string;
      /**图表高度 */
      chartHeight?: number;
      /**颜色 */
      color?: string;
      /**显示单位 */
      unit: string;
      /**显示前缀 */
      prefix?: string;
      /** */
      decimals?: number;
      /**绑定数据的key字段 */
      nameKey?: string;
      /**绑定数据的value字段 */
      valueKey?: string;
    };
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
