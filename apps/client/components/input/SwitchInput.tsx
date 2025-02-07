import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { Switch } from 'react-native';
import * as Haptics from 'expo-haptics';
import { InputWrapper } from './InputWrapper';
import tw from '~/utils/tailwind';

type Props<T extends FieldValues> = {
  control: UseControllerProps<T>;
  label: string;
};
export const SwitchInput = <T extends object>(props: Props<T>) => {
  const {
    field: { value, onChange },
  } = useController(props.control);

  const onClick = async (value: boolean) => {
    onChange(value);
    await Haptics.selectionAsync();
  };

  return (
    <InputWrapper label={props.label}>
      <Switch
        style={tw`h-10 p-2.5 mr-0 ml-auto`}
        onValueChange={(value) => onClick(value)}
        value={!!value}
      />
    </InputWrapper>
  );
};
