<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @class Municipality
 * @brief Datos de municipios
 *
 * Gestiona el modelo de datos para los municipios
 *
 * @property string $name
 * @property string $code
 * @property integer $estate_id
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class Municipality extends Model
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
     * Método que obtiene el estado de un municipio
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

    /**
     * Método que obtiene las parroquias de un municipio
     *
     * @method parishes
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @return object Objeto con los registros relacionados al modelo parroquia
     */
    public function parishes()
    {
        return $this->hasMany(Parish::class);
    }
}
