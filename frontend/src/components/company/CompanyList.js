import React from "react";
import NewCompany from "./NewCompany";
import Company from "./Company";

function CompanyList(props) {
  const { contact, companies, setCompanies } = props;

  return (
    <div className="phone-list">
      <NewCompany contact={contact} />

      <table onClick={(e) => e.stopPropagation()}>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Company Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => {
            return (
              <Company
                key={company.company_id}
                company={company}
                companies={companies}
                setCompanies={setCompanies}
                contact={contact}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CompanyList;
