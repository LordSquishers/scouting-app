import { PropsWithChildren } from 'react';
import tw from '~/utils/tailwind';
import { ScrollView } from 'react-native';

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView
      style={tw`py-2.5 px-2.5`}
      contentContainerStyle={tw`flex items-center justify-center`}
    >
      {children}
    </ScrollView>
  );
};
