import React from 'react';
import Header from '../../Header/Header';
import Footer from '../Footer/Footer';
import "./RefundReturn.css";


const RefundReturn = () => {
    return (
        <div>
            <Header />
            <div className='refund_us_header'>Refund & Return</div>
            <div className="container">
                <div className='refund_us_details'>
                    <p className="primary">Return</p>
                    <p>Product must be returned to us within ------- days from the date it has been delivered to the customer. Product must be returned with all tags attached in its original condition along with all packing material, courier receipt, invoice & other papers.</p>
                    <p className="primary">refund</p>
                    <p>Once the Product is received to the company successfully, ----Company Name---will instantly initiate the refund to your source account or chosen method of refund within --- working days.</p>
                    <p className="primary">refund and Cancellation for Service Provider Company</p>
                    <p>Due to service providers in nature “NO refund”,“NO CANCELLATION” will be entertained once the Payment has been made.</p>
                    <p className="primary">Cancellation Policy</p>
                    <p>Please note an order can only be canceled within 24 hours of placing the order. Once the order is processed after 24 hours, no cancellation request will be entertained.However return is possible for all orders/products.</p>
                    <p className="primary">Shipping & Delivery Policies -</p>
                    <p>Company Name- ships its products to almost all parts of India. Orders placed will be shipped within 24* hrs. We ship on all days except Sunday and National Holidays.</p>
                    <p>For all areas serviced by reputed couriers, the delivery time would be within 3 to 4 business days of shipping (business days exclude Sundays and other holidays). For other areas the products will be shipped through --------------- and may take 1-2 weeks depending on location. At times there might be unexpected delays in the delivery of your order due to unavoidable and undetermined logistics challenges beyond our control for which --Company Name--is not liable and would request its users to cooperate as --Company Name-- continuously tries to nought such instances. Also, ---Company Name-- reserves the right to cancel your order at its sole discretion in cases where it takes longer than usual delivery time or the shipment is physically untraceable and refund the amount paid for cancelled product(s) to your source account.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RefundReturn;