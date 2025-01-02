import { useState } from 'react'
import { Button, Input, YStack, Text, XStack } from 'tamagui'
import { useAuth } from '../../src/contexts/AuthContext'
import EyeIcon from '../icons/EyeIcon'

interface RegisterFormProps {
    onLoginPress: () => void
}

export function RegisterForm({ onLoginPress }: RegisterFormProps) {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
    const { register } = useAuth()

    const handleRegister = async () => {
        try {
            if (password !== confirmPassword) {
                console.error('Passwords do not match')
                return
            }
            // Implement your registration logic here
            // const response = await registerAPI(email, password)
            register('dummy-token')
        } catch (error) {
            console.error('Registration failed:', error)
        }
    }

    return (
        <YStack space="$4" w="100%">
            <Text ta="center" fow="800" fos="$8">
                Register
            </Text>
            <Input
                size="$5"
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <Input
                size="$5"
                placeholder="Surname"
                value={surname}
                onChangeText={setSurname}
            />
            <Input
                size="$5"
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <XStack ai="center" maxWidth="100%">
                <Input
                    flex={1}
                    size="$5"
                    placeholder="Password"
                    secureTextEntry={!passwordVisible}
                    value={password}
                    onChangeText={setPassword}
                />
                <Button
                    chromeless
                    paddingHorizontal="$2"
                    marginLeft="$-8"
                    position="absolute"
                    right={0}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                >
                    <EyeIcon visible={passwordVisible} />
                </Button>
            </XStack>
            <XStack ai="center" maxWidth="100%">
                <Input
                    flex={1}
                    size="$5"
                    placeholder="Confirm Password"
                    secureTextEntry={!confirmPasswordVisible}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <Button
                    chromeless
                    paddingHorizontal="$2"
                    marginLeft="$-8"
                    position="absolute"
                    right={0}
                    onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                >
                    <EyeIcon visible={confirmPasswordVisible} />
                </Button>
            </XStack>
            <Button
                backgroundColor="$red10Light"
                color="white"
                onPress={handleRegister}
            >
                Register
            </Button>
            <Button
                backgroundColor="white"
                borderColor="$gray5"
                borderWidth={1}
                color="black"
                onPress={onLoginPress}
            >
                Already have an account? Login
            </Button>
        </YStack>
    )
} 