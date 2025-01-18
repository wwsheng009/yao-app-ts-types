export namespace YaoCustomWidget {
  // gou/widget/types.go
  export interface Widget {
    /**版本【管理字段】 */
    version?: string;
    /**描述【管理字段】 */
    decription?: string;
    /**备注【管理字段】 */
    comment?: string;
    /**Widget 名称*/
    label?: string;
    /**Widget 介绍*/
    description?: string;
    /**DSL 文件保存路径(相对于项目根目录) */
    root?: string;
    /**DSL 文件扩展名  */
    extension?: string;
    /**需要导出的模块。 在 export.js 中根据 DSL 描述，转换的 YAO 内建 widgets。 如 model, table 等。这些 widgets 与保存在项目目录中的 DSL 文件等效。 */
    modules?: string[];
    $schema?: string;
  }
}
