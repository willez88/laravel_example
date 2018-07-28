<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePeopleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('people', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name', 100)->comment('Nombre de la persona');
            $table->string('last_name', 100)->comment('Apellido de la persona');
            $table->string('identification_card', 9)->comment('Cédula de identidad de la persona');
            $table->string('phone', 15)->comment('Teléfono de la persona');
            $table->string('email', 100)->comment('Correo electrónico de la persona');
            $table->integer('user_id')->unsigned()->comment('Identificador del usuario al que pertenece la persona');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('restrict')->onUpdate('cascade');
            $table->timestamps();
        });
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
