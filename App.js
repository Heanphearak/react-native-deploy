/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CodePush from 'react-native-code-push';

const Tab = createMaterialTopTabNavigator();

const TabBar = [
  {key: 'Year', title: 'strings.years'},
  {key: 'Route1', title: 'strings.january'},
  {key: 'Route2', title: 'strings.february'},
  {key: 'Route3', title: 'strings.march'},
  {key: 'Route4', title: 'strings.april'},
  {key: 'Route5', title: 'strings.may'},
  {key: 'Route6', title: 'strings.june'},
  {key: 'Route7', title: 'strings.july'},
  {key: 'Route8', title: 'strings.august'},
  {key: 'Route9', title: 'strings.september'},
  {key: 'Route10', title: 'strings.october'},
  {key: 'Route11', title: 'strings.november'},
  {key: 'Route12', title: 'strings.december'},
  {key: 'Year1', title: 'strings.years1'},
  {key: 'Route11', title: 'strings.january1'},
  {key: 'Route21', title: 'strings.february1'},
  {key: 'Route31', title: 'strings.march1'},
  {key: 'Route41', title: 'strings.april1'},
  {key: 'Route51', title: 'strings.may1'},
  {key: 'Route61', title: 'strings.june1'},
  {key: 'Route71', title: 'strings.july1'},
  {key: 'Route81', title: 'strings.august1'},
  {key: 'Route91', title: 'strings.september1'},
  {key: 'Route101', title: 'strings.october1'},
  {key: 'Route111', title: 'strings.november1'},
  {key: 'Route121', title: 'strings.december1'},
];

const TabName = [
  'strings.years',
  'strings.january',
  'strings.february',
  'strings.march',
  'strings.april',
  'strings.may',
  'strings.june',
  'strings.july',
  'strings.august',
  'strings.september',
  'strings.october',
  'strings.november',
  'strings.december',
  'strings.years1',
  'strings.january1',
  'strings.february1',
  'strings.march1',
  'strings.april1',
  'strings.may1',
  'strings.june1',
  'strings.july1',
  'strings.august1',
  'strings.september1',
  'strings.october1',
  'strings.november1',
  'strings.december1',
];

function MyTabBar({state, descriptors, navigation}) {
  const renderItem = ({item, index}) => {
    const {options} = descriptors[item.key];
    const label = item?.name;

    const isFocused = index === state.index;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: item.key,
        canPreventDefault: true,
      });
      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(item.name);
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: item.key,
      });
    };

    const bgColor = isFocused ? 'blue' : 'white'; //Here is bg color -->
    const textColor = isFocused ? 'white' : 'black';

    return (
      <TouchableOpacity
        key={item.name}
        accessibilityRole="button"
        accessibilityState={isFocused ? {selected: true} : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={{
          width: 'auto',
          padding: 8,
          backgroundColor: bgColor,
          marginHorizontal: 2,
          borderRadius: 6,
          justifyContent: 'space-between',
          borderWidth: 0.5,
          borderColor: 'grey',
        }}>
        <Text style={{color: textColor}}>{label}</Text>
        {isFocused ? (
          <View
            style={{
              marginTop: 2,
              backgroundColor: 'white',
              borderRadius: 8,
              width: 4,
              height: 4,
              alignSelf: 'center',
            }}
          />
        ) : null}
      </TouchableOpacity>
    );
  };
  const ref = React.useRef(null);
  const index = state.index;

  React.useEffect(() => {
    ref?.current?.scrollToIndex({index, animated: true, viewPosition: 0.5});
  }, [index]);
  return (
    <View>
      <FlatList
        ref={ref}
        initialScrollIndex={index}
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            ref.current?.scrollToIndex({
              index: index,
              animated: true,
              viewPosition: 0.5,
            });
          });
        }}
        keyExtractor={item => item.key}
        data={state?.routes}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          padding: 1,
        }}
        renderItem={renderItem}
      />
    </View>
  );
}

const ScreenTab = ({route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!{TabName.indexOf(route.name)}</Text>
    </View>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="strings.march"
      tabBar={props => <MyTabBar {...props} />}>
      {TabBar.map((tab, index) => {
        return (
          <Tab.Screen
            key={index.toString()}
            name={tab.title}
            component={ScreenTab}
            options={{tabBarLabel: tab.title}}
          />
        );
      })}
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
export default CodePush(App);
