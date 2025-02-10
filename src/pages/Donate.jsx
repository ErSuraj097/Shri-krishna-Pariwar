import React, { useState } from 'react';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handlePayment = () => {
    if (!amount) {
      setMessage('Please enter a donation amount.');
      return;
    }

    setLoading(true);
    setMessage('');

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setMessage(`Thank you for your donation of $${amount}!`);
      setAmount('');
    }, 2000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftColumn}>
        <h1 style={styles.title}>Support Our Cause</h1>
        <img 
          src="https://example.com/path-to-your-image.jpg" 
          alt="Profession and Spirituality" 
          style={styles.image} 
        />
        <p style={styles.description}>
          Your donations help us continue our mission of promoting spirituality and professional growth. 
          Every contribution makes a difference!
        </p>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          placeholder="Enter donation amount" 
          style={styles.input} 
        />
        <div style={styles.checkboxContainer}>
          <input 
            type="checkbox" 
            checked={isRecurring} 
            onChange={() => setIsRecurring(!isRecurring)} 
            id="recurring" 
          />
          <label htmlFor="recurring" style={styles.checkboxLabel}>
            Make this a recurring donation
          </label>
        </div>
        <button onClick={handlePayment} style={styles.button} disabled={loading}>
          {loading ? 'Processing...' : 'Donate Now'}
        </button>
        {message && <p style={styles.message}>{message}</p>}
      </div>
      <div style={styles.rightColumn}>
        <h2 style={styles.rightTitle}>Build a New Mandir</h2>
        <p style={styles.rightDescription}>
          Join us in our mission to build a new mandir through the guidance of Paryanand Ji Maharaj. 
          Your generous donations will help us create a sacred space for spiritual growth and community gatherings.
        </p>
        <h3 style={styles.subTitle}>Why Donate?</h3>
        <ul style={styles.list}>
          <li>Support the construction of a new mandir.</li>
          <li>Contribute to community spiritual activities.</li>
          <li>Help preserve and promote our cultural heritage.</li>
        </ul>
        <h3 style={styles.subTitle}>Payment Options</h3>
        <p style={styles.paymentInfo}>
          You can donate through the following methods:
        </p>
        <p style={styles.paymentMethod}>
          <strong>UPI:</strong> example@upi
        </p>
        <p style={styles.paymentMethod}>
          <strong>Bank Transfer:</strong> Account Number: 1234567890, IFSC: ABCD0123456
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: 'auto',
  },
  leftColumn: {
    flex: 1,
    paddingRight: '20px',
  },
  rightColumn: {
    flex: 1,
    paddingLeft: '20px',
    borderLeft: '1px solid #ccc',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  rightTitle: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '16px marginBottom: 20px' ,
  },
  rightDescription: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  subTitle: {
    fontSize: '18px',
    marginTop: '15px',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    marginBottom: '20px',
  },
  paymentInfo: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  paymentMethod: {
    fontSize: '16px',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '80%',
    maxWidth: '300px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  checkboxContainer: {
    textAlign: 'left',
    marginBottom: '20px',
  },
  checkboxLabel: {
    marginLeft: '8px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
   
  },
  message: {
    marginTop: '20px',
    fontSize: '16px',
    color: '#28a745',
  },
};

export default Donate;