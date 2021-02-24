<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @class Estate
 * @brief Datos de estados
 *
 * Gestiona el modelo de datos para los estados
 *
 * @property string $name
 * @property string $code
 * @property integer $country_id
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class Estate extends Model
{
    use HasFactory;

    /**
     * Lista de atributos que pueden ser asignados masivamente
     *
     * @var array $fillable
     */
    protected $fillable = ['name', 'code', 'country_id'];

    /**
     * Arreglo con las relaciones a cargar por defecto
     *
     * @var    array
     */
    protected $with = ['country'];

    /**
     * Método que obtiene el país de un estado
     *
     * @method country
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @return object Objeto con el registro relacionado al modelo país
     */
    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    /**
     * Método que obtiene los municipios de un estado
     *
     * @method  municipalities
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @return object Objeto con los registros relacionados al modelo municipio
     */
    public function municipalities()
    {
        return $this->hasMany(Municipality::class);
    }

    /**
     * Método que obtiene las ciudades de un estado
     *
     * @method cities
     *
     * @author William Páez <paez.william8@gmail.com>
     *
     * @return object Objeto con los registros relacionados al modelo ciudad
     */
    public function cities()
    {
        return $this->hasMany(City::class);
    }
}
