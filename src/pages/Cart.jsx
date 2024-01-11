import React, { useEffect, useState } from "react";

import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import { payment } from "../assets";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [payNow, setPayNow] = useState();
  const [totalAmt, setTotalAmt] = useState(false);
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckOut = () => {
    if (userInfo) {
      setPayNow(true);

      toast.success("Payment made successfully!");
      // });
    } else {
      toast.error("Please Sign in to make payment");
    }
  };

  return (
    <div>
      <img
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="w-full h-60 object-cover"
        alt="cartimg"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium"> cart totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal:
              <span className="font-titleFont font-bold text-lg">
                ₹ {totalAmt}
              </span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping:
              <span>
                {" "}
                Your products will be shipped to the prescribed adress, Happy
                Shopping{" "}
              </span>
            </p>
          </div>
          <p className="flex justify-between font-titleFont font-semibold mt-6">
            Total: <span className="text-xl font-bold ">₹ {totalAmt}</span>
          </p>
          <button
            onClick={handleCheckOut}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            proceed to Payment
          </button>
          {payNow && (
            <div className="w-full mt-6 flex items-center justify-center">
              {/* <StripeCheckout
                stripeKey="pk_test_51OMlqXSAPGFI4ypQ8SfoxwsEP8hRxClKkaGHXxB1vxlvr2QM5XokQ5bvxWJOwWcFFVuxKIj5GZF82zHawkF8vajf00ZqrRJGah"
                name="Bazaar Online Shopping"
                amount={totalAmt * 100}
                label="Pay to Mshopy"
                description={`Your Payment amount is ₹${totalAmt} `}
                // token={payment}
                email={userInfo.email}
              /> */}
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
