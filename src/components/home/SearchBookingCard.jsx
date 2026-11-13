import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CITIES = ["London", "Paris", "New York", "Tokyo"];
const PERSONS = ["1 Person", "2 Persons", "3 Persons", "4 Persons", "5 Persons"];

// Each tab describes its own fields, so one component renders all three tabs.
const TABS = [
  {
    id: "hotels",
    label: "Hotels",
    icon: "bi-building-fill",
    fields: [
      { name: "city", label: "Select a city", type: "select", placeholder: "Where To Next?", options: CITIES },
      { name: "checkin", label: "Check in", type: "date" },
      { name: "checkout", label: "Check out", type: "date" },
      { name: "guests", label: "Guests", type: "counter" },
    ],
  },
  {
    id: "flights",
    label: "Flights",
    icon: "bi-airplane-fill",
    fields: [
      { name: "from", label: "From", type: "select", placeholder: "Where To Next?", options: CITIES },
      { name: "to", label: "To", type: "select", placeholder: "Where To Next?", options: CITIES },
      { name: "departure", label: "Departure", type: "date" },
      { name: "return", label: "Return (Optional)", type: "date" },
      { name: "travelers", label: "Travelers", type: "select", placeholder: "1 Person", options: PERSONS },
    ],
  },
  {
    id: "rentals",
    label: "Rentals",
    icon: "bi-car-front-fill",
    fields: [
      { name: "pickup", label: "Pick Up Location", type: "select", placeholder: "Where To Next?", options: CITIES },
      { name: "pickupDate", label: "Pick Up Date", type: "date" },
      { name: "dropDate", label: "Drop-off Date", type: "date" },
      { name: "time", label: "Time", type: "select", placeholder: "Departing Type", options: ["Day", "Night"] },
    ],
  },
];

function Field({ field, value, onChange }) {
  const id = `field-${field.name}`;

  return (
    <div className="booking-field">
      <label htmlFor={id}>{field.label}</label>

      {field.type === "select" && (
        <Form.Select id={id} value={value ?? ""} onChange={(e) => onChange(field.name, e.target.value)}>
          <option value="">{field.placeholder}</option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Form.Select>
      )}

      {field.type === "date" && (
        <Form.Control
          id={id}
          type="date"
          value={value ?? ""}
          onChange={(e) => onChange(field.name, e.target.value)}
        />
      )}

      {field.type === "counter" && (
        <div className="booking-counter" id={id}>
          <button
            type="button"
            aria-label="Remove one guest"
            onClick={() => onChange(field.name, Math.max(1, (value || 1) - 1))}
          >
            <i className="bi bi-dash" aria-hidden="true" />
          </button>
          <span>{value || 1}</span>
          <button
            type="button"
            aria-label="Add one guest"
            onClick={() => onChange(field.name, Math.min(10, (value || 1) + 1))}
          >
            <i className="bi bi-plus" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function SearchBookingCard() {
  const [activeId, setActiveId] = useState("hotels");
  const [values, setValues] = useState({ guests: 1 });

  const activeTab = TABS.find((tab) => tab.id === activeId);

  const handleChange = (name, value) => setValues((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later (backend step) we will send this to the Express API.
    console.log("Search:", activeId, values);
  };

  return (
    <div className="booking">
      <div className="booking-tabs" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={tab.id === activeId}
            className={`booking-tab ${tab.id === activeId ? "active" : ""}`}
            onClick={() => setActiveId(tab.id)}
          >
            <i className={`bi ${tab.icon}`} aria-hidden="true" /> {tab.label}
          </button>
        ))}
      </div>

      <form className="booking-card" onSubmit={handleSubmit}>
        {activeTab.fields.map((field) => (
          <Field key={field.name} field={field} value={values[field.name]} onChange={handleChange} />
        ))}
        <Button type="submit" variant="primary" className="booking-submit fw-semibold">
          <i className="bi bi-search me-1" aria-hidden="true" /> Search
        </Button>
      </form>
    </div>
  );
}