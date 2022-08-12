import React from "react";
import '../css/Payment.css'
import {Card, CardTitle, CardBody, CardText, Alert} from 'reactstrap'
import PaypalExpressBtn from 'react-paypal-express-checkout'

const Paypal = (props) => {

    const { env, client, currency, total, onError, onSucess, onCancel } = props  

    return (
        <div className="payment">
            <Card className="payment--card">
               <CardTitle>
                   <Alert color="danger">
                      <h3>UN PAYMENT EST REQUIS POUR CONTINUER !!!</h3>
                   </Alert>
               </CardTitle>
               <CardBody className="payment--body">
                 <CardText className="payment--text">
                    VOUS DEVEZ PAYER VOTRE ABONEMENT
                 </CardText>
               </CardBody>
               <div className="payment--button">
                   <PaypalExpressBtn 
                      env={env}
                      client={client} 
                      currency={currency} 
                      total={total}
                      onError={onError}
                      onSucess={onSucess}
                      onCancel={onCancel}                  
                   />
               </div>
            </Card>

        </div>
    )
}

export { Paypal }