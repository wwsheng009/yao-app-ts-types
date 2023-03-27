export namespace YaoMenu {
  export interface Menu {
    items: MenuItem[];
    setting: MenuItem[];
  }
  /**0.10.3以前的版本 */
  export type MenuItems = MenuItem[];
  export interface MenuItem {
    /**版本【管理字段】 */
    version?: string;
    /**描述【管理字段】 */
    decription?: string;
    /**备注【管理字段】 */
    comment?: string;
    /**唯一标识 */
    id?: number;
    /**菜单名称，显示标题 */
    name: string;
    /**菜单图标，一级菜单有效. 命名为 `icon-<图标名称>`， [查看可用图标](https://feathericons.com/)*/
    icon?: string;
    /**上级菜单 */
    parent?: string;
    /**菜单路由地址，**不含管理后台路由前缀**  */
    path: string;
    /**是否显示为图标, 二级菜单有效 `0` 文字, `1` 图标  */
    blocks?: boolean | 0 | 1;
    /**二级菜单默认显示方式, `1` 打开， `0` 关闭*/
    visible_menu?: boolean | 0 | 1;
    /**状态 */
    status?: "enabled" | "disabled";
    /**排名 */
    rank?: number;
    /**模型名称 */
    model?: string;
    /**上标 */
    badge?: number;
    /**二级菜单列表*/
    children?: MenuItem[];
    /**不展示数字，只有一个小红点 */
    dot?: boolean;
  }
}
