import React from "react";
import firebase from 'firebase/compat/app';
import { Paypal } from "../components";

const Payment = (props) => {

   const client  = {
       sandbox: "AeWdhrpjPE9b0gc9uegtLhrOmRq3rrE7FxXNir7nGwAVFy5sDzCFqEeyWwhmAxDsMnKRmgp_y3zINrvI",
       production: 'xxxxxx'
   }

    const env = 'production'

    const total = 100

    const currency = 'USD'

    const onError = (error) => {
        console.log('error', error)
    }

    const onCancel = (data) => console.log('payment annulé', data)

    const onSucess = (payment) => {
        console.log('payment success !')
    }

    return (
       <Paypal 
            env={env}
            client={client} 
            currency={currency} 
            total={total}
            onError={onError}
            onSucess={onSucess}
            onCancel={onCancel}      
       />
    )
}

export { Payment }