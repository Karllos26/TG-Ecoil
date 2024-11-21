import { Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Redirect } from 'expo-router';
import { auth } from '@/firebaseConfig'
import { onAuthStateChanged, User } from 'firebase/auth'


interface PrivateRouteProps {
    children: React.ReactNode;
}


const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (!user) {
        return <Redirect href="/" />;
    }

    return <>{children}</>;
};

export default PrivateRoute;