export namespace YaoApp {
  export type AppDSL = {
    name?: string;
    short?: string;
    version?: string;
    description?: string;
    theme?: string;
    lang?: string;
    sid?: string;
    logo?: string;
    favicon?: string;
    menu?: MenuDSL;
    adminroot?: string;
    optional?: OptionalDSL;
    setting?: string;
    setup?: string;
  };

  export type MenuDSL = {
    process?: string;
    args?: string[];
  };

  export type OptionalDSL = { [key: string]: any };

  export type CFUN = {
    method: string;
    args?: any[];
  };
}
export default YaoApp;
