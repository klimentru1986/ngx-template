cd ..
rmdir /Q /S node_modules
npm cache clean --force && npm install @angular/cli && npm install
