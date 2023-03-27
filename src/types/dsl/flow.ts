import { YaoQuery } from "./query";
export namespace YaoFlow {
  // 可以使用 JavaScript 脚本，对数据流节点返回值进行处理，按需返回数据结构。
  // Flow 工作流
  export interface Flow {
    name?: string;
    // source: string;
    // scripts: { [key: string]: string };
    /**数据流呈现名称，用于开发平台呈现*/
    label?: string;
    /**版本号，用于依赖关系校验和开发平台呈现*/
    version?: string;
    /**数据流介绍，用于开发平台呈现*/
    description?: string;
    /**查询节点*/
    nodes?: FlowNode[];
    /**输出结果定义*/
    output?: any;
    // global?: { [key: string]: any }; // 全局变量
    // sid?: string; // 会话ID
    $schema?: string;
  }

  // FlowNode 工作流节点
  export interface FlowNode {
    /**版本【管理字段】 */
    version?: string;
    /**描述【管理字段】 */
    decription?: string;
    /**备注【管理字段】 */
    comment?: string;
    /**查询节点名称*/
    name?: string;
    /**调用处理器 `process`*/
    process?: string;
    /**数据分析引擎名称,默认`xiang` */
    engine?: string;
    /**数据分析语言*/
    query?: YaoQuery.QueryDSL;
    /**关联的脚本名称*/
    script?: string;
    /**处理器参数表.可以引用输入输出或上下文数据*/
    args?: any[];
    /**查询节点结果输出.使用 `{{$out}}` 引用处理器返回结果。如不设置，返回值等于处理器返回结果。*/
    outs?: any[];
  }
}
