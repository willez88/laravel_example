<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @class Country
 * @brief Datos de países
 *
 * Gestiona el modelo de datos para los países
 *
 * @property  string $name
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class Country extends Model
{
    use HasFactory;

    /**
     * Lista de atributos que pueden ser asignados masivamente
     *
     * @var array $fillable
     */
    protected $fillable = ['name'];

    /**
     * Método que obtiene los estados de un país
     *
     * @method estates
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @return object Objeto con los registros relacionados al modelo estado
     */
    public function estates()
    {
        return $this->hasMany(Estate::class);
    }
}
