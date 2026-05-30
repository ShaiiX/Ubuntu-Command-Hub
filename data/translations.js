// translation strings for bilingual ui text and command descriptions
const TRANSLATIONS = {
  // spanish translations for ui labels, categories and command details
  es: {
    ui: {
      title: "Command Hub",
      searchPlaceholder: "Buscar comandos, categorías...",
      noResults: "No se encontraron comandos",
      noResultsHint: "Intenta con otros términos de búsqueda o categoría",
      example: "Ejemplo",
      allCategories: "Todas las categorías",
      clearSearch: "Limpiar"
    },
    categories: {
      "system-navigation": "Sistema y navegación",
      "files-directories": "Archivos y directorios",
      "permissions-users": "Permisos y usuarios",
      "processes-system": "Procesos y sistema",
      "network": "Red",
      "packages": "Paquetes",
      "disk-storage": "Disco y almacenamiento",
      "logs-diagnostics": "Logs y diagnóstico"
    },
    commands: {
      cd: {
        display: "cd",
        description: "Cambiar el directorio de trabajo actual",
        example: "cd /home/usuario/proyectos"
      },
      ls: {
        display: "ls",
        description: "Listar el contenido de un directorio",
        example: "ls -la /home/usuario"
      },
      pwd: {
        display: "pwd",
        description: "Mostrar la ruta completa del directorio actual",
        example: "pwd"
      },
      man: {
        display: "man",
        description: "Mostrar el manual de ayuda de un comando",
        example: "man ls"
      },
      clear: {
        display: "clear",
        description: "Limpiar la pantalla de la terminal",
        example: "clear"
      },
      echo: {
        display: "echo",
        description: "Mostrar un mensaje o variable por salida estándar",
        example: 'echo "Hola, mundo"'
      },
      date: {
        display: "date",
        description: "Mostrar o establecer la fecha y hora del sistema",
        example: "date"
      },
      alias: {
        display: "alias",
        description: "Crear un atajo personalizado para un comando",
        example: "alias ll='ls -la'"
      },
      cp: {
        display: "cp",
        description: "Copiar archivos o directorios",
        example: "cp origen.txt destino.txt"
      },
      mv: {
        display: "mv",
        description: "Mover o renombrar archivos y directorios",
        example: "mv viejo.txt nuevo.txt"
      },
      rm: {
        display: "rm",
        description: "Eliminar archivos o directorios",
        example: "rm -rf directorio/"
      },
      mkdir: {
        display: "mkdir",
        description: "Crear uno o varios directorios nuevos",
        example: "mkdir -p proyecto/src/components"
      },
      touch: {
        display: "touch",
        description: "Crear un archivo vacío o actualizar su timestamp",
        example: "touch archivo.txt"
      },
      find: {
        display: "find",
        description: "Buscar archivos y directorios con diversos criterios",
        example: 'find /home -name "*.txt"'
      },
      tar: {
        display: "tar",
        description: "Comprimir o extraer archivos en formato tar",
        example: "tar -czvf respaldo.tar.gz directorio/"
      },
      zip: {
        display: "zip",
        description: "Comprimir archivos en formato ZIP",
        example: "zip -r proyecto.zip directorio/"
      },
      unzip: {
        display: "unzip",
        description: "Extraer archivos comprimidos en ZIP",
        example: "unzip archivo.zip"
      },
      cat: {
        display: "cat",
        description: "Mostrar el contenido completo de un archivo",
        example: "cat /etc/os-release"
      },
      less: {
        display: "less",
        description: "Visualizar archivos de texto con navegación interactiva",
        example: "less /var/log/syslog"
      },
      head: {
        display: "head",
        description: "Mostrar las primeras líneas de un archivo",
        example: "head -n 20 archivo.csv"
      },
      tail: {
        display: "tail",
        description: "Mostrar las últimas líneas de un archivo en tiempo real",
        example: "tail -f /var/log/syslog"
      },
      nano: {
        display: "nano",
        description: "Editor de texto sencillo para terminal",
        example: "nano config.txt"
      },
      vim: {
        display: "vim",
        description: "Editor de texto avanzado y altamente configurable",
        example: "vim script.py"
      },
      chmod: {
        display: "chmod",
        description: "Cambiar los permisos de lectura, escritura y ejecución",
        example: "chmod 755 script.sh"
      },
      chown: {
        display: "chown",
        description: "Cambiar el propietario y grupo de un archivo",
        example: "chown usuario:grupo archivo.txt"
      },
      chgrp: {
        display: "chgrp",
        description: "Cambiar el grupo asociado a un archivo",
        example: "chgrp desarrolladores proyecto/"
      },
      umask: {
        display: "umask",
        description: "Establecer los permisos por defecto para nuevos archivos",
        example: "umask 022"
      },
      adduser: {
        display: "adduser",
        description: "Crear un nuevo usuario en el sistema",
        example: "sudo adduser nuevo_usuario"
      },
      usermod: {
        display: "usermod",
        description: "Modificar la configuración de una cuenta de usuario",
        example: "sudo usermod -aG sudo usuario"
      },
      passwd: {
        display: "passwd",
        description: "Cambiar la contraseña de un usuario",
        example: "passwd usuario"
      },
      sudo: {
        display: "sudo",
        description: "Ejecutar comandos con privilegios de superusuario",
        example: "sudo apt update"
      },
      whoami: {
        display: "whoami",
        description: "Mostrar el nombre del usuario actual",
        example: "whoami"
      },
      id: {
        display: "id",
        description: "Mostrar la identidad del usuario (UID, GID, grupos)",
        example: "id"
      },
      ps: {
        display: "ps",
        description: "Listar los procesos en ejecución del sistema",
        example: "ps aux"
      },
      top: {
        display: "top",
        description: "Monitorizar procesos del sistema en tiempo real",
        example: "top"
      },
      htop: {
        display: "htop",
        description: "Monitor interactivo de procesos con interfaz mejorada",
        example: "htop"
      },
      kill: {
        display: "kill",
        description: "Enviar señales para terminar procesos",
        example: "kill -9 1234"
      },
      systemctl: {
        display: "systemctl",
        description: "Gestionar servicios y el sistema systemd",
        example: "sudo systemctl start nginx"
      },
      uname: {
        display: "uname",
        description: "Mostrar información detallada del sistema",
        example: "uname -a"
      },
      free: {
        display: "free",
        description: "Mostrar el uso de memoria RAM y swap",
        example: "free -h"
      },
      uptime: {
        display: "uptime",
        description: "Mostrar el tiempo de actividad y carga del sistema",
        example: "uptime"
      },
      service: {
        display: "service",
        description: "Gestionar servicios del sistema (init.d)",
        example: "sudo service nginx restart"
      },
      nohup: {
        display: "nohup",
        description: "Ejecutar procesos que continúen tras cerrar la terminal",
        example: "nohup script.sh &"
      },
      ip: {
        display: "ip",
        description: "Mostrar y configurar interfaces de red y rutas",
        example: "ip addr show"
      },
      ping: {
        display: "ping",
        description: "Verificar conectividad con un host remoto",
        example: "ping -c 4 google.com"
      },
      traceroute: {
        display: "traceroute",
        description: "Trazar la ruta que siguen los paquetes hacia un host",
        example: "traceroute google.com"
      },
      ss: {
        display: "ss",
        description: "Investigar sockets y conexiones de red",
        example: "ss -tuln"
      },
      netstat: {
        display: "netstat",
        description: "Mostrar estadísticas y conexiones de red",
        example: "netstat -tuln"
      },
      nslookup: {
        display: "nslookup",
        description: "Consultar nombres de dominio mediante DNS",
        example: "nslookup google.com"
      },
      dig: {
        display: "dig",
        description: "Realizar consultas DNS detalladas",
        example: "dig google.com ANY"
      },
      wget: {
        display: "wget",
        description: "Descargar archivos desde internet de forma no interactiva",
        example: "wget https://ejemplo.com/archivo.zip"
      },
      curl: {
        display: "curl",
        description: "Transferir datos con URLs (HTTP, FTP y más)",
        example: "curl -O https://ejemplo.com/archivo.zip"
      },
      ssh: {
        display: "ssh",
        description: "Conexión remota segura a otro equipo",
        example: "ssh usuario@192.168.1.100"
      },
      scp: {
        display: "scp",
        description: "Copiar archivos entre equipos mediante SSH",
        example: "scp archivo.txt usuario@host:/destino/"
      },
      "apt-update": {
        display: "apt update",
        description: "Actualizar la lista de paquetes disponibles",
        example: "sudo apt update"
      },
      "apt-upgrade": {
        display: "apt upgrade",
        description: "Actualizar todos los paquetes instalados",
        example: "sudo apt upgrade"
      },
      "apt-install": {
        display: "apt install",
        description: "Instalar un paquete desde los repositorios",
        example: "sudo apt install nginx"
      },
      "apt-remove": {
        display: "apt remove",
        description: "Eliminar un paquete instalado",
        example: "sudo apt remove nginx"
      },
      "apt-autoremove": {
        display: "apt autoremove",
        description: "Eliminar paquetes huérfanos e innecesarios",
        example: "sudo apt autoremove"
      },
      "apt-search": {
        display: "apt search",
        description: "Buscar paquetes disponibles en los repositorios",
        example: "apt search nginx"
      },
      dpkg: {
        display: "dpkg",
        description: "Gestionar paquetes .deb a bajo nivel",
        example: "sudo dpkg -i paquete.deb"
      },
      lsblk: {
        display: "lsblk",
        description: "Listar todos los dispositivos de bloque del sistema",
        example: "lsblk"
      },
      fdisk: {
        display: "fdisk",
        description: "Administrar tablas de particiones del disco",
        example: "sudo fdisk -l"
      },
      du: {
        display: "du",
        description: "Estimar el espacio ocupado por archivos y directorios",
        example: "du -sh /home/usuario"
      },
      mount: {
        display: "mount",
        description: "Montar un sistema de archivos en un directorio",
        example: "sudo mount /dev/sda1 /mnt"
      },
      umount: {
        display: "umount",
        description: "Desmontar un sistema de archivos",
        example: "sudo umount /mnt"
      },
      blkid: {
        display: "blkid",
        description: "Mostrar atributos UUID y etiquetas de dispositivos",
        example: "sudo blkid"
      },
      journalctl: {
        display: "journalctl",
        description: "Consultar y filtrar los logs del sistema (systemd)",
        example: "journalctl -xe"
      },
      dmesg: {
        display: "dmesg",
        description: "Mostrar los mensajes del kernel (arranque y drivers)",
        example: "dmesg | grep error"
      },
      grep: {
        display: "grep",
        description: "Buscar patrones de texto en archivos usando regex",
        example: 'grep "ERROR" /var/log/syslog'
      },
      "systemd-analyze": {
        display: "systemd-analyze",
        description: "Analizar el tiempo de arranque y servicios del sistema",
        example: "systemd-analyze blame"
      }
    }
  },
  // english translations for ui labels, categories and command details
  en: {
    ui: {
      title: "Command Hub",
      searchPlaceholder: "Search commands, categories...",
      noResults: "No commands found",
      noResultsHint: "Try different search terms or category",
      example: "Example",
      allCategories: "All Categories",
      clearSearch: "Clear"
    },
    categories: {
      "system-navigation": "System & Navigation",
      "files-directories": "Files & Directories",
      "permissions-users": "Permissions & Users",
      "processes-system": "Processes & System",
      "network": "Network",
      "packages": "Packages",
      "disk-storage": "Disk & Storage",
      "logs-diagnostics": "Logs & Diagnostics"
    },
    commands: {
      cd: {
        display: "cd",
        description: "Change the current working directory",
        example: "cd /home/user/projects"
      },
      ls: {
        display: "ls",
        description: "List directory contents",
        example: "ls -la /home/user"
      },
      pwd: {
        display: "pwd",
        description: "Print the full path of the current directory",
        example: "pwd"
      },
      man: {
        display: "man",
        description: "Display the manual page for a command",
        example: "man ls"
      },
      clear: {
        display: "clear",
        description: "Clear the terminal screen",
        example: "clear"
      },
      echo: {
        display: "echo",
        description: "Display a message or variable to standard output",
        example: 'echo "Hello, world"'
      },
      date: {
        display: "date",
        description: "Display or set the system date and time",
        example: "date"
      },
      alias: {
        display: "alias",
        description: "Create a custom shortcut for a command",
        example: "alias ll='ls -la'"
      },
      cp: {
        display: "cp",
        description: "Copy files or directories",
        example: "cp source.txt destination.txt"
      },
      mv: {
        display: "mv",
        description: "Move or rename files and directories",
        example: "mv old.txt new.txt"
      },
      rm: {
        display: "rm",
        description: "Remove files or directories",
        example: "rm -rf directory/"
      },
      mkdir: {
        display: "mkdir",
        description: "Create one or more new directories",
        example: "mkdir -p project/src/components"
      },
      touch: {
        display: "touch",
        description: "Create an empty file or update its timestamp",
        example: "touch file.txt"
      },
      find: {
        display: "find",
        description: "Search for files and directories with various criteria",
        example: 'find /home -name "*.txt"'
      },
      tar: {
        display: "tar",
        description: "Compress or extract tar archive files",
        example: "tar -czvf backup.tar.gz directory/"
      },
      zip: {
        display: "zip",
        description: "Compress files into ZIP format",
        example: "zip -r project.zip directory/"
      },
      unzip: {
        display: "unzip",
        description: "Extract files from a ZIP archive",
        example: "unzip archive.zip"
      },
      cat: {
        display: "cat",
        description: "Display the full contents of a file",
        example: "cat /etc/os-release"
      },
      less: {
        display: "less",
        description: "View text files with interactive navigation",
        example: "less /var/log/syslog"
      },
      head: {
        display: "head",
        description: "Display the first lines of a file",
        example: "head -n 20 file.csv"
      },
      tail: {
        display: "tail",
        description: "Display the last lines of a file in real time",
        example: "tail -f /var/log/syslog"
      },
      nano: {
        display: "nano",
        description: "Simple terminal text editor",
        example: "nano config.txt"
      },
      vim: {
        display: "vim",
        description: "Advanced and highly configurable text editor",
        example: "vim script.py"
      },
      chmod: {
        display: "chmod",
        description: "Change file read, write, and execute permissions",
        example: "chmod 755 script.sh"
      },
      chown: {
        display: "chown",
        description: "Change file owner and group",
        example: "chown user:group file.txt"
      },
      chgrp: {
        display: "chgrp",
        description: "Change the group ownership of a file",
        example: "chgrp developers project/"
      },
      umask: {
        display: "umask",
        description: "Set default permissions for newly created files",
        example: "umask 022"
      },
      adduser: {
        display: "adduser",
        description: "Create a new user on the system",
        example: "sudo adduser new_user"
      },
      usermod: {
        display: "usermod",
        description: "Modify a user account configuration",
        example: "sudo usermod -aG sudo user"
      },
      passwd: {
        display: "passwd",
        description: "Change a user's password",
        example: "passwd user"
      },
      sudo: {
        display: "sudo",
        description: "Execute commands with superuser privileges",
        example: "sudo apt update"
      },
      whoami: {
        display: "whoami",
        description: "Display the current username",
        example: "whoami"
      },
      id: {
        display: "id",
        description: "Display user identity (UID, GID, groups)",
        example: "id"
      },
      ps: {
        display: "ps",
        description: "List currently running processes",
        example: "ps aux"
      },
      top: {
        display: "top",
        description: "Monitor system processes in real time",
        example: "top"
      },
      htop: {
        display: "htop",
        description: "Interactive process monitor with enhanced interface",
        example: "htop"
      },
      kill: {
        display: "kill",
        description: "Send signals to terminate processes",
        example: "kill -9 1234"
      },
      systemctl: {
        display: "systemctl",
        description: "Manage systemd services and the system manager",
        example: "sudo systemctl start nginx"
      },
      uname: {
        display: "uname",
        description: "Display detailed system information",
        example: "uname -a"
      },
      free: {
        display: "free",
        description: "Display RAM and swap memory usage",
        example: "free -h"
      },
      uptime: {
        display: "uptime",
        description: "Show system uptime and load averages",
        example: "uptime"
      },
      service: {
        display: "service",
        description: "Manage system services (init.d)",
        example: "sudo service nginx restart"
      },
      nohup: {
        display: "nohup",
        description: "Run processes that persist after terminal exit",
        example: "nohup script.sh &"
      },
      ip: {
        display: "ip",
        description: "Show and configure network interfaces and routes",
        example: "ip addr show"
      },
      ping: {
        display: "ping",
        description: "Test connectivity to a remote host",
        example: "ping -c 4 google.com"
      },
      traceroute: {
        display: "traceroute",
        description: "Trace the packet path to a network host",
        example: "traceroute google.com"
      },
      ss: {
        display: "ss",
        description: "Investigate network sockets and connections",
        example: "ss -tuln"
      },
      netstat: {
        display: "netstat",
        description: "Display network statistics and connections",
        example: "netstat -tuln"
      },
      nslookup: {
        display: "nslookup",
        description: "Query domain names via DNS",
        example: "nslookup google.com"
      },
      dig: {
        display: "dig",
        description: "Perform detailed DNS queries",
        example: "dig google.com ANY"
      },
      wget: {
        display: "wget",
        description: "Download files from the internet non-interactively",
        example: "wget https://example.com/file.zip"
      },
      curl: {
        display: "curl",
        description: "Transfer data using URLs (HTTP, FTP, etc.)",
        example: "curl -O https://example.com/file.zip"
      },
      ssh: {
        display: "ssh",
        description: "Secure remote connection to another machine",
        example: "ssh user@192.168.1.100"
      },
      scp: {
        display: "scp",
        description: "Copy files between hosts via SSH",
        example: "scp file.txt user@host:/destination/"
      },
      "apt-update": {
        display: "apt update",
        description: "Update the package list from repositories",
        example: "sudo apt update"
      },
      "apt-upgrade": {
        display: "apt upgrade",
        description: "Upgrade all installed packages",
        example: "sudo apt upgrade"
      },
      "apt-install": {
        display: "apt install",
        description: "Install a package from the repositories",
        example: "sudo apt install nginx"
      },
      "apt-remove": {
        display: "apt remove",
        description: "Remove an installed package",
        example: "sudo apt remove nginx"
      },
      "apt-autoremove": {
        display: "apt autoremove",
        description: "Remove orphaned and unnecessary packages",
        example: "sudo apt autoremove"
      },
      "apt-search": {
        display: "apt search",
        description: "Search for available packages in repositories",
        example: "apt search nginx"
      },
      dpkg: {
        display: "dpkg",
        description: "Manage .deb packages at a low level",
        example: "sudo dpkg -i package.deb"
      },
      lsblk: {
        display: "lsblk",
        description: "List all block devices on the system",
        example: "lsblk"
      },
      fdisk: {
        display: "fdisk",
        description: "Manage disk partition tables",
        example: "sudo fdisk -l"
      },
      du: {
        display: "du",
        description: "Estimate file and directory space usage",
        example: "du -sh /home/user"
      },
      mount: {
        display: "mount",
        description: "Mount a filesystem to a directory",
        example: "sudo mount /dev/sda1 /mnt"
      },
      umount: {
        display: "umount",
        description: "Unmount a filesystem",
        example: "sudo umount /mnt"
      },
      blkid: {
        display: "blkid",
        description: "Show UUID attributes and labels of block devices",
        example: "sudo blkid"
      },
      journalctl: {
        display: "journalctl",
        description: "Query and filter systemd logs",
        example: "journalctl -xe"
      },
      dmesg: {
        display: "dmesg",
        description: "Display kernel ring buffer messages (boot & drivers)",
        example: "dmesg | grep error"
      },
      grep: {
        display: "grep",
        description: "Search text patterns in files using regular expressions",
        example: 'grep "ERROR" /var/log/syslog'
      },
      "systemd-analyze": {
        display: "systemd-analyze",
        description: "Analyze system boot time and service startup",
        example: "systemd-analyze blame"
      }
    }
  }
};
