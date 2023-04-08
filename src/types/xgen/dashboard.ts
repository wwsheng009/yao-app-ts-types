import type { XgenCommon as Common } from "@/types/xgen";

export declare namespace XgenDashboard {
  type TableBind = {
    model: string;
  };

  type ChartBind = {
    dataSource: string;
  };

  interface Rows {
    width: number;
    rows: Array<Common.WideColumn>;
  }

  type Column = Common.WideColumn | Rows;

  interface Setting {
    name: string;
    dashboard: {
      columns: Array<Column>;
    };
    fields: {
      dashboard: Common.ViewFields;
    };
    config?: Common.Config;
  }

  type TargetRows = {
    width: number;
    rows: Array<TargetColumn>;
  };

  type TargetColumnNormal = Common.WideColumn &
    Common.ViewFieldDetail & { link?: string };
  type TargetColumn = TargetColumnNormal | TargetRows;
}
