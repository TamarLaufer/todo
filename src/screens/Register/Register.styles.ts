import styled from 'styled-components';

export const RegisterContainerStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f5f5f5;
    padding: 20px;
`;

export const RegisterFormContainerStyle = styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;

    h2 {
        text-align: center;
        margin-bottom: 1.5rem;
        color: #333;
    }
`;

export const FormGroupStyle = styled.div`
    margin-bottom: 1rem;

    label {
        display: block;
        margin-bottom: 0.5rem;
        color: #555;
        font-weight: 500;
    }

    input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
        transition: border-color 0.2s;

        &:focus {
            outline: none;
            border-color: #4a90e2;
        }
    }
`;

export const ErrorTextStyle = styled.span`
    color: #e74c3c;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    display: block;
`;

export const ErrorMessageStyle = styled.div`
    background-color: #fde8e8;
    color: #e74c3c;
    padding: 0.75rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    text-align: center;
`;

export const RegisterButtonStyle = styled.button`
    width: 100%;
    padding: 0.75rem;
    background-color: #4a90e2;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
    margin-top: 1rem;

    &:hover {
        background-color: #357abd;
    }

    &:disabled {
        background-color: #a0c4ff;
        cursor: not-allowed;
    }
`;

export const LoginLinkStyle = styled.p`
    text-align: center;
    margin-top: 1.5rem;
    color: #666;

    span {
        color: #4a90e2;
        cursor: pointer;
        font-weight: 500;

        &:hover {
            text-decoration: underline;
        }
    }
`; 