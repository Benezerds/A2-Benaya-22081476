function Company(props) {
  const { contact, company, companies, setCompanies } = props;

  async function deleteCompany() {
    const response = await fetch(
      "http://localhost/api/companies/" + company.company_id + "/contacts/" + contact.id + "/",
      {
        method: "DELETE",
      }
    );

    let newCompanies = companies.filter((p) => {
      return p.id !== company.id;
    });

    setCompanies(newCompanies);
  }

  return (
    <tr>
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
      </td>
    </tr>
  );
}

export default Company;
