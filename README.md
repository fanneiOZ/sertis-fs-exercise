### Untitled App
This repo built up without a name. Intend to write the code with practical style & knowledge learnt and gained until now.

#### Overview
- This repo implemented in monorepo using [workspace feature of Yarn](https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/). Make sure to enable `workspaces-experimental` option.
`yarn config set workspaces-experimental true` 


### To start  the project
- Prerequisites
    - docker
    - docker-compose
    - yarn
    - Unix-based OS: macOS, Linux or WSL2
    - Make sure following ports are not occupied: `3000`, `80`, `27017`
- Run command

       sudo /bin/sh ./start.sh
       
- Frontend will be served via `http://untitled.local` or `http://localhost:80`
