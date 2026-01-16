import React, { useState } from 'react';

const LLEPopup = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const colors = {
    weiterleasing: {
      primary: '#95C11E',
      dark: '#7a9a18',
      light: '#f5f9e8',
      gradient: 'linear-gradient(135deg, #95C11E 0%, #7a9a18 100%)',
    },
    anschlussleasing: {
      primary: '#4a4a4a',
      dark: '#3a3a3a',
      light: '#f5f5f5',
      gradient: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 100%)',
    },
    übernahmekauf: {
      primary: '#4a4a4a',
      dark: '#3a3a3a',
      light: '#f5f5f5',
      gradient: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 100%)',
    },
    rückgabe: {
      primary: '#4a4a4a',
      dark: '#3a3a3a',
      light: '#f5f5f5',
      gradient: 'linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 100%)',
    },
  };

  const options = [
    {
      id: 'weiterleasing',
      title: 'Rad für 10 Monate versichert weiterleasen – dann gehört es Ihnen',
      badge: 'Empfohlen',
      highlighted: true,
      color: colors.weiterleasing,
      priceLabel: 'ABZUG VON IHREM BRUTTO-GEHALT',
      price: '117,80 €',
      priceSuffix: '/ Monat',
      ablöseLabel: 'ABLÖSUNG NACH 10 MONATEN',
      ablöseAmount: '0 €',
      mainBenefit: 'Behalten Sie Ihr Fahrrad – nach 10 Monaten gehört es Ihnen ohne Ablöse',
      nettoRate: '~48 €',
      details: {
        laufzeit: '10 Monate',
        versicherung: 'inklusive',
        ablöse: '0 € – Fahrrad gehört nach 10 M. Ihnen',
        service: 'inklusive',
      },
    },
    {
      id: 'anschlussleasing',
      title: 'Rad für 24 Monate versichert weiterleasen',
      badge: null,
      highlighted: false,
      color: colors.anschlussleasing,
      priceLabel: 'ABZUG VON IHREM BRUTTO-GEHALT',
      price: '82,46 €',
      priceSuffix: '/ Monat',
      ablöseLabel: 'ABLÖSUNG NACH 24 MONATEN',
      ablöseAmount: '136,80 €',
      mainBenefit: 'Günstigere Rate – danach flexible Übernahme oder Rückgabe',
      nettoRate: '~27 €',
      details: {
        laufzeit: '24 Monate',
        versicherung: 'inklusive',
        ablöse: '299 € (optional)',
        service: 'inklusive',
      },
    },
    {
      id: 'übernahmekauf',
      title: 'Jetzt direkt mit Einmalzahlung herauskaufen',
      badge: null,
      highlighted: false,
      color: colors.übernahmekauf,
      priceLabel: 'Einmalzahlung',
      price: '890 €',
      priceSuffix: 'einmalig',
      ablöseLabel: 'ABLÖSUNG BEI LAUFZEITENDE',
      ablöseAmount: '684 €',
      mainBenefit: 'Das Fahrrad gehört Ihnen – sofort und ohne weitere Verpflichtungen',
      nettoRate: null,
      paymentInfo: 'Zahlung auf Rechnung in 14 Tagen',
      details: {
        laufzeit: 'Unbegrenzt (Eigentum)',
        versicherung: 'Endet mit Übernahme',
        ablöse: '890 € Restwert',
        service: 'Nicht inklusive',
      },
    },
  ];

  const handleContinue = () => {
    setShowConfirmation(true);
  };

  const handleBack = () => {
    setShowConfirmation(false);
    setSelectedOption(null);
  };

  const getSelectedColor = () => {
    if (selectedOption === 'rückgabe') return colors.rückgabe;
    const option = options.find(o => o.id === selectedOption);
    return option?.color || colors.weiterleasing;
  };

  if (showConfirmation) {
    const selected = selectedOption === 'rückgabe' 
      ? { title: 'Rückgabe' }
      : options.find(o => o.id === selectedOption);
    const confirmColor = getSelectedColor();
    
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');
          
          .overlay {
            min-height: 100vh;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            font-family: 'Titillium Web', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          }
          
          .confirmation-modal {
            background: #ffffff;
            border-radius: 24px;
            padding: 48px;
            text-align: center;
            max-width: 440px;
            box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
          }
          
          .confirmation-icon {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            color: #fff;
            margin: 0 auto 24px;
          }
          
          .confirmation-title {
            margin: 0 0 12px;
            font-size: 24px;
            font-weight: 700;
            color: #111827;
          }
          
          .confirmation-text {
            margin: 0 0 8px;
            font-size: 16px;
            color: #374151;
          }
          
          .confirmation-subtext {
            margin: 0 0 28px;
            font-size: 14px;
            color: #6b7280;
          }
          
          .back-button {
            padding: 12px 24px;
            font-size: 14px;
            font-weight: 600;
            color: #95C11E;
            background: #f5f9e8;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.2s ease;
          }
        `}</style>
      <div className="overlay">
        <div className="confirmation-modal">
          <div className="confirmation-icon" style={{
            background: confirmColor.gradient,
            boxShadow: `0 8px 24px ${confirmColor.primary}4d`,
          }}>✓</div>
          <h2 className="confirmation-title">Auswahl bestätigt</h2>
          <p className="confirmation-text">
            Sie haben <strong>{selected?.title}</strong> gewählt.
          </p>
          <p className="confirmation-subtext">
            In einem echten System würden Sie jetzt zum nächsten Schritt weitergeleitet.
          </p>
          <button className="back-button" onClick={handleBack}>
            ← Zurück zur Auswahl
          </button>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');
        
        .overlay {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-family: 'Titillium Web', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .modal {
          background: #ffffff;
          border-radius: 24px;
          max-width: 1200px;
          width: 100%;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4), 0 10px 30px rgba(0, 0, 0, 0.2);
          overflow: hidden;
        }
        
        .header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 32px 32px 24px;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .header-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #95C11E 0%, #7a9a18 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-shrink: 0;
          overflow: hidden;
        }
        
        .header-icon img {
          border-radius: 8px;
        }
        
        .title {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
          color: #111827;
          letter-spacing: -0.02em;
        }
        
        .header-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        
        .user-id {
          font-size: 16px;
          font-weight: 600;
          color: #6b7280;
          background: #f3f4f6;
          padding: 4px 10px;
          border-radius: 6px;
          letter-spacing: 0.02em;
        }
        
        .subtitle {
          margin: 4px 0 0;
          font-size: 16px;
          color: #6b7280;
          font-weight: 400;
        }
        
        .bike-banner {
          background: #f8fafc;
          padding: 14px 32px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .bike-label {
          font-size: 16px;
          color: #6b7280;
          font-weight: 500;
        }
        
        .bike-name {
          font-size: 16px;
          color: #111827;
          font-weight: 600;
        }
        
        .bike-end {
          font-size: 16px;
          color: #4a4a4a;
          font-weight: 500;
          margin-left: auto;
          background: #f5f5f5;
          padding: 4px 12px;
          border-radius: 20px;
        }
        
        .options-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 28px 32px 0;
          margin-bottom: 80px;
          align-items: stretch;
          position: relative;
        }
        
        .option-card {
          position: relative;
          border: 2px solid #e5e7eb;
          border-radius: 16px;
          padding: 28px 20px 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 6px 16px;
          border-radius: 20px;
        }
        
        .radio-outer {
          width: 22px;
          height: 22px;
          border: 2px solid #d1d5db;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          transition: all 0.2s ease;
        }
        
        .radio-outer-small {
          margin-bottom: 0;
          flex-shrink: 0;
        }
        
        .radio-inner {
          width: 8px;
          height: 8px;
          background: #fff;
          border-radius: 50%;
        }
        
        .option-title {
          margin: 0 0 16px;
          font-size: 19px;
          font-weight: 700;
          line-height: 1.4;
        }
        
        .price-section {
          margin-bottom: 16px;
        }
        
        .price-label {
          display: block;
          font-size: 12px;
          color: #6b7280;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
        
        .price-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }
        
        .price {
          font-size: 32px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        
        .price-suffix {
          font-size: 14px;
          color: #6b7280;
          font-weight: 500;
        }
        
        .footnote {
          font-size: 11px;
          color: #6b7280;
          font-weight: 400;
          line-height: 1.4;
          margin-top: 8px;
          font-style: italic;
        }
        
        .superscript {
          font-size: 0.7em;
          vertical-align: super;
          line-height: 0;
        }
        
        .footnotes {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #e5e7eb;
          font-size: 11px;
          color: #6b7280;
          line-height: 1.6;
        }
        
        .footnote-item {
          margin-bottom: 8px;
        }
        
        .main-benefit {
          margin: 0 0 20px;
          font-size: 14px;
          color: #374151;
          line-height: 1.5;
        }
        
        .divider {
          height: 1px;
          margin: 0 0 16px;
          transition: all 0.2s ease;
        }
        
        .details {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
        }
        
        .detail-label {
          color: #6b7280;
          font-weight: 500;
        }
        
        .detail-value {
          color: #111827;
          font-weight: 600;
          text-align: right;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .status-icon {
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .status-icon svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        
        .status-icon svg circle {
          display: block;
        }
        
        .return-option {
          margin: 0 32px 24px;
          position: relative;
          z-index: 10;
          padding: 16px 20px;
          border: 2px solid;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .return-content {
          flex: 1;
        }
        
        .return-title {
          display: block;
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 2px;
          transition: all 0.2s ease;
        }
        
        .return-subtitle {
          display: block;
          font-size: 13px;
          color: #6b7280;
        }
        
        .return-arrow {
          transition: all 0.2s ease;
        }
        
        .footer {
          background: #f8fafc;
          padding: 20px 32px 28px;
          border-top: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        
        .footer-note {
          margin: 0;
          font-size: 13px;
          color: #6b7280;
          text-align: center;
        }
        
        .continue-button {
          width: 100%;
          max-width: 400px;
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          background: #d1d5db;
          border: none;
          border-radius: 12px;
          cursor: not-allowed;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .continue-button:disabled {
          cursor: not-allowed;
        }
        
        .confirmation-modal {
          background: #ffffff;
          border-radius: 24px;
          padding: 48px;
          text-align: center;
          max-width: 440px;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
        }
        
        .confirmation-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          color: #fff;
          margin: 0 auto 24px;
        }
        
        .confirmation-title {
          margin: 0 0 12px;
          font-size: 24px;
          font-weight: 700;
          color: #111827;
        }
        
        .confirmation-text {
          margin: 0 0 8px;
          font-size: 16px;
          color: #374151;
        }
        
        .confirmation-subtext {
          margin: 0 0 28px;
          font-size: 14px;
          color: #6b7280;
        }
        
        .back-button {
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 600;
          color: #95C11E;
          background: #f5f9e8;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
      `}</style>
    <div className="overlay">
      <div className="modal">
        {/* Header */}
        <div className="header">
          <div className="header-icon">
            <img src="/bls-symbol.jpeg" alt="BLS Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ flex: 1 }}>
            <div className="header-top-row">
              <h1 className="title">Ihr Leasingvertrag endet demnächst</h1>
              <span className="user-id">U15419 – TESTNUTZER BIKELEASING</span>
            </div>
            <p className="subtitle">
              Wollen Sie das Rad zum Ende der Leasinglaufzeit übernehmen?
            </p>
          </div>
        </div>

        {/* Bike Info Banner */}
        <div className="bike-banner">
          <span className="bike-label">Aktuelles Fahrrad:</span>
          <span className="bike-name">Canyon Roadlite:ON 7</span>
          <span className="bike-end">Leasingende: 31.03.2025</span>
        </div>

        {/* Options Grid */}
        <div className="options-grid">
          {options.map((option) => {
            const isSelected = selectedOption === option.id;
            const cardColor = option.color;
            
            return (
              <div
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className="option-card"
                style={{
                  borderColor: cardColor.primary,
                  background: isSelected || option.highlighted 
                    ? `linear-gradient(180deg, ${cardColor.light} 0%, #ffffff 100%)`
                : (option.id === 'anschlussleasing' || option.id === 'übernahmekauf')
                  ? '#f5f5f5'
                    : '#ffffff',
                  boxShadow: isSelected 
                    ? `0 0 0 3px ${cardColor.primary}33, 0 4px 20px ${cardColor.primary}26`
                    : option.highlighted 
                      ? `0 4px 20px ${cardColor.primary}26`
                      : 'none',
                }}
              >
                {/* Badge */}
                {option.badge && (
                  <div className="badge" style={{
                    background: cardColor.gradient,
                    boxShadow: `0 2px 8px ${cardColor.primary}4d`,
                  }}>{option.badge}</div>
                )}

                {/* Selection Indicator */}
                <div className="radio-outer" style={{
                  borderColor: isSelected ? cardColor.primary : '#d1d5db',
                  background: isSelected ? cardColor.primary : 'transparent',
                }}>
                  {isSelected && (
                    <div className="radio-inner" />
                  )}
                </div>

                {/* Card Header */}
                <h3 className="option-title" style={{
                  color: cardColor.dark,
                }}>
                  {option.title}
                </h3>

                {/* For Übernahmekauf: show placeholder first */}
                {option.id === 'übernahmekauf' && (
                  <div className="price-section" style={{ opacity: 0, pointerEvents: 'none' }}>
                    <span className="price-label">Placeholder</span>
                    <div className="price-row">
                      <span className="price">0 €</span>
                    </div>
                  </div>
                )}

                {/* Price section - for Weiterleasing and Anschlussleasing */}
                {option.id !== 'übernahmekauf' && (
                <div className="price-section">
                  <span className="price-label">{option.priceLabel}</span>
                  <div className="price-row">
                    <span className="price" style={{
                      color: cardColor.dark,
                    }}>
                      {option.price}
                    </span>
                    <span className="price-suffix">{option.priceSuffix}</span>
                  </div>
                </div>
                )}

                {/* Ablöse section for Weiterleasing and Anschlussleasing */}
                {(option.ablöseLabel && option.ablöseAmount && option.id !== 'übernahmekauf') && (
                  <div className="price-section">
                    <span className="price-label">{option.ablöseLabel}</span>
                    <div className="price-row">
                      <span className="price" style={{
                        color: cardColor.dark,
                      }}>
                        {option.ablöseAmount}
                        {option.id === 'anschlussleasing' && <span className="superscript">¹</span>}
                      </span>
                    </div>
                  </div>
                )}

                {/* Price section for Übernahmekauf at bottom */}
                {option.id === 'übernahmekauf' && (
                  <div className="price-section">
                    <span className="price-label">{option.ablöseLabel}</span>
                    <div className="price-row">
                      <span className="price" style={{
                        color: cardColor.dark,
                      }}>
                        {option.ablöseAmount}
                      </span>
                    </div>
                  </div>
                )}

                {/* Bottom Section - always aligned at bottom */}
                <div>
                  {/* Divider */}
                  <div className="divider" style={{
                    background: `${cardColor.primary}26`,
                  }} />


                  {/* Standard Comparison Details - always aligned */}
                  <div className="details">
                    <div className="detail-row">
                      <span className="detail-label">Vollkasko-Versicherung</span>
                      <span className="detail-value">
                        {option.details.versicherung}
                        {option.details.versicherung === 'inklusive' && (
                          <span className="status-icon check">
                            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                              <circle cx="9" cy="9" r="9" fill="#10b981"/>
                              <path d="M5 9L8 12L13 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        )}
                            {option.details.versicherung === 'Endet mit Übernahme' && (
                          <span className="status-icon cross">
                            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                              <circle cx="9" cy="9" r="9" fill="#dc2626"/>
                              <path d="M6 6L12 12M12 6L6 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Wartung & Reparatur</span>
                      <span className="detail-value">
                        {option.details.service}
                        {option.details.service === 'inklusive' && (
                          <span className="status-icon check">
                            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                              <circle cx="9" cy="9" r="9" fill="#10b981"/>
                              <path d="M5 9L8 12L13 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        )}
                            {option.details.service === 'Nicht inklusive' && (
                          <span className="status-icon cross">
                            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                              <circle cx="9" cy="9" r="9" fill="#dc2626"/>
                              <path d="M6 6L12 12M12 6L6 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Return Option (Secondary) */}
        <div 
          className="return-option"
          style={{
            borderColor: colors.rückgabe.primary,
            background: selectedOption === 'rückgabe' ? colors.rückgabe.light : '#f9fafb',
          }}
          onClick={() => setSelectedOption('rückgabe')}
        >
          <div className="radio-outer radio-outer-small" style={{
            borderColor: selectedOption === 'rückgabe' ? colors.rückgabe.primary : '#d1d5db',
            background: selectedOption === 'rückgabe' ? colors.rückgabe.primary : 'transparent',
          }}>
            {selectedOption === 'rückgabe' && (
              <div className="radio-inner" />
            )}
          </div>
          <div className="return-content">
            <span className="return-title" style={{
              color: selectedOption === 'rückgabe' ? colors.rückgabe.dark : '#374151',
            }}>Fahrrad zurückgeben</span>
            <span className="return-subtitle">
              Sie möchten das Fahrrad nicht behalten? Geben Sie es einfach zurück.
            </span>
          </div>
          <svg className="return-arrow" style={{
            color: selectedOption === 'rückgabe' ? colors.rückgabe.primary : '#9ca3af',
          }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </div>

        {/* Footer */}
        <div className="footer">
          <p className="footer-note">
            Bestätigen Sie Ihre Auswahl einfach per Klick. Bei Fragen hilft Ihnen unser Support.
          </p>
          <button
            className="continue-button"
            style={{
              ...(selectedOption ? {
                background: getSelectedColor().gradient,
                cursor: 'pointer',
                boxShadow: `0 4px 14px ${getSelectedColor().primary}66`,
              } : {}),
            }}
            disabled={!selectedOption}
            onClick={handleContinue}
          >
            {selectedOption ? 'Weiter zur Bestätigung' : 'Bitte Option auswählen'}
            {selectedOption && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '8px' }}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            )}
          </button>
          <div className="footnotes">
            <div className="footnote-item">
              <span className="superscript">¹</span> Am Ende der Leasinglaufzeit beabsichtigt der Bikeleasing-Service, ein Angebot zur Übernahme zu unterbreiten. Aus steuerlichen Gründen können wir hierfür jedoch keine verbindliche Zusage geben.
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LLEPopup;
