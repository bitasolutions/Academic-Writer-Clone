Read
install node js

open clone folder in your text editor--vs code or command line

open terminal in the editor

run npm install

run npm --open

to change any thing change in the individual component
-eg first page is in the app.component
-u can all search in your editor to find what you need to change

to build dist files RUN

node --max_old_space_size=4096 node_modules/@angular/cli/bin/ng build --prod --base-href /guest/ --build-optimizer --aot

upload dist files to guest folder in the http docs root folder.