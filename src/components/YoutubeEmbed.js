import React from 'react';

function YouTubeEmbed({ videoId }) {
    return (
        <div className="w-full relative" style={{ paddingTop: '56.25%' }}>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}

export default YouTubeEmbed;

/*function YouTubeEmbed({ videoId }) {
    return (
        <div style={{ width: '100%', height: '0', paddingBottom: '57%', position: 'relative' }}>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}

export default YouTubeEmbed;*/