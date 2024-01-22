import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LinkButton } from '../../components/Button';
import styled from "styled-components";

const StyledContanier = styled.div`
    color: ${props => props.theme.light.colorPalette['color-100']};
`;

const Error = () => {

    const [countdown, setCountdown] = useState(10);
    const navigate = useNavigate();
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => { setCountdown(prevCountdown => prevCountdown - 1); }, 1000);
        return () => clearInterval(intervalRef.current);
    }, []);

    if (countdown === 0) {
        clearInterval(intervalRef.current)
        navigate('/')
    }

    return (
        <StyledContanier>
            <h1>Wow, de momento no contamos con este sitio</h1>
            <h1>Serás redireccionado a la página principal en {countdown}</h1>
            <div style={{ display: 'flex' }}>
                <LinkButton text="Redireccionar ahora" link='/' />
            </div>
        </StyledContanier>
    );
};

export default Error;