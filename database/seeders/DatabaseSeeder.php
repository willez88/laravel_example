<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

/**
 * @class DatabaseSeeder
 * @brief Información por defecto de los seeders del sistema
 *
 * Gestiona la información general de los seeders del sistema
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        /** Seeder para los roles disponibles */
        $this->call(RoleSeeder::class);
        /** Seeder para los permisos disponibles */
        $this->call(PermissionSeeder::class);
        /** Seeder para los usuarios disponibles */
        $this->call(UserSeeder::class);
        /** Seeder para los países disponibles */
        $this->call(CountrySeeder::class);
        /** Seeder para los estados disponibles */
        $this->call(EstateSeeder::class);
        /** Seeder para los municipios disponibles */
        $this->call(MunicipalitySeeder::class);
        /** Seeder para las ciudades disponibles */
        $this->call(CitySeeder::class);
        /** Seeder para las parroquias disponibles */
        $this->call(ParishSeeder::class);
        /** Seeder para las personas disponibles */
        $this->call(PersonSeeder::class);
    }
}
