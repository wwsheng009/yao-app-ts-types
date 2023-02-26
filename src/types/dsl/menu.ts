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
    parent?: string;
    /**路径 */
    path: string;
    blocks?: boolean;
    visible_menu?: boolean;
    /**上标 */
    badge?: number;
    children?: Menu[];
    /**不展示数字，只有一个小红点 */
    dot?: boolean;
  }
}
