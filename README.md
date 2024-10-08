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
   ```

2. Download and install Node.js version 18:

   ```bash
   nvm install 18
   ```

   You may need to restart your terminal for changes to take effect.

### 2. Create a Google API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project if you don't have one, and enable the desired API.
3. Generate an API key and copy it for later use.

### 3. Configure Environment Variables

1. Open the `.env.production` file in your project directory.
2. Replace `YOUR_GOOGLE_API_KEY` with your actual Google API key.

   ```env
   REACT_APP_GOOGLE_API_KEY=your-google-api-key-here
   ```

### 4. Install SQLite3

If you don’t have SQLite3 installed, use Homebrew to install it:

```bash
brew install sqlite3
```

### 5. Configure Environment Variables for SQLite

To ensure that SQLite is properly set up, add the following lines to your `.bash_profile` (or `.zshrc` if you are using zsh):

```bash
export LDFLAGS="-L/opt/homebrew/opt/sqlite/lib"
export CPPFLAGS="-I/opt/homebrew/opt/sqlite/include"
export PATH="/opt/homebrew/opt/sqlite/bin:$PATH"
```

Then, apply these changes by running:

```bash
source ~/.bash_profile
```

### 6. Run the Application

Now that everything is set up, you can run the application using the following command:

```bash
./runApplication.sh
```

## Additional Notes

- Ensure that you have all necessary permissions set up for your Google API key.
- Modify the `.env.production` file to include any additional environment variables your application requires.
- Make sure `runApplication.sh` is executable. If not, you can set the executable permission with:

   ```bash
   chmod +x runApplication.sh
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
