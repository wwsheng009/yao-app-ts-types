export namespace YaoAction {
  /**自定义关联处理器*/
  export type Process = {
    // name?: string;
    /**关联处理器名称 */
    process?: string;
    /**关联处理器名称，同process */
    bind?: string;
    /**鉴权方式，可使用多个，使用逗号隔开 */
    guard?: string;
    /**关联处理器默认值，null 表示不设定默认值*/
    default?: any[];
    /**没使用 */
    disable?: boolean;
    // before?: hook.Before;
    // after?: hook.After;
    // handler?: Function;
  };
}
export default YaoAction;
