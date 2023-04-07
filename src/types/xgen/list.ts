import type { XgenCommon as Common } from "@/types/xgen";

export declare namespace List {
  interface Setting {
    list: {
      columns: Array<Common.BaseColumn>;
    };
    fields: {
      list: Common.EditFields;
    };
    config?: Common.Config;
  }
}
