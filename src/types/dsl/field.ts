import YaoComponent from "./component";

export namespace YaoField {
  // Filters the filters DSL
  export type Filters = { [key: string]: FilterDSL };

  // Columns the columns DSL
  export type Columns = { [key: string]: ColumnDSL };

  // ComputeFields the Compute filelds
  export type ComputeFields = { [key: string]: string };

  // CloudProps the cloud props
  export type CloudProps = { [key: string]: YaoComponent.CloudPropsDSL };

  // ColumnDSL the field column dsl
  export type ColumnDSL = {
    /**备注【管理字段】 */
    comment?: string;
    /**唯一标识 */
    id?: string;
    $data?: YaoComponent.CloudPropsDSL;
    /**列主键名，不需要显式设置 */
    key?: string;
    /**默认绑定API接口返回字段名称 */
    bind?: string;
    /**chart图表链接地址，只有图表才会使用*/
    // link?: string;
    /** 显示控件设置 */
    view?: YaoComponent.ViewComponentDSL;
    /** 编辑控件设置 */
    edit?: YaoComponent.EditComponentDSL;
  };

  export type aliasColumnDSL = ColumnDSL;

  // FilterDSL the field filter dsl
  export type FilterDSL = {
    /**唯一标识 */
    id?: string;
    key?: string;
    /**绑定字段列标识 */
    bind?: string;
    /**关联编辑控件 */
    edit?: YaoComponent.EditComponentDSL;
  };

  export type aliasFilterDSL = FilterDSL;

  // Compute the compute filed
  export type Compute = string;

  // Transform the field transform
  export type Transform = {
    variables?: { [key: string]: any };
    aliases?: { [key: string]: string };
    fields?: { [key: string]: TransformField };
  };

  // TransformField the transform.types[*]
  export type TransformField = {
    filter?: FilterDSL;
    form?: ColumnDSL;
    table?: ColumnDSL;
  };
}
export default YaoField;
