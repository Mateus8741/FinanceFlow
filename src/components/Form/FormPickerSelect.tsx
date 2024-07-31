import React from 'react';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

import { CustomPickerSelect, CustomPickerSelectProps } from '../CustomPickerSelect';

/**
 * @Mateus8741
 *
 * Componente FormCustomPickerSelect
 *
 * Um componente personalizado para seleção de um valor a partir de uma lista de opções.
 *
 * @component
 * @example
 * <FormCustomPickerSelect
 *   control={control}
 *   name="returnType"
 *   label="Tipo de Retorno"
 *   items={[
 *     { label: 'Football', value: 'football' },
 *     { label: 'Baseball', value: 'baseball' },
 *     { label: 'Hockey', value: 'hockey' },
 *   ]}
 *   onValueChange={() => {}}
 * />
 *
 * @param {Object} props - As propriedades do componente.
 * @param {Object} props.control - O controle do formulário associado (por exemplo, do React Hook Form).
 * @param {string} props.name - O nome do campo de seleção.
 * @param {string} props.label - O rótulo a ser exibido para o campo de seleção.
 * @param {Array} props.items - Uma matriz de objetos representando as opções de seleção.
 * @param {string} props.items.label - O rótulo da opção de seleção.
 * @param {Function} @  props.onValueChange - Uma função para lidar com a mudança de valor.
 */

export function FormPickerSelect<FormType extends FieldValues>({
  control,
  name,
  rules,
  onValueChange,
  ...pickerSelectProps
}: CustomPickerSelectProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <CustomPickerSelect
          value={field.value}
          onValueChange={field.onChange}
          errorMessage={fieldState.error?.message}
          {...pickerSelectProps}
        />
      )}
    />
  );
}
