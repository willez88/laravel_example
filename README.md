# Ejemplo Laravel

Este sistema permite a un usuario registrarse, iniciar sesión, salir, recuperar contraseña.
También cada usuario puede registrar los siguientes datos de personas:

    Nombres
    Apellidos
    Cédula de Identificación
    Teléfono
    Correo Electrónico.

# Pasos para crear el entorno de desarrollo

Cuando somos un usuario normal del sistema, en el terminal se mostrará el siguiente símbolo: ~$

Cuando accedemos al usuario root del sistema, en el terminal se mostrará el siguiente símbolo: ~#

Probado en versiones actualizadas de Debian y Ubuntu. Instalar los siguientes programas

    ~# apt install curl git graphviz graphviz-dev php phppgadmin postgresql

Para instalar npm hacer lo siguiente

    // Ubuntu
    ~$ curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

    // Debian
    ~# curl -sL https://deb.nodesource.com/setup_lts.x | bash -

    ~# apt install -y nodejs

Instalar composer seguir los pasos https://getcomposer.org/download/

Crear las siguientes carpetas

    ~$ mkdir Programación

Desde el terminal, moverse a la carpeta Programación y ejecutar

    ~$ cd Programación/

    ~$ mkdir php

Entrar a la carpeta php y hacer lo siguiente

    ~$ cd php/

    ~$ mkdir proyectos_laravel

Desde el terminal, moverse a la carpeta proyectos_laravel y ejecutar

    ~$ cd proyectos_laravel/

    ~$ git clone https://github.com/willez88/laravel_example.git

    ~$ cd laravel_example/

Tendremos las carpetas estructuradas de la siguiente manera

    // Servidor de desarrollo
    Programación/php/proyectos_laravel/laravel_example

Hacer la siguiente configuración

    // Cambia el nombre del archivo
    ~$ cp .env.example .env

    // Editar las siguientes líneas del archivo .env
    DB_CONNECTION=pgsql
    DB_HOST=127.0.0.1
    DB_PORT=5432
    DB_DATABASE=laravel_example
    DB_USERNAME=admin
    DB_PASSWORD=123

Instalar las dependencias de css y js

    ~$ npm install

Cada vez que se modifique código de un componente vue hay que compilar

    ~$ npm run dev

Instalar los requerimientos de composer.json

    ~$ composer install

Crear la base de datos para __laravel_example__ usando PostgresSQL

    // Acceso al usuario postgres
    ~# su postgres

    // Acceso a la interfaz de comandos de PostgreSQL
    postgres@xxx:$ psql

    // Creación del usuario de a base de datos
    postgres=# CREATE USER admin WITH LOGIN ENCRYPTED PASSWORD '123' CREATEDB;
    postgres=# \q

    // Desautenticar el usuario PostgreSQL y regresar al usuario root
    postgres@xxx:$ exit

    // Salir del usuario root
    ~# exit

Puedes crear la base de datos usando la interfaz gráfica phppgadmin

    // Desde algún navegador ir al siguiente sitio y entrar con el usuario que se acaba de crear
    localhost/phppgadmin

    // Nombre de la base de datos: laravel_example

Crear la clave interna que laravel usa

    ~$ php artisan key:generate

Crear las tablas en la base de datos

    ~$ php artisan migrate

Correr el servidor de laravel

    ~$ php artisan serve

Poner en el navegador la url que sale en el terminal para entrar el sistema

__Algunos comandos básicos__

Generación del diagrama entidad-relación

    ~$ php artisan generate:erd laravel_example.svg --format=svg

Crear controlador de recurso, migración y seeder para el modelo

    ~$ php artisan make:model -cmrs Nombre_Modelo

Las plantillas blade se crean en la siguiente carpeta

    resources/views/

__Nota__

    A partir de Laravel 8 se usa el framework Tailwind y tiene para elegir entre Inertia.js y Livewire.

    Para seguir usando Laravel con la estructura de Bootstrap y Vue.js, basta con ejecutar los siguientes comandos
    en una versión limpia de Laravel 8:

    composer require laravel/ui

    php artisan ui vue --auth

    Con esto se genera la estructura completa de gestión de usuario como la tenía Laravel 7.

    Este proyecto seguirá usando el paquete laravel/ui mientras tenga soporte.

# Entorno de desarollo Kavac

Cuando somos un usuario normal del sistema, en el terminal se mostrará el siguiente símbolo: ~$

Cuando accedemos al usuario root del sistema, en el terminal se mostrará el siguiente símbolo: ~#

Probado en versiones actualizadas de Debian y Ubuntu. Instalar los siguientes programas

    ~# apt install curl git graphviz graphviz-dev php phppgadmin postgresql libmysqlclient-dev mariadb-server php-gd php-mbstring php-tokenizer php-zip php-pgsql php-cli php-curl zip unzip

