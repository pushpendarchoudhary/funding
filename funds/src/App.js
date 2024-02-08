import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div class="card text-center">
      <div class="card-header">Funding</div>
      <div class="card-body">
        <h5 class="card-title">Balance: 20 ETH </h5>
        {/* <p class="card-text">
          Account : {account ? account : "not connected"}
        </p> */}
        {/* <button
          type="button"
          class="btn btn-success"
          onClick={async () => {
            const accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            console.log(accounts);
          }}
        >
          Connect to metamask
        </button> */}
        &nbsp;
        <button type="button" class="btn btn-success " >
          Transfer
        </button>
        &nbsp;
        <button type="button" class="btn btn-primary " >
          Withdraw
        </button>
      </div>
      <div class="card-footer text-muted">Code Eater</div>
    </div>
  </>
  );
}

export default App;
