<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @class Person
 * @brief Datos de la persona
 *
 * Gestiona el modelo de datos de las personas
 *
 * @author William Páez (paez.william8 at gmail.com)
 * @copyright <a href='http://www.gnu.org/licenses/gpl-3.0.html'>GNU Public License versión 3 (GPLv3)</a>
 */
class Person extends Model
{
    /**
     * Lista de atributos que pueden ser asignados masivamente
     *
     * @var array $fillable
     */
    protected $fillable = [
        'first_name', 'last_name', 'identification_card', 'phone', 'email'
    ];
}
