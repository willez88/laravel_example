<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @class City
 * @brief Datos de ciudades
 *
 * Gestiona el modelo de datos para las ciudades
 *
 * @property string $name
 * @property string $code
 * @property integer $estate_id
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class City extends Model
{
    use HasFactory;

    /**
     * Lista de atributos que pueden ser asignados masivamente
     *
     * @var array $fillable
     */
    protected $fillable = ['name', 'code', 'estate_id'];

    /**
     * Arreglo con las relaciones a cargar por defecto
     *
     * @var    array
     */
    protected $with = ['estate'];

    /**
     * Método que obtiene el estado de una ciudad
     *
     * @method estate
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @return object Objeto con los registros relacionados al modelo estado
     */
    public function estate()
    {
        return $this->belongsTo(Estate::class);
    }
}
