export namespace YaoMenu {
  export interface Menu {
    items: MenuItem[];
    setting: MenuItem[];
  }
  /**0.10.3以前的版本 */
  export type Menu2 = MenuItem[];
  export interface MenuItem {
    id?: number;
    /**菜单名称，显示标题 */
    name: string;
    /**图标 */
    icon?: string;
    /**上级菜单 */
    parent?: string;
    /**路径 */
    path: string;
    /**显示成块 */
    blocks?: boolean;
    /**是否显示 */
    visible_menu?: boolean;
    /**上标 */
    badge?: number;
    children?: Menu[];
    /**不展示数字，只有一个小红点 */
    dot?: boolean;
  }
}
