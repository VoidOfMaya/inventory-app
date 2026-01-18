# Inventory App (3D Makers Shop)

Project instruction page:  
https://www.theodinproject.com/lessons/node-path-nodejs-inventory-application

## Overview
This project is an inventory management application for a fictional 3D makers shop.  
It is intended to practice the skills and tools covered in the **PostgreSQL** section of The Odin Project’s Node.js curriculum.

## Learning Objectives
This project focuses on practicing the following concepts and tools:

- Structuring a simple relational database (conceptually and practically)
- Creating and hosting a PostgreSQL database on an external PaaS
- Integrating a database using a connection URL and environment variables (`dotenv`)
- Seeding and initializing the database schema via Node scripts using the `pg` library
- Writing and executing database queries using `pg` pools
- Validating and sanitizing user input with `express-validator`
- Implementing server-side rendering (SSR) using an MVC (Model–View–Controller) architecture

## Database Diagram
Tool used: https://dbdiagram.io
<img width="822" height="467" alt="3d print shop db struct" src="https://github.com/user-attachments/assets/a2197e93-0f55-49f6-93d8-bc372351696a" />

## Base Repository
Node.js / Express application using an MVC architecture.

> **Note:** No database users or passwords are included in this repository.  
> Please configure your own database credentials via environment variables.

## Build Instructions
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
