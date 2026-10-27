const dns = require("node:dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const { spawn } = require("node:child_process");

const isWindows = process.platform === "win32";
const command = isWindows ? "npx.cmd" : "npx";

const server = spawn(command, ["next", "dev"], {
  stdio: "inherit",
  shell: isWindows,
});

server.on("exit", (code) => {
  process.exitCode = code ?? 1;
});
