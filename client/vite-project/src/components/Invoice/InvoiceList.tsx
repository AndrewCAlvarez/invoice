export default function InvoiceList(props: any) {
  if (props.invoiceData.length <= 0) {
    return (
      <>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Amount</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </>
    );
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Amount</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {props.invoiceData.map((invoice: any) => (
            <tr key={Math.random()}>
              <td key={Math.random()}>{invoice.id}</td>
              <td key={Math.random()}>{invoice.name}</td>
              <td key={Math.random()}>{invoice.amount}</td>
              <td key={Math.random()}>{invoice.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
