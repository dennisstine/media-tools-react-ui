import React, { FC } from 'react';
import './ApiMetricsComponent.css';

interface ApiMetricsComponentProps {
    name: string;
    port: number;
    baseApiPath: string;
    authToken: string;
    healthApiPath?: string;

}

const ApiMetricsComponent: FC<ApiMetricsComponentProps> = () => {

    return (
        <div className="ApiMetricsComponent">
            ApiMetricsComponent Component
        </div>
    );
}

export default ApiMetricsComponent;
