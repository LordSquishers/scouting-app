/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: undefined;
  Info: undefined;
  NotFound: undefined;
  Pregame: undefined;
  Auto: undefined;
  Teleop: undefined;
  Endgame: undefined;
  Postgame: undefined;
  QR: undefined;
  Scanner: undefined;
  'Subjective Info': undefined;
  'Subjective Team One': undefined;
  'Subjective Team Two': undefined;
  'Subjective Team Three': undefined;
};

export type RootTabScreenProps = NativeStackScreenProps<RootStackParamList>;
