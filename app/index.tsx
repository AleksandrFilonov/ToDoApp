

import Circles from "../components/circles";
import BaseButton from "../components/Button";
import { useRouter } from "expo-router";
import { Text, View, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const ScreenStart = () => {
  const link = useRouter();
  const safe = useSafeAreaInsets();
  

  return (
    <ScrollView style={{backgroundColor:  '#F0F4F3'}}>
    <View style={{ alignItems: "center", marginTop:  safe.top, justifyContent: "center", backgroundColor:  '#F0F4F3', marginBottom: safe.bottom
}}> 
    {/* // alignItems: "center"       // alignItems: "center"  */}
      {/* <Text>StartScreen</Text> */}
      <Circles></Circles>
      <Image
						style={{marginTop: 100, marginBottom: 65, width: 254, height: 194,}}
						source={require('../assets/images/firstimage.webp')}></Image>
      <Text style={{ marginBottom: 16, fontSize: 18, fontWeight: "700"}}>Gets things with TODs</Text>
      <Text style={{textAlign: "center", width: 203, marginBottom: 130, fontSize: 13, fontWeight: "400"}}>Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod. Consequat urna quam felis interdum quisque. Malesuada adipiscing tristique ut eget sed.</Text>
      <BaseButton
       titel={"Get Started"} 
       onPress={() => link.push(`../scr/register`)}
       >
      </BaseButton>
    </View>
    </ScrollView>
  );
};

export default ScreenStart;
