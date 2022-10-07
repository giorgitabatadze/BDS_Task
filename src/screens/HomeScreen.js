import React, {useEffect, useState} from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import axios from "axios";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import DropdownComponent from "../components/dropdown";
import Input from "../components/input";
import Ionicons from "react-native-vector-icons/Ionicons";
import Screen from "./Screen";
import {COLOR, WIDTH} from "../consts/GlobalConsts";

const HomeScreen = ({navigation}) => {
    const [fromPrice, SetFromPrice] = useState();
    const [toPrice, SetToPrice] = useState();
    const [data12, setData] = useState();
    const [dataSource, setDataSource] = useState([]);

    const forRent = [
        {key: 0, name: "იყიდება"},
        {key: 1, name: "ქირავდება"},
    ];

    const [id, setId] = useState(null);
    const [chosenCarName, setChosenCarName] = useState(null);
    const [rent, setRent] = useState(null);

    const [carMarks, setCarMarks] = useState([]);

    useEffect(() => {
        function loadData() {
            axios
                .get("https://api2.myauto.ge/ka/services/quick-main-data/all/get")
                .then(function (response) {
                    const resp = JSON.stringify(response.data);

                    setData(resp);

                    let manufactors = JSON.parse(JSON.parse(resp).data.manufactors);
                    setDataSource(manufactors);

                    for (let i = 0; i < manufactors.length; i++) {
                        carMarks.push({
                            name: manufactors[i].man_name,
                            id: manufactors[i].man_id,
                        });
                    }
                })
                .catch(function (error) {
                    console.error(error);
                });
        }

        loadData();
    }, [carMarks]);

    const getDetails = () => {
        axios

            .get(
                `https://api2.myauto.ge/ka/products?TypeID=${0}&ForRent=${rent}&Mans=${id}&PriceFrom=${fromPrice}&PriceTo=${toPrice}`
            )
            .then(function (response) {
                const resp = JSON.stringify(response.data);

                let filteredData = JSON.parse(resp).data;

                navigation.navigate("DetailsScreen", {
                    data: filteredData,
                    carName: chosenCarName,
                });
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    return (
        <Screen>
            <View style={styles.conteiner}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <View style={styles.headerStyle}>
                        <Image
                            style={styles.myAutoLogo}
                            source={require("../../assets/myautoLogo.jpeg")}
                        />

                        <View style={styles.headerCompStyle}>
                            <EvilIcons name="search" size={25}/>
                            <Ionicons name="add-circle-sharp" size={25} color={COLOR.ORANGE}/>

                            <TouchableOpacity style={styles.wrap}>
                                <View style={styles.menuStyle}></View>
                                <View style={styles.menuStyle}></View>
                                <View style={[styles.menuStyle, {width: 17}]}></View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={styles.componentViewStyle}
                    >
                        <Input
                            placeholder={"ფასი-დან"}
                            onChangeText={(text) => SetFromPrice(text)}
                            conteinerStyle={styles.conteiner}
                            inputStyle={styles.myInputStyle}
                            value={fromPrice}
                        />

                        <Input
                            placeholder={"ფასი-მდე"}
                            onChangeText={(text) => SetToPrice(text)}
                            conteinerStyle={styles.conteiner}
                            inputStyle={styles.myInputStyle}
                        />

                        <DropdownComponent
                            placeholder={"გარიგების ტიპი"}
                            data={forRent}
                            labelField="name"
                            valueField="key"
                            value1={rent}
                            style={styles.dropDownStyle}
                            onChange={(item) => {
                                setRent(item.key);
                            }}
                        />

                        <DropdownComponent
                            style={styles.dropDownStyle}
                            placeholder={"მწარმოებელი"}
                            data={carMarks}
                            labelField="name"
                            valueField="id"
                            // value1={chosenCarName}
                            onChange={(item) => {
                                setChosenCarName(item.name);
                                setId(item.id);
                            }}
                        />
                    </View>
                </ScrollView>
            </View>

            <View
                style={{
                    width: "100%",
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    bottom: 0,
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: COLOR.ORANGE,
                        width: 200,
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 6,
                        marginBottom: 80,
                    }}
                    onPress={getDetails}
                >
                    <Text>მოძებნე</Text>
                </TouchableOpacity>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    conteiner:
        {
            backgroundColor: "#3423",
            flex: 1,
            justifyContent: 'center'
        },

    headerCompStyle: {
        flexDirection: "row",
        marginRight: 10,
        alignItems: 'center',
        width: 120,
        justifyContent: 'space-around',
    },

    myInputStyle: {
        padding: 5,
        fontSize: 16,
        height: 50,
        borderColor: "gray",
        borderRadius: 8,
        paddingHorizontal: 8,
        margin: 10,
        marginHorizontal: 20,
        backgroundColor: "#ffffff",
    },
    dropDownStyle: {
        backgroundColor: "#ffffff",
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 8,
        margin: 10,
        marginHorizontal: 20,
    },

    myAutoLogo: {
        width: 100,
        height: 80,
    },
    headerStyle: {
        width: WIDTH,
        height: 80,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    menuStyle: {
        width: 25,
        height: 3,
        color: "#000",
        marginBottom: 4,
        backgroundColor: "#000",
        borderRadius: 10,
    },
    wrap: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        marginTop: 4,
    },
    componentViewStyle: {
        flex: 1,
        justifyContent: "center",
        marginTop: 20,
    }
});

export default HomeScreen;
