import React, { useState } from 'react';

const StaticMailerLiteForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Required for MailerLite JSONP endpoint
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };


  if (isSubmitted) {
    return (
      <div id="mlb2-30427416" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-30427416">
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">
            <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
              <div className="ml-form-embedContent" style={{ marginBottom: '0px' }}>
                <h4 style={{ color: '#ffffff', textAlign: 'center', marginBottom: '20px' }}>
                  Grazie per il tuo interesse!
                </h4>
                <p style={{ color: '#ffffff', textAlign: 'center' }}>
                  Ti ricontatteremo entro 2 ore lavorative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="mlb2-30427416" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-30427416">
      <div className="ml-form-align-center">
        <div className="ml-form-embedWrapper embedForm">
          <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
            <div className="ml-form-embedContent" style={{ marginBottom: '0px' }}>
            </div>

            <form 
              className="ml-block-form" 
              action="https://assets.mailerlite.com/jsonp/851102/forms/164508757461566831/subscribe" 
              data-code="" 
              method="post" 
              target="_blank"
              onSubmit={handleSubmit}
            >
              <div className="ml-form-formContent">
                <div className="ml-form-fieldRow">
                  <div className="ml-field-group ml-field-name ml-validate-required">
                    <label>Nome</label>
                    <input 
                      aria-label="name" 
                      aria-required="true" 
                      type="text" 
                      className="form-control" 
                      data-inputmask="" 
                      name="fields[name]" 
                      placeholder="" 
                      autoComplete="given-name"
                      required
                    />
                  </div>
                </div>

                <div className="ml-form-fieldRow">
                  <div className="ml-field-group ml-field-last_name ml-validate-required">
                    <label>Cognome</label>
                    <input 
                      aria-label="last_name" 
                      aria-required="true" 
                      type="text" 
                      className="form-control" 
                      data-inputmask="" 
                      name="fields[last_name]" 
                      placeholder="" 
                      autoComplete="family-name"
                      required
                    />
                  </div>
                </div>

                <div className="ml-form-fieldRow">
                  <div className="ml-field-group ml-field-company ml-validate-required">
                    <label>Azienda</label>
                    <input 
                      aria-label="company" 
                      aria-required="true" 
                      type="text" 
                      className="form-control" 
                      data-inputmask="" 
                      name="fields[company]" 
                      placeholder="" 
                      autoComplete=""
                      required
                    />
                  </div>
                </div>

                <div className="ml-form-fieldRow">
                  <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                    <label>Email</label>
                    <input 
                      aria-label="email" 
                      aria-required="true" 
                      type="email" 
                      className="form-control" 
                      data-inputmask="" 
                      name="fields[email]" 
                      placeholder="" 
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="ml-form-fieldRow">
                  <div className="ml-field-group ml-field-phone ml-validate-required">
                    <label>Telefono</label>
                    <input 
                      aria-label="phone" 
                      aria-required="true" 
                      type="text" 
                      className="form-control" 
                      data-inputmask="" 
                      name="fields[phone]" 
                      placeholder="" 
                      autoComplete=""
                      required
                    />
                  </div>
                </div>

                <div className="ml-form-fieldRow">
                  <div className="ml-field-group ml-field-country ml-validate-required">
                    <label>A quale servizio sei interessato?</label>
                    <select className="custom-select" name="fields[country]" aria-label="country" aria-required="true" required>
                      <option value="">-</option>
                      <option>Outsourcing forza Vendite</option>
                      <option>Outsourcing Marketing</option>
                      <option>Telemarketing e teleselling</option>
                      <option>Servizi di consulenza strategica</option>
                      <option>Chatbot</option>
                      <option>Siti internet/App</option>
                      <option>Automazioni AI</option>
                    </select>
                  </div>
                </div>

                <div className="ml-form-fieldRow ml-last-item">
                  <div className="ml-field-group ml-field-city">
                    <label>le tue esigenze in due righe.</label>
                    <textarea 
                      className="form-control" 
                      name="fields[city]" 
                      aria-label="city" 
                      maxLength={255} 
                      placeholder=""
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="ml-form-embedPermissions" style={{}}>
                <div className="ml-form-embedPermissionsContent horizontal">
                  <h4>Marketing Permissions</h4>
                  <p>Le informazioni che fornisci in questo modulo verranno utilizzate solo per fornirti aggiornamenti e marketing personalizzato. La tua privacy è importante per noi!<br />Per favore, facci sapere come preferiresti rimanere in contatto:</p>

                  <div className="ml-form-embedPermissionsOptions">
                    <div className="ml-form-embedPermissionsOptionsCheckbox">
                      <label>
                        <input type="checkbox" name="gdpr[]" value="Email" />
                        <div className="label-description">Email</div>
                      </label>
                      <div className="description">Ti invieremo occasionalmente e-mail riguardo promozioni, nuovi prodotti e aggiornamenti importanti per tenerti nel giro.</div>
                    </div>
                  </div>
                </div>
                
                <div className="ml-form-embedMailerLite-GDPR">
                  <p>Cliccando qui sotto per inviare questo modulo, riconosci che le informazioni che fornisci saranno trattate in conformità con la nostra Privacy Policy.</p>
                </div>
              </div>

              <div className="ml-form-checkboxRow ml-validate-required">
                <label className="checkbox">
                  <input type="checkbox" required />
                  <div className="label-description">
                    <p>Acconsenti a ricevere notizie e aggiornamenti.</p>
                  </div>
                </label>
              </div>


              <div className="ml-form-embedSubmit">
                <button type="submit" className={isLoading ? 'loading' : ''} disabled={isLoading}>
                  {isLoading ? (
                    <div className="ml-form-embedSubmitLoad"></div>
                  ) : (
                    'Invia Richiesta'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticMailerLiteForm;