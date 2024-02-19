# How to install NodeJS and NPM 

## How to install NodeJS and NPM for Windows

To install Node.js and npm on Windows, you can follow these steps:

1. **Download Node.js Installer:**
   - Visit the official Node.js website: [Node.js Downloads](https://nodejs.org/en/download/).
   - Download the LTS (Long-Term Support) version for stability, or the Current version for the latest features.

2. **Run the Installer:**
   - Once the installer is downloaded, run the executable file (.msi) to start the installation process.

3. **Follow the Installation Wizard:**
   - The installation wizard will guide you through the process. You can generally accept the default settings, but you may want to customize the installation by clicking on the "Customize" button.

4. **Node.js and npm Installation:**
   - During the installation, make sure to check the box that says "Automatically install the necessary tools..." to install npm along with Node.js.

5. **Complete the Installation:**
   - Follow the prompts to complete the installation. Once the process is finished, you should have both Node.js and npm installed on your Windows machine.

6. **Verify Installation:**
   - Open a command prompt or PowerShell window.
   - To check the Node.js version, run the command:
     ```bash
     node -v
     ```
   - To check the npm version, run:
     ```bash
     npm -v
     ```

   If the installation was successful, you should see the versions of Node.js and npm printed in the console.

## How to install NodeJS and NPM for Mac

To install Node.js and npm on a Mac, you can use the following steps:

1. **Install Homebrew (if not already installed):**
   Open the Terminal and run the following command to install Homebrew:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install Node.js and npm using Homebrew:**
   Once Homebrew is installed, you can use it to install Node.js and npm. In the Terminal, run the following commands:
   ```bash
   brew update
   brew install node
   ```

3. **Verify Installation:**
   After the installation is complete, you can verify the Node.js and npm installation by checking their versions. Run the following commands in the Terminal:
   ```bash
   node -v
   npm -v
   ```

   If the installation was successful, you should see the versions of Node.js and npm printed in the console.

That's it! You've now successfully installed Node.js and npm on your Mac using Homebrew. You can use them for your Node.js projects.