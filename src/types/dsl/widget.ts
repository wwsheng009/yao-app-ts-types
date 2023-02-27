export namespace YaoCustomWidget {
  // gou/widget/types.go
  export interface Widget {
    // name: string;
    // path: string;
    /**Widget 名称*/
    label?: string;
    /**Widget 介绍*/
    description?: string;
    /**版本号*/
    version?: string;
    /**DSL 文件保存路径(相对于项目根目录) */
    root?: string;
    /**DSL 文件扩展名  */
    extension?: string;
    /**需要导出的模块。 在 export.js 中根据 DSL 描述，转换的 YAO 内建 widgets。 如 model, table 等。这些 widgets 与保存在项目目录中的 DSL 文件等效。 */
    modules?: string[];
    $schema?: string;
  }
}
