import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {RadioButton} from 'react-native-paper';

const SubChild = (props) => {
  return (
    <View>
      <Button title={props.title} onPress={() => props.onSubmit('subchild')} />
    </View>
  );
};

const Child = (props) => {
  return (
    <View>
      <Button title={props.title} onPress={() => props.onSubmit('child')} />
    </View>
  );
};

const Parent = (props) => {
  return (
    <View>
      <Button title={props.title} onPress={() => props.onSubmit('parent')} />
    </View>
  );
};
const Bpage2 = (props) => {
  const [checked, setChecked] = React.useState('parent');

  const onSubmit = (str) => {
    console.log('submit click n parent***********', str);
    setChecked(str);
  };
  return (
    <SafeAreaView style={{flex: 1, padding: 20}}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text>parent</Text>
          <RadioButton
            value="parent"
            status={checked === 'parent' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('parent')}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>child</Text>
          <RadioButton
            value="child"
            status={checked === 'child' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('child')}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>subChild</Text>
          <RadioButton
            value="subchild"
            status={checked === 'subchild' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('subchild')}
          />
        </View>
      </View>
      <Parent onSubmit={onSubmit} title="parent" />
      <Child title="child" onSubmit={onSubmit} />
      <SubChild title="sub child" onSubmit={onSubmit} />
    </SafeAreaView>
  );
};

export default Bpage2;
