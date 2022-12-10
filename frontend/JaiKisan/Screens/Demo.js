import {View,Text,Image,Button} from 'react-native';

export default function Demo(){
    return(
       <View>
           
           <Image

            source={{
                width:200,
                height:200,
                uri:"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ekjfiexjwxq0mznhrooe"}}/>

            <Button color='black' title="Soil quality" onPress={()=>alert('Button clicked')}/>

            <Button color='green' title="Calculate Area" onPress={()=>alert('Button clicked')}/>
           </View> 
    );
}