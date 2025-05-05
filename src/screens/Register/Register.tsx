import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import {
    RegisterContainerStyle,
    RegisterFormContainerStyle,
    FormGroupStyle,
    ErrorTextStyle,
    ErrorMessageStyle,
    RegisterButtonStyle,
    LoginLinkStyle
} from './Register.styles'

interface RegisterFormData {
    email: string
    password: string
    confirmPassword: string
    displayName: string
}

const Register = () => {
    const navigate = useNavigate()
    const { signup } = useAuth()
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<RegisterFormData>()

    const password = watch('password')

    const onSubmit = async (data: RegisterFormData) => {
        try {
            setLoading(true)
            setError('')
            
            await signup(data.email, data.password, data.displayName)
            navigate('/')
        } catch (err: any) {
            setError(err.message || 'An error occurred during registration')
        } finally {
            setLoading(false)
        }
    }

    return (
        <RegisterContainerStyle>
            <RegisterFormContainerStyle>
                <h2>Create Account</h2>
                {error && <ErrorMessageStyle>{error}</ErrorMessageStyle>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroupStyle>
                        <label htmlFor="displayName">Name</label>
                        <input
                            id="displayName"
                            type="text"
                            {...register('displayName', {
                                required: 'Name is required',
                                minLength: {
                                    value: 2,
                                    message: 'Name must be at least 2 characters',
                                },
                            })}
                        />
                        {errors.displayName && (
                            <ErrorTextStyle>{errors.displayName.message}</ErrorTextStyle>
                        )}
                    </FormGroupStyle>

                    <FormGroupStyle>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                        />
                        {errors.email && (
                            <ErrorTextStyle>{errors.email.message}</ErrorTextStyle>
                        )}
                    </FormGroupStyle>

                    <FormGroupStyle>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters',
                                },
                            })}
                        />
                        {errors.password && (
                            <ErrorTextStyle>{errors.password.message}</ErrorTextStyle>
                        )}
                    </FormGroupStyle>

                    <FormGroupStyle>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            {...register('confirmPassword', {
                                required: 'Please confirm your password',
                                validate: (value) =>
                                    value === password || 'Passwords do not match',
                            })}
                        />
                        {errors.confirmPassword && (
                            <ErrorTextStyle>{errors.confirmPassword.message}</ErrorTextStyle>
                        )}
                    </FormGroupStyle>

                    <RegisterButtonStyle type="submit" disabled={loading}>
                        {loading ? 'Creating Account...' : 'Register'}
                    </RegisterButtonStyle>
                </form>

                <LoginLinkStyle>
                    Already have an account?{' '}
                    <span onClick={() => navigate('/login')}>Login</span>
                </LoginLinkStyle>
            </RegisterFormContainerStyle>
        </RegisterContainerStyle>
    )
}

export default Register