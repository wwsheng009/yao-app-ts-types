#!/bin/bash

# convert the typescript type to json-schema files

# format : sourcefile|type|targetfile
#
array=(
    "api_http|YaoHttp.HttpDSL|api_http.json"
    # "api_rest|YaoRest.RestDSL|api_rest.json"
    "form||YaoForm.FormDSL|form.json"
    "table|YaoTable.TableDSL|table.json"
    "app|YaoApp.AppDSL|app.json"
    "chart|YaoChart.ChartDSL|chart.json"
    "connector|YaoConnector.ConnectorDSL|connector.json"
    "dashboard|YaoDashboard.DashboardDSL|dashboard.json"
    "flow|YaoFlow.Flow|flow.json"
    "form|YaoForm.FormDSL|form.json"
    "importer|YaoImport.Importer|importer.json"
    "list|YaoList.ListDSL|list.json"
    "login|YaoLogin.LoginDSL|login.json"
    "model|YaoModel.ModelDSL|model.json"
    "query_param|YaoQueryParam.QueryParam|query_param.json"
    "query|YaoQuery.QueryDSL|query.json"
    "schedule|YaoSchedule.Schedule|schedule.json"
    "service|YaoService.Service|service.json"
    "socket|YaoSocket.Socket|socket.json"
    "store|YaoStoreStore|store.json"
    "task|YaoTask.Task|task.json"
    "web_socket|YaoWebSocket.Server|ws_server.json"
    "web_socket|YaoWebSocket.Client|ws_client.json"
    "widget|YaoCustomWidget.Widget|widget.json"
)
if [ ! -d "json-schemas" ]; then
  mkdir json-schemas
fi


# array=(
#     "app|YaoApp.AppDSL|app.json"
# )  
for line in "${array[@]}"
do
    words=($(echo $line | tr "|" "\n"))
    echo "begin convert schema ${words[1]}"
    npx ts-json-schema-generator --path "src/types/dsl/${words[0]}.ts" --type "${words[1]}" > "./json-schemas/${words[2]}"
    echo "schema ${words[1]} converted"
done

echo "done"