<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * @class CreateEstatesTable
 * @brief Crear tabla de estados
 *
 * Gestiona la creación o eliminación de la tabla estados
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
        if (!Schema::hasTable('estates')) {
            Schema::create('estates', function (Blueprint $table) {
                $table->id();
                $table->string('name', 100)->comment('Nombre del estado');
                $table->string('code', 10)->unique()->comment('Código que identifica al estado');
                $table->foreignId('country_id')->constrained()->onDelete('restrict')->onUpdate('cascade');
                $table->unique(['country_id', 'name'])->comment('Clave única para el registro');
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
        Schema::dropIfExists('estates');
    }
};
