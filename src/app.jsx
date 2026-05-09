// import { useState, useEffect } from 'react';
// import axios from 'axios';

// // IMPORTANT: Yahan deployment ke baad backend ka URL aayega
// const API_URL = "https://air-for-share-backend-with-mongodb.vercel.app";

// function App() {
//   const [text, setText] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const res = await axios.get(API_URL);
//       setText(res.data.text || "");
//     } catch (err) {
//       console.log("Fetch Error:", err);
//     }
//   };

//   const handleSave = async () => {
//     setLoading(true);

//     try {
//       await axios.post(`${API_URL}/save`, { text });

//       setMessage("Saved Successfully!");

//       setTimeout(() => {
//         setMessage("");
//       }, 2000);

//     } catch (err) {
//       console.log("Save Error:", err);
//       setMessage("Error Saving Data");
//     }

//     setLoading(false);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h1 style={styles.title}>Private Share App</h1>

//         <p style={styles.subtitle}>
//           Same WiFi/IP wale users data share kar sakte hain
//         </p>

//         <textarea
//           style={styles.textarea}
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Kuch type karein..."
//         />

//         <button
//           onClick={handleSave}
//           disabled={loading}
//           style={
//             loading
//               ? { ...styles.button, opacity: 0.7 }
//               : styles.button
//           }
//         >
//           {loading ? "Saving..." : "Save / Sync"}
//         </button>

//         {message && <p style={styles.msg}>{message}</p>}

//         <p style={styles.footer}>
//           Expires in 30 minutes of inactivity
//         </p>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh',
//     backgroundColor: '#f0f2f5',
//     fontFamily: 'Arial'
//   },

//   card: {
//     backgroundColor: 'white',
//     padding: '2rem',
//     borderRadius: '15px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//     width: '90%',
//     maxWidth: '500px',
//     textAlign: 'center'
//   },

//   title: {
//     color: '#1a73e8',
//     marginBottom: '10px'
//   },

//   subtitle: {
//     color: '#5f6368',
//     fontSize: '14px',
//     marginBottom: '20px'
//   },

//   textarea: {
//     width: '100%',
//     height: '150px',
//     padding: '12px',
//     borderRadius: '10px',
//     border: '1px solid #ddd',
//     fontSize: '16px',
//     outline: 'none',
//     boxSizing: 'border-box'
//   },

//   button: {
//     width: '100%',
//     marginTop: '15px',
//     padding: '12px',
//     backgroundColor: '#1a73e8',
//     color: 'white',
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     fontWeight: 'bold'
//   },

//   msg: {
//     marginTop: '10px',
//     color: '#28a745',
//     fontWeight: '500'
//   },

//   footer: {
//     marginTop: '20px',
//     fontSize: '11px',
//     color: '#999'
//   }
// };

// export default App;

import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = "https://air-for-share-backend.vercel.app/"; // Production mein Vercel URL dalna

