# NLW05-ReactJS-Podcast
Podcast's project developed on the event New Level Week created by Rocketseat 
{NLW#5 ReactJS Trail - 'Podcastr' Project by @rocketseat-education - instructor @diego3g]
We simulate a Node Server with podcast's episodes. It also work with desktop control's to play, puse and change to another episode. It also works repeat a shuflle.

<h2>See the project pages<h2>

<h3>Home - Not playing</h3>
<img src="https://user-images.githubusercontent.com/50628113/116294995-f98de800-a76e-11eb-8d4d-fe4822697521.jpg" width="80%" >

<h3>Home - Playing episode</h3>
<img src="https://user-images.githubusercontent.com/50628113/116248410-3c859680-a742-11eb-889d-2e04ba9a4fc9.jpg" width="80%" >
 
 <h3>Episode detail page</h3>

<img src="https://user-images.githubusercontent.com/50628113/116248410-3c859680-a742-11eb-889d-2e04ba9a4fc9.jpg" width="80%" >

<h1>Enviroment / Instructions</h1>

- See the site on //localhost:3000
 - execute project with
    yarn dev
    + 
    yarn server 
    // to simulate API

<h2>Libraries / commands:</h2>

1 - Create Next Project on Windows Power Shell (admin): npx create-next-app

2-Add TYPESCRIPT on NEXT: yarn add typescript @types/react @types/node -D

Obs.: change files "js" for "txt"

3 - DOWNLOAD FONTS download fonts on fonts.google create a class on file _document.tsx

4 - CRIAR ARQUIVO _docments.tsx ex.:

import Document, { Html, Head, Main, NextScript } from 'next/document';

5 -ADD SASS yarn add sass

change extensions css para scss
http://sass-lang.com/
6- Add DATE FNS yard add date-fns

7- EMULATE A JSON-SERVER API

yarn add json-server -D

Add file server.json on root

add this line on package.json "scripts": "server": "json-server server.json -w -d 750 -p 3333" (obs.: -d is 750 mlseg DELAY and -p the gateway for the server)

8- ADD AXIOS Adicionar axios (biblioteca/API de requisição http, como o fetch com facilidades a mais, como entendimento de padrão do json e capacidade de setar a URL

yarn add axios
9- Instalar biblioteca RC_SLIDER p/ barra de progresso da música
