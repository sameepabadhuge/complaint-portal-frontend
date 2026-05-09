import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { trackComplaintByCRN } from "../../services/trackingService";


const TrackComplaint = () => {

  const navigate = useNavigate();

  const [crn, setCrn] = useState("");

  const [loading, setLoading] = useState(false);

  const [complaint, setComplaint] = useState(null);

  const [error, setError] = useState("");


  // ========================================
  // Handle Tracking
  // ========================================

  const handleTrack = async () => {

    try {

      setLoading(true);

      setError("");

      const data = await trackComplaintByCRN(crn);

      setComplaint(data.data);

    } catch (err) {

      setComplaint(null);

      setError(err.message || "Complaint not found");

    } finally {

      setLoading(false);

    }

  };


  return (

    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">

      {/* Header */}
      <div className="text-center mb-10">

        <h2 className="text-3xl font-bold text-gray-800">

          Track Complaint Status

        </h2>

        <p className="text-gray-500 mt-3">

          Enter your Complaint Reference Number (CRN) to track complaint
          progress.

        </p>

      </div>



      {/* Search */}
      <div className="max-w-2xl mx-auto">

        <div className="flex flex-col md:flex-row gap-4">

          <input
            type="text"
            placeholder="Enter CRN"
            value={crn}
            onChange={(e) => setCrn(e.target.value)}
            className="flex-1 border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleTrack}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all"
          >

            {loading ? "Searching..." : "Track"}

          </button>

        </div>

      </div>



      {/* Error */}
      {error && (

        <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-4">

          <p className="text-red-700 text-sm">

            {error}

          </p>

        </div>

      )}



      {/* Complaint Result */}
      {complaint && (

        <div className="mt-12">

          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="border border-gray-200 rounded-2xl p-5">

              <p className="text-sm text-gray-500 mb-2">

                Complaint Reference

              </p>

              <h4 className="font-bold text-gray-800">

                {complaint.crn}

              </h4>

            </div>



            <div className="border border-gray-200 rounded-2xl p-5">

              <p className="text-sm text-gray-500 mb-2">

                Category

              </p>

              <h4 className="font-bold text-gray-800">

                {complaint.category}

              </h4>

            </div>



            <div className="border border-gray-200 rounded-2xl p-5">

              <p className="text-sm text-gray-500 mb-2">

                Current Status

              </p>

              <h4 className="font-bold text-blue-600">

                {complaint.currentStatus}

              </h4>

            </div>

          </div>



          {/* Timeline */}
          <div className="mt-10">

            <h3 className="text-xl font-bold text-gray-800 mb-6">

              Status Timeline

            </h3>

            <div className="space-y-6">

              {complaint.statusHistory?.map((item, index) => (

                <div
                  key={index}
                  className="flex items-start gap-4"
                >

                  <div className="w-5 h-5 rounded-full bg-blue-600 mt-1" />



                  <div>

                    <h4 className="font-semibold text-gray-800">

                      {item.status}

                    </h4>

                    <p className="text-sm text-gray-500 mt-1">

                      {item.note}

                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      )}

      {/* Actions */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

        <button
          onClick={() => navigate("/")}
          className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-semibold transition-all"
        >

          Return Home

        </button>

      </div>

    </div>

  );

};

export default TrackComplaint;