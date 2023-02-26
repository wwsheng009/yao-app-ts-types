import fs from "fs";
import path from "node:path";

/**转换markdown 文档为ts注释
 *
 * */
function ConvertDoc() {
  let p = path.resolve("./src/doc/in.txt");
  let o = path.resolve("./src/doc/out.txt");
  // console.log(p);
  let content = fs.readFileSync(p, "utf8");

  const lines = content.split("\n");
  const new_lines: string[] = [];
  lines.forEach((line) => {
    const columns = line.split("|");
    const fname = columns[1];
    if (!fname) {
      return;
    }
    const method = fname.split(".").pop();
    const nline = columns
      .map((l) => l.trim())
      .slice(2)
      .join("|");
    const commentLine = `/**${nline}*/`;
    const newLine = `${method.trim()} = "${fname.trim()}",`;
    new_lines.push(commentLine);
    new_lines.push(newLine);
  });
  // console.log(new_lines.join("\n"));
  fs.writeFileSync(o, new_lines.join("\n"));
  console.log("done!");
}

ConvertDoc();
