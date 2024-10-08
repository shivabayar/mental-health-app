cd backend
npm install
cd ../frontend
npm install
npm run build
cd ..

cp -r frontend/build/* backend/frontend-build

node backend/index.js
