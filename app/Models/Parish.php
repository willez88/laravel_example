<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @class Parish
 * @brief Datos de parroquias
 *
 * Gestiona el modelo de datos para las parroquias
 *
 * @property string $name
 * @property string $code
 * @property integer $municipality_id
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class Parish extends Model
{
    use HasFactory;

    /**
     * Lista de atributos que pueden ser asignados masivamente
     *
     * @var array $fillable
     */
    protected $fillable = ['name', 'code', 'municipality_id'];

    /**
     * Arreglo con las relaciones a cargar por defecto
     *
     * @var    array
     */
    protected $with = ['municipality'];

    /**
     * Método que obtiene el municipio de una parroquia
     *
     * @method municipality
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @return object Objeto con los registros relacionados al modelo municipio
     */
    public function municipality()
    {
        return $this->belongsTo(Municipality::class);
    }

    /**
     * Método que obtiene las personas asociadas a una parroquia
     *
     * @method people
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @return object Objeto con los registros relacionados al modelo persona
     */
    public function people()
    {
        return $this->hasMany(Person::class);
    }
}
