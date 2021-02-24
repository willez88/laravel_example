<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\Person;
use DB;

/**
 * @class PersonSeeder
 * @brief Información por defecto para personas
 *
 * Gestiona la información por defecto a registrar inicialmente para las personas
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class PersonSeeder extends Seeder
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
         * Permisos disponibles para la gestión de parroquias
         */
        $permissions = [
            [
                'name' => 'person.list'
            ],
            [
                'name' => 'person.create'
            ],
            [
                'name' => 'person.show'
            ],
            [
                'name' => 'person.edit'
            ],
            [
                'name' => 'person.delete'
            ],
        ];
        $userRole = Role::where('name', 'user')->first();
        foreach ($permissions as $permission) {
            $per = Permission::updateOrCreate(
                ['name' => $permission['name']],
            );
            if ($userRole) {
                $userRole->givePermissionTo($per);
            }
        }
    }
}