function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(API_URL);
      setText(res.data.text || "");
    } catch (err) {
      console.log("Fetch Error:", err);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await axios.post(`${API_URL}/save`, { text });
      setMessage("success");
      setTimeout(() => setMessage(""), 2500);
    } catch (err) {
      setMessage("error");
      setTimeout(() => setMessage(""), 2500);
    }
    setLoading(false);
  };

  const updateCount = () => text.length;

  return (
    <div style={styles.wrap}>
      {/* Background blobs */}
      <div style={styles.blob1} />
      <div style={styles.blob2} />
      <div style={styles.blob3} />
      <div style={styles.blob4} />

      <div style={styles.card}>
        {/* Pin Icon */}
        <div style={styles.pinIcon}>
          <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: 'white' }}>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>

        <h1 style={styles.title}>AirForShare❤️</h1>
        <p style={styles.subtitle}>Share instantly with anyone on your network</p>

        {/* Tags */}
        <div style={styles.tagRow}>
          <span style={{ ...styles.tag, ...styles.tagRose }}>Private</span>
          <span style={{ ...styles.tag, ...styles.tagPeach }}>Same WiFi</span>
          <span style={{ ...styles.tag, ...styles.tagSage }}>Auto Sync</span>
        </div>

        {/* Textarea */}
        <label style={styles.textareaLabel}>YOUR NOTE</label>
        <textarea
          style={styles.textarea}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something beautiful to share..."
          onFocus={e => e.target.style.borderColor = '#E60023'}
          onBlur={e => e.target.style.borderColor = '#F0E4D8'}
        />
        <p style={styles.charCount}>{updateCount()} characters</p>

        {/* Button */}
        <button
          onClick={handleSave}
          disabled={loading}
          style={loading ? { ...styles.btn, ...styles.btnDisabled } : styles.btn}
        >
          {loading ? (
            <>
              <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: 'white' }}>
                <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
              </svg>
              Saving...
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: 'white' }}>
                <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
              </svg>
              Save &amp; Sync
            </>
          )}
        </button>

        {/* Success / Error Message */}
        {message === "success" && (
          <div style={{ ...styles.msgBox, ...styles.msgSuccess }}>
            <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: '#2E7D5A' }}>
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
            Saved successfully!
          </div>
        )}
        {message === "error" && (
          <div style={{ ...styles.msgBox, ...styles.msgError }}>
            Something went wrong. Try again.
          </div>
        )}

        {/* Divider */}
        <div style={styles.divider} />

        {/* Footer */}
        <div style={styles.footerRow}>
          <span style={styles.footerTxt}>IP-based sharing</span>
          <span style={styles.expireBadge}>Expires in 30 min</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    minHeight: '100vh',
    background: '#FDF6F0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem',
    fontFamily: "'DM Sans', Arial, sans-serif",
    position: 'relative',
    overflow: 'hidden',
  },
  blob1: {
    position: 'fixed', width: 180, height: 180,
    background: '#FDDDE6', borderRadius: '50%',
    top: -40, left: -50, opacity: 0.5, zIndex: 0,
  },
  blob2: {
    position: 'fixed', width: 120, height: 120,
    background: '#FDE8D4', borderRadius: '50%',
    top: 60, right: -30, opacity: 0.5, zIndex: 0,
  },
  blob3: {
    position: 'fixed', width: 200, height: 200,
    background: '#E8F4EC', borderRadius: '50%',
    bottom: -60, right: 40, opacity: 0.5, zIndex: 0,
  },
  blob4: {
    position: 'fixed', width: 90, height: 90,
    background: '#FDE8EC', borderRadius: '50%',
    bottom: 80, left: 20, opacity: 0.5, zIndex: 0,
  },
  card: {
    position: 'relative', zIndex: 1,
    background: '#FFFFFF',
    borderRadius: 24,
    padding: '2.5rem 2rem',
    width: '100%',
    maxWidth: 480,
    border: '1px solid #F2E8E0',
  },
  pinIcon: {
    width: 44, height: 44,
    background: '#E60023',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.25rem',
  },
  title: {
    fontFamily: 'Georgia, serif',
    fontSize: 26, fontWeight: 600,
    color: '#1A1A1A',
    textAlign: 'center',
    margin: '0 0 6px',
    letterSpacing: '-0.3px',
  },
  subtitle: {
    fontSize: 13, color: '#A0917F',
    textAlign: 'center',
    margin: '0 0 1.75rem',
    fontWeight: 300,
  },
  tagRow: {
    display: 'flex', gap: 8,
    justifyContent: 'center',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
  },
  tag: {
    fontSize: 11, fontWeight: 500,
    padding: '4px 12px',
    borderRadius: 999,
    letterSpacing: '0.3px',
  },
  tagRose: { background: '#FDE8EC', color: '#C1354E' },
  tagPeach: { background: '#FEF0E6', color: '#C4622A' },
  tagSage: { background: '#E8F5EF', color: '#2E7D5A' },
  textareaLabel: {
    fontSize: 11, fontWeight: 500,
    color: '#B0A090',
    letterSpacing: '0.8px',
    marginBottom: 8,
    display: 'block',
  },
  textarea: {
    width: '100%',
    minHeight: 140,
    padding: '14px 16px',
    borderRadius: 14,
    border: '1.5px solid #F0E4D8',
    background: '#FFFAF7',
    fontFamily: "'DM Sans', Arial, sans-serif",
    fontSize: 15,
    color: '#2D2D2D',
    resize: 'none',
    outline: 'none',
    boxSizing: 'border-box',
    lineHeight: 1.6,
  },
  charCount: {
    fontSize: 11, color: '#C8B8A8',
    textAlign: 'right',
    margin: '6px 0 16px',
  },
  btn: {
    width: '100%',
    padding: '14px',
    background: '#c40421',
    color: 'white',
    border: 'none',
    borderRadius: 14,
    fontFamily: "'DM Sans', Arial, sans-serif",
    fontSize: 15, fontWeight: 500,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    letterSpacing: '0.2px',
  },
  btnDisabled: {
    background: '#F0C0C0',
    cursor: 'not-allowed',
  },
  msgBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 12,
    fontSize: 13,
    fontWeight: 500,
    padding: '10px 16px',
    borderRadius: 10,
  },
  msgSuccess: { background: '#E8F5EF', color: '#2E7D5A' },
  msgError: { background: '#FDE8EC', color: '#C1354E' },
  divider: {
    height: 1,
    background: '#F2E8E0',
    margin: '1.5rem 0',
  },
  footerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerTxt: { fontSize: 11, color: '#C8B8A8' },
  expireBadge: {
    fontSize: 11,
    background: '#FEF0E6',
    color: '#C4622A',
    padding: '4px 10px',
    borderRadius: 999,
    fontWeight: 500,
  },
};

export default App;