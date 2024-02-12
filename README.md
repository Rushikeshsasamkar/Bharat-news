**NewspaperApp**

---

### Setup Instructions

1. **Install Node.js**: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org).

2. **Install Expo CLI**: Open your terminal and run the following command to install Expo CLI globally:

   ```
   npm install -g expo-cli
   ```

3. **Initialize Expo Project**: Navigate to the directory where you want to create your project and run:

   ```
   expo init NewspaperApp
   ```

4. **Navigate to Project Directory**: Move into your project directory:

   ```
   cd NewspaperApp
   ```

5. **Install NativeBase**: Install NativeBase for UI components:

   ```
   npm install native-base
   ```

6. **Install Expo Fonts**: Install Expo fonts to use in your project:

   ```
   expo install expo-font @expo-google-fonts/inter
   ```

7. **Run the Project**: Start your project by running:

   ```
   expo start
   ```

   This will open Expo Developer Tools in your browser where you can run your project on an emulator, simulator, or physical device.

### Features

1. **Home Screen**:
   - Displays a list of articles in a format similar to traditional newspapers.
   - Utilizes columns, headlines, subheadings, and thumbnail images.

2. **Article Detail Screen**:
   - Navigates to a detailed article view upon tapping an article on the Home Screen.
   - Displays the article's title, content, author, and publication date.

3. **Styling**:
   - Utilizes NativeBase components and custom styling to achieve a classic newspaper look.
   - Pays attention to typography, spacing, and layout.

4. **Navigation**:
   - Implements stack navigation between the Home Screen and the Article Detail Screen.

### Technical Specifications

- Uses FlatList or ScrollView component to list articles on the Home Screen.
- Utilizes NativeBase components such as Box, Heading, Text, and Image for UI elements.
- Implements React Navigation for navigating between screens.
- Ensures app responsiveness and consistent appearance across different device sizes.

### Data Structure for Articles

```javascript
const articles = [
 {
 id: '1',
 title: 'Headline of the First Article',
 summary: 'Summary of the first article...',
 content: 'Full content of the first article...',
 author: 'Author Name',
 publishedDate: '2024-02-01',
 imageUrl: 'https://example.com/path-to-image.jpg',
 },
 // Add more articles
];
```

### Submission

1. **Source Code**:
   - Push your code to a GitHub repository.

2. **README**:
   - Include setup instructions and any other necessary documentation.

3. **Report**:
   - Provide a brief report documenting your design choices, challenges faced, and how you overcame them.

4. **Submission**:
   - Submit the link to your GitHub repository along with your report.

### Evaluation Criteria

- **Functionality**: Meeting all outlined features and technical specifications.
- **UI/UX Design**: Mimicking a newspaper layout effectively.
- **Code Quality**: Clean, well-organized, and properly commented code.
- **Innovation**: Creative additions enhancing the user experience.

---

Happy coding! We look forward to seeing your innovative newspaper-like UI creations! If you have any questions or need further assistance, feel free to ask.