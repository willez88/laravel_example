<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\Estate;
use App\Models\City;
use DB;

/**
 * @class CitySeeder
 * @brief Información por defecto para ciudades
 *
 * Gestiona la información por defecto a registrar inicialmente para las ciudades
 *
 * @author William Páez <paez.william8@gmail.com>
 *
 * @license [GNU Public License versión 2 (GPLv2)](http://www.gnu.org/licenses/gpl-2.0.html)
 */
class CitySeeder extends Seeder
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
         * Permisos disponibles para la gestión de ciudades
         */
        $permissions = [
            [
                'name' => 'city.list'
            ],
            [
                'name' => 'city.create'
            ],
            [
                'name' => 'city.show'
            ],
            [
                'name' => 'city.edit'
            ],
            [
                'name' => 'city.delete'
            ],
        ];
        $estatesCities = [
            "01" => [
                "Caracas"
            ],
            "02" => [
                "Puerto Ayacucho"
            ],
            "03" => [
                "Barcelona",
                "Puerto La Cruz",
                "El Tigre",
                "Anaco",
                "Cantaura",
                "Clarines",
                "Guanta",
                "Lecherías",
                "Pariaguan",
                "Pirítu",
                "Puerto Pirítu",
                "San José de Guanipa",
                "San Mateo",
                "Santa Ana",
                "Soledad",
                "Valle de Guanape"
            ],
            "04" => [
                "San Fernando de Apure",
                "Guasdualito",
                "Achaguas",
                "Biruaca",
                "El Nula",
                "El Recreo",
                "Elorza",
                "Guasdualito",
                "Mantecal"
            ],
            "05" => [
                "Maracay",
                "Turmero",
                "La Victoria",
                "Villa de Cura",
                "Santa Rita",
                "Cagua",
                "El Limón",
                "Bella Vista",
                "Camatagua",
                "El Consejo",
                "Las Tejerías",
                "Magdaleno",
                "Palo Negro",
                "Sabaneta",
                "San Casimiro",
                "San Francisco de Asis",
                "San Mateo",
                "San Sebástian de los R.",
                "Santa Cruz",
                "Zuata"
            ],
            "06" => [
                "Barinas",
                "Barinitas",
                "Barrancas",
                "Ciudad Bolivia",
                "Punta de Piedra",
                "Sabaneta",
                "Santa Bárbara",
                "Socopó"
            ],
            "07" => [
                "Ciudad Guayana",
                "Ciudad Bolívar",
                "Upata",
                "Caicara del Orinoco",
                "El Callao",
                "Guasipati",
                "Santa Elena de Uairen",
                "Tumeremo",
                "Ciudad Piar"
            ],
            "08" => [
                "Valencia",
                "Puerto Cabello",
                "Tocuyito",
                "Guacara",
                "Güigüe",
                "Los Guayos",
                "Naguanagua",
                "Mariara",
                "Bejuma",
                "El Cambur",
                "Miranda",
                "Montalbán",
                "Morón",
                "San Joaquín",
                "Tacarigua"
            ],
            "09" => [
                "San Carlos",
                "Tinaquillo",
                "El Baúl",
                "Las Vegas",
                "Tinaco"
            ],
            "10" => [
                "Tucupita"
            ],
            "11" => [
                "Punto Fijo",
                "Coro",
                "Carirubana",
                "Churuguara",
                "Dabajuro",
                "Judibana",
                "La Vela de Coro",
                "Mené de Mauroa",
                "Mirimire",
                "Pueblo Nuevo",
                "Puerto Cumarebo",
                "Punta Cardón",
                "Santa Cruz de Bucaral",
                "Tucacas",
                "Chichiriviche"
            ],
            "12" => [
                "Calabozo",
                "San Juan de Los Morros",
                "Valle de la Pascua",
                "Zaraza",
                "Altagracia de Orituco",
                "Camaguan",
                "El Socorro",
                "El Sombrero",
                "Las Mercedes",
                "San José de Guaribe",
                "Santa María de Ipire",
                "Tucupido"
            ],
            "13" => [
                "Barquisimeto",
                "Carora",
                "Cabudare",
                "El Tocuyo",
                "Quíbor",
                "Duaca",
                "Chirgua",
                "Los Rastrojos",
                "Río Claro",
                "Sanare",
                "Sarare",
                "Siquisique"
            ],
            "14" => [
                "Mérida",
                "El Vigía",
                "Ejido",
                "Tovar",
                "Arapuey",
                "Bailadores",
                "La Blanca",
                "Lagunillas",
                "Mucujepe",
                "Nueva Bolivia",
                "Pueblo Llano",
                "Santa Cruz de Mora",
                "Santa Elena de Arenales",
                "Timotes",
                "Tucaní"
            ],
            "15" => [
                "Caracas",
                "Guarenas",
                "Los Teques",
                "Guatire",
                "Santa Teresa del Tuy",
                "Ocumare del Tuy",
                "Cúa",
                "Santa Lucía",
                "Charallave",
                "Baruta",
                "Petare",
                "Araira",
                "Carrizal",
                "Caucagua",
                "Caucaguita",
                "Chacao",
                "Cúpira",
                "El Cafetal",
                "El Hatillo",
                "El Manguito",
                "El Rosario de Soapire",
                "Filas de Mariche",
                "Higuerote",
                "La Dolorita",
                "La Lagunetica",
                "Las Adjuntas",
                "Los Dos Caminos",
                "Mamporal",
                "Paracotos",
                "Río Chico",
                "San Antonio de Los Altos",
                "San Diego",
                "San Francisco de Yare",
                "San José de Barlovento",
                "Santa Lucia"
            ],
            "16" => [
                "Maturín",
                "Caripito",
                "Barrancas del Orinoco",
                "Caicara",
                "Caripe",
                "El Tejero",
                "Jusepin",
                "La Pica",
                "Punta de Mata",
                "San Antonio de Capayacuar",
                "Temblador"
            ],
            "17" => [
                "Porlamar",
                "La Asunción",
                "Altagracia",
                "Boca del Pozo",
                "Boca del Río",
                "El Pilar",
                "El Valle del Espíritu Santo",
                "Juan Griego",
                "La Guardia",
                "Los Millanes",
                "Pampatar",
                "Paraguachí",
                "Punta de Piedras",
                "San Juan Bautista",
                "Villa Rosa"
            ],
            "18" => [
                "Guanare",
                "Acarigua",
                "Araure",
                "Agua Blanca",
                "Biscucuy",
                "Guanarito",
                "Mesa de Cavacas",
                "Ospino",
                "Piritu",
                "San Rafael de Onoto",
                "Villa Bruzual"
            ],
            "19" => [
                "Cumaná",
                "Carúpano",
                "Araya",
                "Cariaco",
                "Casanay",
                "Cumanacoa",
                "El Morro de Puerto Santo",
                "El Pilar",
                "Guiria",
                "Irapa",
                "Mariguitar",
                "Puerto de Santa Fé",
                "Río Caribe",
                "San Antonio del Golfo",
                "Tunapuy",
                "Yaguaraparo"
            ],
            "20" => [
                "San Cristóbal",
                "Táriba",
                "Abejales",
                "Barrancas",
                "Capacho Viejo",
                "Coloncito",
                "Cordero",
                "Independencia - Capacho Nuevo",
                "La Fría",
                "La Grita",
                "Michelena",
                "Palmira",
                "Palo Gordo",
                "Pregonero",
                "Rubio",
                "San Antonio del Táchira",
                "San Josesito",
                "San Juan de Colón",
                "San Rafael del Piñal",
                "Santa Ana del Táchira",
                "Ureña"
            ],
            "21" => [
                "Valera",
                "Trujillo",
                "Betijoque",
                "Bocono",
                "Carache",
                "Carvajal",
                "Escuque",
                "Flor de Patria",
                "La Cejita",
                "Monay",
                "Motatan",
                "Pampan",
                "Pampanito",
                "Sabana de Mendoza",
                "Sabana Grande",
                "Tres Esquinas"
            ],
            "22" => [
                "San Felipe",
                "Yaritagua",
                "Albarico",
                "Aroa",
                "Boraure",
                "Chivacoa",
                "Cocorote",
                "Guama",
                "Nirgua",
                "Sabana de Parra",
                "San Pablo",
                "Urachiche"
            ],
            "23" => [
                "Maracaibo",
                "Cabimas",
                "Ciudad Ojeda",
                "Santa Bárbara del Zulia",
                "Machiques",
                "La Concepción",
                "Los Puertos de Altagracia",
                "Bachaquero",
                "Caja Seca",
                "Carrasquero",
                "Casigua",
                "Concepción",
                "Curarire",
                "El Toro",
                "Encontrados",
                "La Paz",
                "La Villa del Rosario",
                "Lagunillas",
                "Las Piedras",
                "Mené Grande",
                "La Ensenada",
                "Paraguaipoa",
                "Punta Gorda",
                "Sabaneta de Palma",
                "San Carlos del Zulia",
                "San José de Perijá",
                "San Rafael del Mojan",
                "Santa Cruz de Mara",
                "Santa Rita",
                "Sinamaica",
                "Tía Juana"
            ],
            "24" => [
                "La Guaira",
                "Caraballeda",
                "Catia La Mar",
                "Macuto",
                "Maiquetía",
                "Carayaca",
                "Naiguatá"
            ]
        ];

        DB::transaction(function () use ($permissions, $estatesCities) {
            foreach ($estatesCities as $codeEstate => $cities) {
                $edo = Estate::where('code', $codeEstate)->first();
                foreach ($cities as $city) {
                    City::updateOrCreate(['name' => $city, 'estate_id' => $edo->id], []);
                }
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
