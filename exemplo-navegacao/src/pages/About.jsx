import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export function About() {
    const theme = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.background}}>
            <h2 style={{ color: theme.foreground }}>About</h2>
        </div>
    );
}
