<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @class Person
 * @brief Datos de personas
 *
 * Gestiona el modelo de datos para las personas
 *
 * @property string $first_name
 * @property string $last_name
 * @property string $email
 * @property string $id_number
 * @property string $phone
 * @property string $address
 * @property integer $parish_id
 * @property integer $user_id
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class Person extends Model
{
    use HasFactory;

    /**
     * Lista de atributos que pueden ser asignados masivamente
     *
     * @var array $fillable
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'id_number', 'phone', 'address', 'parish_id', 'user_id'
    ];

    /**
     * Método que obtiene el usuario asociado a una persona
     *
     * @method user
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @return object Objeto con los registros relacionados al modelo usuario
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Método que obtiene la parroquia asociada a una persona
     *
     * @method parish
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @return object Objeto con los registros relacionados al modelo parroquia
     */
    public function parish()
    {
        return $this->belongsTo(Parish::class);
    }
}
