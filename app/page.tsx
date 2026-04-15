export default function MaintenancePage() {
  return (
    <div style={{
      backgroundColor: '#121212', // Dark Gray background
      color: '#e0e0e0', // Light gray text
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      margin: 0,
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        backgroundColor: '#1c1c1c', // Slightly lighter gray for the card
        padding: '3rem',
        borderRadius: '1.5rem',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
        border: '1px solid #2d2d2d', // Subtle border to define the card in dark mode
        maxWidth: '440px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Centered SVG */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1.5rem'
        }}>
          <svg 
            width="80" 
            height="80" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#ffffff" // White stroke for max contrast on gray
            strokeWidth="1.2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        </div>

        <h1 style={{ 
          fontSize: '1.875rem', 
          fontWeight: '700', 
          marginBottom: '1rem',
          letterSpacing: '-0.025em',
          color: '#ffffff'
        }}>
          Under Maintenance
        </h1>
        
        <p style={{ 
          color: '#a0a0a0', // Muted gray for description
          lineHeight: '1.625',
          fontSize: '1.125rem',
          margin: 0
        }}>
          I am currently updating <strong>ashkjha1.github.io</strong>. 
          The new experience is coming soon.
        </p>

        <div style={{ 
          marginTop: '2rem',
          height: '1px',
          width: '80px',
          backgroundColor: '#444444', // Dark gray divider
          borderRadius: '1px'
        }} />
      </div>
    </div>
  );
}