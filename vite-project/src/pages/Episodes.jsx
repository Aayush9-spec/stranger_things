import React from 'react';
import { motion } from 'framer-motion';
import './Episodes.css';

const seasons = [
    {
        order: 1,
        title: "Season 1",
        episodes: [
            { id: "s1e1", title: "Chapter One: The Vanishing of Will Byers", date: "2016" },
            { id: "s1e2", title: "Chapter Two: The Weirdo on Maple Street", date: "2016" },
            { id: "s1e3", title: "Chapter Three: Holly, Jolly", date: "2016" },
            { id: "s1e4", title: "Chapter Four: The Body", date: "2016" },
        ]
    },
    {
        order: 2,
        title: "Season 2",
        episodes: [
            { id: "s2e1", title: "Chapter One: MADMAX", date: "2017" },
            { id: "s2e2", title: "Chapter Two: Trick or Treat, Freak", date: "2017" },
        ]
    }
];

const Episodes = () => {
    return (
        <div className="episodes-page">
            <motion.h1
                className="ep-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                The Story So Far
            </motion.h1>

            {seasons.map((season) => (
                <div key={season.order} className="season-section">
                    <motion.h2
                        className="season-title"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        {season.title}
                    </motion.h2>
                    <div className="ep-list">
                        {season.episodes.map((ep, idx) => (
                            <motion.div
                                key={ep.id}
                                className="ep-item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <span className="ep-number">{ep.id.toUpperCase()}</span>
                                <span className="ep-name">{ep.title}</span>
                                <span className="ep-date">{ep.date}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Episodes;
