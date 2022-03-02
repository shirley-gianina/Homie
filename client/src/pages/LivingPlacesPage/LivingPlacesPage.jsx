import React from "react";
import { useSearchParams } from "react-router-dom";

function LivingPlacesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = Object.fromEntries([...searchParams]);

  return <div>LivingPlacesPage {query.city}</div>;
}

export default LivingPlacesPage;
