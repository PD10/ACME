/**
 * @Description : LWC Controller class allowed for backend work of fetching records
 */
public with sharing class ProspectAccountsHelper {
    /**
     * @Description : Returns a list of Account records whose industry type is Finance
     * @return Returns a list of Account
     */
    @AuraEnabled(cacheable=true)
    public static List<Account> getFinanceAccounts() {
        return [SELECT Name, Phone FROM Account WHERE Industry = 'Finance' WITH SECURITY_ENFORCED ORDER BY Name];
    }
}