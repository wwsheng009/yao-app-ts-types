# YAO APP JSON-SCHEMA

使用 json-schema 文件可以方便用户编写 json 文件，也方便用户检验 json 文件的有效性。

本项目整理了 yao 应用中常用配置文件的 typescript 类型与 json-schema.

部分文件没有文档提示，还在持续整理中。

## 使用方法

- 下载项目中的 json-schema 文件
- 使用 vscode 编辑器
- 在 json 文件中加入 "$schema"引用对应的 json-schema

## 生成 json-schema 文件

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
