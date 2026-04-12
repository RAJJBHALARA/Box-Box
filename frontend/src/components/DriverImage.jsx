import { useState } from 'react';
import { getDriverImage } from '../utils/driverImages';

const DriverImage = ({ code, name, size = 120, className = '', fill = false }) => {
  const [imgError, setImgError] = useState(false);
  const imageUrl = getDriverImage(code);

  const sharedStyle = fill
    ? { width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top center' }
    : { width: size, height: size * 1.3, objectFit: 'contain', objectPosition: 'top center' };

  if (!imageUrl || imgError) {
    return (
      <div
        style={{
          ...(fill
            ? { width: '100%', height: '100%' }
            : { width: size, height: size * 1.3 }),
          background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          color: '#E10600',
          fontSize: size * 0.3,
          fontWeight: 'bold',
          letterSpacing: 2,
          fontFamily: "'Space Grotesk', sans-serif",
        }}
        className={className}
      >
        {code?.slice(0, 3)}
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={name || code}
      onError={() => setImgError(true)}
      style={sharedStyle}
      className={className}
    />
  );
};

export default DriverImage;
