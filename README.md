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
    ~# curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -

    // Debian
    ~# curl -fsSL https://deb.nodesource.com/setup_current.x | bash -

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

Vite actualizará automaticamente el código del frontend con cada modificación

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

Generar la clave interna de laravel

    ~$ php artisan key:generate

Crear las tablas en la base de datos

    ~$ php artisan migrate

Ejecutar los seeders

    ~$ php artisan db:seed

Correr el servidor de laravel

    ~$ php artisan serve

Poner en el navegador la url que sale en el terminal para entrar el sistema

__Algunos comandos básicos__

Crear controlador de recurso, migración y seeder para el modelo

    ~$ php artisan make:model -cmrs Nombre_Modelo

__Nota__

    A partir de Laravel 8 se usa el framework Tailwind y tiene para elegir entre Inertia.js y Livewire.

    Para seguir usando Laravel con la estructura de Bootstrap y Vue.js, basta con ejecutar los siguientes comandos en una versión limpia de Laravel:

    composer require laravel/ui

    php artisan ui vue --auth

    Con esto se genera la estructura completa de gestión de usuario como la tenía Laravel 7.

    Este proyecto seguirá usando el paquete laravel/ui mientras tenga soporte.
    