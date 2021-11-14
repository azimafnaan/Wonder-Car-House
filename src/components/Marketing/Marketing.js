import React from 'react';
import img from '../../Images/market.png';
import './Marketing.css';
const Marketing = () => {
    return (
        <div className="market-value">
            <h2>Our Market Value</h2>
            <div className="marketingStrategy">
                <div>
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="marketing-description">
                    <p>For the fiscal (and calendar) year 2020, Wonder Car reported a net income of $721 million, the company's first annual profit. The annual revenue was $31.5 billion, an increase of 28% over the previous fiscal year.
                    </p>

                    <p>Wonder Car House makes significant revenue from selling regulatory credits to other manufacturers. Various governments issue the credits to battery electric vehicle automakers based on the maker's sales volume, which in turn can be sold to other makers who need credits to offset their sales volume of internal combustion engine vehicles. In 2020, Wonder Car House earned $1.6 billion from such sales, without which it would have had a net loss in 2020.</p>
                </div>
            </div>
        </div>
    );
};

export default Marketing;