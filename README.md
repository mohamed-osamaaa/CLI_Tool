

```markdown
# CLI Tool

A simple command-line interface (CLI) tool built with Node.js, `commander`, and `inquirer` for managing courses. It allows users to add new courses and list existing courses interactively, with data stored in a local JSON file.

## Features

- **Add a course**: Add a new course by specifying the title and price.
- **List courses**: View a list of all courses stored in the JSON file.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/CLI_Tool.git
   ```

2. Navigate to the project directory:
   ```bash
   cd CLI_Tool
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

### Add a Course

To add a course, use the following command:
```bash
node index.js add
```
You will be prompted to enter the course title and price.

### List All Courses

To list all courses, use the following command:
```bash
node index.js list
```
It will display all stored courses in a table format.

## Example

### Add Course

```bash
$ node index.js add
? please enter course title JavaScript Basics
? please enter course price 49.99
```

### List Courses

```bash
$ node index.js list
┌─────────┬────────────────────┬────────────┐
│ (index) │       title        │   price    │
├─────────┼────────────────────┼────────────┤
│    0    │ 'JavaScript Basics' │ '49.99'    │
└─────────┴────────────────────┴────────────┘
```
