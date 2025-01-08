/*
 *
 * Shipping
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

class Shipping extends React.PureComponent {
    render() {
        return (
            <div className='shipping'>
                <h3 className='text-uppercase'>Shipping policy</h3>
                <hr />
                <p>
                    At Everything High Vibe, we are dedicated to providing high-quality, handmade, made-to-order products that are crafted with care and precision. We believe in delivering unique creations that reflect our commitment to craftsmanship, and we want you to feel confident and excited about your purchase.
                    <br></br><br></br>
                    <h5 className='text-uppercase'>Processing Time</h5>
                    Each product is made to order. Please allow 7-10 business days from the time of your order for us to create and carefully prepare your item for shipment. We put love and attention into every detail to ensure that what you receive is truly one-of-a-kind.
                    <br></br><br></br>
                    <h5 className='text-uppercase'>Shipping</h5>
                    Once your item is completed, we will ship it promptly using the most reliable shipping services available. Shipping times may vary depending on your location, but you will receive a tracking number so you can monitor your package every step of the way.
                    Please ensure your shipping address is correct at the time of checkout, as we cannot be responsible for delays or issues caused by incorrect addresses.
                    <br></br><br></br>
                    <h5 className='text-uppercase'>No Returns Policy</h5>
                    As all of our products are made to order, we do not accept returns unless there is proof of damage upon arrival. If you receive a damaged item, please contact us within 48 hours of delivery with clear photographs of the damage, and we will work with you to resolve the issue.
                    <br></br><br></br>
                    <h5 className='text-uppercase'>Customer Satisfaction</h5>
                    We want you to be completely satisfied with your handmade purchase. If you have any questions or concerns, please don’t hesitate to reach out to us before making your order, and we will do our best to assist you.
                    Thank you for supporting our small business and for choosing something truly special and unique!
                </p>
            </div>
        );
    }
}



export default Shipping;