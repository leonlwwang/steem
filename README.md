[![steem-title](https://github.com/leonlwwang/steem/assets/69338674/3ca36112-fec8-4798-9bb5-80798eddb64c)](https://steem.herokuapp.com/)

# About

This project is a mockup of a newly-imagined Steam, the popular video game distribution service. It's an old CS 411 project, where we wanted to devise a cleaner, minimalistic, and more intuitive version of the Steam website store dedicated for browsing games.

Thanks Aaron De Los Santos, Raymond Bellin, and Pinakin Kanade for your contributions!

We used [this dataset](https://data.world/craigkelly/steam-game-data) to construct the database.



https://github.com/leonlwwang/steem/assets/69338674/0240fb27-2927-4efc-ab67-77ccec00b223



## Codebase
Make sure that you have npm, NodeJS, Java SDK, and Maven, and that the database is online.

Pull the repo, go to `/app` and run `npm install` to install NodeJS dependencies.

If you made backend changes in `server/` or want to test the whole app, go to `/server` and run `mvn spring-boot:run`, or `./mvnw spring-boot:run` if you don't have Maven.

If you made frontend changes in `/app`, save them by running `npm run build`.

To test only the frontend, go to `/app` and run `npm run dev`.

## ER Diagram
This was our initial database concept.

![er-diagram](https://github.com/leonlwwang/steem/assets/69338674/392e9d52-1252-4e84-8d49-5ae94c9da227)
