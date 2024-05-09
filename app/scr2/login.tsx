import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BaseInput from "../../components/BaseInput";
import { useRouter } from "expo-router";
import BaseButton from "../../components/Button";
import Circles from "../../components/circles";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

const scheme = z.object({
  
  email: z.string({ required_error: "Enter email" }).email({ message: "Incorrect email" }),
  password: z.string().min(5, "пароль должен содрежать мнимум 5 символов").max(15, "пароль должен содрежать не более 15 символов"),
 
});



const SecondScr = () => {

  const safe = useSafeAreaInsets();
  const link = useRouter();

  const {
    setValue,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<z.infer<typeof scheme>>({
    mode: "onChange",
    reValidateMode: "onChange",
   resolver: zodResolver(scheme),
    defaultValues: {
      
      email:"",
      password:"",
      
    },
  });

   return (
<ScrollView style={{backgroundColor:  '#F0F4F3'}}>
  <View style={{ marginHorizontal: "auto", marginTop:  safe.top + 20, justifyContent: "center", backgroundColor:  '#F0F4F3', alignItems: 'center'}}>
  <Circles></Circles>
  <Text style={{ marginBottom: 31, fontSize: 18, fontWeight: "700"}}>Welcome back</Text>

  <Image
						style={{marginTop: 53, marginBottom: 65, width: 185, height: 138, }}
						source={require('../../assets/images/backToSchool.webp')}>

            </Image>
    
      
 
<View style={{gap: 30, marginBottom: 73, width: "100%"}}>

        <BaseInput
      placeholder= "Enter your Email"
      value={watch("email")}
      onChangeText={(value) => setValue("email", value, { shouldValidate: true })
    }
    error = {!!errors.email?.message}
      ></BaseInput>
      <BaseInput
      secureTextEntry
      placeholder= "Enter Password"
      value={watch("password")}
      onChangeText={(value) => setValue("password", value, { shouldValidate: true })
    }
    error = {!!errors.password?.message}
      ></BaseInput>
      </View>
      <TouchableOpacity onPress={() => link.back()}>
          <Text style={{alignItems: "center", justifyContent: 'center', color: "#50C2C9", fontSize: 16, fontWeight: "400", marginVertical: 50}}>Forget password ?</Text>
          </TouchableOpacity>
     <BaseButton
       titel={"Login"} 
       onPress={() => { handleSubmit ((data) => {
        link.push(`../scr3/main`);
       })();
       }}
       >
      </BaseButton>
      <View style={{flexDirection: "row", alignItems: "center", justifyContent: 'center', marginTop: 19}}>
      <Text style={{fontSize: 16, fontWeight: "400",}}>Don’t have an account ?</Text>
        <TouchableOpacity onPress={() => link.push(`../scr3/main`)}>
          <Text style={{alignItems: "center", justifyContent: 'center', color: "#50C2C9", fontSize: 16, fontWeight: "400",}}>Sign Up</Text>
          </TouchableOpacity>
          </View>
  </View>
  </ScrollView>
  
)};  

export default SecondScr;

