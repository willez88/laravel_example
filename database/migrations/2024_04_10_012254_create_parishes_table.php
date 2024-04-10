<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * @class CreateParishesTable
 * @brief Crear tabla de parroquias
 *
 * Gestiona la creación o eliminación de la tabla parroquias
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
        if (!Schema::hasTable('parishes')) {
            Schema::create('parishes', function (Blueprint $table) {
                $table->id();
                $table->string('name', 100)->comment('Nombre de la parroquia');
                $table->string('code', 10)->unique()->comment('Código que identifica a la parroquia');
                $table->foreignId('municipality_id')->constrained()->onDelete('restrict')->onUpdate('cascade');
                $table->unique(['municipality_id', 'name'])->comment('Clave única para el registro');
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
        Schema::dropIfExists('parishes');
    }
};
