# Collaboration Service

This service facilitates user-to-user communication and acts as an orchestrator in the room creation/deletion process by fetching questions from the question service and updating user data in the history service. It provides a publisher-subscriber service for the coding editor and room events as well as augments CodeMirror with enhanced functionality to provide a feature-rich collaborative coding experience.

## Run Service

1. Install npm packages using `npm i`.
2. Run Collaboration Service using `npm run start` or `npm run dev` for hot reload during development.
