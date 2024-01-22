# Web-based Tool for Mode-Based Engineering of AI-Applications for Automation Systems

## Introduction
Accordingly, there is a lack of a solution approach that allows industry to independently model AI applications for automation systems, including the underlying manufacturing or procedural process, and to coordinate their development on the basis of the model.

The ai-modling-tool in this repository addresses the identified lack and presents a web-based solution concept. This is based on the combination of the graphical modeling language for automation systems according to [Schieseck et al.](https://github.com/schiesem/GML-AIAAS)[^1] and the DMME method according to [Huber et al.](https://www.researchgate.net/publication/331723990_DMME_Data_mining_methodology_for_engineering_applications_-_a_holistic_extension_to_the_CRISP-DM_model)[^2], which are then transferred to a web-based tool for graphical modeling. This is done according to the principle of combining a graphical modeling, a method implement both into a tool presented by Schnieder[^3].



## Local Deployment
Node.JS is required for deploying and using the AI-Modeling-Tool. It is also recommended to use an IDE such as Visual Studio Code to execute the commands for installing and starting in development mode. We recommend the following steps for the local deployment:

1. Clone or download this repository. If you have downloaded the repository, you must unpack the zip-compressed file on your local storage.
2. Navigate in the Terminal to the root folder.
3. To install, execute the command:

   `npm install`

   This will install all software-side dependencies.
4.  To start, execute the command in the terminal:

   `npm run dev-local`  
5. By calling up

   `localhost:5173`

   in your web browser, you have access to the ai-modeling-tool user interface.


[^1]: Schieseck et al.
[^2]: Schieseck et al.
[^3]: Schieseck et al.
