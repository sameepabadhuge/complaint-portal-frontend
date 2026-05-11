import API from "./api";


// ========================================
// Submit Complaint
// ========================================

export const submitComplaint = async (complaintData) => {
  try {

    const response = await API.post(

      "/public/complaints",

      complaintData

    );

    return response.data;

  } catch (error) {

    throw error.response?.data || {
      message: error.message || "Failed to submit complaint"
    };

  }

};