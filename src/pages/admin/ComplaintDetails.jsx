import { useNavigate } from "react-router-dom";

import Stepper from "../../components/forms/Stepper";


const ComplaintStep = () => {

  const navigate = useNavigate();

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">

      {/* Stepper */}
      <Stepper currentStep={2} />


      {/* Header */}
      <div className="mb-8">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">

          Complaint Details

        </h2>

        <p className="text-gray-500 mt-2">

          Provide detailed information regarding the incident or concern.

        </p>

      </div>



      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Complaint Category */}
        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">

            Complaint Category

          </label>

          <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">

            <option>Bribery</option>
            <option>Corruption</option>
            <option>Fraud</option>
            <option>Financial Misconduct</option>
            <option>Abuse of Authority</option>
            <option>Procurement Irregularity</option>
            <option>Harassment</option>
            <option>Confidentiality Breach</option>
            <option>Other Malpractice</option>

          </select>

        </div>



        {/* Incident Date */}
        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">

            Incident Date

          </label>

          <input
            type="date"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>



        {/* Incident Location */}
        <div className="md:col-span-2">

          <label className="block text-sm font-semibold text-gray-700 mb-2">

            Incident Location

          </label>

          <input
            type="text"
            placeholder="Enter incident location"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>



        {/* Frequency */}
        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">

            Frequency

          </label>

          <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">

            <option>One-time Incident</option>
            <option>Repeated Behavior</option>
            <option>Ongoing Activity</option>

          </select>

        </div>



        {/* Awareness Method */}
        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">

            How did you become aware?

          </label>

          <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">

            <option>Direct Witness</option>
            <option>Indirect Knowledge</option>
            <option>Documentation Review</option>
            <option>Third-party Information</option>

          </select>

        </div>



        {/* Description */}
        <div className="md:col-span-2">

          <label className="block text-sm font-semibold text-gray-700 mb-2">

            Incident Description

          </label>

          <textarea
            rows="6"
            placeholder="Provide a detailed description of the incident..."
            className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <p className="text-sm text-gray-400 mt-2">

            Include relevant names, actions, dates, and circumstances.

          </p>

        </div>



        {/* Previously Reported */}
        <div className="md:col-span-2">

          <label className="block text-sm font-semibold text-gray-700 mb-4">

            Has this matter been reported previously?

          </label>

          <div className="flex items-center gap-6">

            <label className="flex items-center gap-2 text-gray-700">

              <input type="radio" name="reported" />

              Yes

            </label>

            <label className="flex items-center gap-2 text-gray-700">

              <input type="radio" name="reported" />

              No

            </label>

          </div>

        </div>

      </div>



      {/* Compliance Notice */}
      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-4">

        <p className="text-sm text-yellow-700">

          False or intentionally misleading submissions may be subject to
          internal disciplinary review.

        </p>

      </div>



      {/* Buttons */}
      <div className="mt-10 flex items-center justify-between">

        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="border border-gray-300 px-6 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-all"
        >

          Back

        </button>



        {/* Continue */}
        <button
          onClick={() => navigate("/subject-information")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all"
        >

          Continue

        </button>

      </div>

    </div>

  );

};

export default ComplaintStep;