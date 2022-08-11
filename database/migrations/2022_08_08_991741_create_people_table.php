<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * @class CreatePeopleTable
 * @brief Crear tabla de personas
 *
 * Gestiona la creación o eliminación de la tabla personas
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class CreatePeopleTable extends Migration
{
    /**
     * Ejecuta las migraciones
     *
     * @author William Páez <paez.william8@gmail.com>
     */
    public function up()
    {
        if (!Schema::hasTable('people')) {
            Schema::create('people', function (Blueprint $table) {
                $table->id();
                $table->string('first_name', 100)->comment('Nombres de la persona');
                $table->string('last_name', 100)->comment('Apellidos de la persona');
                $table->string('email', 100)->unique()->comment('Correo electrónico de la persona');
                $table->string('id_number', 9)->unique()->comment('Cédula de identidad de la persona');
                $table->string('phone', 15)->comment('Teléfono de la persona');
                $table->string('address', 200)->comment('Dirección de la persona');
                $table->foreignId('parish_id')->constrained()->onDelete('restrict')->onUpdate('cascade');
                $table->foreignId('user_id')->constrained()->onDelete('restrict')->onUpdate('cascade');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('people');
    }
}
