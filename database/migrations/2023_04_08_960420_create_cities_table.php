<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * @class CreateCitiesTable
 * @brief Crear tabla de ciudades
 *
 * Gestiona la creación o eliminación de la tabla ciudades
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
return new class extends Migration
{
    /**
     * Ejecuta las migraciones
     *
     * @author William Páez <paez.william8@gmail.com>
     */
    public function up(): void
    {
        if (!Schema::hasTable('cities')) {
            Schema::create('cities', function (Blueprint $table) {
                $table->id();
                $table->string('name', 100)->comment('Nombre de la ciudad');
                $table->string('code', 10)->nullable()->unique()->comment('Código que identifica a la ciudad');
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
    public function down(): void
    {
        Schema::dropIfExists('cities');
    }
};
