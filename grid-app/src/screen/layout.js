import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, Search, ShoppingCart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <button className="nav-toggle">
            <Menu size={24} />
          </button>
          <a href="/" className="company-logo">MarketFlex</a>
        </div>
        
        <div className="header-right">
          <Search size={20} style={{ cursor: 'pointer' }} />
          <ShoppingCart size={20} style={{ cursor: 'pointer' }} />
          <div className="avatar">MF</div>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <div className="footer-links">
            <a href="#" className="footer-link">Our Story</a>
            <a href="#" className="footer-link">Careers</a>
            <a href="#" className="footer-link">Press</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Customer Service</h3>
          <div className="footer-links">
            <a href="#" className="footer-link">Contact Us</a>
            <a href="#" className="footer-link">FAQ</a>
            <a href="#" className="footer-link">Shipping</a>
            <a href="#" className="footer-link">Returns</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Products</h3>
          <div className="footer-links">
            <a href="#" className="footer-link">New Arrivals</a>
            <a href="#" className="footer-link">Best Sellers</a>
            <a href="#" className="footer-link">Sale</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Connect With Us</h3>
          <div className="footer-links">
            <a href="#" className="footer-link">Facebook</a>
            <a href="#" className="footer-link">Twitter</a>
            <a href="#" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="bottom-footer">
        <p>2024 MarketFlex. All rights reserved.</p>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
    return (
      <div className="app-container">
        <Header />
        {children}
        <Footer />
      </div>
    );
  };

export default Layout;