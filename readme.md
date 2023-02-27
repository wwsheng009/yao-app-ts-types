# YAO 应用 JSON-SCHEMA

**此项目非官方文档，有可能部分信息不准确，仅供参考学习**

使用 json-schema 文件可以方便用户编写 json 文件，也方便用户检验 json 文件的有效性。

本项目整理了 yao 应用中常用配置文件的 typescript 类型与对应的 json-schema 文件。

**适用于 0.10.3 版本的 YAO 应用**

## 使用方法

- 下载项目中的 json-schema 文件
- 使用 vscode 编辑器
- 在 json 文件中加入 "$schema"引用对应的 json-schema

- vscode 支持后缀名.yao 的文件

  > - 使用 vscode 命令：更改语言模型/Change Language Mode,再修改文件类型关联。
  > - 直接编辑 setting.json 配置

  ```json
   "files.associations": {
     "*.yao": "jsonc"
  },
  ```

## 支持的列表

- 表单: form 文件
- 表格: table 文件
- 模型: model 文件
- HTTP API: http api 文件
- 流程: flow 文件
- Chart: 图表文件
- Dashboard: 大屏文件
- Connector: 数据库连接器
- Store: 存储
- List: 列表
- Login: 用户登录配置
- App: 应用信息
- Service
- Web socket
- Socket _官方还没支持_
- Task: 并发任务
- Widget: 自定义 widget

## Vscode 配置

方法一，在 json 文件中加入 "$schema"引用对应的 json-schema,

```json
{
  "$schema": "../../../json-schemas/flow.json",
  "description": "测试",
  "label": "test",
  "nodes": [
    {
      "engine": "xiang",
      "process": "",
      "args": [],
      "name": "测试",
      "outs": [],
      "query": { "select": [], "sql": { "stmt": "" } },
      "script": ""
    }
  ],
  "output": "",
  "version": ""
}
```

具体请查看文件.vscode/settings.json

```json
//使用工作区文件
"json.schemas": [
    {
        "fileMatch": [
            "/*.flow.json"
        ],
        "url": ".json-schema/flow.json"
    }
]
```

```json
//模糊匹配文件或是排除文件

"json.schemas": [
    {
      "fileMatch": [
        "/receipts/*.json",
        "!/receipts/*.excluded.json"
      ],
      "url": "./receipts.schema.json"
    }
  ]
```

如果需要配置额外的配置，参考：https://code.visualstudio.com/docs/languages/json

## 开发

以下是开发部分

### 生成 json-schema 文件

项目提供了一些内置处理器的 ts 类型定义与语法提示，方便用户理解 yao 的特有对象。还可以使用工具生成类型的 json-schema 文件。

### 单个生成

利用工具 ts-json-schema-generator 生成 json-schema。

```sh
npx ts-json-schema-generator --path 'src/types/dsl/**/*.ts' --type 'YaoForm.FormDSL' >./json-schemas/yao-form1.json
```

### 批量生成

执行脚本文件

```sh
export_schemas.sh
```

目前很多内容都没有增加注释，后面慢慢完善。
