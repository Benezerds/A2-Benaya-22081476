import { useState } from "react";

function Company(props) {
  const { contact, company, companies, setCompanies } = props;
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [editedCompanyName, setEditedCompanyName] = useState(
    company.company_name
  );
  const [editedCompanyAddress, setEditedCompanyAddress] = useState(
    company.company_address
  );

  async function deleteCompany() {
    const response = await fetch(
      `http://localhost/api/companies/${company.company_id}/contacts/${contact.id}/`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      const newCompanies = companies.filter(
        (p) => p.company_id !== company.company_id
      );
      setCompanies(newCompanies);
    }
  }

  async function editCompany(e) {
    e.preventDefault();

    const response = await fetch(
      `http://localhost/api/companies/${company.company_id}/contacts/${contact.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company_name: editedCompanyName,
          company_address: editedCompanyAddress,
        }),
      }
    );

    if (response.ok) {
      const updatedCompany = await response.json(); // Assuming the updated data is returned
      const newCompanies = companies.map((p) =>
        p.company_id === company.company_id ? updatedCompany : p
      );

      setCompanies(newCompanies);
      setIsEditing(false); // Exit edit mode
    } else {
      console.error("Failed to update the company.");
    }
  }

  return (
    <tr>
      {isEditing ? (
        <>
          <td>
            <input
              type="text"
              value={editedCompanyName}
              onChange={(e) => setEditedCompanyName(e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              value={editedCompanyAddress}
              onChange={(e) => setEditedCompanyAddress(e.target.value)}
            />
          </td>
          <td>
            <button className="button green" onClick={editCompany}>
              Save
            </button>
            <button className="button red" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </td>
        </>
      ) : (
        <>
          <td>{company.company_name}</td>
          <td>{company.company_address}</td>
          <td
            style={{
              width: "14px",
            }}
          >
            <button className="button red" onClick={deleteCompany}>
              Delete
            </button>
            <button className="button blue" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          </td>
        </>
      )}
    </tr>
  );
}

export default Company;
