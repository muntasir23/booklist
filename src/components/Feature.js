import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusChanged } from "../redux/filters/action";

export default function Feature() {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const { status } = filters;

  const handleStatusChanged = (status) => {
    dispatch(statusChanged(status));
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        className={`filter-btn ${status === "All" ? "active-filter" : ""}`}
        onClick={() => handleStatusChanged("All")}
        id="lws-filterAll"
      >
        All
      </button>
      <button
        className={`filter-btn ${status === "Featured" ? "active-filter" : ""}`}
        onClick={() => handleStatusChanged("Featured")}
        id="lws-filterFeatured"
      >
        Featured
      </button>
    </div>
  );
}
