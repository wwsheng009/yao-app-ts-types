export namespace YaoPipe {
  export interface Pipe {
    /** 名称 */
    name: string;
    /** 节点配置 */
    nodes: Node[];
    /** 标签说明 */
    label?: string;
    /** 钩子设置 */
    hooks?: Hooks;
    /** 输出 */
    output?: any; // Consider using a more specific type or generics if possible
    /** 输入 */
    input?: Input;
    /** 处理器白名单，只有在白名单中的处理器才会被调用 */
    whitelist?: Whitelist;
    /** 节点跳转 */
    goto?: string;
  }

  export interface Context {
    // Note: In TypeScript, there's no direct equivalent of Golang's embedded types. Use composition instead.
    pipe: Pipe;
    // Other fields like id, parent, context, global, sid, current, in, out, history, input, and output are not directly translatable to TypeScript interfaces due to their private nature or complex types in Golang that have no direct TypeScript equivalents.
  }

  export interface Hooks {
    progress?: string;
  }

  /** Pipe节点配置 */
  export interface Node {
    /** 节点名称，同时作为节点引用的依据 */
    name: string;
    /** 内部节点类型，不需要直接设置,优先级：process > request > ai > user-input > switch */
    type?: "user-input" | "ai" | "process" | "switch" | "request";
    /** 标签说明 */
    label?: string;
    /** 处理器，设置处理器后，节点类型自动设置成process */
    process?: YaoProcess;
    /** ai提示词，设置后节点类型自动设置成ai */
    prompts?: Prompt[];
    /** ai模型，默认是 gpt-3.5-turbo*/
    model?: string;
    /** ai请求时的payload选项 */
    options?: Record<string, any>; // Map in Golang to an object in TypeScript
    /** 请求 */
    request?: Request;
    /** 接受用户输入时的客户端cli | web | app | wxapp */
    ui?: string;
    /** 自动填写 */
    autofill?: AutoFill;
    /** 当是switch节点时，进行条件判断，只有一个条件生效 */
    case?: Record<string, Pipe>; // Map in Golang to an object in TypeScript, where key is string and value is Pipe
    /** 节点输入参数 */
    input?: Input;
    /** 节点输出参数 */
    output?: any; // Consider using a more specific type or generics if possible
    /** 跳转表达式，满足一定条件后跳转到指定的节点 */
    goto?: string;
  }

  // Assuming Whitelist, Input, and Args are simple type aliases in TypeScript
  export type Whitelist = Record<string, boolean>;
  export type Input = any[]; // Consider using a more specific type or generics if possible
  export type Args = any[]; // Consider using a more specific type or generics if possible

  export interface Data extends Record<string, any> {} // Simple extension of Record for better semantics

  export interface ResumeContext {
    __id: string;
    __type: string;
    __ui: string;
    input: Input;
    node: Node;
    data: Data;
  }

  export interface AutoFill {
    /** 可以是表达式，解析后的值作为客户端命令的输入参数 */
    value: any; // Consider using a more specific type or generics if possible
    /** 自动处理，如果是exit,会自动的退出处理 */
    action?: string;
  }

  export interface Case {
    input?: Input;
    output?: any; // Consider using a more specific type or generics if possible
    /** 条件子节点，满足case条件后，会处理子节点的配置 */
    nodes?: Node[];
  }

  export interface Prompt {
    role?: string;
    content: string;
  }

  export interface YaoProcess {
    name: string;
    args?: Args;
  }

  interface Request {
    // Assuming the Request struct will have fields defined later
  }

  export interface ChatCompletionChunk {
    id: string;
    object: string;
    created: number;
    model: string;
    systemFingerprint: any; // Consider using a more specific type or generics if possible
    choices: Choice[];
  }

  export interface Choice {
    index: number;
    delta: DeltaStruct;
    logprobs?: any; // Consider using a more specific type or generics if possible
    finishReason?: any; // Consider using a more specific type or generics if possible
  }

  export interface DeltaStruct {
    content: string;
  }
}
