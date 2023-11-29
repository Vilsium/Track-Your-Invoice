import React from "react";
import "./Pricing.css";

function Pricing () {
    return (
        <div>
            <div class="pricing-container">
                <div class="pricing-plan">
                    <div class="plan-title">Basic</div>
                    <div class="plan-price">₹ 999/month</div>
                    <ul class="plan-features">
                        <li>Limited Invoicing</li>
                        <li>Essential WhatsApp Integration</li>
                        <li>Customizable Templates</li>
                        <li>Email Support</li>
                        <li>Entry-level Expense Tracking</li>
                    </ul>
                    <button class="plan-button">Opt-in</button>
                </div>
                <div class="pricing-plan">
                    <div class="plan-title">Standard</div>
                    <div class="plan-price">₹ 2499/month</div>
                    <ul class="plan-features">
                        <li>Expanded Invoicing Limits</li>
                        <li>Enhanced WhatsApp Integration</li>
                        <li>Extensive Template Library</li>
                        <li>Priority Support</li>
                        <li>Comprehensive Expense Management</li>
                    </ul>
                    <button class="plan-button">Opt-in</button>
                </div>
                <div class="pricing-plan">
                    <div class="plan-title">Premium</div>
                    <div class="plan-price">₹ 4999/month</div>
                    <ul class="plan-features">
                        <li>Unlimited Invoicing</li>
                        <li>Cutting-edge WhatsApp Features</li>
                        <li>Exclusive Templates</li>
                        <li>Dedicated Account Manager</li>
                        <li>Integrated Expense Suite</li>
                    </ul>
                    <button class="plan-button">Opt-in</button>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
}

export default Pricing;