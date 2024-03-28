import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navbar from '../navbar/Navbar';
import { ScrollView } from 'react-native-gesture-handler';

const AboutUs = () => {
    const teamMembers = [
        { id: 1, name: 'Swapnil Shinde', position: 'CEO', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat purus vel nisi ultrices, vitae fermentum odio mattis.' },
        { id: 2, name: 'Shridhar karmalkar', position: 'CTO', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat purus vel nisi ultrices, vitae fermentum odio mattis.' },
        { id: 3, name: 'Santosh Sontakke', position: 'Designer', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat purus vel nisi ultrices, vitae fermentum odio mattis.' },
        { id: 4, name: 'Nikhil Mali', position: 'Developer', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat purus vel nisi ultrices, vitae fermentum odio mattis.' },
    ];

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.aboutUsContainer}>
                    <Text style={styles.header}>Our Team</Text>
                    <View style={styles.teamMembers}>
                        {teamMembers.map(member => (
                            <View key={member.id} style={styles.teamMember}>
                                <Text style={styles.name}>{member.name}</Text>
                                <Text style={styles.position}>{member.position}</Text>
                                <Text style={styles.bio}>{member.bio}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
            <Navbar />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    aboutUsContainer: {
        maxWidth: 800,
        margin: 'auto',
        padding: 20,
    },
    header: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    teamMembers: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    teamMember: {
        backgroundColor: '#f9f9f9',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 20,
        width: '48%', // Adjust as necessary
        marginBottom: 20,
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    position: {
        marginBottom: 5,
    },
    bio: {
        marginBottom: 10,
    },
});

export default AboutUs;
