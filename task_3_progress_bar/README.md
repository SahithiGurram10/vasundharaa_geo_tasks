# React Progress Bar Application

A React-based progress bar application built as part of a React internship assignment.  
This project demonstrates dynamic UI updates, numeric input handling, state-based styling, and component modularity.

---

## 1. Brief of Project

This application allows users to enter multiple percentage values (0–100) through input fields.  
Based on the entered values, a single main progress bar updates dynamically and visually represents the combined progress.  
Individual sub-progress bars are displayed for each input value.

The project focuses on React fundamentals such as controlled components, state management using hooks, inline styling, animations, and UI synchronization.

---

## 2. Features

- Multiple numeric input fields (0–100)
- Main progress bar updates dynamically
- Sub-progress bars for each input value
- Smooth animation on progress updates
- Inline styles based on component state
- Input validation:
  - Values less than 0 are set to 0
  - Values greater than 100 are set to 100
- Color change based on percentage:
  - Below 40% → Red
  - 40%–70% → Orange
  - Above 70% → Green
- Real-time UI synchronization

---

## 3. Tech Stack

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3 (Inline Styles)

---

## 4. Steps to Run the Project Locally

### Prerequisites

- Node.js version: **>= 16.x**
- npm installed

### Installation

1. Clone the repository:
```bash
git clone <https://github.com/SahithiGurram10/vasundharaa_geo_tasks>
```
2. Navigate to the project directory:
```
cd task_3_progress_bar
```
3. Install dependencies:
```
npm install
```
# 5.Start the Application
```
npm start
```