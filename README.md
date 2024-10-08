# Project Name

This project is designed to integrate with Google APIs and SQLite using Node.js. Follow the steps below to set up your environment and run the application.

## Prerequisites

Ensure you have the following software installed:

- **Node.js** (version 18 or higher)
- **Google API Key** (for accessing Google services)
- **SQLite3**

## Installation and Setup

### 1. Install Node.js

If Node.js is not already installed, follow these steps:

1. Install **nvm** (Node Version Manager) by running the following command in your terminal:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
   ```bash

   ```bash
    nvm install 18
2. Create a Google API Key

3. Configure Environment Variables
Open the .env.production file in your project directory.

Replace YOUR_GOOGLE_API_KEY with your actual Google API key.

4. Install SQLite3
brew install sqlite3

5. Configure Environment Variables for SQLite
To ensure that SQLite is properly set up, add the following lines to your .bash_profile (or .zshrc if you are using zsh):

```bash
export LDFLAGS="-L/opt/homebrew/opt/sqlite/lib"
export CPPFLAGS="-I/opt/homebrew/opt/sqlite/include"
export PATH="/opt/homebrew/opt/sqlite/bin:$PATH"
```bash

source ~/.bash_profile

6. Run the app
./runApplication.sh



