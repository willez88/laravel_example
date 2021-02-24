<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * @class CreateCountriesTable
 * @brief Crear tabla de países
 *
 * Gestiona la creación o eliminación de la tabla países
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class CreateCountriesTable extends Migration
{
    /**
     * Ejecuta las migraciones
     *
     * @author William Páez <paez.william8@gmail.com>
     */
    public function up()
    {
        if (!Schema::hasTable('countries')) {
            Schema::create('countries', function (Blueprint $table) {
                $table->id()->comment('Identificador único del registro');
                $table->string('name', 100)->unique()->comment('Nombre del país');
                $table->timestamps();
            });
        }
    }

    /**
     * Revierte las migraciones
     *
     * @author William Páez <paez.william8@gmail.com>
     */
    public function down()
    {
        Schema::dropIfExists('countries');
    }
}
