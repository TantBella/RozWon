import { useState } from "react";
import { Card, Button } from "react-bootstrap";

const WcagChecklist = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const checklist = [
    {
      category: "Perceivable",
      items: [
        "All images have descriptive alt text.",
        "Text and background colors have at least 4.5:1 contrast ratio.",
        "All videos have captions or transcripts.",
        "Content is structured with proper headings (H1 → H2 → H3).",
      ],
    },
    {
      category: "Operable",
      items: [
        "All interactive elements can be accessed with the keyboard (Tab key).",
        "Focus indicators are clearly visible.",
        "No content flashes more than 3 times per second.",
        "Navigation is consistent across all pages.",
      ],
    },
    {
      category: "Understandable",
      items: [
        "Form fields have labels and clear instructions.",
        "Error messages are helpful and easy to understand.",
        "Links and buttons use meaningful text (not just 'click here').",
        "Language of the page is declared (e.g., <html lang='en'>).",
      ],
    },
    {
      category: "Robust",
      items: [
        "HTML is valid and well-structured.",
        "ARIA roles are used correctly when needed.",
        "Website works with assistive technologies (e.g., screen readers).",
        "All interactive controls have accessible names.",
      ],
    },
  ];

  const toggleCheck = (category, item) => {
    const key = `${category}-${item}`;
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const totalItems = checklist.reduce((sum, section) => sum + section.items.length, 0);
  const completedItems = Object.values(checkedItems).filter(Boolean).length;
  const progress = Math.round((completedItems / totalItems) * 100);

  return (
    <Card className="p-4 shadow-sm my-4">
      <h3 className="mb-3 text-center">WCAG 2.1 AA Checklist</h3>
      <p className="text-center text-muted">
        Progress: <strong>{progress}%</strong> ({completedItems}/{totalItems})
      </p>

      {checklist.map((section) => (
        <div key={section.category} className="mb-3">
          <h5 className="text-primary">{section.category}</h5>
          <ul className="list-unstyled">
            {section.items.map((item) => (
              <li key={item} className="mb-2">
                <label className="d-flex align-items-center gap-2">
                  <input
                    type="checkbox"
                    checked={checkedItems[`${section.category}-${item}`] || false}
                    onChange={() => toggleCheck(section.category, item)}
                  />
                  <span>{item}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <Button
        variant="success"
        disabled={progress < 100}
        className="w-100 mt-3"
        onClick={() => alert("🎉 Congratulations! Your site meets WCAG 2.1 AA criteria.")}
      >
        {progress < 100 ? "Keep Going!" : "Accessibility Verified ✅"}
      </Button>
    </Card>
  );
};

export default WcagChecklist;
