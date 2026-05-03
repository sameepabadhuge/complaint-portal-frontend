import { useState } from "react";
import { FaLock, FaExclamationTriangle } from "react-icons/fa";
import Stepper from "../components/Stepper";
import axios from "axios";

// API BASE (change if needed)
const API_URL = "http://localhost:5000/api/complaints";

export default function DeclarationStep({ nextStep, prevStep, data, setCrn }) {
  const [confirm1, setConfirm1] = useState(false);
  const [confirm2, setConfirm2] = useState(false);
  const [loading, setLoading] = useState(false);

  const isValid = confirm1 && confirm2;

  //  FINAL SUBMIT
  const handleSubmit = async () => {
    if (!isValid) return;

    //  Basic validation (important fields)
    if (!data.complaint_category || !data.description) {
      alert("Please complete required fields before submitting.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(API_URL, data);

      console.log("SERVER RESPONSE:", res.data);

      // Save CRN from backend
      if (setCrn && res.data.crn) {
        setCrn(res.data.crn);
      }

      nextStep(); // go to confirmation page

    } catch (err) {
      console.error("ERROR:", err);

      //  Better error message
      const msg =
        err.response?.data?.error ||
        "Submission failed. Please try again.";

      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-white border-b px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-700 font-medium">
          <FaLock /> Secure Portal
        </div>

        <div className="text-blue-600 font-semibold text-sm">
          IAU Complaint Reporting Portal
        </div>

        <div className="text-xs text-blue-500 bg-blue-100 px-3 py-1 rounded-full">
          LIVE PROTECTION
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-10 px-4">

        <h2 className="text-2xl font-bold mb-1">
          Declaration & Finalize
        </h2>

        <p className="text-gray-500 mb-6">
          Please review final statement and confirm submission.
        </p>

        <Stepper currentStep={5} />

        <div className="bg-white rounded-2xl shadow-md p-8">

          {/* Declaration */}
          <div className="border rounded-xl p-4 mb-6 bg-gray-50">
            <h4 className="font-semibold mb-2">
              Official Declaration Statement
            </h4>

            <p className="text-sm text-gray-600 leading-relaxed">
              I hereby declare that the information provided is true and complete.
              I understand legal consequences of false reporting.
            </p>
          </div>

          {/* Checkbox 1 */}
          <label className="flex items-start gap-2 mb-4 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={confirm1}
              onChange={() => setConfirm1(!confirm1)}
            />
            I confirm information is accurate.
          </label>

          {/* Checkbox 2 */}
          <label className="flex items-start gap-2 mb-6 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={confirm2}
              onChange={() => setConfirm2(!confirm2)}
            />
            I consent to data processing.
          </label>

          {/* Notice */}
          <div className="bg-orange-50 border border-orange-200 text-orange-700 p-3 rounded text-sm mb-6 flex gap-2">
            <FaExclamationTriangle />
            Audit & Security Notice: Submissions are logged.
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={loading}
              className="border px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              ← Previous Step
            </button>

            <button
              onClick={handleSubmit}
              disabled={!isValid || loading}
              className={`px-6 py-2 rounded-lg text-white ${
                isValid
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              {loading ? "Submitting..." : "Finalize Submission →"}
            </button>
          </div>

          {!isValid && (
            <p className="text-red-500 text-xs mt-3 text-right">
              Please accept both declarations
            </p>
          )}
        </div>

        <p className="text-xs text-gray-400 text-center mt-6">
          SSL Encrypted • IAU Verified • GDPR Compliant
        </p>

      </div>
    </div>
  );
}