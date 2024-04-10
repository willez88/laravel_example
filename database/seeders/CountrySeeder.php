<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\Country;
use DB;

/**
 * @class CountrySeeder
 * @brief Información por defecto para países
 *
 * Gestiona la información por defecto a registrar inicialmente para los países
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class CountrySeeder extends Seeder
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
         * Permisos disponibles para la gestión de países
         */
        $permissions = [
            [
                'name' => 'country.list'
            ],
            [
                'name' => 'country.create'
            ],
            [
                'name' => 'country.show'
            ],
            [
                'name' => 'country.edit'
            ],
            [
                'name' => 'country.delete'
            ],
        ];

        DB::transaction(function () use ($permissions) {
            Country::updateOrCreate(
                ['name' => 'Venezuela']
            );
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
