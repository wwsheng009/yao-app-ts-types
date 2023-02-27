import { GlobalConfig } from "./share_types";
import YaoHook from "./hook";

export namespace YaoDashboard {
  export interface DashboardDSL {
    /**唯一标识 */
    id?: string;
    name?: string;
    action: ActionDSL;
    layout: LayoutDSL;
    fields: FieldsDSL;
    config?: GlobalConfig;
    // CProps?: any;
    // Computable?: any;
    // Mapping?: any;
    $schema?: string;
  }

  export interface ActionDSL {
    setting?: any;
    // component?: any;
    data?: any;
    "before:data"?: YaoHook.Before;
    "after:data"?: YaoHook.After;
  }

  export interface FieldsDSL {
    filter?: any;
    dashboard?: any;
    // filterMap?: { [key: string]: any };
    // dashboardMap?: { [key: string]: any };
  }

  export interface LayoutDSL {
    actions?: any;
    dashboard?: ViewLayoutDSL;
    filter?: FilterLayoutDSL;
  }

  export interface FilterLayoutDSL {
    actions?: any;
    columns?: any;
  }

  export interface ViewLayoutDSL {
    columns?: any;
  }
}
export default YaoDashboard;
