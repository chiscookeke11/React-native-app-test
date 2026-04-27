import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Toast, { BaseToastProps } from 'react-native-toast-message';

const ToastCard = ({
  iconName,
  iconColor,
  iconBackgroundColor,
  borderColor,
  text1,
  text2,
}: {
  iconName: React.ComponentProps<typeof Ionicons>['name'];
  iconColor: string;
  iconBackgroundColor: string;
  borderColor: string;
  text1?: string;
  text2?: string;
}) => (
  <View
    style={{
      width: '90%',
      backgroundColor: '#fff',
      borderRadius: 12,
      borderWidth: 1,
      borderColor,
      padding: 12,
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
    }}>
    <View
      style={{
        width: 36,
        height: 36,
        borderRadius: 8,
        backgroundColor: iconBackgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
      }}>
      <Ionicons name={iconName} size={18} color={iconColor} />
    </View>

    <View style={{ flex: 1 }}>
      {text1 ? (
        <Text style={{ fontWeight: '600', color: '#10182A' }}>{text1}</Text>
      ) : null}
      {text2 ? <Text style={{ color: '#667085', fontSize: 13 }}>{text2}</Text> : null}
    </View>

    <Pressable onPress={() => Toast.hide()}>
      <Ionicons name="close" size={18} color="#98A2B3" />
    </Pressable>
  </View>
);

export const toastConfig = {
  error: ({ text1, text2 }: BaseToastProps) => (
    <ToastCard
      iconName="warning-outline"
      iconColor="#F04438"
      iconBackgroundColor="#FEE4E2"
      borderColor="#F04438"
      text1={text1}
      text2={text2}
    />
  ),
  success: ({ text1, text2 }: BaseToastProps) => (
    <ToastCard
      iconName="checkmark-circle-outline"
      iconColor="#12B76A"
      iconBackgroundColor="#D1FADF"
      borderColor="#12B76A"
      text1={text1}
      text2={text2}
    />
  ),
};

