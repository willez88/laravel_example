<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;
use Carbon\Carbon;
use DB;

/**
 * @class UserSeeder
 * @brief Información por defecto para usuarios
 *
 * Gestiona la información por defecto a registrar inicialmente para los usuarios
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        DB::transaction(function () {
            /**
             * Crea el usuario ADMIN por defecto de la aplicación
             */
            $userAdmin = User::updateOrCreate(
                ['email' => 'admin@email.com'],
                [
                    'name' => 'Admin',
                    'password' => bcrypt('usuario12345'),
                    'created_at' => Carbon::now()
                ]
            );
            if (!$userAdmin) {
                throw new Exception('Error creando el usuario administrador por defecto');
            }
            $adminRole = Role::where('name', 'admin')->first();
            if ($adminRole) {
                $userAdmin->assignRole($adminRole);
            }

            /**
             * Crea el usuario normal por defecto de la aplicación
             */
            $user = User::updateOrCreate(
                ['email' => 'user@email.com'],
                [
                    'name' => 'User',
                    'password' => bcrypt('usuario12345'),
                    'created_at' => Carbon::now()
                ]
            );
            if (!$user) {
                throw new Exception('Error creando el usuario school por defecto');
            }
            $userRole = Role::where('name', 'user')->first();
            if ($userRole) {
                $user->assignRole($userRole);
                $userAdmin->assignRole($userRole);
            }
        });
    }
}
