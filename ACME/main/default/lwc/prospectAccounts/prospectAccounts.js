import { LightningElement, wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import getFinanceAccounts from '@salesforce/apex/ProspectAccountsHelper.getFinanceAccounts';
const COLUMNS = [
    { label: 'Account Name', fieldName: NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Phone', fieldName: PHONE_FIELD.fieldApiName, type: 'text' }
];

export default class ProspectAccounts extends LightningElement {
  columns = COLUMNS;

  accounts;
  noAccounts;
  error;

  constructor() {
    super();
    console.log('Inside constructor');
  }

  connectedCallback() {
    console.log('Inside connectedCallback');
  }

  disconnectedCallback() {
    console.log('Inside disconnectedCallback');
  }

  renderedCallback() {
    console.log('Inside renderedCallback')
  }

  @wire(getFinanceAccounts)
  wiredAccounts({ error, data }) {
    console.log('Inside wire')
    if(data) {
      // console.log("Data = " + data);
      // console.log(data);
      if(data.length === 0) {
          this.accounts = undefined;
          this.noAccounts = data;
          this.error = undefined;    
      } else {
          this.accounts = data;
          this.noAccounts = undefined;
          this.error = undefined;
      }
    } else if(error) {
      // console.log("Error = " + error);
      // console.log(error);
      this.error = error;
      this.accounts = undefined;
      this.noAccounts = undefined;
    }
  }
}