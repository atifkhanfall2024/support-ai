"use client";

import { useState } from "react";

export const dynamic = "force-dynamic";

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const plans = [
    { name: "Starter", key: "starter", price: "$0" },
    { name: "Pro", key: "pro", price: "$29/month" },
    { name: "Enterprise", key: "enterprise", price: "$99/month" }
  ];

  const handleCheckout = async () => {
    setLoading(true);

    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan: selectedPlan })
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Choose Your Plan
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.key}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800"
          >
            <h2 className="text-xl font-semibold mb-2">
              {plan.name}
            </h2>
            <p className="text-2xl mb-4">{plan.price}</p>

            <button
              onClick={() => setSelectedPlan(plan.key)}
              className="bg-blue-600 px-4 py-2 rounded-lg w-full"
            >
              Upgrade
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-gray-900 p-8 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-4">
              Confirm {selectedPlan.toUpperCase()} Plan
            </h2>

            <p className="text-gray-400 mb-6">
              You will be redirected to secure Stripe checkout.
            </p>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="bg-green-600 px-4 py-2 rounded-lg w-full mb-3"
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </button>

            <button
              onClick={() => setSelectedPlan(null)}
              className="bg-gray-700 px-4 py-2 rounded-lg w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}