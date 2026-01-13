import React, { useState } from 'react';

const LLEPopup = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const colors = {
    weiterleasing: {
      primary: '#2563eb',
      dark: '#1d4ed8',
      light: '#eff6ff',
      gradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    },
    anschlussleasing: {
      primary: '#10b981',
      dark: '#059669',
      light: '#ecfdf5',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    },
    übernahmekauf: {
      primary: '#f59e0b',
      dark: '#d97706',
      light: '#fffbeb',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    },
    rückgabe: {
      primary: '#d4a5a5',
      dark: '#b08080',
      light: '#faf5f5',
      gradient: 'linear-gradient(135deg, #d4a5a5 0%, #c99494 100%)',
    },
  };

  const options = [
    {
      id: 'weiterleasing',
      title: 'Aktuelle Rate weiterzahlen – nach 10 Monaten gehört es Ihnen',
      badge: 'Empfohlen',
      highlighted: true,
      color: colors.weiterleasing,
      priceLabel: 'Monatliche Rate',
      price: '89,90 €',
      priceSuffix: '/ Monat',
      ablöseLabel: 'Ablöse nach 10 Monaten',
      ablöseAmount: '0 €',
      mainBenefit: 'Behalten Sie Ihr Fahrrad – nach 10 Monaten gehört es Ihnen ohne Ablöse',
      nettoRate: '~48 €',
      details: {
        laufzeit: '10 Monate',
        versicherung: 'Vollkasko inklusive',
        ablöse: '0 € – Fahrrad gehört nach 10 M. Ihnen',
        service: 'Reparatur & Wartung inklusive',
      },
    },
    {
      id: 'anschlussleasing',
      title: 'Für 24 Monate günstig und versichert weiter leasen',
      badge: 'Günstigste',
      highlighted: false,
      color: colors.anschlussleasing,
      priceLabel: 'Monatliche Rate',
      price: '49,90 €',
      priceSuffix: '/ Monat',
      ablöseLabel: 'Ablöse nach 24 Monaten',
      ablöseAmount: '299 €',
      mainBenefit: 'Günstigere Rate – danach flexible Übernahme oder Rückgabe',
      nettoRate: '~27 €',
      details: {
        laufzeit: '24 Monate',
        versicherung: 'Vollkasko inklusive',
        ablöse: '299 € (optional)',
        service: 'Reparatur & Wartung inklusive',
      },
    },
    {
      id: 'übernahmekauf',
      title: 'Direkt mit Einmalzahlung rauskaufen',
      badge: null,
      highlighted: false,
      color: colors.übernahmekauf,
      priceLabel: 'Einmalzahlung',
      price: '890 €',
      priceSuffix: 'einmalig',
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
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
          
          .overlay {
            min-height: 100vh;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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
            color: #2563eb;
            background: #eff6ff;
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
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        
        .overlay {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .modal {
          background: #ffffff;
          border-radius: 24px;
          max-width: 1100px;
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
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
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
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          background: #f3f4f6;
          padding: 4px 10px;
          border-radius: 6px;
          letter-spacing: 0.02em;
        }
        
        .subtitle {
          margin: 4px 0 0;
          font-size: 15px;
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
          font-size: 13px;
          color: #6b7280;
          font-weight: 500;
        }
        
        .bike-name {
          font-size: 14px;
          color: #111827;
          font-weight: 600;
        }
        
        .bike-end {
          font-size: 13px;
          color: #dc2626;
          font-weight: 500;
          margin-left: auto;
          background: #fef2f2;
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
          padding: 28px 20px 24px;
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
          font-size: 17px;
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
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        
        .price-suffix {
          font-size: 14px;
          color: #6b7280;
          font-weight: 500;
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
          color: #2563eb;
          background: #eff6ff;
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

                {/* Price Anchor */}
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

                {/* Ablöse Section - only for Weiterleasing and Anschlussleasing */}
                {(option.ablöseLabel && option.ablöseAmount) && (
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

                {/* Main Benefit */}
                <p className="main-benefit">{option.mainBenefit}</p>

                {/* Bottom Section - always aligned at bottom */}
                <div style={{ marginTop: 'auto' }}>
                  {/* Divider */}
                  <div className="divider" style={{
                    background: `${cardColor.primary}26`,
                  }} />

                  {/* Netto Rate / Payment Info Section - fixed height for alignment */}
                  <div style={{ minHeight: '44px', marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                    {(option.nettoRate || option.paymentInfo) ? (
                      <div className="detail-row" style={{
                        background: `${cardColor.primary}0d`,
                        margin: '0 -12px 0',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        width: 'calc(100% + 24px)',
                      }}>
                        {option.nettoRate ? (
                          <>
                            <span className="detail-label" style={{
                              color: cardColor.dark,
                              fontWeight: '600',
                            }}>Mtl. Netto-Belastung</span>
                            <span className="detail-value" style={{
                              color: cardColor.dark,
                              fontWeight: '700',
                              fontSize: '15px',
                            }}>{option.nettoRate}</span>
                          </>
                        ) : (
                          <span className="detail-label" style={{
                            color: cardColor.dark,
                            fontWeight: '600',
                            width: '100%',
                            textAlign: 'center',
                          }}>{option.paymentInfo}</span>
                        )}
                      </div>
                    ) : null}
                  </div>

                  {/* Standard Comparison Details - always aligned */}
                  <div className="details">
                    <div className="detail-row">
                      <span className="detail-label">Versicherung</span>
                      <span className="detail-value">{option.details.versicherung}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Service</span>
                      <span className="detail-value">{option.details.service}</span>
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
            Sie können Ihre Auswahl später noch ändern. Bei Fragen hilft Ihnen unser Support.
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
        </div>
      </div>
    </div>
    </>
  );
};

export default LLEPopup;
