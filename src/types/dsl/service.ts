export namespace YaoService {
  /**
  [Unit]
  Description={{.Description}}
  Requires={{.Dependencies}}
  After={{.Dependencies}}

  [Service]
  PIDFile=/var/run/{{.Name}}.pid
  ExecStartPre=/bin/rm -f /var/run/{{.Name}}.pid
  ExecStart={{.Path}} {{.Args}}
  Restart=on-failure
  WorkingDirectory=/
  User=root
  Group=root
  StandardOutput=file:/var/log/yao-{{.Name}}.log
  StandardError=file:/var/log/yao-{{.Name}}-error.log
   */

  // [Install]
  // WantedBy=multi-user.target

  // Service embedded daemon
  //
  //	{
  //		"name": "Server for receiving RFID",
  //		"description": "Server for receiving RFID",
  //		"version": "0.9.2",
  //		"restart": "on-failure",
  //		"requires": ["servers.rfid_server"],
  //		"after": ["servers.rfid_server"],
  //		"error": "/var/log/test.err"
  //		"output": "/var/log/test.log"
  //		"process": "servers.rfid_client",
  //		"args": ["192.168.1.192", 6000],
  //	    "user": "root",
  //	    "group": "root"
  //	}

  //gou/service/types.go

  /**后台服务定义，不支持windows操作系统 */
  export interface Service {
    /**名称 */
    name?: string;
    /**描述 */
    description?: string;
    /**版本 */
    version?: string;
    /**处理器，运行目录是环境变量YAO_ROOT，或是使用当前目录 */
    process?: string;
    /**作业运行命令，默认是`yao run `,使用yao执行脚本等，可替换成其它的系统命令*/
    command?: string;
    /**前置作业 */
    requires?: string[];
    /**前置作业 */
    after?: string[];
    /**重启条件，默认on-failure */
    restart?: string;
    /**工作目录 */
    workdir?: string;
    /**处理器运行的参数 */
    args?: any[];
    /**错误日志文件路径，默认/var/log/yao-{{.Name}}-error.log*/
    error?: string;
    /**结果输出文件路径，默认/var/log/yao-{{.Name}}.log */
    output?: string;
    /**运行用户，默认User=root*/
    user?: string;
    /**运行用户组，Group=root*/
    group?: string;
    // Daemon?: Daemon;
    $schema?: string;
  }
}
