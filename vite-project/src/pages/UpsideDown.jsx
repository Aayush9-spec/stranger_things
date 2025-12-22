import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './UpsideDown.css';

const UpsideDown = () => {
    const navigate = useNavigate();

    return (
        <div className="upside-down-page">
            <div className="particles"></div>

            <motion.div
                className="ud-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
            >
                <h1 className="ud-title">WELCOME TO THE UPSIDE DOWN</h1>
                <p className="ud-text">
                    It is cold here. It is dark. And you are not alone.
                </p>

                <button className="ud-btn" onClick={() => navigate('/')}>
                    ESCAPE
                </button>
            </motion.div>
        </div>
    );
};

export default UpsideDown;
