/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { WelcomeScreen, DemoScreen , AboutMeScreen } from "../screens"
import { StorybookUIRoot } from "../../storybook";

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  aboutMe: undefined
  welcome: undefined
  demo: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createStackNavigator<PrimaryParamList>()

export function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="aboutMe" component={AboutMeScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="demo" component={DemoScreen} />
    </Stack.Navigator>
  )
}



const Drawer1 = createDrawerNavigator();

export function DrawerNavigator1() {
  return (
    <Drawer1.Navigator initialRouteName="aboutMe">
      <Drawer1.Screen name="aboutMe" component={AboutMeScreen} />
      <Drawer1.Screen name="welcome" component={WelcomeScreen} />
    </Drawer1.Navigator>
  );
}



const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="aboutMe">
      <Drawer.Screen name="aboutMe" component={DrawerNavigator1} />
      <Drawer.Screen name="welcome" component={WelcomeScreen} />
      <Drawer.Screen name="demo" component={DemoScreen} />
    </Drawer.Navigator>
  );
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
