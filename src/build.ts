import * as tsj from "ts-json-schema-generator";
import fs from "fs";

let array: string[] = [
  "api_http|YaoHttp.HttpDSL|api_http.json",
  "form|YaoForm.FormDSL|form.json",
  "table|YaoTable.TableDSL|table.json",
  "app|YaoApp.AppDSL|app.json",
  "chart|YaoChart.ChartDSL|chart.json",
  "connector|YaoConnector.ConnectorDSL|connector.json",
  "dashboard|YaoDashboard.DashboardDSL|dashboard.json",
  "flow|YaoFlow.Flow|flow.json",
  "importer|YaoImport.Importer|importer.json",
  "list|YaoList.ListDSL|list.json",
  "login|YaoLogin.LoginDSL|login.json",
  "model|YaoModel.ModelDSL|model.json",
  "query_param|YaoQueryParam.QueryParam|query_param.json",
  "query|YaoQuery.QueryDSL|query.json",
  "schedule|YaoSchedule.Schedule|schedule.json",
  "service|YaoService.Service|service.json",
  "socket|YaoSocket.Socket|socket.json",
  "store|YaoStore.Store|store.json",
  "task|YaoTask.Task|task.json",
  "web_socket|YaoWebSocket.Server|ws_server.json",
  "web_socket|YaoWebSocket.Client|ws_client.json",
  "widget|YaoCustomWidget.Widget|widget.json",
];
function main() {
  array.forEach((line) => {
    const words = line.split("|");
    const config = {
      path: `src/types/dsl/${words[0]}.ts`,
      tsconfig: "tsconfig.json",
      type: `${words[1]}`, // Or <type-name> if you want to generate schema for that one type only
    };

    const output_path = `./json-schemas/0.10.4/${words[2]}`;

    const schema = tsj.createGenerator(config).createSchema(config.type);
    const schemaString = JSON.stringify(schema, null, 2);
    fs.writeFile(output_path, schemaString, (err) => {
      if (err) throw err;
    });
  });
}

main();
