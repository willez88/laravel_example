<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use DB;

/**
 * @class PermissionSeeder
 * @brief Información por defecto para permisos
 *
 * Gestiona la información por defecto a registrar inicialmente para los permisos
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class PermissionSeeder extends Seeder
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
         * Permisos del sistema
         */
        $permissions = [
            // Panel administrativo
            [
                'name' => 'setting.list'
            ],
        ];

        DB::transaction(function () use ($permissions) {
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
