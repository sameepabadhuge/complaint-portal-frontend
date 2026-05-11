import { useNavigate } from "react-router-dom";

import Stepper from "../../components/forms/Stepper";
import { useComplaint } from "../../hooks/useComplaint";


const ReporterStep = () => {

  const navigate = useNavigate();
  const { complaintData, setComplaintData } = useComplaint();
  const { reporter } = complaintData;
  const submissionType = reporter.submissionType;

  const updateReporter = (field, value) => {

    setComplaintData((prev) => ({
      ...prev,
      reporter: {
        ...prev.reporter,
        [field]: value
      }
    }));

  };

  const setType = (type) => {

    setComplaintData((prev) => ({
      ...prev,
      reporter: {
        ...prev.reporter,
        submissionType: type
      }
    }));

  };


  return (

    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">

      {/* Stepper */}
      <Stepper currentStep={1} />


      {/* Header */}
      <div className="mb-8">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">

          Reporter Information

        </h2>

        <p className="text-gray-500 mt-2">

          Your information will be handled securely and confidentially.

        </p>

      </div>



      {/* Submission Type */}
      <div className="mb-8">

        <label className="block text-sm font-semibold text-gray-700 mb-4">

          Submission Type

        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Named */}
          <button
            type="button"
            onClick={() => setType("named")}
            className={`border-2 rounded-xl p-5 text-left transition-all

            ${
              submissionType === "named"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 hover:border-blue-300"
            }
            `}
          >

            <h3 className="font-bold text-gray-800 mb-2">

              Named Reporting

            </h3>

            <p className="text-sm text-gray-500">

              Provide your contact details for possible follow-up.

            </p>

          </button>



          {/* Anonymous */}
          <button
            type="button"
            onClick={() => setType("anonymous")}
            className={`border-2 rounded-xl p-5 text-left transition-all

            ${
              submissionType === "anonymous"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 hover:border-blue-300"
            }
            `}
          >

            <h3 className="font-bold text-gray-800 mb-2">

              Anonymous Reporting

            </h3>

            <p className="text-sm text-gray-500">

              Submit without revealing your identity.

            </p>

          </button>

        </div>

      </div>



      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Reporter Category */}
        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">

            Reporter Category

          </label>

          <select
            value={reporter.reporterCategory}
            onChange={(e) => updateReporter("reporterCategory", e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >

            <option value="">Select Category</option>
            <option value="Employee">Employee</option>
            <option value="Vendor">Vendor</option>
            <option value="Contractor">Contractor</option>
            <option value="Customer">Customer</option>
            <option value="Shareholder">Shareholder</option>
            <option value="Public">Public</option>

          </select>

        </div>



        {/* Full Name */}
        {submissionType !== "anonymous" && (

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">

              Full Name

            </label>

            <input
              type="text"
              value={reporter.fullName}
              onChange={(e) => updateReporter("fullName", e.target.value)}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

        )}



        {/* Organization */}
        {submissionType !== "anonymous" && (

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">

              Organization / Department

            </label>

            <input
              type="text"
              value={reporter.organization}
              onChange={(e) => updateReporter("organization", e.target.value)}
              placeholder="Enter organization or department"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

        )}



        {/* Email */}
        {submissionType !== "anonymous" && (

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">

              Email Address

            </label>

            <input
              type="email"
              value={reporter.email}
              onChange={(e) => updateReporter("email", e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

        )}



        {/* Phone */}
        {submissionType !== "anonymous" && (

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">

              Phone Number

            </label>

            <input
              type="text"
              value={reporter.phone}
              onChange={(e) => updateReporter("phone", e.target.value)}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

        )}



        {/* Preferred Contact */}
        {submissionType !== "anonymous" && (

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">

              Preferred Contact Method

            </label>

            <select
              value={reporter.preferredContact}
              onChange={(e) => updateReporter("preferredContact", e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >

              <option value="">Select Contact Method</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="none">No Contact Preferred</option>

            </select>

          </div>

        )}

      </div>



      {/* Confidential Notice */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4">

        <p className="text-sm text-blue-700">

          All submissions are treated with strict confidentiality by the
          Internal Affairs Unit (IAU).

        </p>

      </div>



      {/* Buttons */}
      <div className="mt-10 flex justify-end">

        <button
          onClick={() => navigate("/complaint-details")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all"
        >

          Continue

        </button>

      </div>

    </div>

  );

};

export default ReporterStep;