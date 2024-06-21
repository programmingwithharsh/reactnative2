import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';

import imageA from './assets/1.png';
import imageB from './assets/2.png';

const blockA = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis delectus, sed mollitia eligendi iusto dolor corporis est autem cum, nisi sit minima molestias possimus quam veritatis optio ex? Ratione, eligendi.`;

const blockB = `hic alias architecto in eaque porro, iure nostrum esse recusandae at quas. Maxime quasi vel maiores inventore dignissimos doloribus fuga repellat, totam a perferendis alias omnis, voluptas ipsam corporis! Deleniti,`;

export default function About() {
    return (
        <View>
            <ScrollView>
                <Image source={imageA} style={{ width: '100%', height: 300 }} />
                <Text style={styles.heading}>This is Heading</Text>
                <Text style={styles.text}>{blockA}</Text>

                <Image source={imageB} style={{ width: '100%', height: 300 }} />
                <Text style={styles.heading}>This is Heading</Text>
                <Text style={styles.text}>{blockB}</Text>

                <Image source={imageA} style={{ width: '100%', height: 300 }} />
                <Text style={styles.heading}>This is Heading</Text>
                <Text style={styles.text}>{blockA}</Text>

                <Image source={imageB} style={{ width: '100%', height: 300 }} />
                <Text style={styles.heading}>This is Heading</Text>
                <Text style={styles.text}>{blockB}</Text>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    heading: {
        fontWeight: 'bold',
        paddingTop: 5
    }
})