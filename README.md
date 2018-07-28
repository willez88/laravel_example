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

Probado en Debian 9 y Ubuntu 18.04. Instalar los siguientes programas

    ~# apt install curl git php phppgadmin postgresql

Para instalar npm hacer lo siguiente

    ~# curl -sL https://deb.nodesource.com/setup_10.x | bash -

    ~# apt install -y nodejs

Instalar composer seguir los pasos https://getcomposer.org/download/

Crear las siguientes carpetas

    ~$ mkdir Programación

Desde el terminal, moverse a la carpeta Programación y ejecutar

    ~$ cd Programación/

    ~$ mkdir php

Entrar a la carpeta php y hacer lo siguiente

    ~$ cd php/

    ~$ mkdir proyectos_php

Desde el terminal, moverse a la carpeta proyectos_php y ejecutar

    ~$ cd proyectos_php/

    ~$ git clone https://github.com/willez88/laravel_example.git

    ~$ cd laravel_example/

Tendremos las carpetas estructuradas de la siguiente manera

    // Servidor de desarrollo
    Programación/php/proyectos_php/laravel_example

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

Instalar las dependencias de css y js: moverse a la carpeta public y ejecutar

    ~$ cd public/

    ~$ npm install

    ~$ cd ../

Instalar los requerimientos de composer.json

    ~$ /home/tu-usuario/composer.phar install

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

Crear modelo, migración y controlador

    ~$ php artisan make:model -cm Nombre_Modelo

Las palntillas blade se crean en la siguiente carpeta

    resources/views/