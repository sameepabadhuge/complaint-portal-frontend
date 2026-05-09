import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";

import ReporterStep from "../pages/public/ReporterStep";
import ComplaintStep from "../pages/public/ComplaintStep";
import SubjectStep from "../pages/public/SubjectStep";
import EvidenceStep from "../pages/public/EvidenceStep";
import DeclarationStep from "../pages/public/DeclarationStep";
import ConfirmationStep from "../pages/public/ConfirmationStep";
import TrackComplaint from "../pages/public/TrackComplaint";


const AppRoutes = () => {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<PublicLayout />}>

          {/* Step 1 */}
          <Route
            index
            element={<ReporterStep />}
          />

          {/* Step 2 */}
          <Route
            path="complaint-details"
            element={<ComplaintStep />}
          />

          {/* Step 3 */}
          <Route
            path="subject-information"
            element={<SubjectStep />}
          />

          {/* Step 4 */}
          <Route
            path="evidence-upload"
            element={<EvidenceStep />}
          />

          {/* Step 5 */}
          <Route
            path="declaration"
            element={<DeclarationStep />}
          />

          {/* Step 6 */}
          <Route
            path="confirmation"
            element={<ConfirmationStep />}
          />

          {/* Tracking */}
          <Route
            path="track-complaint"
            element={<TrackComplaint />}
          />

        </Route>

      </Routes>

    </BrowserRouter>

  );

};

export default AppRoutes;