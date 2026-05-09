import { useState } from "react";

import { ComplaintContext } from "./complaintContextObject";


// ========================================
// Complaint Provider
// ========================================

export const ComplaintProvider = ({ children }) => {

  const [complaintData, setComplaintData] = useState({

    // ====================================
    // Reporter Information
    // ====================================

    reporter: {

      submissionType: "named",

      reporterCategory: "",

      fullName: "",

      organization: "",

      email: "",

      phone: "",

      preferredContact: ""

    },


    // ====================================
    // Complaint Information
    // ====================================

    complaint: {

      category: "",

      incidentDate: "",

      incidentLocation: "",

      frequency: "",

      awarenessMethod: "",

      description: "",

      previouslyReported: false,

      previousReportDetails: ""

    },


    // ====================================
    // Subject Information
    // ====================================

    subjects: [

      {

        fullName: "",

        designation: "",

        organization: "",

        relationship: ""

      }

    ],


    // ====================================
    // Evidence Information
    // ====================================

    evidence: {

      evidenceTypes: [],

      witnessInfo: "",

      additionalNotes: "",

      files: []

    },


    // ====================================
    // Declaration
    // ====================================

    declaration: {

      truthful: false,

      consent: false,

      auditAcknowledgement: false

    }

  });

  const [submissionResult, setSubmissionResult] = useState(null);


  return (

    <ComplaintContext.Provider
      value={{
        complaintData,
        setComplaintData,
        submissionResult,
        setSubmissionResult
      }}
    >

      {children}

    </ComplaintContext.Provider>

  );

};