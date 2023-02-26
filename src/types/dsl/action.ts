
export namespace YaoAction {
  export type Process = {
    // name?: string;
    process?: string;
    bind?: string;
    guard?: string;
    default?: any[];
    disable?: boolean;
    // before?: hook.Before;
    // after?: hook.After;
    // handler?: Function;
  };
}
export default YaoAction;
