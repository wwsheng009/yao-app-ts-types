export namespace YaoApp {
  export type AppDSL = {
    /**版本【管理字段】 */
    version?: string;
    /**描述【管理字段】 */
    decription?: string;
    /**备注【管理字段】 */
    comment?: string;
    /**XGen 界面引擎版本, 推荐使用 `1.0` 版，旧版已停止维护*/
    xgen?: string;
    /**应用名称, 支持多语言 */
    name?: string;
    /**应用简称, 支持多语言。 */
    short?: string;
    /**应用介绍, 支持多语言。 */
    description?: string;
    /**默认主题*/
    theme?: "light" | "dark";
    /**配置xgen语言 zh-cn/en-us*/
    lang?: string;
    /** */
    sid?: string;
    /**logo文件地址，根目录/public */
    logo?: string;
    /**网站favicon文件地址，根目录/public */
    favicon?: string;
    /**管理后台菜单读取处理器 */
    menu?: MenuDSL;
    /**管理后台路由前缀,默认为/yao*/
    adminRoot?: string;
    /**应用可选配置项 */
    optional?: OptionalDSL;
    /**xgen获取配置的处理器，默认是yao.app.Xgen*/
    setting?: string;
    /**应用首次安装后运行的处理器名称， 一般可以用来建立初始化数据；处理器第一个参数为应用配置信息。支持使用 `studio` 命名空间，调用 studio 脚本函数*/
    setup?: string;

    $schema?: string;
  };

  export type MenuDSL = {
    /**处理器名称 */
    process?: string;
    /**处理器参数表 */
    args?: string[];
  };

  export type OptionalDSL = { [key: string]: any } & {
    /**隐藏系统通知面板。 **字段名大小写敏感** */
    hideNotification?: boolean;
    /**隐藏导航栏下方配置菜单。 **字段名大小写敏感** */
    hideSetting?: boolean;

    /**在xgen中缓存远程select控件选项 */
    remoteCache?: boolean;
  };

  // export type CFUN = {
  //   method: string;
  //   args?: any[];
  // };
}
export default YaoApp;
