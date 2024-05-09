import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BaseInput from "../../components/BaseInput";
import { useRouter } from "expo-router";
import BaseButton from "../../components/Button";
import Circles from "../../components/circles";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';


const scheme = z.object({
  name: z
  .string({ required_error: "enter name?|" })
  .min(1, "enter name")
  .regex(/^[а-яА-ЯёЁ]*$/, {
    message: "имя должно содержать только русские буквы",
  }),
 email: z.string().min(2, "enter value").email(),
 password: z.string().min(5, "пароль должен содрежать мнимум 5 символов").max(15, "пароль должен содрежать не более 15 символов"),
 repassword: z.string().min(5, "enter value").max(15),
});



const SecondScr = () => {

  const safe = useSafeAreaInsets();
  const link = useRouter();

  const {
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<z.infer<typeof scheme>>({
    mode: "onChange",
    reValidateMode: "onChange",
   resolver: zodResolver(scheme),
    defaultValues: {
      name:"",
      email:"",
      password:"",
      repassword:"",
    },
  });

   return (
<ScrollView style={{backgroundColor:  '#F0F4F3'}}>
  <View style={{ marginHorizontal: "auto", marginTop:  safe.top, justifyContent: "center", backgroundColor:  '#F0F4F3', alignItems: 'center'}}>
  <Circles></Circles>
  <Text style={{ marginBottom: 31, fontSize: 18, fontWeight: "700", marginTop: 100}}>Welcome to Onboard!</Text>
      <Text style={{textAlign: "center", width: 203, marginBottom: 90, fontSize: 13, fontWeight: "400"}}>Let’s help to meet up your tasks.</Text>
      
 
<View style={{gap: 30, marginBottom: 73, width: "100%"}}>

  <BaseInput
      placeholder= "Enter your full name"
      value={watch("name")}
      onChangeText={(value) => setValue("name", value, {shouldValidate: true})}
      error = {!!errors.name?.message}
      ></BaseInput>
      <BaseInput
      placeholder= "Enter your Email"
      value={watch("email")}
      onChangeText={(value) => setValue("email", value, {shouldValidate: true})}
      error = {!!errors.email?.message}
      ></BaseInput>
      <BaseInput
      secureTextEntry
      passwordEye
      placeholder= "Enter Password"
      value={watch("password")}
      onChangeText={(value) => setValue("password", value, {shouldValidate: true})}
      error = {!!errors.password?.message}
      ></BaseInput>
      <BaseInput
      secureTextEntry
      placeholder= "Confirm password"
      value={watch("repassword")}
      onChangeText={(value) => setValue("repassword", value, {shouldValidate: true})}
      error = {getValues("password") != getValues("repassword") || getValues("repassword").length===0}
      passwordEye
      ></BaseInput>
     </View>
     <BaseButton
       titel={"Register"} 
       onPress={() => { handleSubmit ((data) => {
        link.push(`../scr2/login`)
       })();
       }}
       >
      </BaseButton>
      <View style={{flexDirection: "row", alignItems: "center", justifyContent: 'center', marginTop: 19}}>
      <Text style={{fontSize: 16, fontWeight: "400",}}>Already have an account ?</Text>
        <TouchableOpacity onPress={() => link.push(`../scr2/login`)}>
          <Text style={{alignItems: "center", justifyContent: 'center', color: "#50C2C9", fontSize: 16, fontWeight: "400",}}>Sign In</Text>
          </TouchableOpacity>
          </View>
  </View>
  </ScrollView>
  
)};  

export default SecondScr;

