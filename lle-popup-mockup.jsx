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
      title: 'Weiterleasing',
      badge: 'Empfohlen',
      highlighted: true,
      color: colors.weiterleasing,
      priceLabel: 'Monatliche Rate',
      price: '89,90 €',
      priceSuffix: '/ Monat',
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
      title: 'Anschlussleasing',
      badge: 'Günstigste',
      highlighted: false,
      color: colors.anschlussleasing,
      priceLabel: 'Monatliche Rate',
      price: '49,90 €',
      priceSuffix: '/ Monat',
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
      title: 'Übernahmekauf',
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
      <div style={styles.overlay}>
        <div style={styles.confirmationModal}>
          <div style={{
            ...styles.confirmationIcon,
            background: confirmColor.gradient,
            boxShadow: `0 8px 24px ${confirmColor.primary}4d`,
          }}>✓</div>
          <h2 style={styles.confirmationTitle}>Auswahl bestätigt</h2>
          <p style={styles.confirmationText}>
            Sie haben <strong>{selected?.title}</strong> gewählt.
          </p>
          <p style={styles.confirmationSubtext}>
            In einem echten System würden Sie jetzt zum nächsten Schritt weitergeleitet.
          </p>
          <button style={styles.backButton} onClick={handleBack}>
            ← Zurück zur Auswahl
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="5.5" cy="17.5" r="3.5"/>
              <circle cx="18.5" cy="17.5" r="3.5"/>
              <path d="M15 6l-4 8h6l-3 4"/>
              <path d="M5.5 17.5L9 9l3.5 8.5"/>
              <path d="M9 9h6"/>
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={styles.headerTopRow}>
              <h1 style={styles.title}>Leasinglaufzeitende</h1>
              <span style={styles.userId}>U15419 – TESTNUTZER BIKELEASING</span>
            </div>
            <p style={styles.subtitle}>
              Wollen Sie das Rad zum Ende der Leasinglaufzeit übernehmen?
            </p>
          </div>
        </div>

        {/* Bike Info Banner */}
        <div style={styles.bikeBanner}>
          <span style={styles.bikeLabel}>Aktuelles Fahrrad:</span>
          <span style={styles.bikeName}>Canyon Roadlite:ON 7</span>
          <span style={styles.bikeEnd}>Leasingende: 31.03.2025</span>
        </div>

        {/* Options Grid */}
        <div style={styles.optionsGrid}>
          {options.map((option) => {
            const isSelected = selectedOption === option.id;
            const cardColor = option.color;
            
            return (
              <div
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                style={{
                  ...styles.optionCard,
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
                  <div style={{
                    ...styles.badge,
                    background: cardColor.gradient,
                    boxShadow: `0 2px 8px ${cardColor.primary}4d`,
                  }}>{option.badge}</div>
                )}

                {/* Selection Indicator */}
                <div style={{
                  ...styles.radioOuter,
                  borderColor: isSelected ? cardColor.primary : '#d1d5db',
                  background: isSelected ? cardColor.primary : 'transparent',
                }}>
                  {isSelected && (
                    <div style={styles.radioInner} />
                  )}
                </div>

                {/* Card Header */}
                <h3 style={{
                  ...styles.optionTitle,
                  color: cardColor.dark,
                }}>
                  {option.title}
                </h3>

                {/* Price Anchor */}
                <div style={styles.priceSection}>
                  <span style={styles.priceLabel}>{option.priceLabel}</span>
                  <div style={styles.priceRow}>
                    <span style={{
                      ...styles.price,
                      color: cardColor.dark,
                    }}>
                      {option.price}
                    </span>
                    <span style={styles.priceSuffix}>{option.priceSuffix}</span>
                  </div>
                </div>

                {/* Main Benefit */}
                <p style={styles.mainBenefit}>{option.mainBenefit}</p>

                {/* Bottom Section - always aligned at bottom */}
                <div style={{ marginTop: 'auto' }}>
                  {/* Divider */}
                  <div style={{
                    ...styles.divider,
                    background: `${cardColor.primary}26`,
                  }} />

                  {/* Netto Rate / Payment Info Section - fixed height for alignment */}
                  <div style={{ minHeight: '44px', marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                    {(option.nettoRate || option.paymentInfo) ? (
                      <div style={{
                        ...styles.detailRow,
                        background: `${cardColor.primary}0d`,
                        margin: '0 -12px 0',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        width: 'calc(100% + 24px)',
                      }}>
                        {option.nettoRate ? (
                          <>
                            <span style={{
                              ...styles.detailLabel,
                              color: cardColor.dark,
                              fontWeight: '600',
                            }}>Mtl. Netto-Belastung</span>
                            <span style={{
                              ...styles.detailValue,
                              color: cardColor.dark,
                              fontWeight: '700',
                              fontSize: '15px',
                            }}>{option.nettoRate}</span>
                          </>
                        ) : (
                          <span style={{
                            ...styles.detailLabel,
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
                  <div style={styles.details}>
                    <div style={styles.detailRow}>
                      <span style={styles.detailLabel}>Laufzeit</span>
                      <span style={styles.detailValue}>{option.details.laufzeit}</span>
                    </div>
                    <div style={styles.detailRow}>
                      <span style={styles.detailLabel}>Versicherung</span>
                      <span style={styles.detailValue}>{option.details.versicherung}</span>
                    </div>
                    <div style={styles.detailRow}>
                      <span style={styles.detailLabel}>Ablöse</span>
                      <span style={{
                        ...styles.detailValue,
                        color: option.id === 'weiterleasing' ? colors.weiterleasing.primary : '#111827',
                        fontWeight: option.id === 'weiterleasing' ? '700' : '600',
                      }}>{option.details.ablöse}</span>
                    </div>
                    <div style={styles.detailRow}>
                      <span style={styles.detailLabel}>Service</span>
                      <span style={styles.detailValue}>{option.details.service}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Return Option (Secondary) */}
        <div 
          style={{
            ...styles.returnOption,
            borderColor: colors.rückgabe.primary,
            background: selectedOption === 'rückgabe' ? colors.rückgabe.light : '#f9fafb',
          }}
          onClick={() => setSelectedOption('rückgabe')}
        >
          <div style={{
            ...styles.radioOuter,
            ...styles.radioOuterSmall,
            borderColor: selectedOption === 'rückgabe' ? colors.rückgabe.primary : '#d1d5db',
            background: selectedOption === 'rückgabe' ? colors.rückgabe.primary : 'transparent',
          }}>
            {selectedOption === 'rückgabe' && (
              <div style={styles.radioInner} />
            )}
          </div>
          <div style={styles.returnContent}>
            <span style={{
              ...styles.returnTitle,
              color: selectedOption === 'rückgabe' ? colors.rückgabe.dark : '#374151',
            }}>Fahrrad zurückgeben</span>
            <span style={styles.returnSubtitle}>
              Sie möchten das Fahrrad nicht behalten? Geben Sie es einfach zurück.
            </span>
          </div>
          <svg style={{
            ...styles.returnArrow,
            color: selectedOption === 'rückgabe' ? colors.rückgabe.primary : '#9ca3af',
          }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerNote}>
            Sie können Ihre Auswahl später noch ändern. Bei Fragen hilft Ihnen unser Support.
          </p>
          <button
            style={{
              ...styles.continueButton,
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
  );
};

const styles = {
  overlay: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  modal: {
    background: '#ffffff',
    borderRadius: '24px',
    maxWidth: '1100px',
    width: '100%',
    boxShadow: '0 25px 80px rgba(0,0,0,0.4), 0 10px 30px rgba(0,0,0,0.2)',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '32px 32px 24px',
    borderBottom: '1px solid #f0f0f0',
  },
  headerIcon: {
    width: '56px',
    height: '56px',
    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    flexShrink: 0,
  },
  title: {
    margin: 0,
    fontSize: '24px',
    fontWeight: '700',
    color: '#111827',
    letterSpacing: '-0.02em',
  },
  headerTopRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    flexWrap: 'wrap',
  },
  userId: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#6b7280',
    background: '#f3f4f6',
    padding: '4px 10px',
    borderRadius: '6px',
    letterSpacing: '0.02em',
  },
  subtitle: {
    margin: '4px 0 0',
    fontSize: '15px',
    color: '#6b7280',
    fontWeight: '400',
  },
  bikeBanner: {
    background: '#f8fafc',
    padding: '14px 32px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap',
    borderBottom: '1px solid #e5e7eb',
  },
  bikeLabel: {
    fontSize: '13px',
    color: '#6b7280',
    fontWeight: '500',
  },
  bikeName: {
    fontSize: '14px',
    color: '#111827',
    fontWeight: '600',
  },
  bikeEnd: {
    fontSize: '13px',
    color: '#dc2626',
    fontWeight: '500',
    marginLeft: 'auto',
    background: '#fef2f2',
    padding: '4px 12px',
    borderRadius: '20px',
  },
  optionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '28px 32px',
    alignItems: 'stretch',
  },
  optionCard: {
    position: 'relative',
    border: '2px solid #e5e7eb',
    borderRadius: '16px',
    padding: '28px 20px 24px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#fff',
    fontSize: '11px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    padding: '6px 16px',
    borderRadius: '20px',
  },
  radioOuter: {
    width: '22px',
    height: '22px',
    border: '2px solid #d1d5db',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    transition: 'all 0.2s ease',
  },
  radioOuterSmall: {
    marginBottom: 0,
    flexShrink: 0,
  },
  radioInner: {
    width: '8px',
    height: '8px',
    background: '#fff',
    borderRadius: '50%',
  },
  optionTitle: {
    margin: '0 0 16px',
    fontSize: '18px',
    fontWeight: '700',
  },
  priceSection: {
    marginBottom: '16px',
  },
  priceLabel: {
    display: 'block',
    fontSize: '12px',
    color: '#6b7280',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '4px',
  },
  priceRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '6px',
  },
  price: {
    fontSize: '32px',
    fontWeight: '800',
    letterSpacing: '-0.02em',
  },
  priceSuffix: {
    fontSize: '14px',
    color: '#6b7280',
    fontWeight: '500',
  },
  mainBenefit: {
    margin: '0 0 20px',
    fontSize: '14px',
    color: '#374151',
    lineHeight: '1.5',
  },
  divider: {
    height: '1px',
    margin: '0 0 16px',
    transition: 'all 0.2s ease',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '13px',
  },
  detailLabel: {
    color: '#6b7280',
    fontWeight: '500',
  },
  detailValue: {
    color: '#111827',
    fontWeight: '600',
    textAlign: 'right',
  },
  returnOption: {
    margin: '0 32px 24px',
    padding: '16px 20px',
    border: '2px solid',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  returnContent: {
    flex: 1,
  },
  returnTitle: {
    display: 'block',
    fontSize: '15px',
    fontWeight: '600',
    marginBottom: '2px',
    transition: 'all 0.2s ease',
  },
  returnSubtitle: {
    display: 'block',
    fontSize: '13px',
    color: '#6b7280',
  },
  returnArrow: {
    transition: 'all 0.2s ease',
  },
  footer: {
    background: '#f8fafc',
    padding: '20px 32px 28px',
    borderTop: '1px solid #e5e7eb',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  },
  footerNote: {
    margin: 0,
    fontSize: '13px',
    color: '#6b7280',
    textAlign: 'center',
  },
  continueButton: {
    width: '100%',
    maxWidth: '400px',
    padding: '16px 32px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#fff',
    background: '#d1d5db',
    border: 'none',
    borderRadius: '12px',
    cursor: 'not-allowed',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmationModal: {
    background: '#ffffff',
    borderRadius: '24px',
    padding: '48px',
    textAlign: 'center',
    maxWidth: '440px',
    boxShadow: '0 25px 80px rgba(0,0,0,0.4)',
  },
  confirmationIcon: {
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    color: '#fff',
    margin: '0 auto 24px',
  },
  confirmationTitle: {
    margin: '0 0 12px',
    fontSize: '24px',
    fontWeight: '700',
    color: '#111827',
  },
  confirmationText: {
    margin: '0 0 8px',
    fontSize: '16px',
    color: '#374151',
  },
  confirmationSubtext: {
    margin: '0 0 28px',
    fontSize: '14px',
    color: '#6b7280',
  },
  backButton: {
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#2563eb',
    background: '#eff6ff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
};

// Add Google Font
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

export default LLEPopup;
