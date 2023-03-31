import { CommonConfig, HookType } from "./share_types";
import YaoHook from "./hook";
import action from "./action";
import field from "./field";
import YaoComponent from "./component";
import YaoChart from "./chart";

export namespace YaoDashboard {
  export interface DashboardDSL {
    /**版本【管理字段】 */
    version?: string;
    /**描述【管理字段】 */
    decription?: string;
    /**备注【管理字段】 */
    comment?: string;
    /**唯一标识 */
    id?: string;
    /**名称 */
    name?: string;
    /**操作 */
    action: ActionDSL;
    /**页面布局 */
    layout: LayoutDSL;
    /**字段配置 */
    fields: FieldsDSL;
    /**全局配置项 */
    config?: CommonConfig;
    // CProps?: any;
    // Computable?: any;
    // Mapping?: any;
    /**hook事件，框架自动生成 */
    hooks?: HookType;
    $schema?: string;
  }

  export interface ActionDSL {
    /**读取配置的处理器 */
    setting?: action.Process;
    // component?: any;
    /**数据读取处理器 */
    data?: action.Process;
    /**在data处理器之前调用 */
    "before:data"?: YaoHook.Before;
    /**在data处理器之后调用 */
    "after:data"?: YaoHook.After;
  }

  export interface FieldsDSL {
    /**筛选字段配置 */
    filter?: field.Filters;
    /**大屏字段配置 */
    dashboard?: DashColumns;
    // filterMap?: { [key: string]: any };
    // dashboardMap?: { [key: string]: any };
  }

  // Columns the columns DSL
  export type DashColumns = { [key: string]: DashColumnDSL };

  // ColumnDSL the field column dsl
  export type DashColumnDSL = {
    /**唯一标识 */
    id?: string;
    /**读取数据的处理器 */
    $data?: YaoComponent.CloudPropsDSL;
    /**列主键名，不需要显式设置 */
    key?: string;
    /**默认绑定API接口返回字段名称 */
    bind?: string;
    /**chart图表链接地址 */
    link?: string;
    /** 显示控件设置 */
    view?: DashComponentDSL;
    /** 编辑控件设置 */
    // edit?: YaoComponent.EditComponentDSL;
  };

  export enum DashComponentEnum {
    "Bar" = "chart/Bar",
    "Funnel" = "chart/Funnel",
    "Line" = "chart/Line",
    "LineBar" = "chart/LineBar",
    "Number" = "chart/Number",
    "NumberChart" = "chart/NumberChart",
    "Pie" = "chart/Pie",
  }

  export interface DashComponentDSL {
    /**绑定字段名称，如不指定使用默认值 */
    bind?: string;
    /**组件名称，可用组件参考文档 https://yaoapps.com/components */
    type?: string | "base/Table" | "base/Form" | DashComponentEnum;
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
      unit?: string;
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
    /**操作 */
    actions?: YaoComponent.Actions;
    /**大屏配置 */
    dashboard?: ViewLayoutDSL;
    /**筛选条件 */
    filter?: FilterLayoutDSL;
  }

  export interface FilterLayoutDSL {
    /**筛选操作 */
    actions?: YaoComponent.Actions;
    /**字段列表配置 */
    columns?: YaoComponent.LayoutColumns;
  }

  // Instances the Instances
  export type LayoutColumns = LayoutColumnDSL[];

  // InstanceDSL the component instance DSL
  export interface LayoutColumnDSL {
    /**字段标称名Label */
    name?: string;
    /**宽度 */
    width?: any;
    /**高度 */
    height?: any;
    /**固定 */
    fixed?: boolean; // for widget table
    /**配置rows */
    rows?: LayoutColumnDSL[];
  }
  export interface ViewLayoutDSL {
    /**字段列表配置 */
    columns?: LayoutColumns;
  }
}
export default YaoDashboard;
