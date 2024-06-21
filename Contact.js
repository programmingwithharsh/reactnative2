import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default function Contact() {
    const [name, nameChange] = useState(""); // name default value is empty, use nameChange to update name
    const [email, emailChange] = useState("");
    const [phone, phoneChange] = useState("");
    const [message, messageChange] = useState("");
    const [submitError, setError] = useState(false);
    const [submitted, trySubmit] = useState(false);

    const postMessage = () => {
        if (!name || !email || !message) {
            setError(true);
            trySubmit(false);
        } else {
            setError(false);
            trySubmit(true);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {submitError ?
                    <Text style={styles.status}>
                        You didn't enter a Name, Email or Message
                    </Text>
                    :
                    <Text style={styles.status}>
                        Please enter the required information
                    </Text>
                }

                {
                    submitted ?
                        <Text>
                            Name: {name} Email: {email}
                        </Text>
                        :
                        <Text style={styles.require}>
                            * required
                        </Text>
                }

                <Text style={styles.label}>Name *</Text>
                <TextInput
                    value={name}
                    onChangeText={text => nameChange(text)}
                    style={styles.input}
                />

                <Text style={styles.label}>Email *</Text>
                <TextInput
                    value={email}
                    onChangeText={text => emailChange(text)}
                    style={styles.input}
                />

                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    value={phone}
                    onChangeText={text => phoneChange(text)}
                    style={styles.input}
                />

                <Text style={styles.label}>Message *</Text>
                <TextInput
                    value={message}
                    onChangeText={text => messageChange(text)}
                    style={styles.multi}
                    multiline
                    numberOfLines={6}
                />

                <TouchableOpacity
                    onPress={() => postMessage()}
                    style={styles.button}
                >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 26,
        fontFamily: 'OpenSans',
        width: 250
    },
    label: {
        fontSize: 18,
        fontFamily: 'OpenSans',
        paddingTop: 20
    },
    req: {
        fontFamily: 'OpenSans',
        paddingTop: 10,
        fontStyle: 'italic'
    },
    multi: {
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 16,
        fontFamily: 'OpenSans',
        width: 300
    },
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 10
    },
    status: {
        paddingTop: 10,
        paddingBottom: 15
    }
});