# Linkedin Experience 🏢👥

## Installation 🚀

Follow these steps to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following prerequisites installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Cookie Extension](https://chrome.google.com/webstore/detail/nmckokihipjgplolmcmjakknndddifde)

### Clone the Repository

```bash
git clone https://github.com/itsApurba/linkedin-experience
```

### Navigate to the Project Directory

```bash
cd linkedin-experience
```

### Install Dependencies

```bash
npm i
```

### Configuration ⚙️

### 1. Setting Up the Cookie 🍪

1. **Install EditThisCookie Extension:**
   - Install the EditThisCookie extension from [https://chrome.google.com/webstore/detail/nmckokihipjgplolmcmjakknndddifde](https://chrome.google.com/webstore/detail/nmckokihipjgplolmcmjakknndddifde).

2. **Login to LinkedIn:**
   - Log in to your LinkedIn profile using the browser where you've installed the extension.

3. **Export the Cookie:**
   - Export the cookie from the EditThisCookie extension.

4. **Create `auth` File:**
   - Create a file named `auth` in the root directory (if not present).
   - Open the recently downloaded cookie file and copy paste the cookie into the `auth` file.
   

<!-- ### 2. Importing the CSV 📊

1. **LinkedIn URL Format:**
   - The URL format should be `https://www.linkedin.com/company/company-name/`.
   - Obtain this URL by visiting the LinkedIn company profile page.
2. **Move and Rename CSV:**
   - Move the CSV file to the root directory.
   - Rename the CSV file to `data.csv` (refer to the example). -->

### 2. Adding the links

- Add the links the links variable in the `main.js` file.
- Use [https://arraythis.com](https://arraythis.com/) to convert multiple links as an array.

### Run the Script ▶️

Execute the following command to run the script:

```bash
npm start
```

## Output File Location 📂

The output file will be generated at 
```./storage/key_value_stores/default/data.csv.```

## Known Bugs 🐛

### Cookie Expiration:

- **Issue:**
  - Cookies generated for LinkedIn may expire after a certain period.

- **Solution:**
  - Periodically regenerate the LinkedIn cookie when you encounter issues due to cookie expiration.
  - Repeating the setup process (refer to [Setting Up the Cookie](#1-setting-up-the-cookie)) by generating a new cookie through the provided steps will resolve this issue.

- **Note:**
  - Periodic regeneration of the cookie is recommended.

<!-- ## TODOs 📝

1. **Automate Cookie Generation Process:**
   - Implement an automated process for generating the LinkedIn cookie. 
   - Handle captchas that may be encountered during the cookie generation to ensure seamless automation.

2. **Direct CSV Retrieval from Google Sheets:**
   - Develop a feature to directly fetch CSV data from Google Sheets. -->
<!-- 
## Additional Information ℹ️

### Viewing Browser (Non-Headless Mode):

- **Note:**
  - By default, the script runs in headless mode, which means the browser operates in the background without a visible UI to the user.
  - To view the browser in action (note that this may consume more memory), you can modify the configuration in the `main.js` file.

- **Steps:**
  1. Open the `main.js` file.
  2. Locate the configuration setting for headless mode.
  3. Set the value to `false`:
     ```javascript
     // Change this line from true to false
      headless: false;
     ```

- **Caution:**
  - Enabling non-headless mode may impact memory usage, especially when dealing with a large number of browser instances.

--- -->
