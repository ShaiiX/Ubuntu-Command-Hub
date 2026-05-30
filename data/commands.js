// command dataset for ubuntu command hub
// categories include linux commands and search tags
const COMMANDS = {
    categories: [
        // system navigation commands
        {
            id: "system-navigation",
            commands: [
                { id: "cd", tags: ["directory", "navigate", "change", "folder"] },
                { id: "ls", tags: ["list", "directory", "files", "folder", "contents"] },
                { id: "pwd", tags: ["directory", "path", "current", "print", "working"] },
                { id: "man", tags: ["manual", "help", "documentation", "info"] },
                { id: "clear", tags: ["screen", "clean", "terminal", "reset"] },
                { id: "echo", tags: ["print", "output", "display", "message"] },
                { id: "date", tags: ["time", "clock", "calendar", "datetime"] },
                { id: "alias", tags: ["shortcut", "custom", "command", "alias"] }
            ]
        },
        // file and directory commands
        {
            id: "files-directories",
            commands: [
                { id: "cp", tags: ["copy", "duplicate", "file", "backup"] },
                { id: "mv", tags: ["move", "rename", "file", "cut"] },
                { id: "rm", tags: ["remove", "delete", "file", "directory"] },
                { id: "mkdir", tags: ["create", "directory", "folder", "make"] },
                { id: "touch", tags: ["create", "file", "timestamp", "empty"] },
                { id: "find", tags: ["search", "file", "directory", "locate"] },
                { id: "tar", tags: ["archive", "compress", "extract", "backup"] },
                { id: "zip", tags: ["compress", "archive", "zip", "package"] },
                { id: "unzip", tags: ["extract", "uncompress", "zip", "archive"] },
                { id: "cat", tags: ["concatenate", "display", "file", "content"] },
                { id: "less", tags: ["view", "pager", "file", "browse", "read"] },
                { id: "head", tags: ["beginning", "top", "lines", "preview"] },
                { id: "tail", tags: ["end", "bottom", "lines", "follow", "logs"] },
                { id: "nano", tags: ["editor", "text", "edit", "terminal"] },
                { id: "vim", tags: ["editor", "text", "edit", "advanced", "terminal"] }
            ]
        },
        // permissions and user commands
        {
            id: "permissions-users",
            commands: [
                { id: "chmod", tags: ["permissions", "mode", "file", "access"] },
                { id: "chown", tags: ["owner", "change", "user", "group", "file"] },
                { id: "chgrp", tags: ["group", "change", "file", "permissions"] },
                { id: "umask", tags: ["permissions", "default", "mask", "file"] },
                { id: "adduser", tags: ["user", "create", "account", "new"] },
                { id: "usermod", tags: ["user", "modify", "account", "modify"] },
                { id: "passwd", tags: ["password", "user", "security", "change"] },
                { id: "sudo", tags: ["superuser", "root", "privileges", "admin"] },
                { id: "whoami", tags: ["user", "current", "identity", "who"] },
                { id: "id", tags: ["user", "identity", "uid", "gid", "groups"] }
            ]
        },
        // process and system commands
        {
            id: "processes-system",
            commands: [
                { id: "ps", tags: ["process", "list", "running", "status"] },
                { id: "top", tags: ["process", "monitor", "realtime", "cpu", "memory"] },
                { id: "htop", tags: ["process", "monitor", "interactive", "cpu"] },
                { id: "kill", tags: ["process", "terminate", "signal", "pid"] },
                { id: "systemctl", tags: ["service", "systemd", "manage", "daemon"] },
                { id: "uname", tags: ["system", "kernel", "architecture", "info"] },
                { id: "df", tags: ["disk", "space", "filesystem", "usage", "free"] },
                { id: "free", tags: ["memory", "ram", "usage", "available"] },
                { id: "uptime", tags: ["uptime", "time", "active", "load"] },
                { id: "service", tags: ["service", "manage", "start", "stop", "restart"] },
                { id: "nohup", tags: ["process", "background", "persistent", "hup"] }
            ]
        },
        // network commands
        {
            id: "network",
            commands: [
                { id: "ip", tags: ["network", "interface", "address", "route"] },
                { id: "ping", tags: ["connectivity", "test", "host", "latency"] },
                { id: "traceroute", tags: ["route", "trace", "network", "path", "hops"] },
                { id: "ss", tags: ["socket", "network", "connection", "port"] },
                { id: "netstat", tags: ["network", "statistics", "connection", "port"] },
                { id: "nslookup", tags: ["dns", "resolve", "domain", "query"] },
                { id: "dig", tags: ["dns", "query", "domain", "resolve", "detail"] },
                { id: "wget", tags: ["download", "http", "file", "retrieve"] },
                { id: "curl", tags: ["http", "request", "api", "transfer", "url"] },
                { id: "ssh", tags: ["remote", "secure", "shell", "connection"] },
                { id: "scp", tags: ["copy", "remote", "secure", "transfer", "file"] }
            ]
        },
        // package management commands
        {
            id: "packages",
            commands: [
                { id: "apt-update", tags: ["package", "update", "repository", "apt"] },
                { id: "apt-upgrade", tags: ["package", "upgrade", "update", "system"] },
                { id: "apt-install", tags: ["package", "install", "software", "apt"] },
                { id: "apt-remove", tags: ["package", "remove", "uninstall", "apt"] },
                { id: "apt-autoremove", tags: ["package", "clean", "unused", "apt"] },
                { id: "apt-search", tags: ["package", "search", "find", "apt"] },
                { id: "dpkg", tags: ["package", "debian", "install", "manage", "deb"] }
            ]
        },
        // disk and storage commands
        {
            id: "disk-storage",
            commands: [
                { id: "lsblk", tags: ["block", "device", "disk", "list", "storage"] },
                { id: "fdisk", tags: ["partition", "disk", "table", "manage"] },
                { id: "df", tags: ["disk", "space", "filesystem", "usage", "free"] },
                { id: "du", tags: ["disk", "usage", "size", "directory", "estimate"] },
                { id: "mount", tags: ["mount", "filesystem", "device", "attach"] },
                { id: "umount", tags: ["unmount", "filesystem", "device", "detach"] },
                { id: "blkid", tags: ["block", "uuid", "label", "device", "attribute"] }
            ]
        },
        // logs and diagnostics commands
        {
            id: "logs-diagnostics",
            commands: [
                { id: "journalctl", tags: ["log", "systemd", "journal", "query"] },
                { id: "dmesg", tags: ["kernel", "log", "boot", "message"] },
                { id: "tail", tags: ["log", "follow", "end", "monitor", "file"] },
                { id: "grep", tags: ["search", "pattern", "regex", "filter"] },
                { id: "systemd-analyze", tags: ["boot", "analyze", "systemd", "performance"] }
            ]
        }
    ]
};
