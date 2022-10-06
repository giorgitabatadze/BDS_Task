import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import Foundation from "react-native-vector-icons/Foundation";

const DetailsScreen = ({route}) => {
    const data = route.params.data;
    const carName = route.params.carName;

    const RenderItem = ({item}) => {
        return (
            <View style={styles.courseContainer}>
                <View>
                    <Image
                        style={styles.cardImage}
                        source={{
                            uri: `https://static.my.ge/myauto/photos/${item.photo}/thumbs/${item.car_id}_1.jpg`,
                        }}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Text style={styles.carNameStyle}>{carName}</Text>
                    <Text style={styles.price}>{item.prod_year} წ</Text>
                </View>

                <View style={styles.middleSectionStyle}>
                    <View style={styles.middleViewStyle}>
                        <Text>{item.client_name}</Text>
                        <View style={{width: 20}}></View>
                        <Text>{item.car_run_km} კმ</Text>
                    </View>
                    <View style={[styles.middleViewStyle, {marginTop: 5}]}>
                        <Text>{item.client_phone}</Text>
                        <Text style={styles.bottomTextStyle}>{item.car_id}</Text>
                    </View>
                </View>

                <View style={styles.priceViewStyle}>
                    <Text style={styles.priceStyle}>
                        {item.price_value.toLocaleString()}
                    </Text>
                    <View style={{width: 15}}></View>
                    <Foundation name="dollar" size={22}/>
                    <Image
                        style={styles.lariStyle}
                        source={require("../../assets/lari.png")}
                    />
                </View>
            </View>
        );
    };

    return (
        <View style={styles.mainContainer}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data?.items}
                renderItem={RenderItem}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 20,
    },
    courseContainer: {
        padding: 30,
        backgroundColor: "#fff",
        textAlign: "center",
        borderRadius: 5,
        shadowColor: "grey",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 0.5,
        marginVertical: 30,
    },

    cardImage: {
        width: "100%",
        display: "flex",
        alignSelf: "center",
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },

    mainHeader: {
        fontSize: 22,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        paddingTop: 10,
        paddingBottom: 15,
        fontFamily: "JosefinSans_500Medium",
        textAlign: "center",
    },

    subHeader: {
        fontSize: 18,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        paddingBottom: 15,
        fontFamily: "JosefinSans_500Medium",
        textAlign: "center",
    },

    description: {
        textAlign: "center",
        fontSize: 16,
        color: "#7d7d7d",
        paddingBottom: 20,
        fontFamily: "JosefinSans_300Light",
        lineHeight: 20,
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center'
    },

    price: {},
    buttonStyle: {
        backgroundColor: "#809fff",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 18,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    buttonText: {
        fontSize: 20,
        color: "#eee",
        fontFamily: "JosefinSans_400Regular",
    },
    carNameStyle: {
        marginRight: 20,
        fontWeight: 'bold',
        fontSize: 18
    },
    middleViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    bottomTextStyle: {},
    middleSectionStyle: {
        marginTop: 10,
        padding: 10,
        borderRadius: 8,
        shadowColor: "grey",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 0.5,
    },

    priceStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    priceViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    lariStyle: {
        width: 22,
        height: 22
    }
});

export default DetailsScreen;
