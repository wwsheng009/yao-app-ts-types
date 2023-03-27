export type CommonConfig = {
  /**是否满屏显示表格 */
  full?: boolean;
};

/**hook事件，收集编辑控件的$on:change事件 */
export type HookType = {
  [key: string]: any;
  /**收集编辑控件的$on:change事件 */
  onChange: { [key: string]: any };
};

export type MapStr = {
  [key: string]: string;
};
export type MapAny = {
  [key: string]: any;
};
