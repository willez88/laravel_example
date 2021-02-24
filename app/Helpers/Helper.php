<?php

if (!function_exists('template_choices')) {
    /**
     * Construye un arreglo de elementos para usar en plantillas blade
     *
     * @author Roldan Vargas <roldandvg@gmail.com>
     * @param  string|object    $model     Nombre de la clase del modelo al cual generar el listado de opciones
     * @param  string|array     $fields    Campo(s) a utilizar para mostrar en el listado de opciones
     * @param  array            $filters   Arreglo con los filtros a ser aplicados en la consulta
     *                                     Ej. sin relación con otro modelo: ['active' => 'true']
     *                                     Ej. con relación a otro modelo:
     *                                     ['relationship' => 'metodoRelacion', 'where' => ['active' => true]]
     * @param  boolean          $vuejs     Indica si las opciones a mostrar son para una plantilla
     *                                     normal o para VueJS
     * @param  integer          $except_id Identificador del registro a excluir. Opcional
     * @return array                       Arreglo con las opciones a mostrar
     */
    function template_choices($model, $fields = 'name', $filters = [], $vuejs = false, $except_id = null)
    {
        $records = (is_object($model)) ? $model : $model::all();
        if ($filters) {
            if (!isset($filters['relationship'])) {
                $records = $model::where($filters)->get();
            } else {
                /** Filtra la información a obtener mediante relaciones */
                $relationship = $filters['relationship'];
                $records = $model::whereHas($relationship, function ($q) use ($filters) {
                    $q->where($filters['where']);
                })->get();
            }
        }

        /** Inicia la opción vacia por defecto */
        $options = ($vuejs) ? [['id' => '', 'text' => 'Seleccione...']] : ['' => 'Seleccione...'];

        foreach ($records as $rec) {
            if (is_array($fields)) {
                $text = '';
                foreach ($fields as $field) {
                    $text .= ($field !== "-" && $field !== " ")
                             ? $rec->$field
                             : (($field === " ") ? $field : " {$field} ");
                }
            } else {
                $text = $rec->$fields;
            }

            if (is_null($except_id) || $except_id !== $rec->id) {
                /**
                 * Carga el listado según el tipo de plantilla en el cual se va a implementar
                 * (normal o con VueJS)
                 */
                ($vuejs) ? array_push($options, ['id' => $rec->id, 'text' => $text])
                         : $options[$rec->id] = $text;
            }
        }
        return $options;
    }
}
