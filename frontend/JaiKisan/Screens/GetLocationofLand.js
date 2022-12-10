import React, { useState } from 'react';
import * as Location from 'expo-location';
import { Button } from 'react-native';
import db from '../firestore';
import { doc, setDoc } from "firebase/firestore";

export default function GetLocationofLand() {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [farmCoordinates, setFarmCoordinates] = useState([]);

    const uploadToFirestore = async () => {
        let area = 98;
        await setDoc(doc(db, "farmerLand", "land2"), {
            coordinates: farmCoordinates,
            area: area
        });
        console.log("uploaded to firestore");
        setFarmCoordinates([]);
    }


    const getCurrentLocation = async () => {
        setCurrentLocation(await Location.getCurrentPositionAsync({}));
        let coordinates = {
            "latitude": currentLocation.coords.latitude,
            "longitude": currentLocation.coords.longitude
        }
        setFarmCoordinates(oldArray => [...oldArray, coordinates]);
        console.log("currentLocation : " + JSON.stringify(currentLocation));
        console.log("farmCoordinates : " + JSON.stringify(farmCoordinates));
        if (farmCoordinates.length >= 4) {
            uploadToFirestore();
        }
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

