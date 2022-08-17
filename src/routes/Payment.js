import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom"



const Payment = (props) => {

    // const createOrder = (data, actions) => {
    //     return actions.order.create({
    //       purchase_units: [
    //         {
    //           amount: {
    //             value: "20",
    //           },
    //         },
    //       ],
    //     });
    //   };

    //   const onApprove = (data, actions) => {
    //     return actions.order.capture();
    //   };


     const paypal = useRef()

     useEffect(() => {
              window.paypal.Buttons({
               createOrder: (data, actions, err) => {
                return actions.order.create({
                   intent :"CAPTURE",
                   purchase_units: [
                       {
                           description: "cool loolin table",
                           amount: {
                               currency_code:"USD",
                               value: 2.00
                           }
                       }
                   ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order);
            },
            onError: (err) => {
                console.log(err)
            }

        }).render(paypal.current)
     }, [])

      return (
        <div>
            <div ref={paypal}></div>
        </div>
      );
}

export { Payment }