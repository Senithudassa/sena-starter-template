import React from 'react';

export default function Footer() {
  return (
    <div className="container-footer">
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Senithudassa. All rights reserved.</p>
      </footer>
    </div>
  );
}

