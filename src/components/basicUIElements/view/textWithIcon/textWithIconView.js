import React, { Fragment, useState, useEffect } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { Icon } from '../../../icon';
import styles from './textWithIconStyles';

const TextWithIcon = ({
  iconName,
  text,
  isClickable,
  onPress,
  iconStyle,
  iconType,
  iconSize,
  wrapperStyle,
  textStyle,
}) => {
  const [ltext, setLtext] = useState(text);
  useEffect(() => {
    setLtext(text);
  }, [text]);
  return (
    <View style={styles.container}>
      {isClickable || onPress ? (
        <TouchableHighlight
          style={[styles.wrapper, wrapperStyle]}
          underlayColor="transparent"
          onPress={() => onPress && onPress()}
        >
          <Fragment>
            <Icon
              style={[styles.icon, iconStyle, iconSize && { fontSize: iconSize }]}
              name={iconName}
              iconType={iconType}
            />
            <Text style={[styles.text, textStyle]}>{ltext}</Text>
          </Fragment>
        </TouchableHighlight>
      ) : (
        <View style={styles.wrapper}>
          <Icon
            style={[styles.icon, iconStyle, iconSize && { fontSize: iconSize }]}
            name={iconName}
            iconType={iconType}
          />
          <Text style={[styles.text, textStyle]}>{ltext}</Text>
        </View>
      )}
    </View>
  );
};

export default TextWithIcon;
