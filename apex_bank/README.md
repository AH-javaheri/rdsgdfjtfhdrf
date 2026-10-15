# 🏦 apex_bank

A comprehensive and modern banking system for FiveM with support for multiple accounts, loans, private banks, and more.

## 💳 Features

- **Multiple Accounts**: Players can create and manage multiple personal and shared accounts.
- **Private Banks**: Ability to purchase and manage banks, earning commissions on transactions in the area.
- **Loan System**: Flexible loans with configurable interest rates, installments, and credit scoring.
- **Direct Debits**: Set up recurring payments for services, subscriptions, or shared expenses.
- **ATM & Cards**: Integrated ATM system with physical debit cards, PIN management, and blocking features.
- **Checks & Transfers**: Write physical checks or transfer money instantly using unique account IDs.
- **Framework Support**: Automatically detects and works with **ESX** and **QB-Core**.
- **Admin Panel**: Powerful in-game tools for managing accounts, loans, and monitoring transactions.

## 🌟 Preview

Watch the video preview of the banking system in action:

https://youtu.be/rdEg3VhTgkI

## 📋 Requirements

- [ox_lib](https://github.com/CommunityOx/ox_lib)
- [oxmysql](https://github.com/CommunityOx/oxmysql)
- [es_extended](https://github.com/esx-framework/esx_core) OR [qb-core](https://github.com/qbcore-framework/qb-core)

## 🚀 Installation

1. Download the resource.
2. Extract it into your `resources` folder.
3. Add `ensure apex_bank` to your `server.cfg`.
4. The database tables will be created automatically on the first start (or use `install.sql`).
5. Configure the settings in `shared/config.lua` to match your server's needs.

## 🎮 Usage

Players can access the banking system through physical bank locations, ATMs, or via command:

```bash
/banco
```

### Admin Commands:

- `/bankadmin`: Opens the comprehensive administration panel.
- `/bankinfo [accountId]`: View detailed information and history of a specific account.
- `/bankloans`: Monitor all active loans in the server.
- `/bankreset [playerId]`: Reset all banking data for a specific player.

## ⚙️ Configuration

You can customize the core behavior in `shared/config.lua`:
## 🛠️ Exports

The script provides extensive exports for integration with other resources:

### Server-side

#### 📂 Core & Transactions
- `exports['apex_bank']:Transfer(source, fromId, toId, amount, bankLocation)`: Triggers a transfer between accounts.
- `exports['apex_bank']:GetTotalBankBalance(identifier)`: Returns total balance across all accounts for a player.
- `exports['apex_bank']:AddMoneyToAccount(accountId, amount, reason)`: Programmatically add funds to an account.
- `exports['apex_bank']:RemoveMoneyFromAccount(accountId, amount, reason)`: Programmatically remove funds from an account.
- `exports['apex_bank']:SyncFrameworkBank(playerId)`: Forces a balance synchronization with the active framework.
- `exports['apex_bank']:ResolveAccountId(input)`: Resolves an IBAN or numeric ID to an account ID.

#### 💳 Cards System
- `exports['apex_bank']:HasCard(source)`: Returns whether the player has at least one bank card.
- `exports['apex_bank']:GetPlayerCards(source)`: Returns a list of all cards owned by the player.
- `exports['apex_bank']:CreateCard(source, accountId, pin)`: Generates a new physical card for an account.
- `exports['apex_bank']:ToggleCardBlock(source, cardId, block)`: Blocks or unblocks a specific bank card.
- `exports['apex_bank']:ChangeCardPin(source, cardId, currentPin, newPin)`: Updates the PIN for a card.
- `exports['apex_bank']:DeleteCard(source, cardId)`: Permanently removes a card.

#### 🏦 Bank Management (Private Banks)
- `exports['apex_bank']:GetBankDetails(source, bankId)`: Returns ownership and configuration details of a bank.
- `exports['apex_bank']:UpdateBankCommission(source, bankId, newRate)`: Updates the transaction commission for a bank.
- `exports['apex_bank']:WithdrawBankEarnings(source, bankId)`: Withdraws the accumulated profit from a bank.
- `exports['apex_bank']:SellBank(source, bankId)`: Sells the bank ownership.
- `exports['apex_bank']:TransferBank(source, bankId, targetPlayerId)`: Transfers ownership to another player.

#### 🔄 Recurring Payments & Loans
- `exports['apex_bank']:RegisterDirectDebit(identifier, accountId, creditor, amount, frequency)`: Sets up a recurring payment.
- `exports['apex_bank']:CancelDirectDebitById(debitId)`: Cancels an active direct debit.
- `exports['apex_bank']:GetPlayerCreditScore(identifier)`: Returns the current credit score for a player.

#### 🛡️ Administration
- `exports['apex_bank']:GetTopAccounts(limit)`: Returns a list of the richest accounts.
- `exports['apex_bank']:GetActiveLoans()`: Returns all currently active loans in the server.
- `exports['apex_bank']:CancelLoan(loanId)`: Administratively cancels a loan.
- `exports['apex_bank']:GetAccountInfo(accountId)`: Returns full administrative details of an account.
- `exports['apex_bank']:ResetPlayerBank(identifier)`: Completely resets all banking data for a player.

### Client-side

- `exports['apex_bank']:OpenBankById(bankId)`: Opens the banking UI for a specific bank location.
- `exports['apex_bank']:OpenNearestBank()`: Opens the UI for the closest bank location.
- `exports['apex_bank']:CloseBank()`: Closes the banking UI.
- `exports['apex_bank']:IsBankOpen()`: Returns whether the banking UI is currently open.
- `exports['apex_bank']:GetCurrentBank()`: Returns information about the currently open bank location.
- `exports['apex_bank']:OpenATM()`: Opens the ATM interface.
- `exports['apex_bank']:IsATMOpen()`: Returns whether the ATM interface is open.
- `exports['apex_bank']:useCheck(data)`: Triggers the logic for using a physical check.
- `exports['apex_bank']:HasStolenCard()`: Checks if the player is carrying a reported stolen card.

## Support

You can join the discord for support:
https://discord.gg/V58gaTqsK8
