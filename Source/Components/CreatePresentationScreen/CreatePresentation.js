import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import New from './New';
import Templates from './Templates';
import * as AppConstants from '../Helper/AppConstants';

const Tab = createMaterialTopTabNavigator(
    {
        New: {
            screen: New,
            navigationOptions: ({ navigation }) => {
                return {
                    tabBarLabel: 'New',
                };
            },
        },
        Templates: {
            screen: Templates,
            navigationOptions: ({ navigation }) => {
                return {
                    tabBarLabel: 'Templates',
                };
            },
        },
    },
    {
        tabBarOptions: {
            upperCaseLabel: false,
            indicatorStyle: {
                backgroundColor: AppConstants.COLORS.APPTHEME,  
            },
            activeTintColor: AppConstants.COLORS.APPTHEME,
            inactiveTintColor: AppConstants.SHADOWCOLORS.RED,
            labelStyle: {
                fontFamily: AppConstants.FONTFAMILY.FONT_FAMILY_1,
                fontSize: AppConstants.moderateScale(AppConstants.FONTSIZE.FS16),
                color:AppConstants.COLORS.APPTHEME,
            },
            style: {
                backgroundColor: AppConstants.COLORS.WHITE,
                elevation: 0,
            }
        },

    }
);
export default createAppContainer(Tab);
