<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Role;
use DB;

/**
 * @class RoleSeeder
 * @brief Información por defecto para roles
 *
 * Gestiona la información por defecto a registrar inicialmente para los roles
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class RoleSeeder extends Seeder
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
         * Roles del sistema
         */
        $roles = [
            [
                'name' => 'admin'
            ],
            [
                'name' => 'user'
            ],
        ];

        DB::transaction(function () use ($roles) {
            foreach ($roles as $role) {
                Role::updateOrCreate(
                    ['name' => $role['name']],
                );
            }
        });
    }
}
