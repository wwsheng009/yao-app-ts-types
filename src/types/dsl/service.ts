export namespace YaoService {
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

  export interface Service {
    // name?: string;
    name?: string;
    description?: string;
    version?: string;
    process?: string;
    command?: string;
    requires?: string[];
    after?: string[];
    restart?: string;
    workdir?: string;
    args?: string[];
    error?: string;
    output?: string;
    user?: string;
    group?: string;
    // Daemon?: Daemon;
    $schema?: string;
  }
}
