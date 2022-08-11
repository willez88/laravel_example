<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * @class CreateMunicipalitiesTable
 * @brief Crear tabla de municipios
 *
 * Gestiona la creación o eliminación de la tabla municipios
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class CreateMunicipalitiesTable extends Migration
{
    /**
     * Ejecuta las migraciones
     *
     * @author William Páez <paez.william8@gmail.com>
     */
    public function up()
    {
        if (!Schema::hasTable('municipalities')) {
            Schema::create('municipalities', function (Blueprint $table) {
                $table->id();
                $table->string('name', 100)->comment('Nombre del municipio');
                $table->string('code', 10)->unique()->comment('Código que identifica al municipio');
                $table->foreignId('estate_id')->constrained()->onDelete('restrict')->onUpdate('cascade');
                $table->unique(['estate_id', 'name'])->comment('Clave única para el registro');
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
        Schema::dropIfExists('municipalities');
    }
}
