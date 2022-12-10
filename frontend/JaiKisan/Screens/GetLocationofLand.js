import React, { useState } from 'react';
import * as Location from 'expo-location';
import { Button } from 'react-native';


export default function GetLocationofLand() {
    const navigation = useNavigation();
    const [currentLocation, setCurrentLocation] = useState(null);
    const [farmCoordinates, setFarmCoordinates] = useState([]);

    const getCurrentLocation = async () => {
        setCurrentLocation(await Location.getCurrentPositionAsync({}));
        setFarmCoordinates(oldArray => [...oldArray, currentLocation]);
        console.log("currentLocation : " + JSON.stringify(currentLocation));
        console.log("farmCoordinates : " + JSON.stringify(farmCoordinates));
    }

    return (
        <Button
            onPress={getCurrentLocation}
            title="Get location"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
    );
}

