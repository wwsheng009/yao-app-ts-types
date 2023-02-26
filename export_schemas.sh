#!/bin/bash

# convert the typescript type to json-schema files
array=(
    "api_http:YaoHttp.HttpDSL"
    "api_rest:YaoRest.RestDSL"
    "form:YaoForm.FormDSL"
    "table:YaoTable.TableDSL"
    "app:YaoApp.AppDSL"
    "chart:YaoChart.ChartDSL"
    "connector:YaoConnector.ConnectorDSL"
    "dashboard:YaoDashboard.DashboardDSL"
    "flow:YaoFlow.Flow"
    "form:YaoForm.FormDSL"
    "importer:YaoImport.Importer"
    "list:YaoList.ListDSL"
    "login:YaoLogin.LoginDSL"
    "model:YaoModel.ModelDSL"
    "query_param:YaoQueryParam.QueryParam"
    "query:YaoQuery.QueryDSL"
    "schedule:YaoSchedule.Schedule"
    "service:YaoService.Service"
    "socket:YaoSocket.Socket"
    "store:YaoStoreStore"
    "task:YaoTask.Task"
    "web_socket:YaoWebSocket.Server"
    "widget:YaoCustomWidget.Widget"
)
if [ ! -d "json-schemas" ]; then
  mkdir json-schemas
fi

for line in "${array[@]}"
do
    words=($(echo $line | tr ":" "\n"))
    echo "begin convert schema ${words[1]}"
    npx ts-json-schema-generator --path "src/types/dsl/${words[0]}.ts" --type "${words[1]}" > "./json-schemas/${words[0]}.json"
    echo "schema ${words[1]} converted"
done

echo "done"