Para instalar npm hacer lo siguiente

    // Ubuntu
    ~$ curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

    // Debian
    ~# curl -sL https://deb.nodesource.com/setup_lts.x | bash -

    ~# apt install -y nodejs

Instalar composer seguir los pasos https://getcomposer.org/download/

Crear las siguientes carpetas

    ~$ mkdir Programación

Desde el terminal, moverse a la carpeta Programación y ejecutar

    ~$ cd Programación/

    ~$ mkdir php

Entrar a la carpeta php y hacer lo siguiente

    ~$ cd php/

    ~$ mkdir proyectos_laravel

Desde el terminal, moverse a la carpeta proyectos_laravel y ejecutar

    ~$ cd proyectos_laravel/

    ~$ git clone https://gitlab.com/roldandvg/kavac_cenditel.git

    ~$ cd kavac_cenditel/

Tendremos las carpetas estructuradas de la siguiente manera

    // Servidor de desarrollo
    Programación/php/proyectos_laravel/kavac_cenditel

Instalar paquetes de nodejs y compilar el frontend de la aplicación base y los módulos

    ~$ php artisan module:compile -s -i

Instalar los requerimientos de composer.json

    ~$ composer install

Hacer la siguiente configuración

    // Cambia el nombre del archivo
    ~$ cp .env.example .env

PostgreSQL o MariaDB (en este proyecto usar MariaDB)

    Crear la base de datos para __kavac_cenditel__ usando PostgresSQL

        // Acceso al usuario postgres
        ~# su postgres

        // Acceso a la interfaz de comandos de PostgreSQL
        postgres@xxx:$ psql

        // Creación del usuario de base de datos
        postgres=# CREATE USER admin WITH LOGIN ENCRYPTED PASSWORD '123' CREATEDB;
        postgres=# \q

        // Creación de la base de datos con dueño
        postgres=# CREATE DATABASE kavac WITH OWNER admin;

        // Cerrar sesión del usuario PostgreSQL y regresar al usuario root
        postgres@xxx:$ exit

        // Salir del usuario root
        ~# exit

        // Editar las siguientes líneas del archivo .env
        DB_CONNECTION=pgsql
        DB_HOST=127.0.0.1
        DB_PORT=5432
        DB_DATABASE=kavac
        DB_USERNAME=admin
        DB_PASSWORD=123

    Crear la base de datos para __kavac_cenditel__ usando MariaDB

        // Acesso al usuario root del sistema
        # mysql

        // Crea el usuario
        CREATE USER 'admin'@'localhost' IDENTIFIED BY '123';

        // Se Otorgan todos los permisos
        GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost';

        FLUSH PRIVILEGES;

        // Cerrar sesión del usuario MariaDB y regresar al usuario root
        exit

        // Salir del usuario root
        ~# exit

        // Editar las siguientes líneas del archivo .env
        DB_CONNECTION=mysql
        DB_HOST=127.0.0.1
        DB_PORT=3306
        DB_DATABASE=kavac
        DB_USERNAME=admin
        DB_PASSWORD=123

    Puedes crear la base de datos usando la interfaz gráfica phpmyadmin

        // Desde algún navegador ir al siguiente sitio y entrar con el usuario que se acaba de crear
        localhost/phpmyadmin

        // Si phpmyadmin no abre, ejecutar el siguiente comando
        ~# ln -s /usr/share/phpmyadmin /var/www/html

        // Nombre de la base de datos: kavac

Crear la clave interna de laravel

    ~$ php artisan key:generate

Editar la siguiente línea del archivo .env

    APP_URL=http://localhost:8000

Crear las tablas en la base de datos

    ~$ php artisan migrate

Cargar los datos por defecto de la aplicación

    ~$ php artisan db:seed && php artisan module:seed

Correr el servidor de laravel

    // Este comando levanta un servidor en la dirección ip 127.0.0.1 o localhost y en el puerto 8000, para verificarlo entra al enlace [localhost:8000]
    ~$ php artisan serve

Una vez que hayan sido registrado los datos iniciales del sistema, se puede autenticar en el mismo con los siguientes datos de acceso como administrador:

    usuario: admin
    clave: 123456

El primer paso, para el correcto funcionamiento del sistema, es registrar información básica de la organización que llevará a cabo la gestión de información dentro de la aplicación, para ello se debe ingresar al menú

    Configuración > General

Y allí, en el panel **"CONFIGURAR ORGANIZACIÓN"** se deben indicar los datos de la organización. Una vez configurada, se mostrarán todas las opciones de los módulos disponibles en el sistema
