<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\Country;
use App\Models\Estate;
use DB;

/**
 * @class EstateSeeder
 * @brief Información por defecto para estados
 *
 * Gestiona la información por defecto a registrar inicialmente para los estados
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class EstateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        /**
         * Permisos disponibles para la gestión de estados
         */
        $permissions = [
            [
                'name' => 'estate.list'
            ],
            [
                'name' => 'estate.create'
            ],
            [
                'name' => 'estate.show'
            ],
            [
                'name' => 'estate.edit'
            ],
            [
                'name' => 'estate.delete'
            ],
        ];
        $country = Country::where('name', 'Venezuela')->first();
        $estates = [
            "01" => "Distrito Capital",
            "02" => "Amazonas",
            "03" => "Anzoategui",
            "04" => "Apure",
            "05" => "Aragua",
            "06" => "Barinas",
            "07" => "Bolívar",
            "08" => "Carabobo",
            "09" => "Cojedes",
            "10" => "Delta Amacuro",
            "11" => "Falcón",
            "12" => "Guárico",
            "13" => "Lara",
            "14" => "Mérida",
            "15" => "Miranda",
            "16" => "Monagas",
            "17" => "Nueva Esparta",
            "18" => "Portuguesa",
            "19" => "Sucre",
            "20" => "Táchira",
            "21" => "Trujillo",
            "22" => "Yaracuy",
            "23" => "Zulia",
            "24" => "La Guaria"
        ];
        DB::transaction(function () use ($permissions, $estates, $country) {
            foreach ($estates as $code => $estate) {
                Estate::updateOrCreate(
                    ['code' => $code],
                    ['name' => $estate, 'country_id' => $country->id]
                );
            }
            $adminRole = Role::where('name', 'admin')->first();
            foreach ($permissions as $permission) {
                $per = Permission::updateOrCreate(
                    ['name' => $permission['name']],
                );
                if ($adminRole) {
                    $adminRole->givePermissionTo($per);
                }
            }
        });
    }
}
